# api/get_ai_feedback.py
import os
import json
from http.server import BaseHTTPRequestHandler # Torniamo a questo standard per Vercel
import google.generativeai as genai
import traceback # Per un logging degli errori più dettagliato

# Non usare dotenv su Vercel, le variabili d'ambiente sono fornite dalla piattaforma
# from dotenv import load_dotenv
# load_dotenv() # Questa linea è solo per test LOCALE con un file .env

GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
MODEL_CONFIGURATO = False
GENERATIVE_MODEL = None # Inizializziamo il modello una sola volta se possibile

if not GEMINI_API_KEY:
    print("ATTENZIONE CRITICA: La variabile d'ambiente GEMINI_API_KEY non è impostata!")
else:
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        # Inizializza il modello qui, una sola volta
        GENERATIVE_MODEL = genai.GenerativeModel('gemini-1.5-flash-latest') # o il modello che preferisci
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

            if not exercise_definition or not exercise_stats:
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                error_payload = {"error": "Dati mancanti: 'exerciseDefinition' o 'exerciseStats' non forniti", "aiFeedbackText": "Dati insufficienti per l'analisi."}
                self.wfile.write(json.dumps(error_payload).encode('utf-8'))
                return

            # --- IL TUO PROMPT DETTAGLIATO (identico a quello fornito) ---
            prompt_parts = [
                "Sei un insegnante di pianoforte AI esperto, amichevole e incoraggiante. Il tuo feedback deve essere CONCISO e strutturato in TRE PARTI OBBLIGATORIE come descritto alla fine di questo prompt.",
                f"Esercizio: {exercise_definition.get('name', 'Sconosciuto')}",
                f"Tonalità: {exercise_definition.get('keySignature', 'N/D')}, Indicazione di Tempo: {exercise_definition.get('timeSignature', 'N/D')}",
            ]
            
            exercise_bpm_str = str(exercise_definition.get('bpm', "N/A"))
            if exercise_bpm_str != "N/A":
                 prompt_parts.append(f"BPM di riferimento per l'esercizio: {exercise_bpm_str}")
            else:
                prompt_parts.append("I BPM specifici dell'esercizio non sono stati forniti; analizza il timing basandoti sulla coerenza relativa degli eventi e 'bpmAtEvent' se disponibile.")

            all_repetitions_data = exercise_stats.get('allRepetitionsData', [])
            if all_repetitions_data:
                prompt_parts.append("\n--- Dati Essenziali dalla Performance Corrente (Usa per il tuo giudizio) ---")
                prompt_parts.append("Analizza i 'playedNoteEvents' (timestamp, tipo, corrispondenza con note attese) per giudicare il timing, le note saltate e l'accuratezza delle altezze.")
                for rep_idx, rep_data in enumerate(all_repetitions_data):
                    repetition_number = rep_data.get('repetitionNumber', f'N/A ({rep_idx+1})')
                    prompt_parts.append(f"  Ripetizione {repetition_number}:")
                    played_events = rep_data.get('playedNoteEvents', [])
                    if played_events:
                        correct_matches = sum(1 for e in played_events if e.get('type') == 'correct_match')
                        incorrect_matches = sum(1 for e in played_events if e.get('type') == 'incorrect_match')
                        extra_notes = sum(1 for e in played_events if e.get('type') == 'extra_note')
                        
                        prompt_parts.append(f"    Eventi suonati totali: {len(played_events)}")
                        prompt_parts.append(f"    Note corrette in altezza: {correct_matches}")
                        prompt_parts.append(f"    Errori di altezza (nota diversa dall'attesa): {incorrect_matches}")
                        prompt_parts.append(f"    Note extra (non attese): {extra_notes}")
                        prompt_parts.append(f"    (Dovrai dedurre le note saltate confrontando gli eventi suonati con la struttura teorica dell'esercizio dai dati JSON completi che hai ricevuto, non solo da questo riassunto).")
                        
                        # Logica per mostrare alcuni eventi (come prima)
                        def get_relative_timestamp(event_ts, rep_start_ts):
                            if isinstance(rep_start_ts, (int, float)) and isinstance(event_ts, (int, float)):
                                return round(event_ts - rep_start_ts)
                            return "N/A"

                        if len(played_events) > 6: 
                            prompt_parts.append("    Primi eventi (timestamp in ms, MIDI, tipo):")
                            for event in played_events[:3]:
                                ts_rel = get_relative_timestamp(event.get('timestamp'), rep_data.get('startTime'))
                                prompt_parts.append(f"      - {ts_rel}ms, MIDI {event.get('midiValuePlayed', 'N/A')}, {event.get('type', 'N/A')}")
                            prompt_parts.append("    Ultimi eventi (timestamp in ms, MIDI, tipo):")
                            for event in played_events[-3:]:
                                ts_rel = get_relative_timestamp(event.get('timestamp'), rep_data.get('startTime'))
                                prompt_parts.append(f"      - {ts_rel}ms, MIDI {event.get('midiValuePlayed', 'N/A')}, {event.get('type', 'N/A')}")
                        elif played_events:
                            prompt_parts.append("    Eventi (timestamp in ms, MIDI, tipo):")
                            for event in played_events:
                                ts_rel = get_relative_timestamp(event.get('timestamp'), rep_data.get('startTime'))
                                prompt_parts.append(f"      - {ts_rel}ms, MIDI {event.get('midiValuePlayed', 'N/A')}, {event.get('type', 'N/A')}")
                    else:
                        prompt_parts.append("    Nessun evento nota registrato per questa ripetizione (indica che tutte le note sono state saltate).")
            else:
                prompt_parts.append("\nNessun dato di ripetizione disponibile per l'analisi.")

            prompt_parts.append("\n\n--- IL TUO FEEDBACK (DEVE ESSERE MOLTO CONCISO, MASSIMO 5-6 FRASI TOTALI) ---")
            prompt_parts.append("DEVI FORNIRE IL FEEDBACK ESATTAMENTE NELLA SEGUENTE STRUTTURA A 3 PARTI:")
            prompt_parts.append("1.  **VERDETTO SINTETICO (1-2 frasi):** Basandoti sull'analisi dei 'playedNoteEvents' (accuratezza altezza, timing, note saltate), inizia con UNA delle seguenti frasi:")
            prompt_parts.append("    - Se la performance è prevalentemente corretta (poche o nessuna nota errata/saltata, timing generalmente buono): 'Bravissimo! L'esercizio risulta complessivamente positivo.'")
            prompt_parts.append("    - Se la performance necessita di miglioramenti significativi: 'Il mio giudizio è che l'esercizio necessita ancora di lavoro. Principalmente perché:' e poi elenca MOLTO BREVEMENTE (max 1-2 motivi chiave) tra: 'non hai rispettato i tempi delle note (anticipi/ritardi/durate errate)', 'hai saltato diverse note', 'hai suonato note errate in altezza'.")
            prompt_parts.append("2.  **UN CONSIGLIO PRATICO (1-2 frasi):** Fornisci UN solo suggerimento breve e specifico per aiutare l'utente a migliorare l'aspetto più critico che hai identificato nei 'playedNoteEvents'. Sii specifico sulla causa del problema (es. 'Rallenta e concentrati sul contare ad alta voce le suddivisioni per le crome nella battuta X.' o 'Presta attenzione all'alterazione (diesis/bemolle) sulla nota Y per correggere l'altezza.').")
            prompt_parts.append("3.  **INCORAGGIAMENTO FINALE (1 frase):** Concludi con una frase positiva e incoraggiante. Esempi: 'Continua così, vedo dei miglioramenti!' o 'Non mollare, con un po' di pratica mirata ci arriverai!' o 'Stai facendo progressi, l'impegno paga!'")
            # --- FINE PROMPT ---
            
            final_prompt = "\n".join(prompt_parts)
            
            # generation_config e safety_settings come nel tuo file originale
            generation_config = genai.types.GenerationConfig(
                # temperature=0.7, # Lascia commentato per usare i default o imposta come preferisci
                # max_output_tokens=300 # Potrebbe essere utile limitare per concisione
            )
            safety_settings=[
                {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
                {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
                {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
                {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            ]

            print(f"Invio prompt a Gemini. Lunghezza prompt: {len(final_prompt)} caratteri.") # Log utile
            response_gemini = GENERATIVE_MODEL.generate_content(
                final_prompt,
                generation_config=generation_config,
                safety_settings=safety_settings
            )
            
            ai_text_response = ""
            # Logica di estrazione risposta identica al tuo file
            if response_gemini.candidates:
                if response_gemini.prompt_feedback and response_gemini.prompt_feedback.block_reason:
                    # Questo è un errore del prompt, quindi errore 400
                    error_msg = f"Richiesta bloccata dal modello AI (feedback prompt): {response_gemini.prompt_feedback.block_reason_message}"
                    print(error_msg)
                    self.send_response(400)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": error_msg, "aiFeedbackText": error_msg}).encode('utf-8'))
                    return

                first_candidate = response_gemini.candidates[0]
                if first_candidate.finish_reason.name == "SAFETY":
                    # La risposta generata è stata bloccata per sicurezza
                    error_msg = "La risposta dell'AI è stata bloccata per motivi di sicurezza del contenuto generato."
                    print(error_msg)
                    # Potrebbe essere un 500 (errore server perché l'AI non ha risposto come previsto) o 200 con messaggio di errore
                    self.send_response(200) # Mandiamo 200 ma con un messaggio di errore nel corpo
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": error_msg, "aiFeedbackText": error_msg}).encode('utf-8'))
                    return
                
                if first_candidate.content and first_candidate.content.parts:
                    ai_text_response = "".join(part.text for part in first_candidate.content.parts if hasattr(part, 'text'))
                else:
                    ai_text_response = "L'AI non ha fornito una risposta testuale utilizzabile (parti mancanti o contenuto non valido)."
            else: # Nessun candidato, potrebbe essere un blocco del prompt non catturato sopra
                ai_text_response = "L'AI non ha generato una risposta (nessun candidato)."
                if response_gemini.prompt_feedback and response_gemini.prompt_feedback.block_reason:
                    ai_text_response = f"Richiesta bloccata dal modello AI (nessun candidato, feedback prompt): {response_gemini.prompt_feedback.block_reason_message}"
                    print(ai_text_response)
                    self.send_response(400)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": ai_text_response, "aiFeedbackText": ai_text_response}).encode('utf-8'))
                    return
            
            print(f"Risposta ricevuta da Gemini: '{ai_text_response[:100]}...'") # Log utile
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
            error_msg = f"Errore interno del server durante l'elaborazione della richiesta AI: {str(e)}"
            print(f"ERRORE CRITICO VERCEL nell'handler: {e}")
            print(traceback.format_exc()) # Stampa lo stack trace completo nei log di Vercel
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": error_msg, "aiFeedbackText": "Errore imprevisto del server AI."}).encode('utf-8'))