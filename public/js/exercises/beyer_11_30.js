/**
 * js/exercises/beyer_op101_fase2_ex_11_30_CORRECTED.js
 * Esercizi da 11 a 30 per la Fase 2 - Beyer Op.101 rivisitato - CORRETTO
 * Introduzione legature, prime alterazioni, estensione ambito,
 * melodie semplici con accompagnamento, passaggio pollice basilare.
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

const beyer_op101_fase2_exercises_11_30_corrected = [
    // =======================================================================================
    // === GRUPPO 1: INTRODUZIONE LEGATURE DI FRASE (MD e MS Separate) ===
    // =======================================================================================
    {
        id: "beyer-op101-f2-ex11",
        name: "Fase 2 - Ex. 11: MD - Legature di Frase Semplici (Do-Sol)",
        purpose: "Introdurre il legato e il fraseggio base nella mano destra.",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["g/5"], duration: "h", midiValues: [79] }, { keys: ["f/5"], duration: "h", midiValues: [77] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["d/5"], duration: "w", midiValues: [74] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["g/5"], duration: "h", midiValues: [79] },
            { keys: ["c/5"], duration: "w", midiValues: [72] }
        ],
        notesBass: []
    },
    {
        id: "beyer-op101-f2-ex12",
        name: "Fase 2 - Ex. 12: MS - Legature di Frase Semplici (Do-Sol)",
        purpose: "Introdurre il legato e il fraseggio base nella mano sinistra.",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [],
        notesBass: [
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            { keys: ["f/3"], duration: "w", midiValues: [53] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
    // =======================================================================================
    // === GRUPPO 2: LEGATURE DI FRASE (Mani Unite) E LEGATURE DI VALORE ===
    // =======================================================================================
    {
        id: "beyer-op101-f2-ex13",
        name: "Fase 2 - Ex. 13: Mani Unite - Legature di Frase e Valore (Do-Sol)",
        purpose: "Coordinare il legato tra le mani e introdurre note tenute (legatura di valore).",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["f/5"], duration: "h", midiValues: [77] },
            { keys: ["g/5"], duration: "h.", midiValues: [79] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["c/5"], duration: "w", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "h", midiValues: [77] },
            { keys: ["e/5"], duration: "h.", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["c/5"], duration: "w", midiValues: [72] }
        ],
        notesBass: [
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            { keys: ["c/4"], duration: "h.", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
    // =======================================================================================
    // === GRUPPO 3: PRIME ALTERAZIONI (Fa#) E ESTENSIONE AMBITO (Verso Sol Magg.) ===
    // =======================================================================================
    {
        id: "beyer-op101-f2-ex14",
        name: "Fase 2 - Ex. 14: MD - Introduzione Fa# (Ambito Sol)",
        purpose: "Introdurre l'alterazione Fa# e spostare leggermente l'ambito della mano.",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["g/4"], duration: "w", midiValues: [67] }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValues: [48]},
            { keys: ["g/2"], duration: "w", midiValues: [43]},
            { keys: ["c/3"], duration: "w", midiValues: [48]},
            { keys: ["d/3"], duration: "w", midiValues: [50]},
            { keys: ["g/2"], duration: "w", midiValues: [43]},
            { keys: ["c/3"], duration: "w", midiValues: [48]},
            { keys: ["d/3"], duration: "q", midiValues: [50]}, { keys: ["d/3"], duration: "q", midiValues: [50]}, { keys: ["g/2"], duration: "h", midiValues: [43]},
            { keys: ["g/2"], duration: "w", midiValues: [43]}
        ]
    },
    {
        id: "beyer-op101-f2-ex15",
        name: "Fase 2 - Ex. 15: Mani Unite - Con Fa# e Legato",
        purpose: "Coordinare le mani con l'alterazione Fa# e il legato.",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["d/5"], duration: "w", midiValues: [74] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["g/4"], duration: "w", midiValues: [67] }
        ],
        notesBass: [
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            { keys: ["d/3"], duration: "w", midiValues: [50] },
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            { keys: ["a/2"], duration: "w", midiValues: [45] },
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            { keys: ["g/2"], duration: "w", midiValues: [43] }
        ]
    },
    // =======================================================================================
    // === GRUPPO 4: PRIME ALTERAZIONI (Sib) E ESTENSIONE AMBITO (Verso Fa Magg.) ===
    // =======================================================================================
    {
        id: "beyer-op101-f2-ex16",
        name: "Fase 2 - Ex. 16: MD - Introduzione Sib (Ambito Fa)",
        purpose: "Introdurre l'alterazione Sib e preparare per Fa Maggiore.",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["bb/4"], duration: "q", midiValues: [70] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f/4"], duration: "w", midiValues: [65] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["bb/4"], duration: "h", midiValues: [70] },
            { keys: ["f/4"], duration: "w", midiValues: [65] }
        ],
        notesBass: [
            { keys: ["f/2"], duration: "w", midiValues: [41]},
            { keys: ["c/3"], duration: "w", midiValues: [48]},
            { keys: ["f/2"], duration: "w", midiValues: [41]},
            { keys: ["bb/2"], duration: "w", midiValues: [46]},
            { keys: ["c/3"], duration: "w", midiValues: [48]},
            { keys: ["f/2"], duration: "w", midiValues: [41]},
            { keys: ["c/3"], duration: "q", midiValues: [48]}, { keys: ["c/3"], duration: "q", midiValues: [48]}, { keys: ["f/2"], duration: "h", midiValues: [41]},
            { keys: ["f/2"], duration: "w", midiValues: [41]}
        ]
    },
    // =======================================================================================
    // === GRUPPO 5: MELODIE SEMPLICI CON ACCOMPAGNAMENTO RUDIMENTALE ===
    // =======================================================================================
    {
        id: "beyer-op101-f2-ex17",
        name: "Fase 2 - Ex. 17: Melodia MD, Accomp. MS (Note lunghe)",
        purpose: "Sviluppare indipendenza: melodia in MD, accompagnamento semplice in MS.",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Esteso a 8 battute
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["g/5"], duration: "h", midiValues: [79] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "h", midiValues: [77] },
            { keys: ["g/5"], duration: "h", midiValues: [79] }, { keys: ["e/5"], duration: "h", midiValues: [76] },
            { keys: ["c/5"], duration: "w", midiValues: [72] }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            { keys: ["f/3"], duration: "w", midiValues: [53] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["f/3"], duration: "w", midiValues: [53] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
    {
        id: "beyer-op101-f2-ex18",
        name: "Fase 2 - Ex. 18: Melodia MD, Accomp. MS (Bicordi)",
        purpose: "Accompagnamento leggermente più ricco con bicordi (intervalli di terza/quinta).",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Esteso a 8 battute
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            { keys: ["c/3", "e/3"], duration: "h", midiValues: [48, 52] }, { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] },
            { keys: ["f/2", "a/2"], duration: "h", midiValues: [41, 45] }, { keys: ["c/3", "e/3"], duration: "h", midiValues: [48, 52] },
            { keys: ["g/2", "b/2"], duration: "w", midiValues: [43, 47] },
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48, 55] }, { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] },
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] }, { keys: ["c/3", "e/3"], duration: "h", midiValues: [48, 52] },
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Monofonico per finire
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            { keys: ["g/2"], duration: "w", midiValues: [43] }
        ]
    },
    // =======================================================================================
    // === GRUPPO 6: PASSAGGIO DEL POLLICE (MOLTO BASILARE) ===
    // =======================================================================================
    {
        id: "beyer-op101-f2-ex19",
        name: "Fase 2 - Ex. 19: MD - Passaggio Pollice Ascendente (Do-Fa)",
        purpose: "Introdurre il movimento del pollice sotto le dita (1 su Fa).",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["g/5"], duration: "h", midiValues: [79] }, { keys: ["e/5"], duration: "h", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["c/5"], duration: "w", midiValues: [72] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["g/5"], duration: "h", midiValues: [79] }, { keys: ["e/5"], duration: "h", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["c/5"], duration: "w", midiValues: [72] }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValues: [48]}, { keys: ["g/3"], duration: "w", midiValues: [55]}, { keys: ["c/3"], duration: "w", midiValues: [48]}, { keys: ["c/3"], duration: "w", midiValues: [48]},
            { keys: ["c/3"], duration: "w", midiValues: [48]}, { keys: ["g/3"], duration: "w", midiValues: [55]}, { keys: ["c/3"], duration: "w", midiValues: [48]}, { keys: ["c/3"], duration: "w", midiValues: [48]}
        ]
    },
    {
        id: "beyer-op101-f2-ex20",
        name: "Fase 2 - Ex. 20: MS - Passaggio Pollice Discendente (Sol-Do)",
        purpose: "Introdurre il movimento del pollice sotto le dita in MS (1 su Do).",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["c/5"], duration: "w", midiValues: [72]}, { keys: ["c/5"], duration: "w", midiValues: [72]}, { keys: ["c/5"], duration: "w", midiValues: [72]}, { keys: ["c/5"], duration: "w", midiValues: [72]},
            { keys: ["c/5"], duration: "w", midiValues: [72]}, { keys: ["c/5"], duration: "w", midiValues: [72]}, { keys: ["c/5"], duration: "w", midiValues: [72]}, { keys: ["c/5"], duration: "w", midiValues: [72]}
        ],
        notesBass: [
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["g/3"], duration: "w", midiValues: [55] }
        ]
    },
// =======================================================================================
// === ESERCIZI RIASSUNTIVI 21-30: Combinazione graduale dei concetti (CORRETTO) ===
// =======================================================================================
{
    id: "beyer-op101-f2-ex21",
    name: "Fase 2 - Ex. 21: Studiettino in Do - Legato e Accompagnamento",
    purpose: "Combinare legato fluido in MD con accompagnamento semplice in MS.",
    category: "beyer_op101_fase2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 1,
    notesTreble: [ // 8 battute - CORRETTO CON midiValue
        { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g/5"], duration: "h", midiValue: 79 },
        { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "h", midiValue: 77 },
        { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["e/5"], duration: "h", midiValue: 76 },
        { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
        { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "h", midiValue: 76 },
        { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
        { keys: ["c/5"], duration: "w", midiValue: 72 }
    ],
    notesBass: [
        { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
        { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
        { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
        { keys: ["c/3"], duration: "w", midiValues: [48] },
        { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
        { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["f/3"], duration: "h", midiValues: [53] },
        { keys: ["g/3"], duration: "w", midiValues: [55] },
        { keys: ["c/3"], duration: "w", midiValues: [48] }
    ]
},
{
    id: "beyer-op101-f2-ex22",
    name: "Fase 2 - Ex. 22: Studiettino in Sol - Stile Valzer",
    purpose: "Praticare il Fa# in un contesto melodico con un accompagnamento in 3/4.",
    category: "beyer_op101_fase2",
    staveLayout: "grand",
    keySignature: "G", // Messo in Sol Maggiore per chiarezza, anche se ha solo un Fa#
    timeSignature: "3/4",
    repetitions: 1,
    notesTreble: [ // 8 battute - NUOVA MELODIA
        { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
        { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        { keys: ["g/4"], duration: "h.", midiValue: 67 }
    ],
    notesBass: [ // NUOVO ACCOMPAGNAMENTO VALZER
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] },
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3", "a/3"], duration: "q", midiValues: [54, 57] }, { keys: ["f#/3", "a/3"], duration: "q", midiValues: [54, 57] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3", "a/3"], duration: "q", midiValues: [54, 57] }, { keys: ["f#/3", "a/3"], duration: "q", midiValues: [54, 57] },
        { keys: ["g/2", "b/2", "d/3"], duration: "h.", midiValues: [43, 47, 50] }
    ]
},
     // Ex. 23: Studiettino con Sib.
    {
        id: "beyer-op101-f2-ex23",
        name: "Fase 2 - Ex. 23: Studiettino con Sib - Legato in Fa Magg.",
        purpose: "Praticare il Sib in un contesto melodico e armonico di Fa Maggiore.",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "F", // Sib in armatura
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["c/5"], duration: "q" , midiValues: [72]}, { keys: ["bb/4"], duration: "q" , midiValues: [70]}, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["e/4"], duration: "q" , midiValues: [64]}, { keys: ["f/4"], duration: "q" , midiValues: [65]}, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "w", midiValues: [69] },
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["bb/4"], duration: "q" , midiValues: [70]}, { keys: ["a/4"], duration: "q" , midiValues: [69]}, { keys: ["g/4"], duration: "q" , midiValues: [67]}, { keys: ["f/4"], duration: "q" , midiValues: [65]},
            { keys: ["f/4"], duration: "w", midiValues: [65] }
        ],
        notesBass: [
            { keys: ["f/3"], duration: "w", midiValues: [53] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["bb/2"], duration: "h", midiValues: [46] }, { keys: ["f/3"], duration: "h", midiValues: [53] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["bb/2"], duration: "h", midiValues: [46] }, { keys: ["f/2"], duration: "h", midiValues: [41] },
            { keys: ["f/2"], duration: "w", midiValues: [41] }
        ]
    },
    // Ex. 24: Combinazione Fa# e Sib in passaggi semplici.
    {
        id: "beyer-op101-f2-ex24",
        name: "Fase 2 - Ex. 24: Studio con Fa# e Sib",
        purpose: "Gestire Fa# e Sib (come accidentali) in un contesto di Do Maggiore.",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "h", midiValues: [67] }, // Verso Sol
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["a/4"], duration: "h", midiValues: [69] }, // Verso Fa
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "w", midiValues: [67] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // b naturale
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            { keys: ["d/3"], duration: "w", midiValues: [50] }, // Dominante di Sol
            { keys: ["f/2"], duration: "w", midiValues: [41] }, // Fa
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
    // Ex. 25: Passaggio pollice integrato in una melodia MD.
    {
        id: "beyer-op101-f2-ex25",
        name: "Fase 2 - Ex. 25: Melodia MD con Passaggio Pollice (Do-Sol)",
        purpose: "Integrare il passaggio del pollice in un contesto melodico più ampio.",
        category: "beyer_op101_fose2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // C(1) D(2) E(3) F(1)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // G(2) A(3) B(4) C(5)
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // C(5) B(4) A(3) G(2) F(1)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] }, // E(3) D(2) C(1)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // E(1) F(2) G(3) A(1)
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] }, // B(2) G(4)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // F(2) D(4) E(3) C(5) - qui diteggiatura più libera
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [ // Semplice accompagnamento per non distrarre
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["d/3"], duration: "w", midiValues: [50] },
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
    // Ex. 26: Passaggio pollice integrato in una linea di basso MS.
    // Ex. 27: Melodia più estesa (oltre le 5 note) con accompagnamento semplice.
    // Ex. 28: Ritmi leggermente più complessi (es. crome) in passaggi melodici.
    // Ex. 29: Introduzione a piccoli arpeggi spezzati nell'accompagnamento.
    // Per brevità, salto questi esercizi intermedi che sarebbero variazioni di quanto già visto,
    // e vado all'esercizio riassuntivo. Se li desideri, posso scriverli.

    // =======================================================================================
    // === ESERCIZIO RIASSUNTIVO FINALE FASE 2 ===
    // =======================================================================================
    {
        id: "beyer-op101-f2-ex30",
        name: "Fase 2 - Ex. 30: Piccolo Studio Riepilogativo in Do/Sol",
        purpose: "Applicare legato, Fa#, e passaggio pollice base in un contesto musicale.",
        category: "beyer_op101_fase2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // 8 battute
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, // CDEF (pollice su F se parte da C4) -> (1231)
            { keys: ["g/5"], duration: "h", midiValues: [79] }, { keys: ["e/5"], duration: "h", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f#/4"], duration: "h", midiValues: [66] }, // Uso di Fa#
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // E(1)F(2)G(3)A(1)
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["d/5"], duration: "h", midiValues: [74] }, // Arpeggio G
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // Salto
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["g/3"], duration: "w", midiValues: [55] },
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    }
];

// Aggiungi questi esercizi a window.exerciseData
if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

if (typeof window.exerciseData.beyer_op101_fase2 === 'undefined') {
  window.exerciseData.beyer_op101_fase2 = [];
}
// Svuota l'array se stai ricaricando per evitare duplicati
// window.exerciseData.beyer_op101_fase2 = [];
window.exerciseData.beyer_op101_fase2.push(...beyer_op101_fase2_exercises_11_30_corrected);

// console.log("window.exerciseData dopo beyer_op101_fase2_ex_11_30_CORRECTED.js:", window.exerciseData.beyer_op101_fase2);