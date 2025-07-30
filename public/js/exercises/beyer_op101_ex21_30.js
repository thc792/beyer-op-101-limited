/**
 * js/exercises/beyer_op101_ex21_30.js
 * Esercizi da N.21 a N.30 (per ora solo N.21) da F. Beyer - Opus 101
 * Include diteggiatura.
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

const beyer_op101_exercises_21_30 = [ // Nome dell'array che conterrà gli esercizi da 21 a 30
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.21 (CON DITEGGIATURA - come da immagine fornita) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex21",
        name: "Beyer Op.101 No.21",
        category: "beyer_op101_intermediate", // Or a new category if appropriate for ex 21-30
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // "C" in image means Common Time (4/4)
        repetitions: 1, // The piece is played once through, with the internal repeat of bars 1-4 handled below.
        notesTreble: [
            // Bars 1-4 (Prima sezione - da ripetere)
            // Bar 1
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            // Bar 2
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" },
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "5" },
            // Bar 3
            { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["b/4"], duration: "q", midiValues: [71] }, // No fingering visible for B4
            // Bar 4
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "2" }, { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "4" },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["g/4"], duration: "h", midiValues: [67] }, // WARNING: This bar totals 5 beats (q+q+q+h) as written in the image!

            // Ripetizione Bars 1-4
            // Bar 1 (repeated)
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            // Bar 2 (repeated)
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" },
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "5" },
            // Bar 3 (repeated)
            { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["b/4"], duration: "q", midiValues: [71] }, // No fingering visible for B4
            // Bar 4 (repeated)
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "2" }, { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "4" },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["g/4"], duration: "h", midiValues: [67] }, // WARNING: This bar totals 5 beats (q+q+q+h) as written in the image!

            // Bars 5-8 (Seconda sezione - dopo il ritornello)
            // Bar 5
            { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "5" }, { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" },
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            // Bar 6
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "2" },
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "1" }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 7
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 8
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            // Bars 1-4 (Prima sezione - da ripetere)
            // Bar 1
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" },
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" },
            // Bar 2
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            // Bar 3
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "2" }, { keys: ["a/3"], duration: "q", midiValues: [57], fingering: "1" },
            { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "2" },
            // Bar 4
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "2" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            { keys: ["d/3"], duration: "q", midiValues: [50], fingering: "4" }, { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" }, // WARNING: This bar totals 5 beats (q+q+q+h) as written in the image!

            // Ripetizione Bars 1-4
            // Bar 1 (repeated)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" },
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" },
            // Bar 2 (repeated)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            // Bar 3 (repeated)
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "2" }, { keys: ["a/3"], duration: "q", midiValues: [57], fingering: "1" },
            { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "2" },
            // Bar 4 (repeated)
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "2" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            { keys: ["d/3"], duration: "q", midiValues: [50], fingering: "4" }, { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" }, // WARNING: This bar totals 5 beats (q+q+q+h) as written in the image!

            // Bars 5-8 (Seconda sezione - dopo il ritornello)
            // Bar 5
            { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" }, { keys: ["b/3"], duration: "q", midiValues: [59], fingering: "2" },
            { keys: ["a/3"], duration: "q", midiValues: [57], fingering: "3" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "4" },
            // Bar 6
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "5" }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 7
            { keys: ["b/2"], duration: "q", midiValues: [47], fingering: "2" }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2"], duration: "q", midiValues: [43], fingering: "5" },
            // Bar 8
            { keys: ["c/3"], duration: "w", midiValues: [48], fingering: "5" }
        ]
    },
  // =======================================================================================
    // === Esercizio Beyer Op.101 No.22 (CON DITEGGIATURA - come da immagine fornita) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex22",
        name: "Beyer Op.101 No.22",
        // tempo: "Moderato", // No tempo marking visible for this exercise in the provided image
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            // Bar 1
            { keys: ["b/4"], duration: "q" }, // Quarter Rest (midiValues omitted to signify rest, b/4 is a conventional position)
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "1" },
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "3" },
            { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "5" },
            // Bar 2
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" },
            { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "3" },
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "2" },
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "1" },
            // Bar 3
            { keys: ["f/4"], duration: "q", midiValues: [65], fingering: "2" },
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "3" },
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "4" },
            { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "5" },
            // Bar 4
            { keys: ["c/5"], duration: "h", midiValues: [72], fingering: "1" },
            { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "3" },
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "2" }
        ],
        notesBass: [
            // Bar 1
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" },
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" },
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "3" },
            // Bar 2
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "2" },
            { keys: ["a/3"], duration: "q", midiValues: [57], fingering: "1" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "2" },
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "1" },
            // Bar 3
            { keys: ["d/3"], duration: "q", midiValues: [50], fingering: "4" },
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "2" },
            { keys: ["a/3"], duration: "q", midiValues: [57], fingering: "1" },
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "2" },
            // Bar 4
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "5" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" },
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }
        ]
    },
{
        id: "beyer-op101-exPROVA",
        name: "PROVA da MusicXML Beyer 5 6",
        category: "beyer_op101_tests", // Nuova categoria per test
        staveLayout: "grand",
        keySignature: "C", // <fifths>0</fifths>
        timeSignature: "4/4", // <beats>4</beats> <beat-type>4</beat-type>
        // NB: Il MusicXML originale ha <divisions>4</divisions>
        // Questo significa: semiminima = 4, minima = 8, semibreve = 16
        // VexFlow durations: q = quarter, h = half, w = whole

        // ATTENZIONE: Il MusicXML fornito è complesso e probabilmente contiene artefatti OMR.
        // Questa è una TRASCRIZIONE SEMPLIFICATA delle prime battute.
        // Le due chiavi di Sol sono mantenute come da MusicXML.

        notesTreble: [
            // Battuta 1 (interpretazione semplificata)
            // MusicXML ha: C5 (durata 8, half), C5 (durata 16, whole)
            // Semplifico in due semiminime per iniziare, poi vedremo.
            // O forse la prima è una minima e la seconda una minima.
            // Il totale durata nel MusicXML per voice 1 è 24 (6 semiminime) - non torna con 4/4
            // Prendiamo le prime due note "sequenziali" come se fossero distinte
            { keys: ["c/5"], duration: "h", midiValues: [72] }, // C5, half
            { keys: ["c/5"], duration: "h", midiValues: [72] }, // C5, half (per riempire la battuta, semplificando)
                                                                // Lo staccato sul primo Do5 è presente

            // Battuta 2 (interpretazione semplificata)
            // MusicXML ha: E5 (durata 8, half), E5 (durata 16, whole)
            { keys: ["e/5"], duration: "h", midiValues: [76] }, // E5, half
            { keys: ["e/5"], duration: "h", midiValues: [76] }, // E5, half (per riempire)
                                                                // Il MusicXML mostra poi un F5 quarter nella "voice 5" su staff 1
                                                                // { keys: ["f/5"], duration: "q", midiValues: [77] }, // Questo F5 è in voice 5 su staff 1
        ],
        notesBass: [ // ATTENZIONE: Chiave di Sol anche per il basso come da MusicXML!
            // Battuta 1 (interpretazione semplificata)
            // MusicXML ha: C4 (durata 8, half), D4 (durata 16, whole)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, // C4, half (staff 2)
                                                                // Staccato e caesura presenti
            { keys: ["d/4"], duration: "h", midiValues: [62] }, // D4, half (staff 2, per riempire)

            // Battuta 2 (interpretazione semplificata)
            // MusicXML ha: E4 (durata 8, half) CHORD con F4 (durata 8, half)
            { keys: ["e/4", "f/4"], duration: "h", midiValues: [64, 65] }, // E4 e F4 insieme, half
                                                                          // Staccato e caesura sul E4
            // Poi c'è una pausa di "half dot" (durata 12)
            { keys: ["b/4"], duration: "h", type: "rest", midiValues: [] }, // Rest per riempire la battuta (semplificato)
        ]
    },

    // =======================================================================================
    // === Esercizio Beyer Op.101 No.23 (CON DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex23",
        name: "Beyer Op.101 No.23",
        tempo: "Moderato",
        category: "beyer_op101_intermediate", // Potrebbe essere una nuova categoria se gli esercizi 21-30 sono separati
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // "C" nello spartito indica 4/4
        repetitions: 1, // Il pezzo viene suonato una volta, il ritornello interno 1-4 è gestito duplicando le note
        notesTreble: [
            // Prima sezione (Battute 1-4 - da ripetere)
            // Battuta 1
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "3" },
            { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 2
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 3
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "5" },
            { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "1" },
            { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "3" },
            // Battuta 4
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "3" },
            { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 2 (ripetuta)
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 3 (ripetuta)
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "5" },
            { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "1" },
            { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "3" },
            // Battuta 4 (ripetuta)
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },

            // Seconda sezione (Battute 5-8 - dopo il ritornello)
            // Battuta 5
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "4" }, // Nota: C5 è DO centrale + 1 ottava
            { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 6
            { keys: ["f/4"], duration: "q", midiValues: [65], fingering: "2" },
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" },
            { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "1" },
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 7
            { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["c/4"], duration: "h", midiValues: [60] } // Fine del pezzo
        ],
        notesBass: [
            // Prima sezione (Battute 1-4 - da ripetere)
            // Battuta 1
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" },
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 2
            { keys: ["g/2"], duration: "h", midiValues: [43] }, // Nota: G2 è Sol sotto il Do centrale
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 3
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 4
            { keys: ["c/3"], duration: "w", midiValues: [48] },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" },
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 2 (ripetuta)
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 3 (ripetuta)
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 4 (ripetuta)
            { keys: ["c/3"], duration: "w", midiValues: [48] },

            // Seconda sezione (Battute 5-8 - dopo il ritornello)
            // Battuta 5
            { keys: ["a/2"], duration: "h", midiValues: [45], fingering: "4" }, // Nota: A2 è La sotto il Do centrale
            { keys: ["f/2"], duration: "h", midiValues: [41] }, // Nota: F2 è Fa sotto il Do centrale
            // Battuta 6
            { keys: ["d/3"], duration: "h", midiValues: [50] }, // Nota: D3 è Re sopra il Do basso
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 7
            { keys: ["b/2"], duration: "h", midiValues: [47] }, // Nota: B2 è Si sotto il Do centrale
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 8
            { keys: ["c/3"], duration: "w", midiValues: [48] } // Fine del pezzo
        ]
    },

// =======================================================================================
    // === Esercizio Beyer Op.101 No.24 (CON DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex24",
        name: "Beyer Op.101 No.24",
        // tempo: "Moderato", // Nessuna indicazione di tempo esplicita, "legato" è un'articolazione
        category: "beyer_op101_intermediate", // O la categoria appropriata per gli esercizi 21-30
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // "C" nello spartito indica 4/4
        repetitions: 1, // Il pezzo viene suonato una volta, il ritornello interno 1-4 è gestito duplicando le note
        notesTreble: [
            // Prima sezione (Battute 1-4 - da ripetere)
            // Battuta 1
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" },
            { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] },
            // Battuta 2
            { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Battuta 3
            { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            // Battuta 4
            { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["b/4"], duration: "h", midiValues: [71] },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" },
            { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] },
            // Battuta 2 (ripetuta)
            { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Battuta 3 (ripetuta)
            { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            // Battuta 4 (ripetuta)
            { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["b/4"], duration: "h", midiValues: [71] },

            // Seconda sezione (Battute 5-8 - dopo il ritornello)
            // Battuta 5
            { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 6
            { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 7
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 8
            { keys: ["c/4"], duration: "w", midiValues: [60] } // Fine del pezzo
        ],
        notesBass: [
            // Prima sezione (Battute 1-4 - da ripetere) - Tutte crome ("8")
            // Battuta 1
            { keys: ["c/3"], duration: "8", midiValues: [48], fingering: "3" }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "5" }, // Diteggiatura 5 su C4

            
            // Battuta 2
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Battuta 3
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // Battuta 4
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["c/3"], duration: "8", midiValues: [48], fingering: "3" }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "5" },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
           
            // Battuta 2 (ripetuta)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Battuta 3 (ripetuta)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // Battuta 4 (ripetuta)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] },

            // Seconda sezione (Battute 5-8 - dopo il ritornello) - Tutte crome ("8")
            // Battuta 5
            { keys: ["f/2"], duration: "8", midiValues: [41], fingering: "2" }, { keys: ["a/2"], duration: "8", midiValues: [45], fingering: "4" }, // Diteggiatura 4 su A2
            { keys: ["c/3"], duration: "8", midiValues: [48], fingering: "1" }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Battuta 6
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Battuta 7
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["e/2"], duration: "8", midiValues: [40] },
            { keys: ["d/2"], duration: "8", midiValues: [38] }, { keys: ["c/2"], duration: "8", midiValues: [36] },
            // Battuta 8
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["c/2"], duration: "8", midiValues: [36] } // Fine del pezzo
        ]
    },
        // =======================================================================================
    // === Esercizio Beyer Op.101 No.25 (CON DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex25",
        name: "Beyer Op.101 No.25",
        // tempo: "Moderato", // Nessuna indicazione di tempo esplicita
        category: "beyer_op101_intermediate", // O la categoria appropriata
        staveLayout: "grand",
        keySignature: "C", // Non ci sono alterazioni in chiave, ma ci sono F# accidentali
        timeSignature: "3/4",
        repetitions: 1, // Il pezzo viene suonato una volta, il ritornello interno 1-4 è gestito duplicando le note
        notesTreble: [
            // Prima sezione (Battute 1-4 - da ripetere)
            // Battuta 1
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "5" },
            { keys: ["f#/4"], duration: "q", midiValues: [66], fingering: "4" },
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "3" },
            // Battuta 2
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "3" },
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "2" },
            { keys: ["f#/4"], duration: "q", midiValues: [66], fingering: "1" },
            // Battuta 3
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 4
            { keys: ["c/5"], duration: "hd", midiValues: [72] }, // Minima puntata

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "5" },
            { keys: ["f#/4"], duration: "q", midiValues: [66], fingering: "4" },
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "3" },
            // Battuta 2 (ripetuta)
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "3" },
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "2" },
            { keys: ["f#/4"], duration: "q", midiValues: [66], fingering: "1" },
            // Battuta 3 (ripetuta)
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 4 (ripetuta)
            { keys: ["c/5"], duration: "hd", midiValues: [72] },

            // Seconda sezione (Battute 5-8 - dopo il ritornello)
            // Battuta 5
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "4" },
            { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 6
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 7
            { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "5" },
            { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["f#/4"], duration: "q", midiValues: [66], fingering: "3" },
            // Battuta 8
            { keys: ["g/4"], duration: "hd", midiValues: [67] } // Minima puntata, Fine del pezzo
        ],
        notesBass: [
            // Prima sezione (Battute 1-4 - da ripetere)
            // Battuta 1 (articolata - 3 semiminime)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "1" },
            { keys: ["d/3"], duration: "q", midiValues: [50], fingering: "2" },
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            // Battuta 2 (articolata - 3 semiminime)
            { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] },
            // Battuta 3 (nota lunga - minima puntata)
            { keys: ["g/2"], duration: "hd", midiValues: [43] },
            // Battuta 4 (nota lunga - minima puntata)
            { keys: ["c/3"], duration: "hd", midiValues: [48] },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta - articolata)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "1" },
            { keys: ["d/3"], duration: "q", midiValues: [50], fingering: "2" },
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            // Battuta 2 (ripetuta - articolata)
            { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] },
            // Battuta 3 (ripetuta - nota lunga)
            { keys: ["g/2"], duration: "hd", midiValues: [43] },
            // Battuta 4 (ripetuta - nota lunga)
            { keys: ["c/3"], duration: "hd", midiValues: [48] },

            // Seconda sezione (Battute 5-8 - dopo il ritornello)
            // Battuta 5 (articolata - 3 semiminime)
            { keys: ["a/2"], duration: "q", midiValues: [45], fingering: "4" },
            { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 6 (articolata - 3 semiminime)
            { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] },
            // Battuta 7 (nota lunga - minima puntata)
            { keys: ["g/2"], duration: "hd", midiValues: [43], fingering: "1" },
            // Battuta 8 (nota lunga - minima puntata)
            { keys: ["c/3"], duration: "hd", midiValues: [48] } // Fine del pezzo
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.26 (CON DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex26",
        name: "Beyer Op.101 No.26",
        tempo: "Moderato",
        category: "beyer_op101_intermediate", // O la categoria appropriata
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Il ritornello interno 1-4 è gestito duplicando le note
        notesTreble: [
            // Prima sezione (Battute 1-4 - da ripetere) - Tutte crome ("8")
            // Battuta 1
            { keys: ["c/5"], duration: "8", midiValues: [72], fingering: "1" }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["e/5"], duration: "8", midiValues: [76], fingering: "3" }, { keys: ["f/5"], duration: "8", midiValues: [77] },
            { keys: ["g/5"], duration: "8", midiValues: [79], fingering: "5" }, { keys: ["f/5"], duration: "8", midiValues: [77] },
            { keys: ["e/5"], duration: "8", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            // Battuta 2
            { keys: ["c/5"], duration: "8", midiValues: [72], fingering: "2" }, { keys: ["e/5"], duration: "8", midiValues: [76], fingering: "4" },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            // Battuta 3
            { keys: ["c/5"], duration: "8", midiValues: [72], fingering: "2" }, { keys: ["d/5"], duration: "8", midiValues: [74], fingering: "4" },
            { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["a/5"], duration: "8", midiValues: [81] },
            { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["c/6"], duration: "8", midiValues: [84] },
            // Battuta 4
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["c/5"], duration: "8", midiValues: [72], fingering: "1" }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["e/5"], duration: "8", midiValues: [76], fingering: "3" }, { keys: ["f/5"], duration: "8", midiValues: [77] },
            { keys: ["g/5"], duration: "8", midiValues: [79], fingering: "5" }, { keys: ["f/5"], duration: "8", midiValues: [77] },
            { keys: ["e/5"], duration: "8", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            // Battuta 2 (ripetuta)
            { keys: ["c/5"], duration: "8", midiValues: [72], fingering: "2" }, { keys: ["e/5"], duration: "8", midiValues: [76], fingering: "4" },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            // Battuta 3 (ripetuta)
            { keys: ["c/5"], duration: "8", midiValues: [72], fingering: "2" }, { keys: ["d/5"], duration: "8", midiValues: [74], fingering: "4" },
            { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["a/5"], duration: "8", midiValues: [81] },
            { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["c/6"], duration: "8", midiValues: [84] },
            // Battuta 4 (ripetuta)
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] },

            // Seconda sezione (Battute 5-8 - dopo il ritornello) - Tutte crome ("8") tranne l'ultima nota
            // Battuta 5
            { keys: ["c/5"], duration: "8", midiValues: [72], fingering: "4" }, { keys: ["e/5"], duration: "8", midiValues: [76], fingering: "2" },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            // Battuta 6
            { keys: ["c/5"], duration: "8", midiValues: [72], fingering: "3" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "1" },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "2" }, { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "5" },
            { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            // Battuta 7
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            // Battuta 8
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [76] }, // E5 nel mio spartito di riferimento, non E4
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["c/4"], duration: "q", midiValues: [60] } // Semiminima alla fine
        ],
        notesBass: [
            // Prima sezione (Battute 1-4 - da ripetere) - Minime ("h")
            // Battuta 1
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" }, { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "3" },
            // Battuta 2
            { keys: ["f/2"], duration: "h", midiValues: [41], fingering: "2" }, { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "4" },
            // Battuta 3
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "1" }, { keys: ["d/3"], duration: "h", midiValues: [50], fingering: "4" },
            // Battuta 4
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" }, { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "3" },
            // Battuta 2 (ripetuta)
            { keys: ["f/2"], duration: "h", midiValues: [41], fingering: "2" }, { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "4" },
            // Battuta 3 (ripetuta)
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "1" }, { keys: ["d/3"], duration: "h", midiValues: [50], fingering: "4" },
            // Battuta 4 (ripetuta)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },

            // Seconda sezione (Battute 5-8 - dopo il ritornello) - Minime ("h") tranne l'ultima nota
            // Battuta 5
            { keys: ["f/2"], duration: "h", midiValues: [41], fingering: "1" }, { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" },
            // Battuta 6
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "5" }, { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "3" },
            // Battuta 7
            { keys: ["d/2"], duration: "h", midiValues: [38], fingering: "1" }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 8
            { keys: ["c/2"], duration: "w", midiValues: [36] } // Semibreve alla fine
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.27 (CON DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex27",
        name: "Beyer Op.101 No.27",
        // tempo: "Moderato", // Nessuna indicazione esplicita
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Il ritornello interno 1-4 è gestito duplicando le note
        notesTreble: [
            // Prima sezione (Battute 1-4 - da ripetere) - Tutte semiminime ("q")
            // Battuta 1
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "2" },
            { keys: ["f/4"], duration: "q", midiValues: [65], fingering: "3" },
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 2
            { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "2" },
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "3" },
            { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "4" },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            // Battuta 3
            { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "3" },
            { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "4" },
            { keys: ["a/5"], duration: "q", midiValues: [81], fingering: "5" },
            { keys: ["b/5"], duration: "q", midiValues: [83] },
            // Battuta 4
            { keys: ["c/6"], duration: "q", midiValues: [84], fingering: "2" },
            { keys: ["b/5"], duration: "q", midiValues: [83], fingering: "3" },
            { keys: ["a/5"], duration: "q", midiValues: [81], fingering: "4" },
            { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "2" },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "2" },
            { keys: ["f/4"], duration: "q", midiValues: [65], fingering: "3" },
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 2 (ripetuta)
            { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "2" },
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "3" },
            { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "4" },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            // Battuta 3 (ripetuta)
            { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "3" },
            { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "4" },
            { keys: ["a/5"], duration: "q", midiValues: [81], fingering: "5" },
            { keys: ["b/5"], duration: "q", midiValues: [83] },
            // Battuta 4 (ripetuta)
            { keys: ["c/6"], duration: "q", midiValues: [84], fingering: "2" },
            { keys: ["b/5"], duration: "q", midiValues: [83], fingering: "3" },
            { keys: ["a/5"], duration: "q", midiValues: [81], fingering: "4" },
            { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "2" },

            // Seconda sezione (Battute 5-8 - dopo il ritornello) - Tutte semiminime ("q")
            // Battuta 5
            { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "2" },
            { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 6
            { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 7
            { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 8
            { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] } // Fine del pezzo
        ],
        notesBass: [
            // Prima sezione (Battute 1-4 - da ripetere) - Minime ("h")
            // Battuta 1
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "3" },
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "1" },
            // Battuta 2
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "2" },
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "4" },
            // Battuta 3
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" },
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "3" },
            // Battuta 4
            { keys: ["e/3"], duration: "h", midiValues: [52], fingering: "1" },
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "3" },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "3" },
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "1" },
            // Battuta 2 (ripetuta)
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "2" },
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "4" },
            // Battuta 3 (ripetuta)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" },
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "3" },
            // Battuta 4 (ripetuta)
            { keys: ["e/3"], duration: "h", midiValues: [52], fingering: "1" },
            { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "3" },

            // Seconda sezione (Battute 5-8 - dopo il ritornello) - Minime ("h")
            // Battuta 5
            { keys: ["d/3"], duration: "h", midiValues: [50], fingering: "2" },
            { keys: ["d/3"], duration: "h", midiValues: [50], fingering: "4" },
            // Battuta 6
            { keys: ["e/3"], duration: "h", midiValues: [52], fingering: "5" },
            { keys: ["e/3"], duration: "h", midiValues: [52], fingering: "3" },
            // Battuta 7
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "1" },
            { keys: ["f/2"], duration: "h", midiValues: [41] }, // F2
            // Battuta 8
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            { keys: ["c/3"], duration: "h", midiValues: [48] } // Fine del pezzo
        ]
    },

    // =======================================================================================
    // === Esercizio Beyer Op.101 No.28 (CON INVERSIONE DEI SISTEMI OGNI 2 BATTUTE) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex28-inv",
        name: "Beyer Op.101 No.28 (Inverted Systems)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom", // Categoria per esercizi customizzati
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Il ritornello interno 1-4 è gestito duplicando le note
        notesTreble: [
            // --- SEZIONE 1: MD MELODICA, MS ACCOMPAGNAMENTO ---
            // Battuta 1
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" },
            // Battuta 2
            { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "5" }, { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" },
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },

            // --- SEZIONE 2: MS MELODICA, MD ACCOMPAGNAMENTO (INVERSIONE) ---
            // Battuta 3
            { keys: ["c/5"], duration: "h", midiValues: [72], fingering: "1" }, { keys: ["e/5"], duration: "h", midiValues: [76], fingering: "3" },
            // Battuta 4
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "1" }, { keys: ["b/4"], duration: "h", midiValues: [71], fingering: "3" },

            // --- RITORNELLO (RIPETIZIONE BATTUTE 1-4) ---
            // Battuta 1 (ripetuta - MD Melodica)
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" },
            // Battuta 2 (ripetuta - MD Melodica)
            { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "5" }, { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" },
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            // Battuta 3 (ripetuta - MD Accompagnamento)
            { keys: ["c/5"], duration: "h", midiValues: [72], fingering: "1" }, { keys: ["e/5"], duration: "h", midiValues: [76], fingering: "3" },
            // Battuta 4 (ripetuta - MD Accompagnamento)
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "1" }, { keys: ["b/4"], duration: "h", midiValues: [71], fingering: "3" },

            // --- SEZIONE 3: MD MELODICA, MS ACCOMPAGNAMENTO (NUOVO MOTIVO) ---
            // Battuta 5 (Arpeggio Do disc.)
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "2" },
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "5" },
            // Battuta 6 (Arpeggio Sol asc.)
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "1" }, { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "3" },
            { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "5" }, { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "1" },


            // --- SEZIONE 4: MS MELODICA, MD ACCOMPAGNAMENTO (INVERSIONE NUOVO MOTIVO) ---
            // Battuta 7
            { keys: ["f/4"], duration: "h", midiValues: [65], fingering: "1" }, { keys: ["a/4"], duration: "h", midiValues: [69], fingering: "3" },
            // Battuta 8
            { keys: ["c/4"], duration: "w", midiValues: [60], fingering: "1" } // Semibreve finale
        ],
        notesBass: [
            // --- SEZIONE 1: MD MELODICA, MS ACCOMPAGNAMENTO ---
            // Battuta 1
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55], fingering: "5-3-1" },
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },
            // Battuta 2
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50], fingering: "5-3-1" },
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] },

            // --- SEZIONE 2: MS MELODICA, MD ACCOMPAGNAMENTO (INVERSIONE) ---
            // Battuta 3 (MS Melodia)
            { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "5" }, { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "4" },
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" }, { keys: ["f/4"], duration: "q", midiValues: [65], fingering: "2" },
            // Battuta 4 (MS Melodia)
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "1" }, { keys: ["f/4"], duration: "q", midiValues: [65], fingering: "2" },
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" }, { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "4" },

            // --- RITORNELLO (RIPETIZIONE BATTUTE 1-4) ---
            // Battuta 1 (ripetuta - MS Accompagnamento)
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55], fingering: "5-3-1" },
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },
            // Battuta 2 (ripetuta - MS Accompagnamento)
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50], fingering: "5-3-1" },
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] },
            // Battuta 3 (ripetuta - MS Melodia)
            { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "5" }, { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "4" },
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" }, { keys: ["f/4"], duration: "q", midiValues: [65], fingering: "2" },
            // Battuta 4 (ripetuta - MS Melodia)
            { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "1" }, { keys: ["f/4"], duration: "q", midiValues: [65], fingering: "2" },
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" }, { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "4" },

            // --- SEZIONE 3: MD MELODICA, MS ACCOMPAGNAMENTO (NUOVO MOTIVO) ---
            // Battuta 5
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48], fingering: "5-3-1" },
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] },
            // Battuta 6
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50], fingering: "5-3-1" },
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55], fingering: "5-3-1" },

            // --- SEZIONE 4: MS MELODICA, MD ACCOMPAGNAMENTO (INVERSIONE NUOVO MOTIVO) ---
            // Battuta 7 (MS Arpeggio Do disc.)
            { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "5" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "2" },
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" }, { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" },
            // Battuta 8 (MS Arpeggio Sol asc.)
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "5" }, { keys: ["b/3"], duration: "q", midiValues: [59], fingering: "3" }, // Uso G3 (5) invece di G2 per MS
            { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "1" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "5" }
        ]
    },
   // =======================================================================================
    // === Esercizio Beyer Op.101 No.28 (ORIGINALE CON INVERSIONE ALLA BATTUTA 8) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex28-orig",
        name: "Beyer Op.101 No.28 (Original)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Il ritornello interno 1-4 è gestito duplicando le note
        notesTreble: [
            // Prima sezione (Battute 1-4 - da ripetere) - MD Melodica (crome)
            // Battuta 1
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "1" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" },
            { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "2" }, { keys: ["a/4"], duration: "8", midiValues: [69], fingering: "5" },
        
            
            // Battuta 2
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "1" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "4" },
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" }, { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "1" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["b/3"], duration: "8", midiValues: [59], fingering: "1" }, // Si3
            // Battuta 3
            { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "1" }, { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "4" },
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "5" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "4" },
            // Battuta 4
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "1" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" },
            { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "1" }, { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" },
            { keys: ["b/3"], duration: "8", midiValues: [59], fingering: "1" }, { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, // Si3
            { keys: ["a/3"], duration: "8", midiValues: [57], fingering: "1" }, { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "4" }, // La3

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "1" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" },
            { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "2" }, { keys: ["a/4"], duration: "8", midiValues: [69], fingering: "5" },
            { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" }, { keys: ["b/4"], duration: "8", midiValues: [71], fingering: "5" },
            { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "2" }, { keys: ["a/4"], duration: "8", midiValues: [69], fingering: "4" },
            // Battuta 2 (ripetuta)
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "1" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "4" },
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" }, { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "1" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["b/3"], duration: "8", midiValues: [59], fingering: "1" },
            // Battuta 3 (ripetuta)
            { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "1" }, { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "4" },
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "5" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "4" },
            // Battuta 4 (ripetuta)
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "1" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" },
            { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "1" }, { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" },
            { keys: ["b/3"], duration: "8", midiValues: [59], fingering: "1" }, { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" },
            { keys: ["a/3"], duration: "8", midiValues: [57], fingering: "1" }, { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "4" },

            // Seconda sezione (Battute 5-7: MD Melodica; Battuta 8: INVERSIONE - MD Accompagnamento)
            // Battuta 5
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "1" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" },
            { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "2" }, { keys: ["a/4"], duration: "8", midiValues: [69], fingering: "5" },
            { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" }, { keys: ["b/4"], duration: "8", midiValues: [71], fingering: "5" },
            { keys: ["a/4"], duration: "8", midiValues: [69], fingering: "4" }, { keys: ["c/5"], duration: "8", midiValues: [72], fingering: "5" },
            // Battuta 6
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "1" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "3" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "4" },
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" }, { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "1" },
            { keys: ["b/3"], duration: "8", midiValues: [59], fingering: "1" }, { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, // Si3
            // Battuta 7
            { keys: ["c/4"], duration: "8", midiValues: [60], fingering: "1" }, { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "4" },
            { keys: ["e/4"], duration: "8", midiValues: [64], fingering: "3" }, { keys: ["g/4"], duration: "8", midiValues: [67], fingering: "5" },
            { keys: ["d/4"], duration: "8", midiValues: [62], fingering: "2" }, { keys: ["f/4"], duration: "8", midiValues: [65], fingering: "4" },
            // Battuta 8 (INVERSIONE: MD Accompagnamento - Semibreve)
            { keys: ["c/4"], duration: "w", midiValues: [60], fingering: "1" }
        ],
        notesBass: [
            // Prima sezione (Battute 1-4 - da ripetere) - MS Accompagnamento (Semibrevi/Minime)
            // Battuta 1
            { keys: ["c/3"], duration: "w", midiValues: [48], fingering: "1" },
            // Battuta 2
            { keys: ["g/2"], duration: "w", midiValues: [43], fingering: "2" },
            // Battuta 3
            { keys: ["c/3"], duration: "w", midiValues: [48], fingering: "3" },
            // Battuta 4
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["g/2"], duration: "h", midiValues: [43] },

            // Ripetizione della prima sezione (Battute 1-4)
            // Battuta 1 (ripetuta)
            { keys: ["c/3"], duration: "w", midiValues: [48], fingering: "1" },
            // Battuta 2 (ripetuta)
            { keys: ["g/2"], duration: "w", midiValues: [43], fingering: "2" },
            // Battuta 3 (ripetuta)
            { keys: ["c/3"], duration: "w", midiValues: [48], fingering: "3" },
            // Battuta 4 (ripetuta)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["g/2"], duration: "h", midiValues: [43] },

            // Seconda sezione (Battute 5-7: MS Accompagnamento; Battuta 8: INVERSIONE - MS Melodica)
            // Battuta 5
            { keys: ["f/2"], duration: "w", midiValues: [41], fingering: "2" },
            // Battuta 6
            { keys: ["b/2"], duration: "w", midiValues: [47], fingering: "2" }, // Si2
            // Battuta 7
            { keys: ["e/2"], duration: "h", midiValues: [40] }, { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "1" }, // Mi2 e Do3
            // Battuta 8 (INVERSIONE: MS Melodica - Crome)
            { keys: ["g/2"], duration: "8", midiValues: [43], fingering: "1" }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48], fingering: "4" },
            { keys: ["b/2"], duration: "8", midiValues: [47], fingering: "1" }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["c/3"], duration: "8", midiValues: [48], fingering: "2" }, { keys: ["e/3"], duration: "8", midiValues: [52] }
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.29 (Sviluppato su 16 battute) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex29",
        name: "Beyer Op.101 No.29",
        tempo: "Moderato",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C", // Contiene F# accidentale
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente (8 battute ripetute)
        notesTreble: [
            // --- PRIMA SEZIONE (Battute 1-8) ---
            // Battuta 1
            { keys: ["g/4"], duration: "qd", midiValues: [67], fingering: "1" }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 2
            { keys: ["b/4"], duration: "qd", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 3
            { keys: ["d/5"], duration: "qd", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            // Battuta 4
            { keys: ["f/5"], duration: "qd", midiValues: [77] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 5 (Variazione, inizio discesa)
            { keys: ["b/4"], duration: "qd", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            // Battuta 6
            { keys: ["g/4"], duration: "qd", midiValues: [67] }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 7 (Verso la cadenza)
            { keys: ["c/4"], duration: "qd", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            // Battuta 8 (Cadenza sulla dominante G, prepara la ripetizione)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["g/4"], duration: "h", midiValues: [67] },

            // --- SECONDA SEZIONE (Ripetizione Battute 1-8) ---
            // Battuta 9 (come Battuta 1)
            { keys: ["g/4"], duration: "qd", midiValues: [67], fingering: "1" }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 10 (come Battuta 2)
            { keys: ["b/4"], duration: "qd", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 11 (come Battuta 3)
            { keys: ["d/5"], duration: "qd", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            // Battuta 12 (come Battuta 4)
            { keys: ["f/5"], duration: "qd", midiValues: [77] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 13 (come Battuta 5)
            { keys: ["b/4"], duration: "qd", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            // Battuta 14 (come Battuta 6)
            { keys: ["g/4"], duration: "qd", midiValues: [67] }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 15 (come Battuta 7, ma cadenza sulla Tonica C)
            { keys: ["c/4"], duration: "qd", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, // B3 per condurre a C4
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 16 (Cadenza finale sulla Tonica C)
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            // --- PRIMA SEZIONE (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 2
            { keys: ["d/3"], duration: "h", midiValues: [50] }, // Supporta Bm o G/D
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Battuta 3
            { keys: ["e/3"], duration: "h", midiValues: [52] }, // Supporta C/E o Am/E
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 4
            { keys: ["f/2"], duration: "h", midiValues: [41] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 5
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 6
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 7
            { keys: ["f/2"], duration: "h", midiValues: [41] }, // Subdominante
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            // Battuta 8
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // Dominante

            // --- SECONDA SEZIONE (Ripetizione Battute 1-8, con cadenza finale su C) ---
            // Battuta 9 (come Battuta 1)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 10 (come Battuta 2)
            { keys: ["d/3"], duration: "h", midiValues: [50] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Battuta 11 (come Battuta 3)
            { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 12 (come Battuta 4)
            { keys: ["f/2"], duration: "h", midiValues: [41] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 13 (come Battuta 5)
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 14 (come Battuta 6)
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 15 (come Battuta 7, ma con armonia che conduce a C)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, // Dominante G
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, // G7
            // Battuta 16 (Cadenza finale sulla Tonica C)
            { keys: ["c/2"], duration: "w", midiValues: [36] } // C2 (Do basso)
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.30 (24 battute, inversione ogni 8) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex30-ext-inv",
        name: "Beyer Op.101 No.30 (Extended & Inverted)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 24 battute sono scritte esplicitamente
        notesTreble: [
            // --- PARTE 1: Battute 1-8 (MD Melodica, MS Accomp.) ---
            // (Questo copre le prime 4 battute originali + la loro ripetizione)
            // Battuta 1 (originale)
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 2 (originale)
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "2" }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 3 (originale)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 4 (originale)
            { keys: ["d/4"], duration: "qd", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 5 (ripetizione Battuta 1)
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 6 (ripetizione Battuta 2)
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "2" }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 7 (ripetizione Battuta 3)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 8 (ripetizione Battuta 4)
            { keys: ["d/4"], duration: "qd", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },

            // --- PARTE 2: Battute 9-16 (INVERSIONE: MS Melodica, MD Accomp.) ---
            // (Musica delle battute 1-4 originali, ma con ruoli invertiti)
            // Battuta 9 (MD Accomp. per melodia MS di batt.1 orig.)
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64], fingering: "1-3" }, { keys: ["b/3", "d/4"], duration: "h", midiValues: [59, 62], fingering: "1-3" },
            // Battuta 10 (MD Accomp. per melodia MS di batt.2 orig.)
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64], fingering: "1-3" }, { keys: ["g/3", "b/3"], duration: "h", midiValues: [55, 59], fingering: "1-3" },
            // Battuta 11 (MD Accomp. per melodia MS di batt.3 orig.)
            { keys: ["c/4", "g/4"], duration: "h", midiValues: [60, 67], fingering: "1-5" }, { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64], fingering: "1-3" },
            // Battuta 12 (MD Accomp. per melodia MS di batt.4 orig.)
            { keys: ["d/4", "f/4"], duration: "h", midiValues: [62, 65], fingering: "1-3" }, { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64], fingering: "1-3" },
            // Battuta 13 (ripetizione MD Accomp. per melodia MS di batt.1 orig.)
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64], fingering: "1-3" }, { keys: ["b/3", "d/4"], duration: "h", midiValues: [59, 62], fingering: "1-3" },
            // Battuta 14 (ripetizione MD Accomp. per melodia MS di batt.2 orig.)
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64], fingering: "1-3" }, { keys: ["g/3", "b/3"], duration: "h", midiValues: [55, 59], fingering: "1-3" },
            // Battuta 15 (ripetizione MD Accomp. per melodia MS di batt.3 orig.)
            { keys: ["c/4", "g/4"], duration: "h", midiValues: [60, 67], fingering: "1-5" }, { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64], fingering: "1-3" },
            // Battuta 16 (ripetizione MD Accomp. per melodia MS di batt.4 orig.)
            { keys: ["d/4", "f/4"], duration: "h", midiValues: [62, 65], fingering: "1-3" }, { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64], fingering: "1-3" },

            // --- PARTE 3: Battute 17-24 (MD Melodica, MS Accomp. - come Parte 1) ---
            // Battuta 17 (come Battuta 1)
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 18 (come Battuta 2)
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "2" }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 19 (come Battuta 3)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 20 (come Battuta 4)
            { keys: ["d/4"], duration: "qd", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 21 (come Battuta 5)
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "3" }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 22 (come Battuta 6)
            { keys: ["e/4"], duration: "q", midiValues: [64], fingering: "2" }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 23 (come Battuta 7, ma cadenza finale)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 24 (Finale)
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            // --- PARTE 1: Battute 1-8 (MD Melodica, MS Accomp.) ---
            // Battuta 1 (originale)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" }, { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "3" },
            // Battuta 2 (originale)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "1" }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 3 (originale)
            { keys: ["a/2"], duration: "h", midiValues: [45], fingering: "2" }, { keys: ["f/3"], duration: "h", midiValues: [53], fingering: "1" },
            // Battuta 4 (originale)
            { keys: ["g/2"], duration: "q", midiValues: [43], fingering: "2" }, { keys: ["b/2"], duration: "q", midiValues: [47], fingering: "4" },
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Battuta 5 (ripetizione Battuta 1)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" }, { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "3" },
            // Battuta 6 (ripetizione Battuta 2)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "1" }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 7 (ripetizione Battuta 3)
            { keys: ["a/2"], duration: "h", midiValues: [45], fingering: "2" }, { keys: ["f/3"], duration: "h", midiValues: [53], fingering: "1" },
            // Battuta 8 (ripetizione Battuta 4)
            { keys: ["g/2"], duration: "q", midiValues: [43], fingering: "2" }, { keys: ["b/2"], duration: "q", midiValues: [47], fingering: "4" },
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["g/2"], duration: "q", midiValues: [43] },

            // --- PARTE 2: Battute 9-16 (INVERSIONE: MS Melodica, MD Accomp.) ---
            // (MS prende melodia MD delle battute 1-4 originali, un'ottava sotto)
            // Battuta 9 (MS Melodia come MD batt.1 orig.)
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 10 (MS Melodia come MD batt.2 orig.)
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "2" }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Battuta 11 (MS Melodia come MD batt.3 orig.)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 12 (MS Melodia come MD batt.4 orig.)
            { keys: ["d/3"], duration: "qd", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Battuta 13 (ripetizione MS Melodia come MD batt.1 orig.)
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 14 (ripetizione MS Melodia come MD batt.2 orig.)
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "2" }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Battuta 15 (ripetizione MS Melodia come MD batt.3 orig.)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 16 (ripetizione MS Melodia come MD batt.4 orig.)
            { keys: ["d/3"], duration: "qd", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] },

            // --- PARTE 3: Battute 17-24 (MD Melodica, MS Accomp. - come Parte 1) ---
            // Battuta 17 (come Battuta 1)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" }, { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "3" },
            // Battuta 18 (come Battuta 2)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "1" }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 19 (come Battuta 3)
            { keys: ["a/2"], duration: "h", midiValues: [45], fingering: "2" }, { keys: ["f/3"], duration: "h", midiValues: [53], fingering: "1" },
            // Battuta 20 (come Battuta 4)
            { keys: ["g/2"], duration: "q", midiValues: [43], fingering: "2" }, { keys: ["b/2"], duration: "q", midiValues: [47], fingering: "4" },
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Battuta 21 (come Battuta 5)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" }, { keys: ["g/2"], duration: "h", midiValues: [43], fingering: "3" },
            // Battuta 22 (come Battuta 6)
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "1" }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 23 (come Battuta 7, ma cadenza finale)
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 24 (Finale)
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    },
      // =======================================================================================
    // === Esercizio Beyer Op.101 No.31 (Reinterpretato: MD minime, MS semiminime) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex31-reint",
        name: "Beyer Op.101 No.31 (Reinterpreted)",
        tempo: "Moderato", // "legato" è un'articolazione
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD) - Minime ("h")
            // --- SEZIONE A (Battute 1-4) ---
            // Battuta 1 (orig MD: G F E D) -> G, E
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "3" }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 2 (orig MD: C D E F) -> C, E
            { keys: ["c/4"], duration: "h", midiValues: [60], fingering: "2" }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 3 (orig MD: G A B C5) -> G, B
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "2" }, { keys: ["b/4"], duration: "h", midiValues: [71], fingering: "3" },
            // Battuta 4 (orig MD: D5 C5 B4 A4) -> D5, B4
            { keys: ["d/5"], duration: "h", midiValues: [74], fingering: "4" }, { keys: ["b/4"], duration: "h", midiValues: [71], fingering: "2" },

            // --- SEZIONE B (Battute 5-8) ---
            // Battuta 5 (orig MD: G F E D) -> G, E
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "2" }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 6 (orig MD: C D E F) -> C, E
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 7 (orig MD: G A B A) -> G, B
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            // Battuta 8 (orig MD: G(h) G(qd) F(8)) -> G, G (o G, F per varietà. Usiamo G,G)
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "5" }, { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "3" }, // Oppure F4-h

            // --- RIPETIZIONE SEZIONE A (Battute 9-12) ---
            // Battuta 9 (come Battuta 1)
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "3" }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 10 (come Battuta 2)
            { keys: ["c/4"], duration: "h", midiValues: [60], fingering: "2" }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 11 (come Battuta 3)
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "2" }, { keys: ["b/4"], duration: "h", midiValues: [71], fingering: "3" },
            // Battuta 12 (come Battuta 4)
            { keys: ["d/5"], duration: "h", midiValues: [74], fingering: "4" }, { keys: ["b/4"], duration: "h", midiValues: [71], fingering: "2" },

            // --- RIPETIZIONE SEZIONE B (Battute 13-16, con finale) ---
            // Battuta 13 (come Battuta 5)
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "2" }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 14 (come Battuta 6)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 15 (come Battuta 7, modificata per cadenza)
            { keys: ["g/4"], duration: "h", midiValues: [67], fingering: "1" }, { keys: ["b/3"], duration: "h", midiValues: [59] }, // B3 per V-I
            // Battuta 16 (Finale)
            { keys: ["c/4"], duration: "w", midiValues: [60] } // C4 Semibreve
        ],
        notesBass: [ // Mano Sinistra (MS) - Semiminime ("q")
            // --- SEZIONE A (Battute 1-4) ---
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "1" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            // Battuta 2
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "2" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "4" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 4 (originale: G2qd B28 D3q G3q) -> G2 B2 D3 G3 (tutte q)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["d/3"], duration: "q", midiValues: [50], fingering: "5" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" },

            // --- SEZIONE B (Battute 5-8) ---
            // Battuta 5 (come Battuta 1 MS)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "2" }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 6 (come Battuta 2 MS)
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 7 (originale: C3q E3q G3q C4q)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 8 (originale: C3q E3q G3q C3q - la G3 è sul secondo rigo, C3 sul primo)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" }, { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "2" },

            // --- RIPETIZIONE SEZIONE A (Battute 9-12) ---
            // Battuta 9 (come Battuta 1)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "1" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            // Battuta 10 (come Battuta 2)
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 11 (come Battuta 3)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "2" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "4" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 12 (come Battuta 4)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["d/3"], duration: "q", midiValues: [50], fingering: "5" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" },

            // --- RIPETIZIONE SEZIONE B (Battute 13-16, con finale) ---
            // Battuta 13 (come Battuta 5)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "2" }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 14 (come Battuta 6)
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 15 (come Battuta 7, modificata per cadenza V-I)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, // F# per V di V
            // Battuta 16 (Finale)
            { keys: ["c/2"], duration: "w", midiValues: [36] } // C2 Semibreve
        ]
    },

    // =======================================================================================
    // === Esercizio Beyer Op.101 No.32 (Melodia in Triplette) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex32-trip",
        name: "Beyer Op.101 No.32 (Triplets)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD) - Terzine di crome
            // --- SEZIONE A (Battute 1-8) ---
            // Battuta 1 (Scala DoM ascendente)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, // Terzina 1
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, // Terzina 2
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, // Terzina 3
            { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["g/5"], duration: "8", midiValues: [79] }, // Terzina 4
            // Battuta 2 (Scala DoM discendente)
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 3 (Arpeggio DoM e SolM ascendente)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, // Ripete per flusso
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            // Battuta 4 (Arpeggio SolM e DoM discendente)
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Battuta 5 (Variazione con FaM)
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            // Battuta 6 (Ritorno a DoM)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            // Battuta 7 (Dominante SolM)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["f#/5"], duration: "8", midiValues: [78] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, // F# per G7
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            // Battuta 8 (Risoluzione su DoM, preparando Sezione A')
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // Chiusura più definita

            // --- SEZIONE A' (Battute 9-16, variazione con finale) ---
            // Battuta 9 (come 1, ma registro più acuto)
            { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
            { keys: ["a/5"], duration: "8", midiValues: [81] }, { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["c/6"], duration: "8", midiValues: [84] },
            { keys: ["d/6"], duration: "8", midiValues: [86] }, { keys: ["e/6"], duration: "8", midiValues: [88] }, { keys: ["f/6"], duration: "8", midiValues: [89] },
            { keys: ["g/6"], duration: "8", midiValues: [91] }, { keys: ["a/6"], duration: "8", midiValues: [93] }, { keys: ["b/6"], duration: "8", midiValues: [95] },
            // Battuta 10 (come 2, registro più acuto)
            { keys: ["b/6"], duration: "8", midiValues: [95] }, { keys: ["a/6"], duration: "8", midiValues: [93] }, { keys: ["g/6"], duration: "8", midiValues: [91] },
            { keys: ["f/6"], duration: "8", midiValues: [89] }, { keys: ["e/6"], duration: "8", midiValues: [88] }, { keys: ["d/6"], duration: "8", midiValues: [86] },
            { keys: ["c/6"], duration: "8", midiValues: [84] }, { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["a/5"], duration: "8", midiValues: [81] },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            // Battuta 11 (come 3, arpeggi)
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
            { keys: ["c/6"], duration: "8", midiValues: [84] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["d/6"], duration: "8", midiValues: [86] },
            { keys: ["g/6"], duration: "8", midiValues: [91] }, { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["d/6"], duration: "8", midiValues: [86] },
            // Battuta 12 (come 4, arpeggi)
            { keys: ["g/6"], duration: "8", midiValues: [91] }, { keys: ["d/6"], duration: "8", midiValues: [86] }, { keys: ["b/5"], duration: "8", midiValues: [83] },
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["d/6"], duration: "8", midiValues: [86] }, { keys: ["b/5"], duration: "8", midiValues: [83] },
            { keys: ["c/6"], duration: "8", midiValues: [84] }, { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            // Battuta 13 (come 5, con FaM)
            { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["a/5"], duration: "8", midiValues: [81] }, { keys: ["c/6"], duration: "8", midiValues: [84] },
            { keys: ["f/6"], duration: "8", midiValues: [89] }, { keys: ["a/5"], duration: "8", midiValues: [81] }, { keys: ["c/6"], duration: "8", midiValues: [84] },
            { keys: ["f/6"], duration: "8", midiValues: [89] }, { keys: ["e/6"], duration: "8", midiValues: [88] }, { keys: ["d/6"], duration: "8", midiValues: [86] },
            { keys: ["c/6"], duration: "8", midiValues: [84] }, { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["a/5"], duration: "8", midiValues: [81] },
            // Battuta 14 (come 6, Ritorno a DoM)
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["a/5"], duration: "8", midiValues: [81] }, { keys: ["b/5"], duration: "8", midiValues: [83] },
            { keys: ["c/6"], duration: "8", midiValues: [84] }, { keys: ["d/6"], duration: "8", midiValues: [86] }, { keys: ["e/6"], duration: "8", midiValues: [88] },
            { keys: ["f/6"], duration: "8", midiValues: [89] }, { keys: ["e/6"], duration: "8", midiValues: [88] }, { keys: ["d/6"], duration: "8", midiValues: [86] },
            { keys: ["c/6"], duration: "8", midiValues: [84] }, { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
            // Battuta 15 (come 7, Dominante SolM, ma risolve diversamente)
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["d/6"], duration: "8", midiValues: [86] },
            { keys: ["f#/5"], duration: "8", midiValues: [78] }, { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["a/5"], duration: "8", midiValues: [81] },
            { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["a/5"], duration: "8", midiValues: [81] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
            { keys: ["f#/5"], duration: "8", midiValues: [78] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            // Battuta 16 (Cadenza finale su DoM)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["c/5"], duration: "q", midiValues: [72] } // Arpeggio finale
        ],
        notesBass: [ // Mano Sinistra (MS) - Accompagnamento
            // --- SEZIONE A (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 2
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 3
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Battuta 4
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 5
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            // Battuta 6
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 7
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 8
            { keys: ["c/3"], duration: "w", midiValues: [48] },

            // --- SEZIONE A' (Battute 9-16) ---
            // Battuta 9
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 10
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 11
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Battuta 12
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 13
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            // Battuta 14
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 15 (Dominante)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Battuta 16 (Tonica)
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    },
// =======================================================================================
    // === Esercizio Beyer Op.101 No.33 (MD Semiminime, Inversione) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex33-inv-mel",
        name: "Beyer Op.101 No.33 (Inverted Melody)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD)
            // --- PARTE 1: MD MELODICA (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 2
            { keys: ["d/6"], duration: "q", midiValues: [86] }, { keys: ["a/5"], duration: "q", midiValues: [81] },
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["d/6"], duration: "q", midiValues: [86] },
            // Battuta 3
            { keys: ["f#/5"], duration: "q", midiValues: [78] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["b/5"], duration: "q", midiValues: [83] },
            // Battuta 4
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["b/5"], duration: "q", midiValues: [83] },
            // Battuta 5 (Stesso moto a scendere - inverso di Battuta 4)
            { keys: ["b/5"], duration: "q", midiValues: [83] }, { keys: ["a/5"], duration: "q", midiValues: [81] },
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            // Battuta 6 (Inverso di Battuta 3)
            { keys: ["b/5"], duration: "q", midiValues: [83] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f#/5"], duration: "q", midiValues: [78] },
            // Battuta 7 (Inverso di Battuta 2)
            { keys: ["d/6"], duration: "q", midiValues: [86] }, { keys: ["a/5"], duration: "q", midiValues: [81] },
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["d/6"], duration: "q", midiValues: [86] }, // Mantenuto per coerenza, anche se disc. sarebbe stato A5 D6 D6 A5
            // Battuta 8 (Inverso di Battuta 1)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Mantenuto per coerenza

            // --- PARTE 2: MD ACCOMPAGNAMENTO (Battute 9-16) ---
            // Battuta 9 (Accomp. per MS melodia di batt.1)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 10 (Accomp. per MS melodia di batt.2)
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f#/4"], duration: "h", midiValues: [66] },
            // Battuta 11 (Accomp. per MS melodia di batt.3)
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            // Battuta 12 (Accomp. per MS melodia di batt.4)
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Battuta 13 (Accomp. per MS melodia di batt.5)
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Battuta 14 (Accomp. per MS melodia di batt.6)
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            // Battuta 15 (Accomp. per MS melodia di batt.7)
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f#/4"], duration: "h", midiValues: [66] },
            // Battuta 16 (Finale)
            { keys: ["g/4"], duration: "w", midiValues: [67] } // O C5 per risoluzione più forte, ma G4 accompagna C3
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- PARTE 1: MS ACCOMPAGNAMENTO (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 2
            { keys: ["d/3"], duration: "w", midiValues: [50] },
            // Battuta 3
            { keys: ["b/2"], duration: "w", midiValues: [47] }, // Per F#5 e B5 in MD
            // Battuta 4
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            // Battuta 5
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 6
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 7
            { keys: ["d/3"], duration: "w", midiValues: [50] },
            // Battuta 8
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // Dominante per preparare l'inversione

            // --- PARTE 2: MS MELODICA (Battute 9-16) ---
            // (Melodia MD delle battute 1-8, un'ottava sotto)
            // Battuta 9 (Melodia di MD Battuta 1)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 10 (Melodia di MD Battuta 2)
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Battuta 11 (Melodia di MD Battuta 3)
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 12 (Melodia di MD Battuta 4)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 13 (Melodia di MD Battuta 5)
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 14 (Melodia di MD Battuta 6)
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            // Battuta 15 (Melodia di MD Battuta 7, ma modificata per cadenza)
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            // Battuta 16 (Finale)
            { keys: ["c/4"], duration: "w", midiValues: [60] } // Risoluzione su C4
        ]
    },
// =======================================================================================
    // === Esercizio Beyer Op.101 No.34 (MS Articolata, Inversione) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex34-bs-lead",
        name: "Beyer Op.101 No.34 (Articulated Bass Lead)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD)
            // --- PARTE 1: MD ACCOMPAGNAMENTO (Battute 1-8) ---
            // Battuta 1
            { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] }, // Accordo C maggiore
            { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] },
            // Battuta 2
            { keys: ["d/4", "g/4", "b/4"], duration: "h", midiValues: [62, 67, 71] }, // Accordo G maggiore
            { keys: ["d/4", "g/4", "b/4"], duration: "h", midiValues: [62, 67, 71] },
            // Battuta 3
            { keys: ["c/4", "f/4", "a/4"], duration: "h", midiValues: [60, 65, 69] }, // Accordo F maggiore
            { keys: ["c/4", "f/4", "a/4"], duration: "h", midiValues: [60, 65, 69] },
            // Battuta 4
            { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] }, // Accordo C maggiore
            { keys: ["d/4", "g/4", "b/4"], duration: "h", midiValues: [62, 67, 71] }, // Accordo G maggiore
            // Battuta 5 (Variazione armonica)
            { keys: ["e/4", "a/4", "c/5"], duration: "h", midiValues: [64, 69, 72] }, // Accordo A minore
            { keys: ["e/4", "a/4", "c/5"], duration: "h", midiValues: [64, 69, 72] },
            // Battuta 6
            { keys: ["d/4", "f/4", "a/4"], duration: "h", midiValues: [62, 65, 69] }, // Accordo D minore
            { keys: ["d/4", "f/4", "a/4"], duration: "h", midiValues: [62, 65, 69] },
            // Battuta 7
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }, // C maggiore (registro più basso)
            { keys: ["b/3", "d/4", "g/4"], duration: "h", midiValues: [59, 62, 67] }, // G maggiore / B
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C maggiore

            // --- PARTE 2: MD MELODICA/ARTICOLATA (Battute 9-16) ---
            // (MD prende la parte della MS delle battute 1-8, adattata)
            // Battuta 9 (Melodia MS Battuta 1, ora in MD)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 10 (Melodia MS Battuta 2, ora in MD)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 11 (Melodia MS Battuta 3, ora in MD)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 12 (Melodia MS Battuta 4, ora in MD)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 13 (Melodia MS Battuta 5, ora in MD)
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 14 (Melodia MS Battuta 6, ora in MD)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 15 (Melodia MS Battuta 7, ora in MD, modificata per cadenza)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, // F# per G7
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 16 (Finale)
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- PARTE 1: MS MELODICA/ARTICOLATA (Battute 1-8) ---
            // Battuta 1 (Arpeggio DoM)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 2 (Arpeggio SolM)
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 3 (Arpeggio FaM)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 4 (Passaggio G -> C)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 5 (Arpeggio LaM)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            // Battuta 6 (Arpeggio ReM)
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // O F# se D maggiore, qui D minore
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 7 (Movimento cromatico verso G)
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 8 (Dominante G)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },

            // --- PARTE 2: MS ACCOMPAGNAMENTO (Battute 9-16) ---
            // Battuta 9
            { keys: ["c/2", "g/2"], duration: "h", midiValues: [36, 43] }, { keys: ["c/2", "g/2"], duration: "h", midiValues: [36, 43] },
            // Battuta 10
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] }, { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] },
            // Battuta 11
            { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] }, { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] },
            // Battuta 12
            { keys: ["c/2", "g/2"], duration: "h", midiValues: [36, 43] }, { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] },
            // Battuta 13
            { keys: ["a/2", "e/3"], duration: "h", midiValues: [45, 52] }, { keys: ["a/2", "e/3"], duration: "h", midiValues: [45, 52] },
            // Battuta 14
            { keys: ["d/2", "a/2"], duration: "h", midiValues: [38, 45] }, { keys: ["d/2", "a/2"], duration: "h", midiValues: [38, 45] },
            // Battuta 15
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] }, // Accordo G
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "h", midiValues: [43, 47, 50, 53] }, // Accordo G7
            // Battuta 16
            { keys: ["c/2", "e/2", "g/2"], duration: "w", midiValues: [36, 40, 43] } // Accordo C
        ]
    },
     // =======================================================================================
    // === Esercizio Beyer Op.101 No.35 (MD Articolata Inizialmente, Inversione) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex34b-tr-lead",
        name: "Beyer Op.101 No.35 (Articulated Treble Lead First)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD)
            // --- PARTE 1: MD MELODICA/ARTICOLATA (Battute 1-8) ---
            // (Prende la parte della MS del N.34, un'ottava sopra o adattata)
            // Battuta 1 (Arpeggio DoM)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 2 (Arpeggio SolM)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 3 (Arpeggio FaM)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 4 (Passaggio G -> C)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 5 (Arpeggio LaM)
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 6 (Arpeggio ReM)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 7 (Movimento verso G)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 8 (Dominante G)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/4"], duration: "q", midiValues: [67] },

            // --- PARTE 2: MD ACCOMPAGNAMENTO (Battute 9-16) ---
            // (Prende la parte della MD del N.34)
            // Battuta 9
            { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] },
            { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] },
            // Battuta 10
            { keys: ["d/4", "g/4", "b/4"], duration: "h", midiValues: [62, 67, 71] },
            { keys: ["d/4", "g/4", "b/4"], duration: "h", midiValues: [62, 67, 71] },
            // Battuta 11
            { keys: ["c/4", "f/4", "a/4"], duration: "h", midiValues: [60, 65, 69] },
            { keys: ["c/4", "f/4", "a/4"], duration: "h", midiValues: [60, 65, 69] },
            // Battuta 12
            { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] },
            { keys: ["d/4", "g/4", "b/4"], duration: "h", midiValues: [62, 67, 71] },
            // Battuta 13
            { keys: ["e/4", "a/4", "c/5"], duration: "h", midiValues: [64, 69, 72] },
            { keys: ["e/4", "a/4", "c/5"], duration: "h", midiValues: [64, 69, 72] },
            // Battuta 14
            { keys: ["d/4", "f/4", "a/4"], duration: "h", midiValues: [62, 65, 69] },
            { keys: ["d/4", "f/4", "a/4"], duration: "h", midiValues: [62, 65, 69] },
            // Battuta 15 (Modificata per cadenza)
            { keys: ["b/3", "d/4", "g/4"], duration: "h", midiValues: [59, 62, 67] }, // G
            { keys: ["b/3", "d/4", "f#/4", "g/4"], duration: "h", midiValues: [59, 62, 66, 67] }, // G7 (con F#)
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] } // C
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- PARTE 1: MS ACCOMPAGNAMENTO (Battute 1-8) ---
            // (Prende la parte della MD del N.34, un'ottava sotto o adattata)
            // Battuta 1
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },
            // Battuta 2
            { keys: ["b/2", "d/3", "g/3"], duration: "h", midiValues: [47, 50, 55] },
            { keys: ["b/2", "d/3", "g/3"], duration: "h", midiValues: [47, 50, 55] },
            // Battuta 3
            { keys: ["a/2", "c/3", "f/3"], duration: "h", midiValues: [45, 48, 53] },
            { keys: ["a/2", "c/3", "f/3"], duration: "h", midiValues: [45, 48, 53] },
            // Battuta 4
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },
            { keys: ["b/2", "d/3", "g/3"], duration: "h", midiValues: [47, 50, 55] },
            // Battuta 5
            { keys: ["c/3", "e/3", "a/3"], duration: "h", midiValues: [48, 52, 57] },
            { keys: ["c/3", "e/3", "a/3"], duration: "h", midiValues: [48, 52, 57] },
            // Battuta 6
            { keys: ["a/2", "d/3", "f/3"], duration: "h", midiValues: [45, 50, 53] },
            { keys: ["a/2", "d/3", "f/3"], duration: "h", midiValues: [45, 50, 53] },
            // Battuta 7
            { keys: ["e/2", "g/2", "c/3"], duration: "h", midiValues: [40, 43, 48] },
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] },
            // Battuta 8
            { keys: ["e/2", "g/2", "c/3"], duration: "w", midiValues: [40, 43, 48] },

            // --- PARTE 2: MS MELODICA/ARTICOLATA (Battute 9-16) ---
            // (Prende la parte della MS del N.34)
            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 10
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 13
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            // Battuta 14
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 15 (Modificata per cadenza)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, // G7
            // Battuta 16
            { keys: ["c/2"], duration: "w", midiValues: [36] } // C
        ]
    },
        // =======================================================================================
    // === Esercizio Beyer Op.101 No.36 (MD Accelerata - Crome, Inversione) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex35-fast-tr",
        name: "Beyer Op.101 No.36 (Fast Treble - Eighths)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD)
            // --- PARTE 1: MD ACCELERATA (CROME) (Battute 1-8) ---
            // Battuta 1 (Scala DoM ascendente)
            { keys: ["c/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["f/5"], duration: "8" },
            { keys: ["g/5"], duration: "8" }, { keys: ["a/5"], duration: "8" }, { keys: ["b/5"], duration: "8" }, { keys: ["c/6"], duration: "8" },
            // Battuta 2 (Scala DoM discendente)
            { keys: ["c/6"], duration: "8" }, { keys: ["b/5"], duration: "8" }, { keys: ["a/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["f/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" },
            // Battuta 3 (Arpeggi C - G)
            { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["c/6"], duration: "8" },
            { keys: ["b/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // Battuta 4 (Arpeggi G - C)
            { keys: ["g/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["c/6"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["c/5"], duration: "8" },
            // Battuta 5 (Pattern su F)
            { keys: ["f/5"], duration: "8" }, { keys: ["a/5"], duration: "8" }, { keys: ["c/6"], duration: "8" }, { keys: ["a/5"], duration: "8" },
            { keys: ["f/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" },
            // Battuta 6 (Pattern su C)
            { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["b/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // Battuta 7 (Pattern su G7)
            { keys: ["g/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["f/5"], duration: "8" },
            { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // Battuta 8 (Cadenza su C)
            { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["e/5"], duration: "8" },
            { keys: ["d/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["c/5"], duration: "8" },

            // --- PARTE 2: MD ACCOMPAGNAMENTO (Battute 9-16) ---
            // Battuta 9
            { keys: ["e/4", "g/4"], duration: "h", midiValues: [64, 67] }, { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] },
            // Battuta 10
            { keys: ["d/4", "f#/4"], duration: "h", midiValues: [62, 66] }, { keys: ["b/3", "d/4"], duration: "h", midiValues: [59, 62] },
            // Battuta 11
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] }, { keys: ["a/3", "c/4"], duration: "h", midiValues: [57, 60] },
            // Battuta 12
            { keys: ["b/3", "d/4"], duration: "h", midiValues: [59, 62] }, { keys: ["g/3", "b/3"], duration: "h", midiValues: [55, 59] },
            // Battuta 13
            { keys: ["a/3", "c/4"], duration: "h", midiValues: [57, 60] }, { keys: ["f/3", "a/3"], duration: "h", midiValues: [53, 57] },
            // Battuta 14
            { keys: ["g/3", "b/3"], duration: "h", midiValues: [55, 59] }, { keys: ["e/3", "g/3"], duration: "h", midiValues: [52, 55] },
            // Battuta 15
            { keys: ["d/4", "f#/4"], duration: "h", midiValues: [62, 66] }, { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] },
            // Battuta 16 (Finale)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- PARTE 1: MS ACCOMPAGNAMENTO (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 2
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 3
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 4
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 5
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            // Battuta 6
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 7
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 8
            { keys: ["c/3"], duration: "w", midiValues: [48] },

            // --- PARTE 2: MS ACCELERATA (CROME) (Battute 9-16) ---
            // (MS prende la parte della MD delle battute 1-8, adattata)
            // Battuta 9 (Scala DoM ascendente)
            { keys: ["c/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["f/3"], duration: "8" },
            { keys: ["g/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            // Battuta 10 (Scala DoM discendente)
            { keys: ["c/4"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["f/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["c/3"], duration: "8" },
            // Battuta 11 (Arpeggi C - G)
            { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            { keys: ["b/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["b/2"], duration: "8" },
            // Battuta 12 (Arpeggi G - C)
            { keys: ["g/2"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["c/4"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["c/3"], duration: "8" },
            // Battuta 13 (Pattern su F)
            { keys: ["f/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["c/4"], duration: "8" }, { keys: ["a/3"], duration: "8" },
            { keys: ["f/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["c/3"], duration: "8" },
            // Battuta 14 (Pattern su C)
            { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["e/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["b/2"], duration: "8" },
            // Battuta 15 (Pattern su G7, modificato per cadenza)
            { keys: ["g/2"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["f/3"], duration: "8" },
            { keys: ["e/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["b/2"], duration: "8" },
            // Battuta 16 (Finale)
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    },
      // =======================================================================================
    // === Esercizio Beyer Op.101 No.37 (MD Accelerata Variazione, Inversione) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex36-fast-tr-var",
        name: "Beyer Op.101 No.37 (Fast Treble Variation)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD)
            // --- PARTE 1: MD ACCELERATA (CROME) (Battute 1-8) ---
            // MOTIVO A
            // Battuta 1 (Arpeggio C spezzato ascendente e discendente)
            { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["c/6"], duration: "8" },
            { keys: ["g/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["g/4"], duration: "8" },
            // Battuta 2 (Arpeggio G spezzato ascendente e discendente)
            { keys: ["g/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["d/5"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            // Battuta 3 (Pattern scalare su F)
            { keys: ["f/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            { keys: ["c/5"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" },
            // Battuta 4 (Pattern scalare su C, preparando G)
            { keys: ["e/4"], duration: "8" }, { keys: ["f/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "8" },
            { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // MOTIVO B
            // Battuta 5 (Note ripetute e salti su C)
            { keys: ["c/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["c/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["a/5"], duration: "8" },
            // Battuta 6 (Note ripetute e salti su G)
            { keys: ["b/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["b/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" },
            // Battuta 7 (Passaggio cromatico discendente verso G)
            { keys: ["a/5"], duration: "8" }, { keys: ["g#/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["f#/5"], duration: "8" },
            { keys: ["f/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["d#/5"], duration: "8" }, { keys: ["d/5"], duration: "8" },
            // Battuta 8 (Cadenza su C, con G pedale)
            { keys: ["c/5"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/4"], duration: "8" },
            { keys: ["d/5"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["g/4"], duration: "8" },

            // --- PARTE 2: MD ACCOMPAGNAMENTO (Battute 9-16) ---
            // Battuta 9
            { keys: ["g/4", "c/5"], duration: "h" }, { keys: ["e/4", "g/4"], duration: "h" },
            // Battuta 10
            { keys: ["d/4", "g/4"], duration: "h" }, { keys: ["b/3", "d/4"], duration: "h" },
            // Battuta 11
            { keys: ["c/4", "f/4"], duration: "h" }, { keys: ["a/3", "c/4"], duration: "h" },
            // Battuta 12
            { keys: ["b/3", "e/4"], duration: "h" }, { keys: ["g/3", "c/4"], duration: "h" },
            // Battuta 13
            { keys: ["g/4", "c/5"], duration: "h" }, { keys: ["e/4", "g/4"], duration: "h" },
            // Battuta 14
            { keys: ["d/4", "g/4"], duration: "h" }, { keys: ["b/3", "d/4"], duration: "h" },
            // Battuta 15
            { keys: ["c/4", "e/4"], duration: "h" }, { keys: ["b/3", "d/4", "f#/4"], duration: "h" }, // G7
            // Battuta 16 (Finale)
            { keys: ["c/4", "e/4", "g/4"], duration: "w" }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- PARTE 1: MS ACCOMPAGNAMENTO (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["c/3", "e/3"], duration: "h" },
            // Battuta 2
            { keys: ["g/2", "d/3"], duration: "h" }, { keys: ["g/2", "b/2"], duration: "h" },
            // Battuta 3
            { keys: ["f/2", "c/3"], duration: "h" }, { keys: ["f/2", "a/2"], duration: "h" },
            // Battuta 4
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["g/2", "d/3"], duration: "h" },
            // Battuta 5
            { keys: ["c/3"], duration: "w" },
            // Battuta 6
            { keys: ["g/2"], duration: "w" },
            // Battuta 7
            { keys: ["c/3"], duration: "w" }, // Potrebbe essere E3 per seguire il D# della MD
            // Battuta 8
            { keys: ["c/3"], duration: "w" },

            // --- PARTE 2: MS ACCELERATA (CROME) (Battute 9-16) ---
            // (MS prende la parte della MD delle battute 1-8, adattata)
            // MOTIVO A (in MS)
            // Battuta 9
            { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            { keys: ["g/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["g/2"], duration: "8" },
            // Battuta 10
            { keys: ["g/2"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["d/3"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["d/2"], duration: "8" },
            // Battuta 11
            { keys: ["f/2"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["a/2"], duration: "8" }, { keys: ["b/2"], duration: "8" },
            { keys: ["c/3"], duration: "8" }, { keys: ["a/2"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["f/2"], duration: "8" },
            // Battuta 12
            { keys: ["e/2"], duration: "8" }, { keys: ["f/2"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["a/2"], duration: "8" },
            { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["b/2"], duration: "8" },
            // MOTIVO B (in MS)
            // Battuta 13
            { keys: ["c/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["c/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["f/3"], duration: "8" }, { keys: ["a/3"], duration: "8" },
            // Battuta 14
            { keys: ["b/2"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["b/2"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" },
            // Battuta 15 (Passaggio cromatico discendente verso G, modificato per cadenza)
            { keys: ["a/3"], duration: "8" }, { keys: ["g#/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["f#/3"], duration: "8" },
            { keys: ["f/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["d#/3"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            // Battuta 16 (Finale)
            { keys: ["c/3"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/2"], duration: "8" },
            { keys: ["d/3"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["c/2"], duration: "q" } // Croma + Pausa implicita per finire su C2 semiminima
        ]
    },
// =======================================================================================
    // === Esercizio Beyer Op.101 No.38  (MS Accelerata Inizialmente, Inversione) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex36b-fast-bs-first",
        name: "Beyer Op.101 No.38 (Fast Bass First)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD)
            // --- PARTE 1: MD ACCOMPAGNAMENTO (Battute 1-8) ---
            // (Prende la parte della MS del N.36, adattata per MD)
            // Battuta 1
            { keys: ["e/4", "c/5"], duration: "h" }, { keys: ["g/4", "c/5"], duration: "h" },
            // Battuta 2
            { keys: ["d/4", "b/4"], duration: "h" }, { keys: ["g/4", "b/4"], duration: "h" },
            // Battuta 3
            { keys: ["c/4", "a/4"], duration: "h" }, { keys: ["f/4", "a/4"], duration: "h" },
            // Battuta 4
            { keys: ["e/4", "c/5"], duration: "h" }, { keys: ["d/4", "g/4"], duration: "h" },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "w" },
            // Battuta 6
            { keys: ["d/4", "g/4", "b/4"], duration: "w" },
            // Battuta 7
            { keys: ["e/4", "g/4", "c/5"], duration: "w" },
            // Battuta 8
            { keys: ["e/4", "g/4", "c/5"], duration: "w" },

            // --- PARTE 2: MD ACCELERATA (CROME) (Battute 9-16) ---
            // (Prende la parte della MD del N.36)
            // MOTIVO A (in MD)
            // Battuta 9
            { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["c/6"], duration: "8" },
            { keys: ["g/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["g/4"], duration: "8" },
            // Battuta 10
            { keys: ["g/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["d/5"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            // Battuta 11
            { keys: ["f/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            { keys: ["c/5"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" },
            // Battuta 12
            { keys: ["e/4"], duration: "8" }, { keys: ["f/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "8" },
            { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // MOTIVO B (in MD)
            // Battuta 13
            { keys: ["c/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["c/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["a/5"], duration: "8" },
            // Battuta 14
            { keys: ["b/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["b/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" },
            // Battuta 15 (Passaggio cromatico discendente, modificato per cadenza)
            { keys: ["a/5"], duration: "8" }, { keys: ["g#/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["f#/5"], duration: "8" },
            { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // Battuta 16 (Finale)
            { keys: ["c/5"], duration: "q" }, { keys: ["e/5"], duration: "q" }, { keys: ["g/5"], duration: "q" }, { keys: ["c/6"], duration: "q" } // Arpeggio C maggiore
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- PARTE 1: MS ACCELERATA (CROME) (Battute 1-8) ---
            // (Prende la parte della MD del N.36, un'ottava o due sotto)
            // MOTIVO A (in MS)
            // Battuta 1
            { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            { keys: ["g/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["g/2"], duration: "8" },
            // Battuta 2
            { keys: ["g/2"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["d/3"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["d/2"], duration: "8" },
            // Battuta 3
            { keys: ["f/2"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["a/2"], duration: "8" }, { keys: ["b/2"], duration: "8" },
            { keys: ["c/3"], duration: "8" }, { keys: ["a/2"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["f/2"], duration: "8" },
            // Battuta 4
            { keys: ["e/2"], duration: "8" }, { keys: ["f/2"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["a/2"], duration: "8" },
            { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["b/2"], duration: "8" },
            // MOTIVO B (in MS)
            // Battuta 5
            { keys: ["c/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["c/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["f/3"], duration: "8" }, { keys: ["a/3"], duration: "8" },
            // Battuta 6
            { keys: ["b/2"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["b/2"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" },
            // Battuta 7
            { keys: ["a/3"], duration: "8" }, { keys: ["g#/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["f#/3"], duration: "8" },
            { keys: ["f/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["d#/3"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            // Battuta 8
            { keys: ["c/3"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/2"], duration: "8" },
            { keys: ["d/3"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["g/2"], duration: "8" },

            // --- PARTE 2: MS ACCOMPAGNAMENTO (Battute 9-16) ---
            // (Prende la parte della MS del N.36)
            // Battuta 9
            { keys: ["c/2", "g/2"], duration: "h" }, { keys: ["c/2", "e/2"], duration: "h" },
            // Battuta 10
            { keys: ["g/2", "d/3"], duration: "h" }, { keys: ["g/1", "b/1"], duration: "h" }, // G1, B1 per registro basso
            // Battuta 11
            { keys: ["f/2", "c/3"], duration: "h" }, { keys: ["f/1", "a/1"], duration: "h" }, // F1, A1
            // Battuta 12
            { keys: ["c/2", "g/2"], duration: "h" }, { keys: ["g/1", "d/2"], duration: "h" }, // G1, D2
            // Battuta 13
            { keys: ["c/2"], duration: "w" },
            // Battuta 14
            { keys: ["g/1"], duration: "w" }, // G1
            // Battuta 15
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w" }, // G7 basso
            // Battuta 16 (Finale)
            { keys: ["c/1", "e/1", "g/1"], duration: "w" } // C basso
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.39 (MD Minime, MS Ritmo Misto, Inversione) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex39-rhythm-inv",
        name: "Beyer Op.101 No.39 (Minim Melody, Mixed Rhythm Bass)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 16 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD)
            // --- PARTE 1: MD MELODIA (MINIME) (Battute 1-8) ---
            // Battuta 1
            { keys: ["g/4"], duration: "h" }, { keys: ["c/5"], duration: "h" },
            // Battuta 2
            { keys: ["b/4"], duration: "h" }, { keys: ["d/5"], duration: "h" },
            // Battuta 3
            { keys: ["a/4"], duration: "h" }, { keys: ["f/5"], duration: "h" },
            // Battuta 4
            { keys: ["g/4"], duration: "h" }, { keys: ["e/5"], duration: "h" },
            // Battuta 5
            { keys: ["f/4"], duration: "h" }, { keys: ["d/5"], duration: "h" },
            // Battuta 6
            { keys: ["e/4"], duration: "h" }, { keys: ["c/5"], duration: "h" },
            // Battuta 7
            { keys: ["d/4"], duration: "h" }, { keys: ["g/4"], duration: "h" },
            // Battuta 8
            { keys: ["c/4"], duration: "w" }, // Semibreve per chiudere la frase

            // --- PARTE 2: MD ACCOMPAGNAMENTO (RITMO q, 8, 8) (Battute 9-16) ---
            // Battuta 9
            { keys: ["e/4"], duration: "q" }, { keys: ["d/4"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            // Battuta 10
            { keys: ["f/4"], duration: "q" }, { keys: ["e/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            { keys: ["a/4"], duration: "q" }, { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" },
            // Battuta 11
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            { keys: ["d/5"], duration: "q" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // Battuta 12
            { keys: ["c/5"], duration: "q" }, { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "8" },
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            // Battuta 13
            { keys: ["a/4"], duration: "q" }, { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" },
            { keys: ["e/4"], duration: "q" }, { keys: ["d/4"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            // Battuta 14
            { keys: ["d/4"], duration: "q" }, { keys: ["c/4"], duration: "8" }, { keys: ["b/3"], duration: "8" },
            { keys: ["a/3"], duration: "q" }, { keys: ["g/3"], duration: "8" }, { keys: ["f/3"], duration: "8" },
            // Battuta 15 (Cadenza V7)
            { keys: ["g/3"], duration: "q" }, { keys: ["b/3"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            { keys: ["f/4"], duration: "q" }, { keys: ["e/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            // Battuta 16 (Finale)
            { keys: ["c/4"], duration: "w" }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- PARTE 1: MS ACCOMPAGNAMENTO (RITMO q, 8, 8) (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3"], duration: "q" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["c/3"], duration: "q" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            // Battuta 2
            { keys: ["g/2"], duration: "q" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            { keys: ["g/2"], duration: "q" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            // Battuta 3
            { keys: ["f/2"], duration: "q" }, { keys: ["a/2"], duration: "8" }, { keys: ["c/3"], duration: "8" },
            { keys: ["f/2"], duration: "q" }, { keys: ["a/2"], duration: "8" }, { keys: ["c/3"], duration: "8" },
            // Battuta 4
            { keys: ["c/3"], duration: "q" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["g/2"], duration: "q" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            // Battuta 5
            { keys: ["a/2"], duration: "q" }, { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, // Am
            { keys: ["a/2"], duration: "q" }, { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" },
            // Battuta 6
            { keys: ["d/3"], duration: "q" }, { keys: ["f/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, // Dm
            { keys: ["d/3"], duration: "q" }, { keys: ["f/3"], duration: "8" }, { keys: ["a/3"], duration: "8" },
            // Battuta 7
            { keys: ["g/2"], duration: "q" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" }, // G
            { keys: ["c/3"], duration: "q" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, // C
            // Battuta 8
            { keys: ["c/2"], duration: "w" }, // C

            // --- PARTE 2: MS MELODIA (MINIME) (Battute 9-16) ---
            // (Prende la melodia della MD delle battute 1-8, un'ottava o più sotto)
            // Battuta 9
            { keys: ["g/3"], duration: "h" }, { keys: ["c/4"], duration: "h" },
            // Battuta 10
            { keys: ["b/3"], duration: "h" }, { keys: ["d/4"], duration: "h" },
            // Battuta 11
            { keys: ["a/3"], duration: "h" }, { keys: ["f/4"], duration: "h" },
            // Battuta 12
            { keys: ["g/3"], duration: "h" }, { keys: ["e/4"], duration: "h" },
            // Battuta 13
            { keys: ["f/3"], duration: "h" }, { keys: ["d/4"], duration: "h" },
            // Battuta 14
            { keys: ["e/3"], duration: "h" }, { keys: ["c/4"], duration: "h" },
            // Battuta 15
            { keys: ["d/3"], duration: "h" }, { keys: ["g/3"], duration: "h" },
            // Battuta 16 (Finale)
            { keys: ["c/3"], duration: "w" }
        ]
    },

    // =======================================================================================
    // === Esercizio Beyer Op.101 No.40 (Melodia Articolata, Inversione, 23 battute) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex40-mel-art-inv",
        name: "Beyer Op.101 No.40 (Articulated Melody, 23 bars)",
        tempo: "Moderato",
        category: "beyer_op101_intermediate_custom",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 23 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD)
            // --- PARTE 1: MD ACCOMPAGNAMENTO (RITMO q, 8, 8) (Battute 1-8) ---
            // Battuta 1
            { keys: ["e/4"], duration: "q" }, { keys: ["d/4"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            // Battuta 2
            { keys: ["f/4"], duration: "q" }, { keys: ["e/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            { keys: ["a/4"], duration: "q" }, { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" },
            // Battuta 3
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            { keys: ["d/5"], duration: "q" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // Battuta 4
            { keys: ["c/5"], duration: "q" }, { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "8" },
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            // Battuta 5
            { keys: ["a/4"], duration: "q" }, { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" },
            { keys: ["e/4"], duration: "q" }, { keys: ["d/4"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            // Battuta 6
            { keys: ["d/4"], duration: "q" }, { keys: ["c/4"], duration: "8" }, { keys: ["b/3"], duration: "8" },
            { keys: ["a/3"], duration: "q" }, { keys: ["g/3"], duration: "8" }, { keys: ["f/3"], duration: "8" },
            // Battuta 7
            { keys: ["g/3"], duration: "q" }, { keys: ["b/3"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            { keys: ["c/4"], duration: "q" }, { keys: ["e/4"], duration: "8" }, { keys: ["g/4"], duration: "8" },
            // Battuta 8
            { keys: ["c/4"], duration: "w" },

            // --- PARTE 2: MD MELODIA "ARTICOLATA" (PRINCIPALMENTE MINIME) (Battute 9-16) ---
            // Battuta 9
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["d/4"], duration: "h" },
            // Battuta 10
            { keys: ["c/5"], duration: "h" }, { keys: ["b/4"], duration: "q" }, { keys: ["a/4"], duration: "q" },
            // Battuta 11
            { keys: ["d/5"], duration: "q" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "h" },
            // Battuta 12
            { keys: ["g/4"], duration: "h" }, { keys: ["a/4"], duration: "q" }, { keys: ["b/4"], duration: "q" },
            // Battuta 13
            { keys: ["c/5"], duration: "q" }, { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["g/4"], duration: "h" },
            // Battuta 14
            { keys: ["f/4"], duration: "h" }, { keys: ["e/4"], duration: "q" }, { keys: ["d/4"], duration: "q" },
            // Battuta 15
            { keys: ["c/4"], duration: "q" }, { keys: ["d/4"], duration: "q" }, { keys: ["e/4"], duration: "q" }, { keys: ["f#/4"], duration: "q" },
            // Battuta 16
            { keys: ["g/4"], duration: "w" },

            // --- PARTE 3: MD ACCOMPAGNAMENTO (RITMO q, 8, 8) (Battute 17-23 - Coda) ---
            // Battuta 17 (come Battuta 1)
            { keys: ["e/4"], duration: "q" }, { keys: ["d/4"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            // Battuta 18 (come Battuta 2)
            { keys: ["f/4"], duration: "q" }, { keys: ["e/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            { keys: ["a/4"], duration: "q" }, { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" },
            // Battuta 19 (come Battuta 3)
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            { keys: ["d/5"], duration: "q" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // Battuta 20 (come Battuta 4)
            { keys: ["c/5"], duration: "q" }, { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "8" },
            { keys: ["g/4"], duration: "q" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            // Battuta 21 (Verso cadenza V)
            { keys: ["d/4"], duration: "q" }, { keys: ["f#/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, // D7
            { keys: ["g/4"], duration: "q" }, { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, // G
            // Battuta 22 (Cadenza V7)
            { keys: ["c/5"], duration: "q" }, { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "8" },
            { keys: ["g/4"], duration: "q" }, { keys: ["f#/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, // G7 feel
            // Battuta 23 (Finale)
            { keys: ["c/4"], duration: "w" }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- PARTE 1: MS MELODIA "ARTICOLATA" (PRINCIPALMENTE MINIME) (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3"], duration: "q" }, { keys: ["d/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["f/3"], duration: "h" },
            // Battuta 2
            { keys: ["g/3"], duration: "h" }, { keys: ["a/3"], duration: "q" }, { keys: ["b/3"], duration: "q" },
            // Battuta 3
            { keys: ["c/4"], duration: "q" }, { keys: ["b/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["g/3"], duration: "h" },
            // Battuta 4
            { keys: ["f/3"], duration: "h" }, { keys: ["e/3"], duration: "q" }, { keys: ["d/3"], duration: "q" },
            // Battuta 5
            { keys: ["c/3"], duration: "q" }, { keys: ["d/3"], duration: "q" }, { keys: ["e/3"], duration: "q" }, { keys: ["f/3"], duration: "q" },
            // Battuta 6
            { keys: ["g/2"], duration: "h" }, { keys: ["c/3"], duration: "h" },
            // Battuta 7
            { keys: ["d/3"], duration: "h" }, { keys: ["b/2"], duration: "h" },
            // Battuta 8
            { keys: ["c/3"], duration: "w" },

            // --- PARTE 2: MS ACCOMPAGNAMENTO (RITMO q, 8, 8) (Battute 9-16) ---
            // Battuta 9
            { keys: ["c/3"], duration: "q" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["b/2"], duration: "q" }, { keys: ["d/3"], duration: "8" }, { keys: ["f/3"], duration: "8" },
            // Battuta 10
            { keys: ["g/2"], duration: "q" }, { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" },
            { keys: ["f/2"], duration: "q" }, { keys: ["a/2"], duration: "8" }, { keys: ["c/3"], duration: "8" },
            // Battuta 11
            { keys: ["b/2"], duration: "q" }, { keys: ["d/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["e/3"], duration: "q" }, { keys: ["c/3"], duration: "8" }, { keys: ["g/2"], duration: "8" },
            // Battuta 12
            { keys: ["c/3"], duration: "q" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["d/3"], duration: "q" }, { keys: ["f/3"], duration: "8" }, { keys: ["a/3"], duration: "8" },
            // Battuta 13
            { keys: ["g/2"], duration: "q" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            { keys: ["c/3"], duration: "q" }, { keys: ["e/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            // Battuta 14
            { keys: ["a/2"], duration: "q" }, { keys: ["c/3"], duration: "8" }, { keys: ["e/3"], duration: "8" },
            { keys: ["d/3"], duration: "q" }, { keys: ["f/3"], duration: "8" }, { keys: ["a/3"], duration: "8" },
            // Battuta 15 (Cadenza V7)
            { keys: ["g/2"], duration: "q" }, { keys: ["b/2"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            { keys: ["f/3"], duration: "q" }, { keys: ["d/3"], duration: "8" }, { keys: ["b/2"], duration: "8" },
            // Battuta 16 (Dominante)
            { keys: ["g/2"], duration: "w" },

            // --- PARTE 3: MS MELODIA "ARTICOLATA" (PRINCIPALMENTE MINIME) (Battute 17-23 - Coda) ---
            // Battuta 17 (come Battuta 1)
            { keys: ["c/3"], duration: "q" }, { keys: ["d/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["f/3"], duration: "h" },
            // Battuta 18 (come Battuta 2)
            { keys: ["g/3"], duration: "h" }, { keys: ["a/3"], duration: "q" }, { keys: ["b/3"], duration: "q" },
            // Battuta 19 (come Battuta 3)
            { keys: ["c/4"], duration: "q" }, { keys: ["b/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["g/3"], duration: "h" },
            // Battuta 20 (come Battuta 4)
            { keys: ["f/3"], duration: "h" }, { keys: ["e/3"], duration: "q" }, { keys: ["d/3"], duration: "q" },
            // Battuta 21 (Prepara cadenza V)
            { keys: ["g/2"], duration: "q" }, { keys: ["a/2"], duration: "q" }, { keys: ["b/2"], duration: "q" }, { keys: ["c/3"], duration: "q" },
            // Battuta 22 (Cadenza V)
            { keys: ["d/3"], duration: "q" }, { keys: ["f#/3"], duration: "q" }, { keys: ["g/3"], duration: "h" }, // F# per G maggior
            // Battuta 23 (Finale)
            { keys: ["c/2"], duration: "w" }
        ]
    }
];










// Aggiungi questi esercizi a window.exerciseData
if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

// Definisci la categoria se non esiste già
const categoryKeyEx21_30 = "beyer_op101_intermediate"; // Assicurati che il nome della categoria sia consistente
if (typeof window.exerciseData[categoryKeyEx21_30] === 'undefined') {
  window.exerciseData[categoryKeyEx21_30] = [];
}
window.exerciseData[categoryKeyEx21_30].push(...beyer_op101_exercises_21_30);

// console.log(`window.exerciseData dopo ${categoryKeyEx21_30}.js:`, window.exerciseData);