# api/get_ai_feedback.py
import os
import json
from http.server import BaseHTTPRequestHandler
import google.generativeai as genai
import traceback

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
            # ... (gestione errore configurazione) ...
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            error_payload = {"error": "Errore di configurazione del server AI.", "aiFeedbackText": "Impossibile contattare il servizio AI."}
            self.wfile.write(json.dumps(error_payload).encode('utf-8'))
            return

        try:
            content_length = int(self.headers['Content-Length'])
            post_data_bytes = self.rfile.read(content_length)
            data = json.loads(post_data_bytes.decode('utf-8'))

            exercise_definition = data.get('exerciseDefinition')
            exercise_stats = data.get('exerciseStats')

            if not exercise_definition or not exercise_stats:
                # ... (gestione dati mancanti) ...
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                error_payload = {"error": "Dati mancanti.", "aiFeedbackText": "Dati insufficienti per l'analisi."}
                self.wfile.write(json.dumps(error_payload).encode('utf-8'))
                return

            prompt_parts = [
                "Sei un insegnante di pianoforte AI esperto, amichevole e incoraggiante. Analizza la seguente performance di un utente e fornisci un feedback costruttivo e dettagliato.",
                f"Esercizio: {exercise_definition.get('name', 'Sconosciuto')}",
                f"Tonalità: {exercise_definition.get('keySignature', 'N/D')}, Indicazione di Tempo: {exercise_definition.get('timeSignature', 'N/D')}",
                f"Categoria: {exercise_definition.get('category', 'N/D').replace('_', ' ')}",
                f"Obiettivo Didattico: {exercise_definition.get('purpose', 'Non specificato.')}",
            ]
            
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

            prompt_parts.append("\n\n--- Richiesta di Feedback Specifica ---")
            prompt_parts.append("Per favore, fornisci un feedback strutturato IN TESTO PURO (nessun asterisco o markdown).")
            prompt_parts.append("1. **Commento Generale:** Valutazione complessiva.")
            prompt_parts.append("2. **Analisi dell'Intonazione (Note Corrette):** Basati sul 'type' ('incorrect_match', 'extra_note').")
            prompt_parts.append("3. **Analisi della Precisione Ritmica (Timing):**")
            prompt_parts.append("   - **Questa è la parte FONDAMENTALE.** Hai due tipi di dati per il ritmo:")
            prompt_parts.append("     a) **Ritmo Assoluto:** Confronta il timestamp effettivo (es. 'a 1520ms') con il timestamp teorico (es. 'Teorico: 1500ms').")
            
            # === INIZIO MODIFICA ===
            prompt_parts.append("     b) **Stabilità del Tempo:** Se vedi 'BPM live', quello è il tempo del metronomo che l'utente stava usando. Confrontalo con i 'BPM di riferimento per l'esercizio'. L'utente sta mantenendo il tempo, accelerando o rallentando rispetto al metronomo?")
            prompt_parts.append("   - **ISTRUZIONE CHIAVE:** Il tuo compito è analizzare entrambi questi aspetti. **NON DEVI MAI menzionare i numeri esatti o le differenze in millisecondi (es. 'eri 20ms in ritardo') nel tuo feedback.**")
            prompt_parts.append("   - **USA INVECE DESCRIZIONI QUALITATIVE:** Valuta se l'utente è 'leggermente in anticipo', 'notevolmente in ritardo', 'perfettamente a tempo', 'costante', se 'la pulsazione tende a rallentare/accelerare', o se 'fatica a stare dietro al metronomo'. Sii un insegnante, non un computer.")
            # === FINE MODIFICA ===

            prompt_parts.append("   - Cerca pattern: l'utente è costantemente in anticipo? O solo su note specifiche? La sua esecuzione è stabile o incerta?")
            prompt_parts.append("4. **Consigli Pratici:** 1-2 consigli mirati per intonazione e 1-2 per la ritmica.")
            prompt_parts.append("5. **Incoraggiamento Finale:** Concludi con una nota positiva.")
            
            final_prompt = "\n".join(prompt_parts)
            
            generation_config = genai.types.GenerationConfig()
            safety_settings=[
                {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
                {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
                {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
                {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            ]

            print(f"Invio prompt a Gemini. Lunghezza prompt: {len(final_prompt)} caratteri.")
            response_gemini = GENERATIVE_MODEL.generate_content(
                final_prompt,
                generation_config=generation_config,
                safety_settings=safety_settings
            )
            
            ai_text_response = ""
            if response_gemini.candidates:
                if response_gemini.prompt_feedback and response_gemini.prompt_feedback.block_reason:
                    error_msg = f"Richiesta bloccata dal modello AI: {response_gemini.prompt_feedback.block_reason_message}"
                    self.send_response(400) # Bad Request
                    # ... (resto della gestione errore)
                # ... (resto della gestione candidati) ...
                if response_gemini.candidates[0].content and response_gemini.candidates[0].content.parts:
                    ai_text_response = "".join(part.text for part in response_gemini.candidates[0].content.parts if hasattr(part, 'text'))
            
            print(f"Risposta ricevuta da Gemini: '{ai_text_response[:100]}...'")
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"aiFeedbackText": ai_text_response.strip()}).encode('utf-8'))

        except Exception as e:
            error_msg = f"Errore interno del server: {str(e)}"
            print(f"ERRORE CRITICO VERCEL: {e}")
            print(traceback.format_exc())
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": error_msg, "aiFeedbackText": "Errore imprevisto del server AI."}).encode('utf-8'))