/**
 * js/exercises/beyer_11_20.js
 * Esercizi da N.11 a N.20 (per ora solo N.11) da F. Beyer - Opus 101
 * Include diteggiatura.
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

const beyer_op101_exercises_11_20 = [ // Nome dell'array che conterrà gli esercizi da 11 a 20
     // =======================================================================================
    // === Esercizio Beyer Op.101 No.11 (CON DITEGGIATURA - come da esempio originale) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex11",
        name: "Beyer Op.101 No.11",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2, // Ritornello sulle prime 4 battute
        notesTreble: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" }, // Battuta 1
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" },
            { keys: ["e/5"], duration: "h", midiValues: [76], fingering: "3" }, // Battuta 2
            { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" }, { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" },
            { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" }, { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, // Battuta 3
            { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" }, { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" },
            { keys: ["f/5"], duration: "h", midiValues: [77], fingering: "4" }, // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" },
            { keys: ["e/5"], duration: "h", midiValues: [76], fingering: "3" },
            { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" }, { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" },
            { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" }, { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" },
            { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" }, { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" },
            { keys: ["f/5"], duration: "h", midiValues: [77], fingering: "4" },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["g/5"], duration: "q", midiValues: [79], fingering: "5" }, { keys: ["f/5"], duration: "q", midiValues: [77], fingering: "4" },
            { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" }, // Battuta 5
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" },
            { keys: ["e/5"], duration: "h", midiValues: [76], fingering: "3" }, // Battuta 6
            { keys: ["d/5"], duration: "q", midiValues: [74], fingering: "2" }, { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" },
            { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "1" }, { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "1" }, // Battuta 7
            { keys: ["g/4"], duration: "w", midiValues: [67], fingering: "1" }  // Battuta 8
        ],
        notesBass: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" },
            { keys: ["g/3"], duration: "h", midiValues: [55], fingering: "3" }, // Battuta 1
            { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            { keys: ["c/4"], duration: "h", midiValues: [60], fingering: "1" }, // Battuta 2
            { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "2" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            { keys: ["b/3"], duration: "q", midiValues: [59], fingering: "2" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" }, // Battuta 3
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "4" }, { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "4" },
            { keys: ["f/3"], duration: "h", midiValues: [53], fingering: "4" }, // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" },
            { keys: ["g/3"], duration: "h", midiValues: [55], fingering: "3" },
            { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            { keys: ["c/4"], duration: "h", midiValues: [60], fingering: "1" },
            { keys: ["d/4"], duration: "q", midiValues: [62], fingering: "2" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            { keys: ["b/3"], duration: "q", midiValues: [59], fingering: "2" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "3" },
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "4" }, { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "4" },
            { keys: ["f/3"], duration: "h", midiValues: [53], fingering: "4" },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "5" }, { keys: ["a/3"], duration: "q", midiValues: [57], fingering: "2" },
            { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" }, { keys: ["b/3"], duration: "q", midiValues: [59], fingering: "2" }, // Battuta 5
            { keys: ["a/3"], duration: "q", midiValues: [57], fingering: "3" }, { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "4" },
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" }, // Battuta 6
            { keys: ["f/3"], duration: "q", midiValues: [53], fingering: "4" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "5" },
            { keys: ["d/3"], duration: "q", midiValues: [50], fingering: "5" }, { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, // Battuta 7
            { keys: ["g/2"], duration: "w", midiValues: [43], fingering: "5" }  // Battuta 8
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.12 (SENZA DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex12",
        name: "Beyer Op.101 No.12",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2, // Ritornello sulle prime 4 battute
        notesTreble: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, // Battuta 1
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["c/5"], duration: "h", midiValues: [72] },   // Battuta 2
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // Battuta 3
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["b/4"], duration: "h", midiValues: [71] },   // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["b/4"], duration: "h", midiValues: [71] },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, // Battuta 5
            { keys: ["g/5"], duration: "h", midiValues: [79] }, { keys: ["g/5"], duration: "h", midiValues: [79] },   // Battuta 6
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 7
            { keys: ["c/5"], duration: "w", midiValues: [72] }                                                     // Battuta 8
        ],
        notesBass: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 1
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["g/3"], duration: "h", midiValues: [55] },   // Battuta 2
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, // Battuta 3
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["g/3"], duration: "h", midiValues: [55] },   // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["g/3"], duration: "h", midiValues: [55] },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, // Battuta 5
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["c/3"], duration: "h", midiValues: [48] },   // Battuta 6
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 7
            { keys: ["c/3"], duration: "w", midiValues: [48] }                                                     // Battuta 8
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.13 (SENZA DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex13",
        name: "Beyer Op.101 No.13",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // No ritornello esplicito nelle prime battute, intero pezzo di 8 battute
        notesTreble: [
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, // Battuta 1
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // Battuta 2
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 3
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // Battuta 4
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, // Battuta 5
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // Battuta 6
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 7
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }  // Battuta 8 (originale finisce con C4 semiminima e pausa di semiminima)
                                                                                                                   // Per semplicità, ho trasformato l'ultima nota in una minima
                                                                                                                   // Se la pausa è necessaria, andrebbe gestita diversamente
        ],
        notesBass: [
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/3"], duration: "h", midiValues: [55] },   // Battuta 1
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["c/3"], duration: "h", midiValues: [48] },   // Battuta 2
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["d/3"], duration: "h", midiValues: [50] },   // Battuta 3
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["g/2"], duration: "h", midiValues: [43] },   // Battuta 4
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },   // Battuta 5
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["d/3"], duration: "h", midiValues: [50] },   // Battuta 6
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["e/3"], duration: "h", midiValues: [52] },   // Battuta 7
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["g/3"], duration: "h", midiValues: [55] }    // Battuta 8 (originale finisce con G3 semiminima e pausa)
                                                                                                                    // Semplificato come sopra
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.14 (SENZA DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex14",
        name: "Beyer Op.101 No.14",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2, // Ritornello sulle prime 4 battute
        notesTreble: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, // Battuta 1
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["c/5"], duration: "h", midiValues: [72] },                                                   // Battuta 2
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, // Battuta 3
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["d/5"], duration: "h", midiValues: [74] },                                                   // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["d/5"], duration: "h", midiValues: [74] },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["a/5"], duration: "q", midiValues: [81] }, // Battuta 5
            { keys: ["b/5"], duration: "q", midiValues: [83] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["e/5"], duration: "h", midiValues: [76] },                                                   // Battuta 6
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // Battuta 7
            { keys: ["g/4"], duration: "w", midiValues: [67] }                                                    // Battuta 8
        ],
        notesBass: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },                                                   // Battuta 1
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },                                                   // Battuta 2
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["d/4"], duration: "h", midiValues: [62] },                                                   // Battuta 3
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["d/4"], duration: "h", midiValues: [62] },                                                   // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["d/4"], duration: "h", midiValues: [62] },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["e/4"], duration: "h", midiValues: [64] },                                                   // Battuta 5
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["e/4"], duration: "h", midiValues: [64] },                                                   // Battuta 6
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, // Battuta 7
            { keys: ["c/3"], duration: "w", midiValues: [48] }                                                    // Battuta 8
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.15 (SENZA DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex15",
        name: "Beyer Op.101 No.15",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // No ritornello esplicito
        notesTreble: [
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] },                                                   // Battuta 1
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "h", midiValues: [65] },                                                   // Battuta 2
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },                                                   // Battuta 3
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["f/4"], duration: "h", midiValues: [65] },                                                   // Battuta 4
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] },                                                   // Battuta 5
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "h", midiValues: [69] },                                                   // Battuta 6
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // Battuta 7
            { keys: ["c/4"], duration: "w", midiValues: [60] }                                                    // Battuta 8
        ],
        notesBass: [
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },   // Battuta 1
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },   // Battuta 2
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["e/2"], duration: "h", midiValues: [40] },   // Battuta 3 (Originale: G2, C2/E2... Semplificato)
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["d/3"], duration: "h", midiValues: [50] },   // Battuta 4
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["e/3"], duration: "h", midiValues: [52] },   // Battuta 5
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },   // Battuta 6
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, // Battuta 7
            { keys: ["c/3"], duration: "w", midiValues: [48] }                                                    // Battuta 8 (Originale C2/G2/C3. Semplificato a C3)
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.16 (SENZA DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex16",
        name: "Beyer Op.101 No.16",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2, // Ritornello sulle prime 4 battute
        notesTreble: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, // Battuta 1
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["a/5"], duration: "q", midiValues: [81] },
            { keys: ["c/6"], duration: "q", midiValues: [84] }, { keys: ["a/5"], duration: "q", midiValues: [81] }, // Battuta 2
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["b/5"], duration: "q", midiValues: [83] },
            { keys: ["d/6"], duration: "q", midiValues: [86] }, { keys: ["b/5"], duration: "q", midiValues: [83] }, // Battuta 3
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["c/6"], duration: "q", midiValues: [84] },
            { keys: ["e/6"], duration: "h", midiValues: [88] },                                                   // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["a/5"], duration: "q", midiValues: [81] },
            { keys: ["c/6"], duration: "q", midiValues: [84] }, { keys: ["a/5"], duration: "q", midiValues: [81] },
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["b/5"], duration: "q", midiValues: [83] },
            { keys: ["d/6"], duration: "q", midiValues: [86] }, { keys: ["b/5"], duration: "q", midiValues: [83] },
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["c/6"], duration: "q", midiValues: [84] },
            { keys: ["e/6"], duration: "h", midiValues: [88] },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["d/6"], duration: "q", midiValues: [86] }, { keys: ["c/6"], duration: "q", midiValues: [84] },
            { keys: ["b/5"], duration: "q", midiValues: [83] }, { keys: ["a/5"], duration: "q", midiValues: [81] }, // Battuta 5
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["e/5"], duration: "h", midiValues: [76] },                                                   // Battuta 6
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, // Battuta 7
            { keys: ["c/5"], duration: "w", midiValues: [72] }                                                    // Battuta 8
        ],
        notesBass: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 1
            { keys: ["f/2"], duration: "w", midiValues: [41] }, // Battuta 2
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // Battuta 3
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // Battuta 5
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 6
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["c/3"], duration: "h", midiValues: [48] }, // Battuta 7
            { keys: ["c/3"], duration: "w", midiValues: [48] }  // Battuta 8
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.17 (SENZA DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex17",
        name: "Beyer Op.101 No.17",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // No ritornello esplicito, intero pezzo di 8 battute
        notesTreble: [
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, // Battuta 1
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 2
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, // Battuta 3
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 4
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 5
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "h", midiValues: [62] },                                                   // Battuta 6
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // Battuta 7
            { keys: ["c/4"], duration: "w", midiValues: [60] }                                                    // Battuta 8
        ],
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 1
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // Battuta 2
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // Battuta 3
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 4
            { keys: ["f/2"], duration: "w", midiValues: [41] }, // Battuta 5
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // Battuta 6
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, // Battuta 7
            { keys: ["c/3"], duration: "w", midiValues: [48] }                                                    // Battuta 8
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.18 (SENZA DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex18",
        name: "Beyer Op.101 No.18",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2, // Ritornello sulle prime 4 battute
        notesTreble: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 1
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 2
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // Battuta 3
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/4"], duration: "h", midiValues: [71] }, // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/4"], duration: "h", midiValues: [71] },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // Battuta 5
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // Battuta 6
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, // Battuta 7
            { keys: ["c/4"], duration: "w", midiValues: [60] }                                                    // Battuta 8
        ],
        notesBass: [
            // Prima sezione (da ripetere) - 4 battute
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["c/4"], duration: "h", midiValues: [60] },   // Battuta 1
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["b/3"], duration: "h", midiValues: [59] },   // Battuta 2
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },   // Battuta 3
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["g/3"], duration: "h", midiValues: [55] },   // Battuta 4

            // Ripetizione della prima sezione
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["g/3"], duration: "h", midiValues: [55] },

            // Seconda sezione (dopo il ritornello) - 4 battute
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["f/3"], duration: "h", midiValues: [53] },   // Battuta 5
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["c/4"], duration: "h", midiValues: [60] },   // Battuta 6
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["g/3"], duration: "h", midiValues: [55] },   // Battuta 7
            { keys: ["c/3"], duration: "w", midiValues: [48] }                                                    // Battuta 8
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.19 (SENZA DITEGGIATURA) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex19",
        name: "Beyer Op.101 No.19",
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // No ritornello esplicito, intero pezzo di 8 battute
        notesTreble: [
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "h", midiValues: [72] },                                                   // Battuta 1
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["d/5"], duration: "h", midiValues: [74] },                                                   // Battuta 2
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["e/5"], duration: "h", midiValues: [76] },                                                   // Battuta 3
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "h", midiValues: [71] },                                                   // Battuta 4
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "h", midiValues: [65] },                                                   // Battuta 5
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },                                                   // Battuta 6
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // Battuta 7
            { keys: ["c/4"], duration: "w", midiValues: [60] }                                                    // Battuta 8
        ],
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 1
            { keys: ["d/3"], duration: "w", midiValues: [50] }, // Battuta 2
            { keys: ["e/3"], duration: "w", midiValues: [52] }, // Battuta 3
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // Battuta 4
            { keys: ["f/2"], duration: "w", midiValues: [41] }, // Battuta 5
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 6
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, // Battuta 7
            { keys: ["c/3"], duration: "w", midiValues: [48] }                                                    // Battuta 8
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.20 (CON DITEGGIATURA - come da immagine fornita) ===
    // =======================================================================================
    {
        id: "beyer-op101-ex20",
        name: "Beyer Op.101 No.20",
        tempo: "Allegretto", // Added tempo marking
        category: "beyer_op101_intermediate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // "C" in image means Common Time (4/4)
        repetitions: 1, // The piece is played once through, with the internal repeat of bars 1-4 handled below.
        notesTreble: [
            // Bars 1-4 (Prima sezione - da ripetere)
            // Bar 1
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" },
            { keys: ["d/5"], duration: "qd", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            // Bar 2
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "qd", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            // Bar 3
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "qd", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            // Bar 4
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] },

            // Ripetizione Bars 1-4
            // Bar 1 (repeated)
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["e/5"], duration: "q", midiValues: [76], fingering: "3" },
            { keys: ["d/5"], duration: "qd", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            // Bar 2 (repeated)
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "qd", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            // Bar 3 (repeated)
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "qd", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            // Bar 4 (repeated)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] },

            // Bars 5-8 (Seconda sezione - dopo il ritornello)
            // Bar 5
            { keys: ["f/4"], duration: "q", midiValues: [65], fingering: "2" }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Bar 6
            { keys: ["c/5"], duration: "q", midiValues: [72], fingering: "1" }, { keys: ["b/4"], duration: "q", midiValues: [71], fingering: "3" }, // Image seems to show 3, could be 2
            { keys: ["a/4"], duration: "q", midiValues: [69], fingering: "5" }, { keys: ["g/4"], duration: "q", midiValues: [67], fingering: "1" }, // Image seems to show 1, could be 3 or 4
            // Bar 7
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "qd", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Bar 8
            { keys: ["c/4"], duration: "h", midiValues: [60] } // WARNING: This bar totals 2 beats (h) as written in the image, should be 4/4.
        ],
        notesBass: [
            // Bars 1-4 (Prima sezione - da ripetere)
            // Bar 1
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            // Bar 2
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "2" }, { keys: ["b/3"], duration: "q", midiValues: [59], fingering: "1" },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Bar 3
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 4
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" },

            // Ripetizione Bars 1-4
            // Bar 1 (repeated)
            { keys: ["c/3"], duration: "q", midiValues: [48], fingering: "5" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "3" },
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "1" }, { keys: ["c/4"], duration: "q", midiValues: [60], fingering: "1" },
            // Bar 2 (repeated)
            { keys: ["g/3"], duration: "q", midiValues: [55], fingering: "2" }, { keys: ["b/3"], duration: "q", midiValues: [59], fingering: "1" },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Bar 3 (repeated)
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 4 (repeated)
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" },

            // Bars 5-8 (Seconda sezione - dopo il ritornello)
            // Bar 5
            { keys: ["d/3"], duration: "q", midiValues: [50], fingering: "2" }, { keys: ["e/3"], duration: "q", midiValues: [52], fingering: "1" },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Bar 6
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Bar 7
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["b/2"], duration: "qd", midiValues: [47] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // Bar 8
            { keys: ["c/3"], duration: "h", midiValues: [48], fingering: "5" } // WARNING: This bar totals 2 beats (h) as written in the image, should be 4/4.
        ]
    },
];

// Aggiungi questi esercizi a window.exerciseData
if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

// Definisci la categoria se non esiste già
const categoryKeyEx11_20 = "beyer_op101_intermediate"; // Assicurati che il nome della categoria sia consistente
if (typeof window.exerciseData[categoryKeyEx11_20] === 'undefined') {
  window.exerciseData[categoryKeyEx11_20] = [];
}
window.exerciseData[categoryKeyEx11_20].push(...beyer_op101_exercises_11_20);

// console.log(`window.exerciseData dopo ${categoryKeyEx11_20}.js:`, window.exerciseData);