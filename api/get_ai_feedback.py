# api/get_ai_feedback.py
import os
import json
from http.server import BaseHTTPRequestHandler
import google.generativeai as genai
import traceback

# --- Configurazione del Modello (eseguita una sola volta all'avvio) ---
GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
MODEL_CONFIGURATO = False
GENERATIVE_MODEL = None

if not GEMINI_API_KEY:
    print("ATTENZIONE CRITICA: La variabile d'ambiente GEMINI_API_KEY non è impostata!")
else:
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        GENERATIVE_MODEL = genai.GenerativeModel('gemini-1.5-flash-latest')
        MODEL_CONFIGURATO = True
        print("Chiave API Gemini e Modello configurati con successo.")
    except Exception as e:
        print(f"Errore FATALE durante la configurazione della chiave API Gemini o del Modello: {e}")
        print(traceback.format_exc())


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        if not MODEL_CONFIGURATO or not GENERATIVE_MODEL:
            print("Tentativo di usare l'API AI ma il modello/chiave non è configurato correttamente.")
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            error_payload = {"error": "Errore di configurazione del server AI. Contattare l'amministratore.", "aiFeedbackText": "Impossibile contattare il servizio AI in questo momento."}
            self.wfile.write(json.dumps(error_payload).encode('utf-8'))
            return

        try:
            content_length = int(self.headers['Content-Length'])
            post_data_bytes = self.rfile.read(content_length)
            data = json.loads(post_data_bytes.decode('utf-8'))

            exercise_definition = data.get('exerciseDefinition')
            exercise_stats = data.get('exerciseStats')
            selected_language = data.get('language', 'it-IT') # Default a italiano

            if not exercise_definition or not exercise_stats:
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                error_payload = {"error": "Dati mancanti: 'exerciseDefinition' o 'exerciseStats' non forniti", "aiFeedbackText": "Dati insufficienti per l'analisi."}
                self.wfile.write(json.dumps(error_payload).encode('utf-8'))
                return

            # === Costruzione Prompt Multilingua ===
            
            # Parte 1: Dati dell'esercizio (tradotti)
            if selected_language == 'en-US':
                exercise_data_header = [
                    "You are an expert, friendly, and encouraging AI piano teacher. Analyze the following user performance and provide constructive, detailed feedback.",
                    f"Exercise: {exercise_definition.get('name', 'Unknown')}",
                    f"Key Signature: {exercise_definition.get('keySignature', 'N/A')}, Time Signature: {exercise_definition.get('timeSignature', 'N/A')}",
                    f"Category: {exercise_definition.get('category', 'N/A').replace('_', ' ')}",
                    f"Learning Goal: {exercise_definition.get('purpose', 'Not specified.')}",
                ]
            else: # Italiano di default
                exercise_data_header = [
                    "Sei un insegnante di pianoforte AI esperto, amichevole e incoraggiante. Analizza la seguente performance di un utente e fornisci un feedback costruttivo e dettagliato.",
                    f"Esercizio: {exercise_definition.get('name', 'Sconosciuto')}",
                    f"Tonalità: {exercise_definition.get('keySignature', 'N/D')}, Indicazione di Tempo: {exercise_definition.get('timeSignature', 'N/D')}",
                    f"Categoria: {exercise_definition.get('category', 'N/D').replace('_', ' ')}",
                    f"Obiettivo Didattico: {exercise_definition.get('purpose', 'Non specificato.')}",
                ]

            prompt_parts = exercise_data_header

            # Parte 2: Dati della performance (rimangono invariati)
            exercise_bpm_str = str(exercise_definition.get('bpm', "N/A"))
            if exercise_bpm_str != "N/A":
                 prompt_parts.append(f"BPM di riferimento per l'esercizio: {exercise_bpm_str}")

            all_repetitions_data = exercise_stats.get('allRepetitionsData', [])
            if all_repetitions_data:
                prompt_parts.append("\n--- Dettaglio Eventi Nota per Ripetizione (Analisi Ritmica Chiave) ---")
                
                for rep_idx, rep_data in enumerate(all_repetitions_data):
                    repetition_number = rep_data.get('repetitionNumber', f'N/A ({rep_idx+1})')
                    prompt_parts.append(f"\n  Ripetizione {repetition_number}:")
                    
                    played_events = rep_data.get('playedNoteEvents', [])
                    if played_events:
                        prompt_parts.append("    Eventi Nota Suonati (Timestamp effettivo, Timestamp teorico, MIDI, Tipo, BPM live):")
                        for event in played_events[:30]:
                            ts_rel_to_rep_start = round(event.get('timestamp', 0))
                            expected_info_str = ""
                            theoretical_ts_str = ""
                            if event.get('expectedNoteInfo'):
                                eni = event['expectedNoteInfo']
                                keys_display = eni.get('keys', ['N/A'])[0] if eni.get('keys') else 'N/A'
                                duration_display = eni.get('durationString', 'N/A')
                                theoretical_ts_ms = eni.get('theoreticalTimestampMs')
                                if theoretical_ts_ms is not None:
                                    theoretical_ts_str = f" Teorico: {theoretical_ts_ms}ms"
                                expected_info_str = f" (Atteso: {keys_display} dur='{duration_display}')"
                            bpm_at_event_str = f" BPM live: {event.get('bpmAtEvent', 'N/A')}" if 'bpmAtEvent' in event else ""
                            event_line = f"      - a {ts_rel_to_rep_start}ms{theoretical_ts_str}: MIDI {event.get('midiValuePlayed', 'N/A')}, Tipo: {event.get('type', 'N/A')}{bpm_at_event_str}{expected_info_str}"
                            prompt_parts.append(event_line)
                        if len(played_events) > 30:
                            prompt_parts.append(f"      ... e altri {len(played_events) - 30} eventi non mostrati.")
                    else:
                        prompt_parts.append("    Nessun evento nota registrato per questa ripetizione.")
            else:
                prompt_parts.append("\nNessun dato di ripetizione disponibile per l'analisi.")

            # Parte 3: Istruzioni finali per il modello (tradotte)
            if selected_language == 'en-US':
                final_instructions = [
                    "\n\n--- Specific Feedback Request ---",
                    "Please provide feedback structured in PLAIN TEXT (no asterisks or markdown).",
                    "1. **General Comment:** Overall evaluation.",
                    "2. **Pitch Accuracy Analysis:** Based on 'type' ('incorrect_match', 'extra_note').",
                    "3. **Rhythmic Precision Analysis (Timing):**",
                    "   - **KEY INSTRUCTION:** Compare the user's actual timestamp (e.g., 'at 1520ms') with the ideal theoretical timestamp (e.g., 'Theoretical: 1500ms'). NEVER mention the exact numbers or millisecond differences.",
                    "   - **USE QUALITATIVE DESCRIPTIONS INSTEAD:** Assess if the user is 'slightly ahead of the beat', 'noticeably behind', 'perfectly in time', 'consistent', or if 'the pulse tends to rush/drag in certain passages'. Be a teacher, not a computer reporting data.",
                    "4. **Practical Advice:** 1-2 targeted tips for pitch and 1-2 for rhythm.",
                    "5. **Final Encouragement:** End with a positive note."
                ]
            else: # Italiano di default
                final_instructions = [
                    "\n\n--- Richiesta di Feedback Specifica ---",
                    "Per favore, fornisci un feedback strutturato IN TESTO PURO (nessun asterisco o markdown).",
                    "1. **Commento Generale:** Valutazione complessiva.",
                    "2. **Analisi dell'Intonazione (Note Corrette):** Basati sul 'type' ('incorrect_match', 'extra_note').",
                    "3. **Analisi della Precisione Ritmica (Timing):**",
                    "   - **ISTRUZIONE CHIAVE:** Confronta il timestamp effettivo dell'utente (es. 'a 1520ms') con quello teorico (es. 'Teorico: 1500ms'). **NON DEVI MAI menzionare i numeri esatti o le differenze in millisecondi.**",
                    "   - **USA INVECE DESCRIzioni QUALITATIVE:** Valuta se l'utente è 'leggermente in anticipo', 'notevolmente in ritardo', 'perfettamente a tempo', 'costante', o se 'la pulsazione tende a rallentare/accelerare'. Sii un insegnante, non un computer.",
                    "4. **Consigli Pratici:** 1-2 consigli mirati per intonazione e 1-2 per la ritmica.",
                    "5. **Incoraggiamento Finale:** Concludi con una nota positiva."
                ]
            
            prompt_parts.extend(final_instructions)
            
            final_prompt = "\n".join(prompt_parts)
            
            generation_config = genai.types.GenerationConfig()
            safety_settings=[
                {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
                {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
                {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
                {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            ]

            print(f"Invio prompt a Gemini (Lingua: {selected_language}). Lunghezza: {len(final_prompt)} caratteri.")
            response_gemini = GENERATIVE_MODEL.generate_content(
                final_prompt,
                generation_config=generation_config,
                safety_settings=safety_settings
            )
            
            ai_text_response = ""
            if response_gemini.candidates:
                if response_gemini.prompt_feedback and response_gemini.prompt_feedback.block_reason:
                    error_msg = f"Richiesta bloccata: {response_gemini.prompt_feedback.block_reason_message}"
                    self.send_response(400)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": error_msg, "aiFeedbackText": error_msg}).encode('utf-8'))
                    return

                first_candidate = response_gemini.candidates[0]
                if first_candidate.finish_reason.name == "SAFETY":
                    error_msg = "La risposta dell'AI è stata bloccata per motivi di sicurezza."
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": error_msg, "aiFeedbackText": error_msg}).encode('utf-8'))
                    return
                
                if first_candidate.content and first_candidate.content.parts:
                    ai_text_response = "".join(part.text for part in first_candidate.content.parts if hasattr(part, 'text'))
                else:
                    ai_text_response = "L'AI non ha fornito una risposta valida."
            else:
                ai_text_response = "L'AI non ha generato una risposta."
                if response_gemini.prompt_feedback and response_gemini.prompt_feedback.block_reason:
                    ai_text_response = f"Richiesta bloccata: {response_gemini.prompt_feedback.block_reason_message}"
                    self.send_response(400)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": ai_text_response, "aiFeedbackText": ai_text_response}).encode('utf-8'))
                    return
            
            print(f"Risposta ricevuta da Gemini: '{ai_text_response[:100]}...'")
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"aiFeedbackText": ai_text_response.strip()}).encode('utf-8'))

        except json.JSONDecodeError as e:
            error_msg = f"Richiesta JSON malformata: {str(e)}"
            print(error_msg)
            self.send_response(400)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": error_msg, "aiFeedbackText": "Errore nei dati inviati."}).encode('utf-8'))
        except Exception as e:
            error_msg = f"Errore interno del server: {str(e)}"
            print(f"ERRORE CRITICO VERCEL: {e}")
            print(traceback.format_exc())
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": error_msg, "aiFeedbackText": "Errore imprevisto del server AI."}).encode('utf-8'))