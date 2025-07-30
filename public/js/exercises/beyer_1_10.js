/**
 * js/exercises/beyer_op101_fase1_ex_1_10.js
 * Esercizi da 1 a 10 per la Fase 1 - Beyer Op.101 rivisitato
 * Note singole in posizione di cinque dita (Do-Sol), ritmi semplici.
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

const beyer_op101_fase1_exercises_1_10 = [
    // =======================================================================================
    // === Fase 1 - Esercizio 1: MD Sola - Semibrevi (Ascendente e Discendente) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex1",
        name: "Fase 1 - Ex. 1: MD Semibrevi (Do-Sol)",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["c/5"], duration: "w", midiValues: [72] }, // Battuta 1
            { keys: ["d/5"], duration: "w", midiValues: [74] }, // Battuta 2
            { keys: ["e/5"], duration: "w", midiValues: [76] }, // Battuta 3
            { keys: ["f/5"], duration: "w", midiValues: [77] }, // Battuta 4
            { keys: ["g/5"], duration: "w", midiValues: [79] }, // Battuta 5
            { keys: ["f/5"], duration: "w", midiValues: [77] }, // Battuta 6
            { keys: ["e/5"], duration: "w", midiValues: [76] }, // Battuta 7
            { keys: ["d/5"], duration: "w", midiValues: [74] }  // Battuta 8
        ],
        notesBass: [] // Mano sinistra in pausa
    },
    // =======================================================================================
    // === Fase 1 - Esercizio 2: MS Sola - Semibrevi (Ascendente e Discendente) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex2",
        name: "Fase 1 - Ex. 2: MS Semibrevi (Do-Sol)",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [], // Mano destra in pausa
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 1 (Do centrale-1 ottava)
            { keys: ["d/3"], duration: "w", midiValues: [50] }, // Battuta 2
            { keys: ["e/3"], duration: "w", midiValues: [52] }, // Battuta 3
            { keys: ["f/3"], duration: "w", midiValues: [53] }, // Battuta 4
            { keys: ["g/3"], duration: "w", midiValues: [55] }, // Battuta 5
            { keys: ["f/3"], duration: "w", midiValues: [53] }, // Battuta 6
            { keys: ["e/3"], duration: "w", midiValues: [52] }, // Battuta 7
            { keys: ["d/3"], duration: "w", midiValues: [50] }  // Battuta 8
        ]
    },
    // =======================================================================================
    // === Fase 1 - Esercizio 3: MD Sola - Minime (Ascendente e Discendente) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex3",
        name: "Fase 1 - Ex. 3: MD Minime (Do-Sol)",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["c/5"], duration: "h", midiValues: [72] }, // Battuta 1
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["d/5"], duration: "h", midiValues: [74] }, // Battuta 2
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["e/5"], duration: "h", midiValues: [76] }, // Battuta 3
            { keys: ["f/5"], duration: "h", midiValues: [77] }, { keys: ["f/5"], duration: "h", midiValues: [77] }, // Battuta 4
            { keys: ["g/5"], duration: "h", midiValues: [79] }, { keys: ["g/5"], duration: "h", midiValues: [79] }, // Battuta 5
            { keys: ["f/5"], duration: "h", midiValues: [77] }, { keys: ["f/5"], duration: "h", midiValues: [77] }, // Battuta 6
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["e/5"], duration: "h", midiValues: [76] }, // Battuta 7
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["d/5"], duration: "h", midiValues: [74] }  // Battuta 8
        ],
        notesBass: []
    },
    // =======================================================================================
    // === Fase 1 - Esercizio 4: MS Sola - Minime (Ascendente e Discendente) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex4",
        name: "Fase 1 - Ex. 4: MS Minime (Do-Sol)",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [],
        notesBass: [
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["c/3"], duration: "h", midiValues: [48] }, // Battuta 1
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["d/3"], duration: "h", midiValues: [50] }, // Battuta 2
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["e/3"], duration: "h", midiValues: [52] }, // Battuta 3
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["f/3"], duration: "h", midiValues: [53] }, // Battuta 4
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["g/3"], duration: "h", midiValues: [55] }, // Battuta 5
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["f/3"], duration: "h", midiValues: [53] }, // Battuta 6
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["e/3"], duration: "h", midiValues: [52] }, // Battuta 7
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["d/3"], duration: "h", midiValues: [50] }  // Battuta 8
        ]
    },
    // =======================================================================================
    // === Fase 1 - Esercizio 5: MD Sola - Semiminime (Ascendente e Discendente) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex5",
        name: "Fase 1 - Ex. 5: MD Semiminime (Do-Sol)",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Battuta 1
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, // Battuta 2
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, // Battuta 3
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, // Battuta 4
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, // Battuta 5
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, // Battuta 6
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, // Battuta 7
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }  // Battuta 8
        ],
        notesBass: []
    },
    // =======================================================================================
    // === Fase 1 - Esercizio 6: MS Sola - Semiminime (Ascendente e Discendente) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex6",
        name: "Fase 1 - Ex. 6: MS Semiminime (Do-Sol)",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [],
        notesBass: [
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, // Battuta 1
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, // Battuta 2
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, // Battuta 3
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // Battuta 4
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 5
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // Battuta 6
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, // Battuta 7
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }  // Battuta 8
        ]
    },
    // =======================================================================================
    // === Fase 1 - Esercizio 7: Mani Alternate - Semibrevi (Do-Sol, 4 note per mano) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex7",
        name: "Fase 1 - Ex. 7: Mani Alternate Semibrevi",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // MD suona battute 1, 3, 5, 7
            { keys: ["c/5"], duration: "w", midiValues: [72] }, // Battuta 1
            { keys: ["d/5"], duration: "w", midiValues: [74] }, // Battuta 3
            { keys: ["e/5"], duration: "w", midiValues: [76] }, // Battuta 5
            { keys: ["g/5"], duration: "w", midiValues: [79] }  // Battuta 7 (salto F per arrivare a G)
        ],
        notesBass: [ // MS suona battute 2, 4, 6, 8
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 2
            { keys: ["d/3"], duration: "w", midiValues: [50] }, // Battuta 4
            { keys: ["e/3"], duration: "w", midiValues: [52] }, // Battuta 6
            { keys: ["g/3"], duration: "w", midiValues: [55] }  // Battuta 8
        ]
        // Nota: L'engine di rendering dovrebbe inserire le pause corrette
        // Se l'engine non gestisce bene l'alternanza, si potrebbero dover inserire le pause esplicite:
        // Esempio per le prime due battute:
        // notesTreble: [ { keys: ["c/5"], duration: "w", midiValues: [72] }, { keys: ["b/4"], duration: "wr" } ... ],
        // notesBass:   [ { keys: ["b/3"], duration: "wr" }, { keys: ["c/3"], duration: "w", midiValues: [48] } ... ],
        // Ma la struttura dati del Beyer che mi hai mostrato non usa pause esplicite se una mano tace.
    },
    // =======================================================================================
    // === Fase 1 - Esercizio 8: Mani Unite - Semibrevi (Ascendente e Discendente) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex8",
        name: "Fase 1 - Ex. 8: Mani Unite Semibrevi",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["c/5"], duration: "w", midiValues: [72] }, // Battuta 1
            { keys: ["d/5"], duration: "w", midiValues: [74] }, // Battuta 2
            { keys: ["e/5"], duration: "w", midiValues: [76] }, // Battuta 3
            { keys: ["f/5"], duration: "w", midiValues: [77] }, // Battuta 4
            { keys: ["g/5"], duration: "w", midiValues: [79] }, // Battuta 5
            { keys: ["f/5"], duration: "w", midiValues: [77] }, // Battuta 6
            { keys: ["e/5"], duration: "w", midiValues: [76] }, // Battuta 7
            { keys: ["d/5"], duration: "w", midiValues: [74] }  // Battuta 8
        ],
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Battuta 1
            { keys: ["d/3"], duration: "w", midiValues: [50] }, // Battuta 2
            { keys: ["e/3"], duration: "w", midiValues: [52] }, // Battuta 3
            { keys: ["f/3"], duration: "w", midiValues: [53] }, // Battuta 4
            { keys: ["g/3"], duration: "w", midiValues: [55] }, // Battuta 5
            { keys: ["f/3"], duration: "w", midiValues: [53] }, // Battuta 6
            { keys: ["e/3"], duration: "w", midiValues: [52] }, // Battuta 7
            { keys: ["d/3"], duration: "w", midiValues: [50] }  // Battuta 8
        ]
    },
    // =======================================================================================
    // === Fase 1 - Esercizio 9: Mani Unite - Minime (Ascendente e Discendente) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex9",
        name: "Fase 1 - Ex. 9: Mani Unite Minime",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["d/5"], duration: "h", midiValues: [74] },
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["e/5"], duration: "h", midiValues: [76] },
            { keys: ["f/5"], duration: "h", midiValues: [77] }, { keys: ["f/5"], duration: "h", midiValues: [77] },
            { keys: ["g/5"], duration: "h", midiValues: [79] }, { keys: ["g/5"], duration: "h", midiValues: [79] },
            { keys: ["f/5"], duration: "h", midiValues: [77] }, { keys: ["f/5"], duration: "h", midiValues: [77] },
            { keys: ["e/5"], duration: "h", midiValues: [76] }, { keys: ["e/5"], duration: "h", midiValues: [76] },
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["d/5"], duration: "h", midiValues: [74] }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["f/3"], duration: "h", midiValues: [53] },
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["f/3"], duration: "h", midiValues: [53] },
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["d/3"], duration: "h", midiValues: [50] }
        ]
    },
    // =======================================================================================
    // === Fase 1 - Esercizio 10: Mani Unite - Semiminime (Ascendente e Discendente) ===
    // =======================================================================================
    {
        id: "beyer-op101-f1-ex10",
        name: "Fase 1 - Ex. 10: Mani Unite Semiminime",
        category: "beyer_op101_fase1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }
        ]
    }
];

// Aggiungi questi esercizi a window.exerciseData
// Questo permette di caricare esercizi da più file e categorie
if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

// Crea la categoria se non esiste
if (typeof window.exerciseData.beyer_op101_fase1 === 'undefined') {
  window.exerciseData.beyer_op101_fase1 = [];
}
window.exerciseData.beyer_op101_fase1.push(...beyer_op101_fase1_exercises_1_10);

// Per debug, puoi loggare l'oggetto exerciseData aggiornato
// console.log("window.exerciseData dopo beyer_op101_fase1_ex_1_10.js:", window.exerciseData);