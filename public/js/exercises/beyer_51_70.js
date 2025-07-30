/**
 * js/exercises/beyer_op101_fase3_studi_51_70_COMPLETE.js
 * Esercizi da 51 a 70 per la Fase 3 - Beyer Op.101 rivisitato - COMPLETO
 * Accompagnamenti più strutturati (Basso Alberti), piccoli studi/brani.
 * MINIMO 16 BATTUTE, NESSUNA PAUSA ESPLICITA se non strettamente necessaria.
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

const beyer_op101_fase3_studi_51_70_complete = [
    // =======================================================================================
    // === ESERCIZI 51-70: BASSO ALBERTI E STUDIETTI ===
    // =======================================================================================

    // Ex. 51 (Già fornito e corretto - Basso Alberti su Do)
    {
        id: "beyer-op101-f3-ex51",
        name: "Fase 3 - Ex. 51: Introduzione Basso Alberti (Do Magg.)",
        purpose: "Introdurre il pattern del Basso Alberti sulla tonica di Do Maggiore.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }
        ]
    },
    // Ex. 52 (Già fornito e corretto - Basso Alberti I-V-IV-I)
    {
        id: "beyer-op101-f3-ex52",
        name: "Fase 3 - Ex. 52: Basso Alberti (Do-Sol-Fa-Do)",
        purpose: "Applicare il Basso Alberti su una progressione armonica I-V-IV-I in Do Magg.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["bb/4"], duration: "h", midiValues: [70] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["g/2"], duration: "8", midiValues: [43] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g/2"], duration: "8", midiValues: [43] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["g/2"], duration: "8", midiValues: [43] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g/2"], duration: "8", midiValues: [43] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["g/2"], duration: "8", midiValues: [43] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g/2"], duration: "8", midiValues: [43] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["g/2"], duration: "8", midiValues: [43] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g/2"], duration: "8", midiValues: [43] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["f/2"], duration: "8", midiValues: [41] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["f/2"], duration: "8", midiValues: [41] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "8", midiValues: [41] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["f/2"], duration: "8", midiValues: [41] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "8", midiValues: [41] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["f/2"], duration: "8", midiValues: [41] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "8", midiValues: [41] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["f/2"], duration: "8", midiValues: [41] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g/3"], duration: "8", midiValues: [55] },{ keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
    // Ex. 53 (Già fornito e corretto - Studio in Sol con Arpeggi MS)
    {
        id: "beyer-op101-f3-ex53",
        name: "Fase 3 - Ex. 53: Studio in Sol Magg. con Arpeggi Spezzati MS",
        purpose: "Sviluppare fluidità negli arpeggi spezzati della MS e melodia cantabile in MD.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "G",
        timeSignature: "3/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["c/4"], duration: "h.", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "h", midiValues: [57] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["g/3"], duration: "h.", midiValues: [55] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["g/3"], duration: "h.", midiValues: [55] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f#/3"], duration: "h", midiValues: [54] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/3"], duration: "h.", midiValues: [55] }
        ],
        notesBass: [
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["c/3"], duration: "h.", midiValues: [48] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/2"], duration: "h.", midiValues: [43] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["d/3"], duration: "h.", midiValues: [50] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["f#/2"], duration: "q", midiValues: [42] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["g/2"], duration: "h.", midiValues: [43] }
        ]
    },

    // Ex. 54: Basso Alberti in Sol Maggiore
    {
        id: "beyer-op101-f3-ex54",
        name: "Fase 3 - Ex. 54: Basso Alberti in Sol Magg.",
        purpose: "Praticare Basso Alberti in Sol Maggiore (I-IV-V-I).",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "G", // Fa#
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [
            // Sez G
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            // Sez C (IV di G)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["e/4"], duration: "w", midiValues: [64] },
            // Sez D (V di G)
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c#/4"], duration: "h", midiValues: [61] }, // C# per D maggiore
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["a/3"], duration: "w", midiValues: [57] },
            // Sez G (ritorno)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, // Scala discendente
            { keys: ["g/3"], duration: "w", midiValues: [55] }
        ],
        notesBass: [ // B.A. G(GDB D), C(CEG E), D(DFA F)
            // G
            { keys: ["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            { keys: ["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            { keys: ["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            { keys: ["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            // C
            { keys: ["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            { keys: ["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            { keys: ["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            { keys: ["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            // D
            { keys: ["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},
            { keys: ["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},
            { keys: ["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},
            { keys: ["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},
            // G
            { keys: ["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            { keys: ["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            { keys: ["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            { keys: ["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"w",midiValues:[43]}
        ]
    },
    // Ex. 55: Basso Alberti in Fa Maggiore
    {
        id: "beyer-op101-f3-ex55",
        name: "Fase 3 - Ex. 55: Basso Alberti in Fa Magg.",
        purpose: "Praticare Basso Alberti in Fa Maggiore (I-IV-V-I).",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "F", // Sib
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [
            // Sez F
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
            { keys: ["bb/3"], duration: "h", midiValues: [58] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["f/3"], duration: "w", midiValues: [53] },
            // Sez Bb (IV di F)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["bb/3"], duration: "h", midiValues: [58] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
            { keys: ["bb/3"], duration: "q", midiValues: [58] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["bb/3"], duration: "q", midiValues: [58] },
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            // Sez C (V di F)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] }, // B naturale per C maggiore
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            // Sez F (ritorno)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
            { keys: ["bb/3"], duration: "h", midiValues: [58] }, { keys: ["f/3"], duration: "h", midiValues: [53] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["f/3"], duration: "w", midiValues: [53] }
        ],
        notesBass: [ // B.A. F(FAC A), Bb(BbDF D), C(CEG E)
            // F
            { keys: ["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            { keys: ["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            { keys: ["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            { keys: ["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            // Bb
            { keys: ["bb/2"],duration:"8",midiValues:[46]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["bb/2"],duration:"8",midiValues:[46]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["f/3"],duration:"8",midiValues:[53]},
            { keys: ["bb/2"],duration:"8",midiValues:[46]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["bb/2"],duration:"8",midiValues:[46]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["f/3"],duration:"8",midiValues:[53]},
            { keys: ["bb/2"],duration:"8",midiValues:[46]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["bb/2"],duration:"8",midiValues:[46]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["f/3"],duration:"8",midiValues:[53]},
            { keys: ["bb/2"],duration:"8",midiValues:[46]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["bb/2"],duration:"8",midiValues:[46]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["f/3"],duration:"8",midiValues:[53]},
            // C
            { keys: ["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            { keys: ["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            { keys: ["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            { keys: ["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            // F
            { keys: ["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            { keys: ["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            { keys: ["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            { keys: ["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"w",midiValues:[41]}
        ]
    },
    // Ex. 56: Studio con accordi ribattuti MS
    {
        id: "beyer-op101-f3-ex56",
        name: "Fase 3 - Ex. 56: Studio con Accordi Ribattuti MS",
        purpose: "Sviluppare l'indipendenza con melodia MD e accordi ribattuti in crome MS.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            // Ripetizione variata per 16 battute
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [ // Accordi di Do, Sol, Fa, Do ribattuti (8 crome per battuta)
            // Do (C-E-G)
            { keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},
            { keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},
            // Sol (G-B-D)
            { keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},
            { keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},
            // Fa (F-A-C)
            { keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},
            { keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},
            // Do (C-E-G)
            { keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},
            { keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"w", midiValues:[48,52,55]}, // Ultimo accordo tenuto
            // Ripetizione per 16 battute
            { keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},
            { keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},
            { keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},
            { keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},{ keys: ["g/2","b/2","d/3"], duration:"8", midiValues:[43,47,50]},
            { keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},
            { keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},{ keys: ["f/2","a/2","c/3"], duration:"8", midiValues:[41,45,48]},
            { keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},
            { keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{ keys: ["c/3","e/3","g/3"], duration:"w", midiValues:[48,52,55]}
        ]
    },
    // Ex. 57: Studio in La minore con G# (già parzialmente fornito come Ex.61, lo adatto a Ex.57)
    {
        id: "beyer-op101-f3-ex57",
        name: "Fase 3 - Ex. 57: Studio in La Minore con G#",
        purpose: "Esplorare la tonalità minore armonica con melodia e accompagnamento arpeggiato.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "Am", // Nessuna alterazione in armatura, G# sarà accidentale
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            { keys: ["a/4"], duration: "w", midiValues: [69] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["e/4"], duration: "w", midiValues: [64] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g#/4"], duration: "h", midiValues: [68] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["a/3"], duration: "w", midiValues: [57] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g#/4"], duration: "h", midiValues: [68] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["a/3"], duration: "w", midiValues: [57] }
        ],
        notesBass: [
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] }, // E maj con G#
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["f/3"], duration: "8", midiValues: [53] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["f/3"], duration: "8", midiValues: [53] },{ keys: ["a/3"], duration: "8", midiValues: [57] }, // Dm
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g#/2"], duration: "8", midiValues: [44] }, // E7
            { keys: ["a/2"], duration: "w", midiValues: [45] },
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["f/3"], duration: "8", midiValues: [53] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["f/3"], duration: "8", midiValues: [53] },{ keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["a/2"], duration: "w", midiValues: [45] }
        ]
    },
    // Ex. 58: Melodia MD con contrappunto semplice MS
    {
        id: "beyer-op101-f3-ex58",
        name: "Fase 3 - Ex. 58: Studio a Due Voci (Contrappunto Semplice)",
        purpose: "Sviluppare l'indipendenza delle mani con due linee melodiche distinte.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [ // Voce superiore
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            // Ripetizione con variazione
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/5"], duration: "h", midiValues: [72] }, // Salto
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [ // Voce inferiore, in parte per moto contrario
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Ripetizione con variazione
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "q", midiValues: [41] },
            { keys: ["e/2"], duration: "h", midiValues: [40] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["g/2"], duration: "w", midiValues: [43] }
        ]
    },
    // Ex. 59: Variazione del Basso Alberti (Basso-Medio-Alto-Medio)
    {
        id: "beyer-op101-f3-ex59",
        name: "Fase 3 - Ex. 59: Variazione Basso Alberti (B-M-A-M)",
        purpose: "Praticare una variazione comune del pattern del Basso Alberti.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [ // Melodia semplice
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["g/4"], duration: "w", midiValues: [67] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["e/5"], duration: "h", midiValues: [76] },
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["f/5"], duration: "h", midiValues: [77] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["c/5"], duration: "w", midiValues: [72] },
            // Ripetizione
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["g/4"], duration: "w", midiValues: [67] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["e/5"], duration: "h", midiValues: [76] },
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["f/5"], duration: "h", midiValues: [77] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["c/5"], duration: "w", midiValues: [72] }
        ],
        notesBass: [ // Pattern: Basso-Medio-Alto-Medio (es. Do: C-E-G-E) per 16 battute
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]}, // Accordo G
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]}, // Accordo F
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"w",midiValues:[48]},
             // Ripetizione
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"w",midiValues:[48]}
        ]
    },
    // Ex. 60: Piccolo "Moderato Cantabile" in Do
    {
        id: "beyer-op101-f3-ex60",
        name: "Fase 3 - Ex. 60: Moderato Cantabile in Do",
        purpose: "Sviluppare espressività con melodia cantabile e accompagnamento armonico.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["d/4"], duration: "h.", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["c/5"], duration: "w", midiValues: [72] },
            // Sezione B
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["e/5"], duration: "h", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "h.", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "w", midiValues: [67] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [ // Accordi tenuti o arpeggiati lentamente
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48,55] }, { keys: ["e/3", "c/4"], duration: "h", midiValues: [52,60] }, // C e C/E
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41,45,48] }, { keys: ["d/3", "f/3", "a/3"], duration: "h", midiValues: [50,53,57] }, // F e Dm7/F
            { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43,47,50] }, // G
            { keys: ["e/3", "g/3", "c/4"], duration: "h", midiValues: [52,55,60] }, { keys: ["d/3", "f/3", "a/3"], duration: "h", midiValues: [50,53,57] }, // C/E e Dm
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48,52,55] }, // C
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41,45,48] }, // F
            { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43,47,50] }, // G
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48,52,55] }, // C
            // Sezione B
            { keys: ["g/2", "d/3", "f/3"], duration: "h", midiValues: [43,50,53] }, { keys: ["b/2", "d/3", "g/3"], duration: "h", midiValues: [47,50,55] }, // G7 e G
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48,52,55] }, { keys: ["a/2", "c/3", "e/3"], duration: "h", midiValues: [45,48,52] }, // C e Am/C
            { keys: ["d/3", "f/3", "a/3"], duration: "w", midiValues: [50,53,57] }, // Dm
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "h", midiValues: [43,47,50,53] }, { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48,52,55] }, // G7 e C
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41,45,48] }, // F
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48,52,55] }, { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43,47,50] }, // C e G
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48,52,55] }, // C
            { keys: ["c/2", "c/3"], duration: "w", midiValues: [36,48] } // C ottava bassa
        ]
    },
    // Ex. 61 (adattato dall'originale, era Ex.57)
    {
        id: "beyer-op101-f3-ex61",
        name: "Fase 3 - Ex. 61: Studio in La Minore",
        purpose: "Esplorare la tonalità minore con melodia e accompagnamento arpeggiato.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "Am",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            { keys: ["a/4"], duration: "w", midiValues: [69] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["e/4"], duration: "w", midiValues: [64] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g#/4"], duration: "h", midiValues: [68] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["a/3"], duration: "w", midiValues: [57] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g#/4"], duration: "h", midiValues: [68] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["a/3"], duration: "w", midiValues: [57] }
        ],
        notesBass: [
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["f/3"], duration: "8", midiValues: [53] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["f/3"], duration: "8", midiValues: [53] },{ keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["a/2"], duration: "w", midiValues: [45] },
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["f/3"], duration: "8", midiValues: [53] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["a/3"], duration: "8", midiValues: [57] },{ keys: ["f/3"], duration: "8", midiValues: [53] },{ keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["a/2"], duration: "8", midiValues: [45] },{ keys: ["e/3"], duration: "8", midiValues: [52] },{ keys: ["c/3"], duration: "8", midiValues: [48] },{ keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },{ keys: ["e/2"], duration: "8", midiValues: [40] },{ keys: ["b/2"], duration: "8", midiValues: [47] },{ keys: ["d/3"], duration: "8", midiValues: [50] },{ keys: ["g#/2"], duration: "8", midiValues: [44] },
            { keys: ["a/2"], duration: "w", midiValues: [45] }
        ]
    },
   {
        id: "beyer-op101-f3-ex62",
        name: "Fase 3 - Ex. 62: Andante con Terzine MS (Sol Magg.)",
        purpose: "Sviluppare fluidità nelle terzine arpeggiate della MS e legato espressivo MD.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "G", // Fa#
        timeSignature: "4/4", // Ogni tempo è una terzina
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f#/4"], duration: "h.", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Frase 2
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] }, // Naturale
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            // Frase 3 (ripresa variata)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["a/4"], duration: "h", midiValues: [69] }, // Salto
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "h.", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Frase 4 (conclusione)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["g/3"], duration: "w", midiValues: [55] }
        ],
        notesBass: [ // Terzine arpeggiate (es. G: G-B-D, C: C-E-G)
            // G
            { keys: ["g/2"], duration: "8", midiValues: [43], triplet: "start" }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "end" },
            { keys: ["g/2"], duration: "8", midiValues: [43], triplet: "start" }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "end" },
            { keys: ["g/2"], duration: "8", midiValues: [43], triplet: "start" }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "end" },
            { keys: ["g/2"], duration: "8", midiValues: [43], triplet: "start" }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "end" },
            // C
            { keys: ["c/3"], duration: "8", midiValues: [48], triplet: "start" }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55], triplet: "end" },
            { keys: ["c/3"], duration: "8", midiValues: [48], triplet: "start" }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55], triplet: "end" },
            { keys: ["c/3"], duration: "8", midiValues: [48], triplet: "start" }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55], triplet: "end" },
            { keys: ["c/3"], duration: "8", midiValues: [48], triplet: "start" }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55], triplet: "end" },
            // D
            { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "start" }, { keys: ["f#/3"], duration: "8", midiValues: [54] }, { keys: ["a/3"], duration: "8", midiValues: [57], triplet: "end" },
            { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "start" }, { keys: ["f#/3"], duration: "8", midiValues: [54] }, { keys: ["a/3"], duration: "8", midiValues: [57], triplet: "end" },
            { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "start" }, { keys: ["f#/3"], duration: "8", midiValues: [54] }, { keys: ["a/3"], duration: "8", midiValues: [57], triplet: "end" },
            { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "start" }, { keys: ["f#/3"], duration: "8", midiValues: [54] }, { keys: ["a/3"], duration: "8", midiValues: [57], triplet: "end" },
            // G
            { keys: ["g/2"], duration: "8", midiValues: [43], triplet: "start" }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "end" },
            { keys: ["g/2"], duration: "8", midiValues: [43], triplet: "start" }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "end" },
            { keys: ["g/2"], duration: "8", midiValues: [43], triplet: "start" }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "end" },
            { keys: ["g/2"], duration: "8", midiValues: [43], triplet: "start" }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50], triplet: "end" }
        ]
    },
    // Ex. 63: Studio Allegretto in Fa Magg. con Basso Alberti variato e passaggi scalistici MD
    {
        id: "beyer-op101-f3-ex63",
        name: "Fase 3 - Ex. 63: Allegretto Scalistico (Fa Magg.)",
        purpose: "Combinare Basso Alberti variato (B-A-M-A) con agilità scalistica MD.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "F", // Sib
        timeSignature: "2/4", // Tempo vivace
        repetitions: 1, // 16 battute (o 32 se ripetuto)
        notesTreble: [
            // Frase 1
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["bb/4"], duration: "8", midiValues: [70] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // E naturale
            // Frase 2
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["bb/3"], duration: "8", midiValues: [58] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // E naturale
            { keys: ["f/3"], duration: "h", midiValues: [53] },
            // Ripetizione variata per 16 battute
             { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["bb/3"], duration: "q", midiValues: [58] },
            { keys: ["f/3"], duration: "h", midiValues: [53] }
        ],
        notesBass: [ // B.A. Variato (Basso-Alto-Medio-Alto) es. F: F-C-A-C
            // F
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // C7
            { keys: ["c/2"], duration: "8", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, // E naturale
            { keys: ["c/2"], duration: "8", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // F
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Bb
            { keys: ["bb/1"], duration: "8", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["d/2"], duration: "8", midiValues: [38] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["bb/1"], duration: "8", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["d/2"], duration: "8", midiValues: [38] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            // Ripetizione per 16 battute
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/2"], duration: "8", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["c/2"], duration: "8", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["bb/1"], duration: "8", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["d/2"], duration: "8", midiValues: [38] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["bb/1"], duration: "8", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["d/2"], duration: "8", midiValues: [38] }, { keys: ["f/2"], duration: "8", midiValues: [41] }
        ]
    },
    // Ex. 64: Notturno Semplice in Do Magg.
    {
        id: "beyer-op101-f3-ex64",
        name: "Fase 3 - Ex. 64: Notturno Semplice (Do Magg.)",
        purpose: "Sviluppare legato espressivo MD e controllo degli accordi ampi MS.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // Lento
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "h.", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            // Frase 2
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f#/4"], duration: "h", midiValues: [66] }, // F# per G7
            { keys: ["g/4"], duration: "h.", midiValues: [67] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "w", midiValues: [64] },
            // Frase 3 (ripresa variata)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "h.", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "w", midiValues: [64] },
            // Frase 4 (conclusione)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["g/3"], duration: "h", midiValues: [55] }, // Salto
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [ // Accordi ampi e tenuti
            { keys: ["c/2", "g/2", "c/3"], duration: "w", midiValues: [36,43,48] }, // C
            { keys: ["f/2", "c/3", "f/3"], duration: "w", midiValues: [41,48,53] }, // F/C
            { keys: ["g/2", "d/3", "g/3"], duration: "w", midiValues: [43,50,55] }, // G
            { keys: ["c/2", "g/2", "c/3"], duration: "w", midiValues: [36,43,48] }, // C
            { keys: ["a/2", "e/3", "a/3"], duration: "w", midiValues: [45,52,57] }, // Am
            { keys: ["d/2", "a/2", "d/3"], duration: "w", midiValues: [38,45,50] }, // Dm
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "w", midiValues: [43,47,50,53] }, // G7
            { keys: ["c/2", "e/2", "g/2", "c/3"], duration: "w", midiValues: [36,40,43,48] }, // C
            { keys: ["c/2", "g/2", "c/3"], duration: "w", midiValues: [36,43,48] },
            { keys: ["f/2", "c/3", "f/3"], duration: "w", midiValues: [41,48,53] },
            { keys: ["g/2", "d/3", "g/3"], duration: "w", midiValues: [43,50,55] },
            { keys: ["c/2", "g/2", "c/3"], duration: "w", midiValues: [36,43,48] },
            { keys: ["a/2", "e/3", "a/3"], duration: "w", midiValues: [45,52,57] },
            { keys: ["d/2", "a/2", "d/3"], duration: "w", midiValues: [38,45,50] },
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "w", midiValues: [43,47,50,53] },
            { keys: ["c/2", "e/2", "g/2", "c/3"], duration: "w", midiValues: [36,40,43,48] }
        ]
    },
    // Ex. 65: Piccolo Scherzo in Sol Magg.
    {
        id: "beyer-op101-f3-ex65",
        name: "Fase 3 - Ex. 65: Scherzo Semplice (Sol Magg.)",
        purpose: "Lavorare su staccato e legato alternati, in tempo vivace.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "G", // Fa#
        timeSignature: "3/4", // Vivace
        repetitions: 1, // 24 battute
        notesTreble: [
            // Sez A
            { keys: ["d/4"], duration: "q", staccato: true, midiValues: [62] }, { keys: ["g/4"], duration: "q", staccato: true, midiValues: [67] }, { keys: ["b/4"], duration: "q", staccato: true, midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, // Legato
            { keys: ["g/4"], duration: "q", staccato: true, midiValues: [67] }, { keys: ["d/4"], duration: "q", staccato: true, midiValues: [62] }, { keys: ["b/3"], duration: "q", staccato: true, midiValues: [59] },
            { keys: ["c/4"], duration: "h.", midiValues: [60] }, // Legato
            { keys: ["e/4"], duration: "q", staccato: true, midiValues: [64] }, { keys: ["c/4"], duration: "q", staccato: true, midiValues: [60] }, { keys: ["g/3"], duration: "q", staccato: true, midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "q", staccato: true, midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["g/3"], duration: "h.", midiValues: [55] },
            // Sez B (Trio-like)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // Più legato
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "h.", midiValues: [57] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "h.", midiValues: [62] },
            // Ripresa Sez A'
            { keys: ["d/4"], duration: "q", staccato: true, midiValues: [62] }, { keys: ["g/4"], duration: "q", staccato: true, midiValues: [67] }, { keys: ["b/4"], duration: "q", staccato: true, midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["g/4"], duration: "q", staccato: true, midiValues: [67] }, { keys: ["d/4"], duration: "q", staccato: true, midiValues: [62] }, { keys: ["b/3"], duration: "q", staccato: true, midiValues: [59] },
            { keys: ["c/4"], duration: "h.", midiValues: [60] },
            { keys: ["e/4"], duration: "q", staccato: true, midiValues: [64] }, { keys: ["c/4"], duration: "q", staccato: true, midiValues: [60] }, { keys: ["g/3"], duration: "q", staccato: true, midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "q", staccato: true, midiValues: [62] }, { keys: ["g/4"], duration: "q", staccato: true, midiValues: [67] }, { keys: ["g/3"], duration: "q", staccato: true, midiValues: [55] },
            { keys: ["g/3"], duration: "h.", midiValues: [55] }
        ],
        notesBass: [ // Accordi staccati sul primo tempo
            { keys: ["g/2","d/3"], duration: "q", staccato: true, midiValues: [43,50] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["c/3","g/3"], duration: "q", staccato: true, midiValues: [48,55] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["g/2","d/3"], duration: "q", staccato: true, midiValues: [43,50] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["c/3","e/3"], duration: "q", staccato: true, midiValues: [48,52] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["g/2","d/3"], duration: "q", staccato: true, midiValues: [43,50] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["c/3","g/3"], duration: "q", staccato: true, midiValues: [48,55] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["d/2","a/2"], duration: "q", staccato: true, midiValues: [38,45] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["g/2","b/2"], duration: "q", staccato: true, midiValues: [43,47] }, { keys: ["b/4"], type:"rest", duration: "h"},
            // Sez B (più tenuto)
            { keys: ["c/3","e/3","g/3"], duration: "h.", midiValues: [48,52,55] },
            { keys: ["g/2","d/3","b/2"], duration: "h.", midiValues: [43,50,47] },
            { keys: ["e/2","g/2","c/3"], duration: "h.", midiValues: [40,43,48] }, // Em
            { keys: ["a/2","c/3","e/3"], duration: "h.", midiValues: [45,48,52] }, // Am
            { keys: ["d/2","f#/2","a/2"], duration: "h.", midiValues: [38,42,45] }, // D
            { keys: ["g/2","b/2","d/3"], duration: "h.", midiValues: [43,47,50] }, // G
            { keys: ["c/3","e/3","g/3"], duration: "h.", midiValues: [48,52,55] },
            { keys: ["d/2","f#/2","a/2"], duration: "h.", midiValues: [38,42,45] }, // D
            // Ripresa Sez A'
            { keys: ["g/2","d/3"], duration: "q", staccato: true, midiValues: [43,50] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["c/3","g/3"], duration: "q", staccato: true, midiValues: [48,55] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["g/2","d/3"], duration: "q", staccato: true, midiValues: [43,50] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["c/3","e/3"], duration: "q", staccato: true, midiValues: [48,52] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["g/2","d/3"], duration: "q", staccato: true, midiValues: [43,50] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["c/3","g/3"], duration: "q", staccato: true, midiValues: [48,55] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["d/2","a/2"], duration: "q", staccato: true, midiValues: [38,45] }, { keys: ["b/4"], type:"rest", duration: "h"},
            { keys: ["g/2","b/2"], duration: "q", staccato: true, midiValues: [43,47] }, { keys: ["g/2"], duration: "h.", midiValues: [43]} // Accordo finale tenuto
        ]
    },
    // Ex. 66: Studio in Re Magg. con arpeggi incrociati
    {
        id: "beyer-op101-f3-ex66",
        name: "Fase 3 - Ex. 66: Arpeggi Incrociati (Re Magg.)",
        purpose: "Coordinare le mani con arpeggi che si 'passano' le note.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "D", // Fa#, Do#
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [ // MD prende le note alte dell'arpeggio
            // D
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // G
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // A
            { keys: ["c#/5"], duration: "q", midiValues: [73] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c#/5"], duration: "q", midiValues: [73] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["c#/5"], duration: "q", midiValues: [73] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // D
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Ripetizione
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c#/5"], duration: "q", midiValues: [73] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c#/5"], duration: "q", midiValues: [73] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["c#/5"], duration: "q", midiValues: [73] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["d/4"], duration: "w", midiValues: [62] }
        ],
        notesBass: [ // MS prende le note basse e centrali dell'arpeggio
            // D
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            // G
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // A
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c#/3"], duration: "q", midiValues: [49] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c#/3"], duration: "q", midiValues: [49] },
            // D
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["f#/3"], duration: "h", midiValues: [54] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Ripetizione
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c#/3"], duration: "q", midiValues: [49] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c#/3"], duration: "q", midiValues: [49] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["d/2"], duration: "w", midiValues: [38] }
        ]
    },
    // Ex. 67: Barcarola Semplice in Fa Magg.
    {
        id: "beyer-op101-f3-ex67",
        name: "Fase 3 - Ex. 67: Barcarola Semplice (Fa Magg.)",
        purpose: "Lavorare sul ritmo cullante 6/8 e melodia espressiva.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "F", // Sib
        timeSignature: "6/8",
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            { keys: ["c/4"], duration: "qd", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "qd", midiValues: [67] }, { keys: ["f/4"], duration: "qd", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "qd", midiValues: [60] },
            { keys: ["a/3"], duration: "qd.", midiValues: [57] }, // Minima puntata in 6/8
            // Frase 2
            { keys: ["f/4"], duration: "qd", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["bb/4"], duration: "8", midiValues: [70] },
            { keys: ["c/5"], duration: "qd", midiValues: [72] }, { keys: ["bb/4"], duration: "qd", midiValues: [70] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "qd", midiValues: [65] },
            { keys: ["d/4"], duration: "qd.", midiValues: [62] },
             // Frase 3
            { keys: ["c/4"], duration: "qd", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "qd", midiValues: [67] }, { keys: ["f/4"], duration: "qd", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "qd", midiValues: [60] },
            { keys: ["a/3"], duration: "qd.", midiValues: [57] },
            // Frase 4
            { keys: ["f/4"], duration: "qd", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["bb/4"], duration: "8", midiValues: [70] },
            { keys: ["c/5"], duration: "qd", midiValues: [72] }, { keys: ["bb/4"], duration: "qd", midiValues: [70] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "qd", midiValues: [65] },
            { keys: ["f/3"], duration: "qd.", midiValues: [53] }
        ],
        notesBass: [ // Pattern ritmico cullante (es. Semiminima - Croma)
            // F
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // C7
            { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // Bb
            { keys: ["bb/1"], duration: "q", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["bb/1"], duration: "q", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["bb/1"], duration: "q", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["bb/1"], duration: "q", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            // F
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Ripetizione
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["bb/1"], duration: "q", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["bb/1"], duration: "q", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["bb/1"], duration: "q", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["bb/1"], duration: "q", midiValues: [34] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/2"], duration: "qd.", midiValues: [41] }
        ]
    },
    // Ex. 68: Studio con progressioni cromatiche semplici MD
    {
        id: "beyer-op101-f3-ex68",
        name: "Fase 3 - Ex. 68: Studio Cromatico Semplice MD",
        purpose: "Introdurre brevi passaggi cromatici nella melodia MD con accompagnamento stabile.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Cromatismo E-G
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f#/4"], duration: "h", midiValues: [66] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // Cromatismo E-D
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            // Frase 2
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, // Cromatismo A-F#
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, // Cromatismo A-B
            { keys: ["c/5"], duration: "w", midiValues: [72] },
            // Ripetizione
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f#/4"], duration: "h", midiValues: [66] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["c/5"], duration: "w", midiValues: [72] }
        ],
        notesBass: [ // Accordi semplici e stabili
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48,55] }, { keys: ["c/3", "g/3"], duration: "h", midiValues: [48,55] }, // C
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43,50] }, { keys: ["g/2", "d/3"], duration: "h", midiValues: [43,50] }, // G
            { keys: ["f/2", "c/3"], duration: "h", midiValues: [41,48] }, { keys: ["f/2", "c/3"], duration: "h", midiValues: [41,48] }, // F
            { keys: ["g/2", "c/3"], duration: "w", midiValues: [43,48] }, // Gsus4 resolving to C
            { keys: ["d/3", "a/3"], duration: "h", midiValues: [50,57] }, { keys: ["d/3", "a/3"], duration: "h", midiValues: [50,57] }, // Dm
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43,50] }, { keys: ["g/2", "d/3"], duration: "h", midiValues: [43,50] }, // G
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48,55] }, { keys: ["c/3", "g/3"], duration: "h", midiValues: [48,55] }, // C
            { keys: ["c/3", "g/3"], duration: "w", midiValues: [48,55] },
            // Ripetizione
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48,55] }, { keys: ["c/3", "g/3"], duration: "h", midiValues: [48,55] },
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43,50] }, { keys: ["g/2", "d/3"], duration: "h", midiValues: [43,50] },
            { keys: ["f/2", "c/3"], duration: "h", midiValues: [41,48] }, { keys: ["f/2", "c/3"], duration: "h", midiValues: [41,48] },
            { keys: ["g/2", "c/3"], duration: "w", midiValues: [43,48] },
            { keys: ["d/3", "a/3"], duration: "h", midiValues: [50,57] }, { keys: ["d/3", "a/3"], duration: "h", midiValues: [50,57] },
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43,50] }, { keys: ["g/2", "d/3"], duration: "h", midiValues: [43,50] },
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48,55] }, { keys: ["c/3", "g/3"], duration: "h", midiValues: [48,55] },
            { keys: ["c/2", "c/3"], duration: "w", midiValues: [36,48] } // C ottava
        ]
    },
{
        id: "beyer-op101-f3-ex69",
        name: "Fase 3 - Ex. 69: Variazioni su un Tema Semplice (Do Magg.)",
        purpose: "Applicare diverse tecniche di accompagnamento (B.Alberti, arpeggi, accordi) a un tema.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 32 battute totali (Tema + 3 Variazioni)
        notesTreble: [
            // === TEMA (8 battute) ===
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] }, // B1
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // B2
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // B3
            { keys: ["d/4"], duration: "h.", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // B4
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["b/4"], duration: "h", midiValues: [71] }, // B5
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] }, // B6
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // B7
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["c/4"], duration: "h", midiValues: [60] }, // B8

            // === VARIAZIONE 1: Basso Alberti (8 battute) ===
            // Melodia originale o leggermente ornata
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // B9
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // B10
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, // B11 (scaletta)
            { keys: ["e/4"], duration: "h.", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // B12
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // B13
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // B14
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // B15
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] }, // B16

            // === VARIAZIONE 2: Accompagnamento Arpeggiato Ampio (8 battute) ===
            // Melodia con leggere variazioni ritmiche
            { keys: ["g/4"], duration: "q.", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] }, // B17
            { keys: ["d/4"], duration: "q.", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "h", midiValues: [59] }, // B18
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // B19
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // B20
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // B21
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] }, // B22
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, // B23
            { keys: ["c/4"], duration: "w", midiValues: [60] }, // B24

            // === VARIAZIONE 3: Accordi e Movimento Contrappuntistico (8 battute) ===
            // Melodia simile al tema
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] }, // B25
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // B26
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // B27
            { keys: ["d/4"], duration: "h.", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // B28
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["b/4"], duration: "h", midiValues: [71] }, // B29
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] }, // B30
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // B31
            { keys: ["c/4"], duration: "w", midiValues: [60] }  // B32 (finale)
        ],
        notesBass: [
            // === ACCOMPAGNAMENTO TEMA (Accordi semplici) ===
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48,52,55] }, { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48,52,55] }, // B1
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43,47,50] }, { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43,47,50] }, // B2
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41,45,48] }, { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48,52,55] }, // B3
            { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43,47,50] }, // B4
            { keys: ["a/2", "c/3", "e/3"], duration: "h", midiValues: [45,48,52] }, { keys: ["a/2", "c/3", "e/3"], duration: "h", midiValues: [45,48,52] }, // B5 Am
            { keys: ["d/3", "f/3", "a/3"], duration: "h", midiValues: [50,53,57] }, { keys: ["d/3", "f/3", "a/3"], duration: "h", midiValues: [50,53,57] }, // B6 Dm
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43,47,50] }, { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48,52,55] }, // B7 G C
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48,52,55] }, // B8 C

            // === ACCOMPAGNAMENTO VARIAZIONE 1 (Basso Alberti: C-G-E-G) ===
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]}, //B9
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]}, //B10
            { keys: ["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]}, //B11
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]}, //B12
            { keys: ["a/2"], duration:"8",midiValues:[45]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["e/3"], duration:"8",midiValues:[52]}, //B13 Am
            { keys: ["d/3"], duration:"8",midiValues:[50]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["f/3"], duration:"8",midiValues:[53]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["f/3"], duration:"8",midiValues:[53]},{keys:["a/3"], duration:"8",midiValues:[57]}, //B14 Dm
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]}, //B15 G C
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/3"], duration:"w", midiValues:[48]}, //B16 C

            // === ACCOMPAGNAMENTO VARIAZIONE 2 (Arpeggi Ampi: C-G-c-e) ===
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/4"], duration:"8",midiValues:[60]},{keys:["e/4"], duration:"8",midiValues:[64]},{keys:["c/4"], duration:"8",midiValues:[60]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["c/3"], duration:"8",midiValues:[48]}, //B17 C
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["b/3"], duration:"8",midiValues:[59]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["g/2"], duration:"8",midiValues:[43]}, //B18 G
            { keys: ["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["f/3"], duration:"8",midiValues:[53]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["f/3"], duration:"8",midiValues:[53]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["f/2"], duration:"8",midiValues:[41]}, //B19 F
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/4"], duration:"8",midiValues:[60]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/2"], duration:"8",midiValues:[43]}, //B20 C G
            { keys: ["a/2"], duration:"8",midiValues:[45]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["c/4"], duration:"8",midiValues:[60]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]}, //B21 Am
            { keys: ["d/3"], duration:"8",midiValues:[50]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["d/4"], duration:"8",midiValues:[62]},{keys:["f/4"], duration:"8",midiValues:[65]},{keys:["d/4"], duration:"8",midiValues:[62]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["f/3"], duration:"8",midiValues:[53]},{keys:["d/3"], duration:"8",midiValues:[50]}, //B22 Dm
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["b/3"], duration:"8",midiValues:[59]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["g/2"], duration:"8",midiValues:[43]}, //B23 G
            { keys: ["c/3"], duration:"w", midiValues:[48] }, //B24 C

            // === ACCOMPAGNAMENTO VARIAZIONE 3 (Accordi e Contrappunto) ===
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, //B25 Accordo C e nota C
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, //B26 Accordo G e nota G
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, //B27 Accordo F e nota F
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] }, //B28 C, G (movimento)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, //B29 Am, G
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, //B30 Dm, C
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["c/3"], duration: "h", midiValues: [48] }, //B31 Bdim (implicito), C
            { keys: ["c/2", "g/2", "c/3"], duration: "w", midiValues: [36,43,48] }  //B32 C Finale
        ]
    },
    {  
        id: "beyer-op101-f3-ex70",
        name: "Fase 3 - Ex. 70: Studio Moderato in Do Maggiore",
        purpose: "Consolidare Basso Alberti, melodia fraseggiata, e modulazioni semplici.",
        category: "beyer_op101_fase3_studi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "h.", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["b/4"], duration: "h", midiValues: [71], options:{keySignature:"G"} }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f#/4"], duration: "h", midiValues: [66] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f#/4"], duration: "h.", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["g/4"], duration: "h", midiValues: [67], options:{keySignature:"C"} }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "h.", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "h", midiValues: [57] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},
            { keys: ["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]},
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},
            { keys: ["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]},
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},
            { keys: ["c/3"], duration:"w",midiValues:[48]},
            { keys: ["g/2"], duration:"8",midiValues:[43],options:{keySignature:"G"}},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},
            { keys: ["d/3"], duration:"8",midiValues:[50]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["f#/3"], duration:"8",midiValues:[54]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["f#/3"], duration:"8",midiValues:[54]},{keys:["a/3"], duration:"8",midiValues:[57]},
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["a/3"], duration:"8",midiValues:[57]},{keys:["f#/3"], duration:"8",midiValues:[54]},{keys:["a/3"], duration:"8",midiValues:[57]},
            { keys: ["g/2"], duration:"w",midiValues:[43]},
            { keys: ["c/3"], duration:"8",midiValues:[48],options:{keySignature:"C"}},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},
            { keys: ["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]},
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},
            { keys: ["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["f/2"], duration:"8",midiValues:[41]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["a/2"], duration:"8",midiValues:[45]},{keys:["c/3"], duration:"8",midiValues:[48]},
            { keys: ["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["g/2"], duration:"8",midiValues:[43]},{keys:["d/3"], duration:"8",midiValues:[50]},{keys:["b/2"], duration:"8",midiValues:[47]},{keys:["d/3"], duration:"8",midiValues:[50]},
            { keys: ["c/3"], duration:"8",midiValues:[48]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/4"], duration:"8",midiValues:[60]},{keys:["c/3"], duration:"8",midiValues:[48]},{keys:["e/3"], duration:"8",midiValues:[52]},{keys:["g/3"], duration:"8",midiValues:[55]},{keys:["c/4"], duration:"8",midiValues:[60]},
            { keys: ["c/3"], duration:"w",midiValues:[48]}
        ]
    }
];
// Aggiungi questi esercizi a window.exerciseData
if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

if (typeof window.exerciseData.beyer_op101_fase3_studi === 'undefined') {
  window.exerciseData.beyer_op101_fase3_studi = [];
}
// window.exerciseData.beyer_op101_fase3_studi = []; // Decommenta se necessario per svuotare prima
window.exerciseData.beyer_op101_fase3_studi.push(...beyer_op101_fase3_studi_51_70_complete);

// console.log("window.exerciseData dopo beyer_op101_fase3_studi_51_70_COMPLETE.js:", window.exerciseData.beyer_op101_fase3_studi);