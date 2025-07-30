/**
 * js/exercises/beyer_op101_ex_3_4.js
 * Esercizi N.3 e N.4 da F. Beyer - Opus 101 (Scuola Preparatoria)
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

const beyer_op101_preparatory_exercises_3_4 = [
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.3 === note 4/4 
    // =======================================================================================
    {
        id: "beyer-op101-ex3",
        name: "Beyer Op.101 No.3",
        category: "beyer_op101_preparatory", // Categoria per gli esercizi preparatori del Beyer
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2, // L'utente può sovrascrivere questo tramite UI se implementato, o usa il default globale
        notesTreble: [
            // Prima sezione (5 battute)
            { keys: ["c/5"], duration: "w", midiValues: [72] }, // Battuta 1
            { keys: ["d/5"], duration: "w", midiValues: [74] }, // Battuta 2
            { keys: ["e/5"], duration: "w", midiValues: [76] }, // Battuta 3
            { keys: ["f/5"], duration: "w", midiValues: [77] }, // Battuta 4
            { keys: ["g/5"], duration: "w", midiValues: [79] }, // Battuta 5
            // Ripetizione della prima sezione (altre 5 battute)
            { keys: ["c/5"], duration: "w", midiValues: [72] }, // Battuta 6 (rip. 1)
            { keys: ["d/5"], duration: "w", midiValues: [74] }, // Battuta 7 (rip. 2)
            { keys: ["e/5"], duration: "w", midiValues: [76] }, // Battuta 8 (rip. 3)
            { keys: ["f/5"], duration: "w", midiValues: [77] }, // Battuta 9 (rip. 4)
            { keys: ["g/5"], duration: "w", midiValues: [79] }, // Battuta 10 (rip. 5)
            // Parte finale dopo il ritornello
            { keys: ["c/5"], duration: "w", midiValues: [72] }  // Battuta 11
        ],
        notesBass: [
            // Prima sezione (5 battute)
            { keys: ["c/4"], duration: "w", midiValues: [60] }, // Battuta 1
            { keys: ["b/3"], duration: "w", midiValues: [59] }, // Battuta 2
            { keys: ["a/3"], duration: "w", midiValues: [57] }, // Battuta 3
            { keys: ["g/3"], duration: "w", midiValues: [55] }, // Battuta 4
            { keys: ["f/3"], duration: "w", midiValues: [53] }, // Battuta 5
            // Ripetizione della prima sezione (altre 5 battute)
            { keys: ["c/4"], duration: "w", midiValues: [60] }, // Battuta 6 (rip. 1)
            { keys: ["b/3"], duration: "w", midiValues: [59] }, // Battuta 7 (rip. 2)
            { keys: ["a/3"], duration: "w", midiValues: [57] }, // Battuta 8 (rip. 3)
            { keys: ["g/3"], duration: "w", midiValues: [55] }, // Battuta 9 (rip. 4)
            { keys: ["f/3"], duration: "w", midiValues: [53] }, // Battuta 10 (rip. 5)
            // Parte finale dopo il ritornello
            { keys: ["c/4"], duration: "w", midiValues: [60] }  // Battuta 11
        ]
    },
    // =======================================================================================
    // === Esercizio Beyer Op.101 No.4 ===
    // =======================================================================================
    {
        id: "beyer-op101-ex4",
        name: "Beyer Op.101 No.4",
        category: "beyer_op101_preparatory",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            // Prima sezione (4 battute x 4 semiminime)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 1
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, // Battuta 2
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, // Battuta 3
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, // Battuta 4
            // Ripetizione della prima sezione (altre 4 battute x 4 semiminime)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 5 (rip. 1)
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, // Battuta 6 (rip. 2)
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, // Battuta 7 (rip. 3)
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, // Battuta 8 (rip. 4)
            // Parte finale dopo il ritornello
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, // Battuta 9
            { keys: ["c/5"], duration: "w", midiValues: [72] }, // Battuta 10
            { keys: ["c/5"], duration: "w", midiValues: [72] }  // Battuta 11
        ],
        notesBass: [
            // Prima sezione (4 battute x 4 semiminime)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 1
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // Battuta 2
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, // Battuta 3
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, // Battuta 4
            // Ripetizione della prima sezione (altre 4 battute x 4 semiminime)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 5 (rip. 1)
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // Battuta 6 (rip. 2)
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, // Battuta 7 (rip. 3)
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, // Battuta 8 (rip. 4)
            // Parte finale dopo il ritornello
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // Battuta 9
            { keys: ["g/3"], duration: "w", midiValues: [55] }, // Battuta 10
            { keys: ["c/3"], duration: "w", midiValues: [48] }  // Battuta 11
        ]
    },
    // =======================================================================================
// === Esercizio Beyer Op.101 No.5 ===
// =======================================================================================
{
    id: "beyer-op101-ex5",
    name: "Beyer Op.101 No.5",
    category: "beyer_op101_preparatory", // Assicurati che questa categoria corrisponda a quella usata per gli altri
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4", // Le battute sono piene con note da un quarto
    repetitions: 2,
    notesTreble: [
        // Battuta 1
        { keys: ["c/5"], duration: "q", midiValues: [72] },
        { keys: ["d/5"], duration: "q", midiValues: [74] },
        { keys: ["e/5"], duration: "q", midiValues: [76] },
        { keys: ["f/5"], duration: "q", midiValues: [77] },
        // Battuta 2
        { keys: ["e/5"], duration: "q", midiValues: [76] },
        { keys: ["d/5"], duration: "q", midiValues: [74] },
        { keys: ["c/5"], duration: "h", midiValues: [72] }, // Semiminima + Pausa da un quarto implicita se la battuta è 4/4, ma qui è una minima
        // Ripetizione Battuta 1
        { keys: ["c/5"], duration: "q", midiValues: [72] },
        { keys: ["d/5"], duration: "q", midiValues: [74] },
        { keys: ["e/5"], duration: "q", midiValues: [76] },
        { keys: ["f/5"], duration: "q", midiValues: [77] },
        // Ripetizione Battuta 2
        { keys: ["e/5"], duration: "q", midiValues: [76] },
        { keys: ["d/5"], duration: "q", midiValues: [74] },
        { keys: ["c/5"], duration: "h", midiValues: [72] },
        // Battuta 3 (dopo il ritornello)
        { keys: ["d/5"], duration: "q", midiValues: [74] },
        { keys: ["e/5"], duration: "q", midiValues: [76] },
        { keys: ["f/5"], duration: "q", midiValues: [77] },
        { keys: ["g/5"], duration: "q", midiValues: [79] },
        // Battuta 4
        { keys: ["f/5"], duration: "q", midiValues: [77] },
        { keys: ["e/5"], duration: "q", midiValues: [76] },
        { keys: ["d/5"], duration: "h", midiValues: [74] },
        // Battuta 5
        { keys: ["c/5"], duration: "w", midiValues: [72] }
    ],
    notesBass: [
        // Battuta 1
        { keys: ["g/3"], duration: "q", midiValues: [55] },
        { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["e/3"], duration: "q", midiValues: [52] },
        { keys: ["d/3"], duration: "q", midiValues: [50] },
        // Battuta 2
        { keys: ["e/3"], duration: "q", midiValues: [52] },
        { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["g/3"], duration: "h", midiValues: [55] },
        // Ripetizione Battuta 1
        { keys: ["g/3"], duration: "q", midiValues: [55] },
        { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["e/3"], duration: "q", midiValues: [52] },
        { keys: ["d/3"], duration: "q", midiValues: [50] },
        // Ripetizione Battuta 2
        { keys: ["e/3"], duration: "q", midiValues: [52] },
        { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["g/3"], duration: "h", midiValues: [55] },
        // Battuta 3 (dopo il ritornello)
        { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["e/3"], duration: "q", midiValues: [52] },
        { keys: ["d/3"], duration: "q", midiValues: [50] },
        { keys: ["c/3"], duration: "q", midiValues: [48] },
        // Battuta 4
        { keys: ["d/3"], duration: "q", midiValues: [50] },
        { keys: ["e/3"], duration: "q", midiValues: [52] },
        { keys: ["f/3"], duration: "h", midiValues: [53] },
        // Battuta 5
        { keys: ["g/3"], duration: "w", midiValues: [55] }
    ]
},
// =======================================================================================
// === Esercizio Beyer Op.101 No.6 ===
// =======================================================================================
{
    id: "beyer-op101-ex6",
    name: "Beyer Op.101 No.6",
    category: "beyer_op101_preparatory",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4", // Questo esercizio è chiaramente in 2/4
    repetitions: 2,
    notesTreble: [
        // Battuta 1
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
        { keys: ["e/5"], duration: "8", midiValues: [76] }, 
        // Battuta 2
        { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
        // Battuta 3
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
        { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
        // Battuta 4
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
        { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
        // Battuta 5
        { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
        // Ripetizione (Battute 1-5)
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
        { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
        { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
        { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
        { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
        // Battuta 6 (dopo ritornello)
        { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
        { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
        // Battuta 7
        { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
        { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
        // Battuta 8
        { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
        // Battuta 9
        { keys: ["c/5"], duration: "h", midiValues: [72] } // Semibreve in 2/4? No, è una minima
    ],
    notesBass: [
        // Battuta 1
        { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
        { keys: ["e/3"], duration: "8", midiValues: [52] }, 
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
        { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
        // Battuta 3
        { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
        // Battuta 4
        { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
        { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
        // Battuta 5
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        // Ripetizione (Battute 1-5)
        { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
        { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
        { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
        { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
        { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
        { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        // Battuta 6 (dopo ritornello)
        { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
        { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
        // Battuta 7
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
        { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
        // Battuta 8
        { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        // Battuta 9
        { keys: ["g/3"], duration: "h", midiValues: [55] } // Minima
    ]
},
// =======================================================================================
// === Esercizio Beyer Op.101 No.7 ===
// =======================================================================================
{
    id: "beyer-op101-ex7",
    name: "Beyer Op.101 No.7",
    category: "beyer_op101_preparatory",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 1, // Non ci sono segni di ritornello evidenti
    notesTreble: [
        // Battuta 1
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
        { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["a/5"], duration: "8", midiValues: [81] },
        { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["c/6"], duration: "8", midiValues: [84] },
        // Battuta 2
        { keys: ["b/5"], duration: "q", midiValues: [83] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
        { keys: ["e/5"], duration: "h", midiValues: [76] },
        // Battuta 3
        { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
        { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
        { keys: ["a/5"], duration: "8", midiValues: [81] }, { keys: ["b/5"], duration: "8", midiValues: [83] },
        { keys: ["c/6"], duration: "8", midiValues: [84] }, { keys: ["d/6"], duration: "8", midiValues: [86] },
        // Battuta 4
        { keys: ["c/6"], duration: "q", midiValues: [84] }, { keys: ["a/5"], duration: "q", midiValues: [81] },
        { keys: ["f/5"], duration: "h", midiValues: [77] },
        // Battuta 5
        { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
        { keys: ["c/5"], duration: "h", midiValues: [72] }
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
        { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
        { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
        // Battuta 2
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
        { keys: ["g/3"], duration: "h", midiValues: [55] },
        // Battuta 3
        { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
        { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
        // Battuta 4
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["a/3"], duration: "h", midiValues: [57] },
        // Battuta 5
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["e/3"], duration: "h", midiValues: [52] }
    ]
},
// =======================================================================================
// === Esercizio Beyer Op.101 No.8 ===
// =======================================================================================
{
    id: "beyer-op101-ex8",
    name: "Beyer Op.101 No.8",
    category: "beyer_op101_preparatory",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4", // Le battute sono 4/4
    repetitions: 1, // Non ci sono segni di ritornello evidenti
    notesTreble: [
        // Battuta 1
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
        { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
        // Battuta 2
        { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
        { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
        // Battuta 3
        { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
        { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["a/5"], duration: "q", midiValues: [81] },
        // Battuta 4
        { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
        { keys: ["c/5"], duration: "h", midiValues: [72] },
        // Seconda riga
        // Battuta 5
        { keys: ["c/6"], duration: "8", midiValues: [84] }, { keys: ["b/5"], duration: "8", midiValues: [83] }, { keys: ["a/5"], duration: "8", midiValues: [81] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
        { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
        // Battuta 6
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
        // Battuta 7
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] },
        { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
        // Battuta 8
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
        { keys: ["c/5"], duration: "h", midiValues: [72] }
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
        // Battuta 2
        { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
        // Battuta 3
        { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
        // Battuta 4
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
        { keys: ["c/3"], duration: "h", midiValues: [48] },
        // Seconda riga
        // Battuta 5
        { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["f/2"], duration: "h", midiValues: [41] },
        // Battuta 6
        { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
        // Battuta 7
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        { keys: ["c/3"], duration: "h", midiValues: [48] },
        // Battuta 8
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
        { keys: ["c/3"], duration: "h", midiValues: [48] }
    ]
},
// =======================================================================================
// === Esercizio Beyer Op.101 No.9 (CORRETTO) ===
// =======================================================================================
{
    id: "beyer-op101-ex9",
    name: "Beyer Op.101 No.9",
    category: "beyer_op101_preparatory",
    staveLayout: "grand",
    keySignature: "G", // Sol Maggiore (un diesis - F#)
    timeSignature: "3/4", // Tempo ternario
    repetitions: 2, // C'è un segno di ritornello che copre le prime 8 battute
    notesTreble: [
        // Prima sezione (da ripetere) - 8 battute
        // Immagine 1, Riga 1
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 1
        { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 2
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 3
        { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/5"], duration: "q", midiValues: [72] },  // Battuta 4
        // Immagine 1, Riga 2
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 5
        { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 6
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 7
        { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 8

        // Ripetizione della prima sezione - altre 8 battute
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
        { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
        { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
        { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
        { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
        { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },

        // Seconda sezione (dopo il ritornello) - altre 8 battute
        // Immagine 2, Riga 1
        { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["f#/5"], duration: "q", midiValues: [78] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, // Battuta 9
        { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 10
        { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Battuta 11
        { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "h", midiValues: [69] },             // Battuta 12
        // Immagine 2, Riga 2
        { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["f#/5"], duration: "q", midiValues: [78] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, // Battuta 13
        { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 14
        { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // Battuta 15
        // ===>>> CORREZIONE QUI SOTTO <<<===
        { keys: ["g/4"], duration: "hd", midiValues: [67] } // Battuta 16 (nota da 3 tempi - g/4, minima puntata)
    ],
    notesBass: [
        // Prima sezione (da ripetere) - 8 battute
        // Immagine 1, Riga 1
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 1
        { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // Battuta 2
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 3
        { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // Battuta 4
        // Immagine 1, Riga 2
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 5
        { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // Battuta 6
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // Battuta 7
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, // Battuta 8

        // Ripetizione della prima sezione - altre 8 battute
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },

        // Seconda sezione (dopo il ritornello) - altre 8 battute
        // Immagine 2, Riga 1
        { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // Battuta 9
        { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, // Battuta 10
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, // Battuta 11
        { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "h", midiValues: [50] },             // Battuta 12
        // Immagine 2, Riga 2
        { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // Battuta 13
        { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, // Battuta 14
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 15
        { keys: ["g/2"], duration: "hd", midiValues: [43] } // Battuta 16
    ]
},
// =======================================================================================
// === Esercizio Beyer Op.101 No.10 ===
// =======================================================================================
{
    id: "beyer-op101-ex10",
    name: "Beyer Op.101 No.10 - Prima",
    category: "beyer_op101_preparatory",
    staveLayout: "grand",
    keySignature: "C", // Do Maggiore
    timeSignature: "3/8", // Tempo ternario (tre crome per battuta)
    repetitions: 1, // Nessun segno di ritornello visibile
    notesTreble: [
        // Immagine 1, Riga 1
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["g/5"], duration: "8", midiValues: [79] }, // Battuta 1
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["g/5"], duration: "8", midiValues: [79] }, // Battuta 2
        { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, // Battuta 3
        { keys: ["e/5"], duration: "qd", midiValues: [76] }, // Battuta 4 (qd = quarter dotted = semiminima puntata = 3 crome)
        // Immagine 1, Riga 2
        { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, // Battuta 5
        { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, // Battuta 6
        { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, // Battuta 7
        { keys: ["d/5"], duration: "qd", midiValues: [74] }, // Battuta 8

        // Immagine 2, Riga 1 (Continuazione)
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, // Battuta 9
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, // Battuta 10
        { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, // Battuta 11
        { keys: ["c/5"], duration: "qd", midiValues: [72] }, // Battuta 12
        // Immagine 2, Riga 2 (Continuazione)
        { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, // Battuta 13
        { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, // Battuta 14
        { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, // Battuta 15
        { keys: ["g/4"], duration: "qd", midiValues: [67] }  // Battuta 16
    ],
    notesBass: [
        // Immagine 1, Riga 1
        { keys: ["c/4"], duration: "qd", midiValues: [60] }, // Battuta 1
        { keys: ["c/4"], duration: "qd", midiValues: [60] }, // Battuta 2
        { keys: ["g/3"], duration: "qd", midiValues: [55] }, // Battuta 3
        { keys: ["c/4"], duration: "qd", midiValues: [60] }, // Battuta 4
        // Immagine 1, Riga 2
        { keys: ["b/3"], duration: "qd", midiValues: [59] }, // Battuta 5
        { keys: ["b/3"], duration: "qd", midiValues: [59] }, // Battuta 6
        { keys: ["g/3"], duration: "qd", midiValues: [55] }, // Battuta 7
        { keys: ["b/3"], duration: "qd", midiValues: [59] }, // Battuta 8

        // Immagine 2, Riga 1 (Continuazione)
        { keys: ["a/3"], duration: "qd", midiValues: [57] }, // Battuta 9
        { keys: ["a/3"], duration: "qd", midiValues: [57] }, // Battuta 10
        { keys: ["e/3"], duration: "qd", midiValues: [52] }, // Battuta 11
        { keys: ["a/3"], duration: "qd", midiValues: [57] }, // Battuta 12
        // Immagine 2, Riga 2 (Continuazione)
        { keys: ["g/3"], duration: "qd", midiValues: [55] }, // Battuta 13
        { keys: ["f/3"], duration: "qd", midiValues: [53] }, // Battuta 14
        { keys: ["e/3"], duration: "qd", midiValues: [52] }, // Battuta 15
        { keys: ["c/3"], duration: "qd", midiValues: [48] }  // Battuta 16
    ]
}










];

// Aggiungi questi esercizi a window.exerciseData
// Questo permette di caricare esercizi da più file e categorie
if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

if (typeof window.exerciseData.beyer_op101_preparatory === 'undefined') {
  window.exerciseData.beyer_op101_preparatory = [];
}
window.exerciseData.beyer_op101_preparatory.push(...beyer_op101_preparatory_exercises_3_4);

// Per debug, puoi loggare l'oggetto exerciseData aggiornato
// console.log("window.exerciseData dopo beyer_op101_ex_3_4.js:", window.exerciseData);