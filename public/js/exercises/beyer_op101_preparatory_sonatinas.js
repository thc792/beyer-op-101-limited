/**
 * js/exercises/beyer_op101_preparatory_sonatinas.js
 * Esercizi in stile suonatina preparatoria, basati sul Beyer Op. 101 (dal N.41 in poi)
 * Include sviluppo melodico, sezioni contrastanti e forme più estese.
 * Ispirato a passaggi semplici di compositori classici.
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli oggetti esercizio definiti in questo file
const beyer_op101_preparatory_sonatina_exercises = [];

// =======================================================================================
// === ESERCIZIO N.41 (SUONATINA PREPARATORIA 1) ===
// =======================================================================================
const sonatina_exercise_41 = [ // Nota: ogni "esercizio" è un array con un singolo oggetto
    {
        id: "beyer-op101-ex41-sonatina1",
        name: "Preparatory Sonatina No. 1 (Exercise 41)",
        tempo: "Moderato",
        category: "beyer_op101_prep_sonatinas", // La categoria specifica per questo gruppo
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Le 24 battute sono scritte esplicitamente
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA (Semiminime), MS Accomp. (Battute 1-8) ---
            // Battuta 1
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 2
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 3
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Battuta 4
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 5
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            // Battuta 6
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 7
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Battuta 8
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["f#/5"], duration: "q", midiValues: [78] }, { keys: ["g/5"], duration: "h", midiValues: [79] },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO (Accordi Minime) (Battute 9-16) ---
            // Battuta 9
            { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] },
            // Battuta 10
            { keys: ["f/4", "a/4", "c/5"], duration: "h", midiValues: [65, 69, 72] }, { keys: ["f/4", "a/4", "c/5"], duration: "h", midiValues: [65, 69, 72] },
            // Battuta 11
            { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] }, { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] },
            // Battuta 12
            { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] },
            // Battuta 13
            { keys: ["e/4", "a/4", "c#/5"], duration: "h", midiValues: [64, 69, 73] }, { keys: ["e/4", "a/4", "c#/5"], duration: "h", midiValues: [64, 69, 73] },
            // Battuta 14
            { keys: ["d/4", "f#/4", "a/4"], duration: "h", midiValues: [62, 66, 69] }, { keys: ["d/4", "f#/4", "a/4"], duration: "h", midiValues: [62, 66, 69] },
            // Battuta 15
            { keys: ["d/4", "g/4", "b/4"], duration: "h", midiValues: [62, 67, 71] }, { keys: ["d/4", "g/4", "b/4"], duration: "h", midiValues: [62, 67, 71] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // --- SEZIONE C: FINALE "IMPROVVISATO" (Battute 17-24) ---
            // Battuta 17
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Battuta 18
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 19
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 20
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 21
            { keys: ["f/4", "a/4", "c/5"], duration: "h", midiValues: [65, 69, 72] }, { keys: ["e/4", "g/4", "b/4"], duration: "h", midiValues: [64, 67, 71] },
            // Battuta 22
            { keys: ["d/4", "g/4", "b/4"], duration: "q", midiValues: [62, 67, 71] }, { keys: ["d/4", "f#/4", "b/4"], duration: "q", midiValues: [62, 66, 71] },
            { keys: ["c/4", "e/4", "a/4"], duration: "q", midiValues: [60, 64, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 23
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 24
            { keys: ["c/4", "e/4", "g/4", "c/5"], duration: "w", midiValues: [60, 64, 67, 72] }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE A: MD MELODIA, MS ACCOMPAGNAMENTO (Accordi Minime) (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] }, { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },
            // Battuta 2
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] }, { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] },
            // Battuta 3
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] }, { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] },
            // Battuta 4
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] }, { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },
            // Battuta 5
            { keys: ["a/2", "c#/3", "e/3"], duration: "h", midiValues: [45, 49, 52] }, { keys: ["a/2", "c#/3", "e/3"], duration: "h", midiValues: [45, 49, 52] },
            // Battuta 6
            { keys: ["d/2", "f#/2", "a/2"], duration: "h", midiValues: [38, 42, 45] }, { keys: ["d/2", "f#/2", "a/2"], duration: "h", midiValues: [38, 42, 45] },
            // Battuta 7
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] }, { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] },
            // Battuta 8
            { keys: ["g/2"], duration: "w", midiValues: [43] },

            // --- SEZIONE B: MS MELODIA (Semiminime) (Battute 9-16) ---
            // Battuta 9
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 10
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 11
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 12
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 13
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 14
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 15
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 16
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "h", midiValues: [67] },

            // --- SEZIONE C: FINALE "IMPROVVISATO" (Battute 17-24) ---
            // Battuta 17
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 18
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 19
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Battuta 20
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Battuta 21
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 22
            { keys: ["g/2", "d/3", "f/3"], duration: "w", midiValues: [43, 50, 53] },
            // Battuta 23
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 24
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    },
    // =======================================================================================
// === ESERCIZIO N.42 (SUONATINA PREPARATORIA 2) ===
// =======================================================================================

    {
        id: "beyer-op101-ex42-sonatina2",
        name: "Preparatory Sonatina No. 2 (Exercise 42)",
        tempo: "Moderato con moto", // Un po' più mosso per il ritmo
        category: "beyer_op101_prep_sonatinas",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA (q, 8, q, 8) (Battute 1-8) ---
            // Battuta 1
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            // Battuta 2
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            // Battuta 3
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            // Battuta 4
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            // Battuta 5 (Variazione)
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Battuta 6
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            // Battuta 7 (Progressione verso dominante)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            // Battuta 8 (Dominante)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["g/4"], duration: "8", midiValues: [67] },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO (Battute 9-16) ---
            // Battuta 9
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] },
            // Battuta 10
            { keys: ["f/3", "a/3", "c/4"], duration: "h", midiValues: [53, 57, 60] }, { keys: ["f/3", "a/3", "c/4"], duration: "h", midiValues: [53, 57, 60] },
            // Battuta 11
            { keys: ["g/3", "b/3", "d/4"], duration: "h", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "h", midiValues: [55, 59, 62] },
            // Battuta 12
            { keys: ["e/3", "g/3", "c/4"], duration: "h", midiValues: [52, 55, 60] }, { keys: ["e/3", "g/3", "c/4"], duration: "h", midiValues: [52, 55, 60] },
            // Battuta 13
            { keys: ["f/3", "a/3", "d/4"], duration: "h", midiValues: [53, 57, 62] }, // Dm7/F
            { keys: ["f/3", "a/3", "d/4"], duration: "h", midiValues: [53, 57, 62] },
            // Battuta 14
            { keys: ["e/3", "g/3", "c/4"], duration: "h", midiValues: [52, 55, 60] }, // C/E
            { keys: ["e/3", "g/3", "c/4"], duration: "h", midiValues: [52, 55, 60] },
            // Battuta 15
            { keys: ["d/3", "f#/3", "a/3"], duration: "h", midiValues: [50, 54, 57] }, // D
            { keys: ["d/3", "g/3", "b/3"], duration: "h", midiValues: [50, 55, 59] }, // G/D
            // Battuta 16
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] }, // C

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MD riprende melodia variata)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            // Battuta 18
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            // Battuta 19 (Passaggio più lirico)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            // Battuta 20
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            // Battuta 21 (Arpeggi in crome per contrasto)
            { keys: ["c/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["c/5"], duration: "8" },
            { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["c/6"], duration: "8" }, { keys: ["e/5"], duration: "8" },
            // Battuta 22 (Progressione cadenzale IV-V)
            { keys: ["f/4", "a/4", "c/5"], duration: "h", midiValues: [65, 69, 72] },
            { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] },
            // Battuta 23 (V7 - I)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "h", midiValues: [67, 71, 74, 77] }, // G7
            { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] }, // C
            // Battuta 24 (Finale)
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE A: MS ACCOMPAGNAMENTO (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 2
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 3
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 4
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 5
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["a/2"], duration: "h", midiValues: [45] },
            // Battuta 6
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 7
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Battuta 8
            { keys: ["g/2"], duration: "w", midiValues: [43] },

            // --- SEZIONE B: MS MELODIA (q, 8, q, 8) (Battute 9-16) ---
            // Battuta 9
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            // Battuta 10
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            // Battuta 11
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "8", midiValues: [54] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Battuta 12
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            // Battuta 13
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            // Battuta 14
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "8", midiValues: [45] },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "8", midiValues: [54] },
            // Battuta 16
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (Accompagnamento alla MD)
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] }, { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] },
            // Battuta 18
            { keys: ["b/2", "d/3", "g/3"], duration: "h", midiValues: [47, 50, 55] }, { keys: ["b/2", "d/3", "g/3"], duration: "h", midiValues: [47, 50, 55] },
            // Battuta 19 (Sostegno armonico)
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 20
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 21 (Basso per arpeggio MD)
            { keys: ["c/2"], duration: "w", midiValues: [36] },
            // Battuta 22
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 23
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 24 (Finale)
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    },
{
        id: "beyer-op101-ex43-sonatina3-march",
        name: "Preparatory Sonatina No. 3 (Exercise 43 - March)",
        tempo: "Allegro moderato (Alla Marcia)",
        category: "beyer_op101_prep_sonatinas",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA, MS Accomp. Marcia (Battute 1-8) ---
            // Battuta 1 (Tema principale brillante)
            { keys: ["g/4"], duration: "q" }, { keys: ["e/5"], duration: "q" }, { keys: ["d/5"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            // Battuta 2
            { keys: ["b/4"], duration: "q" }, { keys: ["g/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["b/4"], duration: "q" },
            // Battuta 3
            { keys: ["c/5"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["f/4"], duration: "q" }, { keys: ["d/4"], duration: "q" },
            // Battuta 4
            { keys: ["g/4"], duration: "q" }, { keys: ["b/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["g/4"], duration: "q" },
            // Battuta 5 (Sviluppo)
            { keys: ["c/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["e/5"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            // Battuta 6
            { keys: ["d/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["f/5"], duration: "q" }, { keys: ["d/5"], duration: "q" },
            // Battuta 7
            { keys: ["e/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["g/5"], duration: "q" }, { keys: ["e/5"], duration: "q" },
            // Battuta 8 (Cadenza sulla dominante)
            { keys: ["d/5"], duration: "q" }, { keys: ["b/4"], duration: "q" }, { keys: ["g/4"], duration: "h" },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO MARCIA (Battute 9-16) ---
            // Battuta 9 (Accordo C | Accordo G)
            { keys: ["e/4", "g/4", "c/5"], duration: "h" }, { keys: ["d/4", "g/4", "b/4"], duration: "h" },
            // Battuta 10 (Accordo F | Accordo C)
            { keys: ["f/4", "a/4", "c/5"], duration: "h" }, { keys: ["e/4", "g/4", "c/5"], duration: "h" },
            // Battuta 11 (Accordo G | Accordo C)
            { keys: ["d/4", "g/4", "b/4"], duration: "h" }, { keys: ["e/4", "g/4", "c/5"], duration: "h" },
            // Battuta 12 (Accordo F | Accordo G)
            { keys: ["c/4", "f/4", "a/4"], duration: "h" }, { keys: ["b/3", "d/4", "g/4"], duration: "h" },
            // Battuta 13 (Accordo Am | Accordo E7)
            { keys: ["c/4", "e/4", "a/4"], duration: "h" }, { keys: ["b/3", "d#/4", "e/4", "g#/4"], duration: "h" }, // E7
            // Battuta 14 (Accordo Am | Accordo Dm)
            { keys: ["c/4", "e/4", "a/4"], duration: "h" }, { keys: ["d/4", "f/4", "a/4"], duration: "h" },
            // Battuta 15 (Accordo G | Accordo G7)
            { keys: ["b/3", "d/4", "g/4"], duration: "h" }, { keys: ["b/3", "d/4", "f/4", "g/4"], duration: "h" }, // G7
            // Battuta 16 (Accordo C)
            { keys: ["c/4", "e/4", "g/4"], duration: "w" },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MD riprende melodia con più enfasi)
            { keys: ["c/5"], duration: "q" }, { keys: ["c/5"], duration: "q" }, { keys: ["e/5"], duration: "q" }, { keys: ["g/5"], duration: "q" },
            // Battuta 18
            { keys: ["f/5"], duration: "q" }, { keys: ["f/5"], duration: "q" }, { keys: ["a/5"], duration: "q" }, { keys: ["c/6"], duration: "q" },
            // Battuta 19 (Fanfara)
            { keys: ["g/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["e/5"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            // Battuta 20
            { keys: ["d/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["d/5"], duration: "8" },
            { keys: ["b/4"], duration: "q" }, { keys: ["g/4"], duration: "q" },
            // Battuta 21 (Scala ascendente trionfale)
            { keys: ["c/4"], duration: "8" }, { keys: ["d/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["f/4"], duration: "8" },
            { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["c/5"], duration: "8" },
            // Battuta 22 (Progressione cadenzale)
            { keys: ["f/4", "a/4", "d/5"], duration: "h" }, // Dm7
            { keys: ["e/4", "g/4", "c/5", "eb/5"], duration: "h" }, // C7/E (dom. di F) o Ebdim
            // Battuta 23 (Accordi finali forti)
            { keys: ["f/4", "a/4", "c/5"], duration: "q" }, // F
            { keys: ["g/4", "b/4", "d/5"], duration: "q" }, // G
            { keys: ["c/4", "e/4", "g/4"], duration: "h" }, // C
            // Battuta 24 (Conclusione)
            { keys: ["c/4", "e/4", "g/4", "c/5"], duration: "w" }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE A: MS ACCOMPAGNAMENTO MARCIA (2 Accordi/Minima per battuta) (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["c/3", "g/3"], duration: "h" }, // C I | C I
            // Battuta 2
            { keys: ["g/2", "d/3"], duration: "h" }, { keys: ["g/2", "d/3"], duration: "h" }, // G V | G V
            // Battuta 3
            { keys: ["f/2", "c/3"], duration: "h" }, { keys: ["f/2", "c/3"], duration: "h" }, // F IV | F IV
            // Battuta 4
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["g/2", "d/3"], duration: "h" }, // C I | G V
            // Battuta 5
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["c/3", "e/3"], duration: "h" }, // C I | C I (con terza)
            // Battuta 6
            { keys: ["d/3", "a/3"], duration: "h" }, { keys: ["d/3", "f/3"], duration: "h" }, // D ii | D ii (con terza)
            // Battuta 7
            { keys: ["e/3", "b/3"], duration: "h" }, { keys: ["e/3", "g/3"], duration: "h" }, // E iii | E iii (o V/vi)
            // Battuta 8
            { keys: ["g/2", "d/3", "f/3"], duration: "h" }, { keys: ["g/2", "b/2", "d/3"], duration: "h" }, // G7 | G

            // --- SEZIONE B: MS MELODIA (Battute 9-16) ---
            // (Melodia MD della Sez.A, adattata per MS)
            // Battuta 9
            { keys: ["g/3"], duration: "q" }, { keys: ["e/4"], duration: "q" }, { keys: ["d/4"], duration: "q" }, { keys: ["c/4"], duration: "q" },
            // Battuta 10
            { keys: ["b/3"], duration: "q" }, { keys: ["g/3"], duration: "q" }, { keys: ["a/3"], duration: "q" }, { keys: ["b/3"], duration: "q" },
            // Battuta 11
            { keys: ["c/4"], duration: "q" }, { keys: ["a/3"], duration: "q" }, { keys: ["f/3"], duration: "q" }, { keys: ["d/3"], duration: "q" },
            // Battuta 12
            { keys: ["g/3"], duration: "q" }, { keys: ["b/3"], duration: "q" }, { keys: ["a/3"], duration: "q" }, { keys: ["g/3"], duration: "q" },
            // Battuta 13
            { keys: ["c/4"], duration: "8" }, { keys: ["d/4"], duration: "8" }, { keys: ["e/4"], duration: "q" }, { keys: ["c/4"], duration: "q" },
            // Battuta 14
            { keys: ["d/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["f/4"], duration: "q" }, { keys: ["d/4"], duration: "q" },
            // Battuta 15
            { keys: ["e/4"], duration: "8" }, { keys: ["f/4"], duration: "8" }, { keys: ["g/4"], duration: "q" }, { keys: ["e/4"], duration: "q" },
            // Battuta 16
            { keys: ["d/4"], duration: "q" }, { keys: ["b/3"], duration: "q" }, { keys: ["g/3"], duration: "h" },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // (MS accompagna MD con carattere di marcia)
            // Battuta 17
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["c/3", "g/3"], duration: "h" },
            // Battuta 18
            { keys: ["f/2", "c/3"], duration: "h" }, { keys: ["f/2", "c/3"], duration: "h" },
            // Battuta 19
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["c/3", "e/3"], duration: "h" },
            // Battuta 20
            { keys: ["g/2", "d/3"], duration: "h" }, { keys: ["g/2", "b/2"], duration: "h" },
            // Battuta 21
            { keys: ["c/2", "g/2", "c/3"], duration: "w" }, // Accordo C più pieno
            // Battuta 22
            { keys: ["f/2", "a/2", "c/3"], duration: "h" }, { keys: ["g/2", "b/2", "d/3"], duration: "h" },
            // Battuta 23
            { keys: ["c/2", "g/2", "c/3"], duration: "q" }, { keys: ["c/2", "g/2", "c/3"], duration: "q" },
            { keys: ["c/2", "g/2", "c/3"], duration: "h" },
            // Battuta 24
            { keys: ["c/2", "e/2", "g/2", "c/3"], duration: "w" }
        ]
    },
  {
        id: "beyer-op101-ex44-sonatina4-march2",
        name: "Preparatory Sonatina No. 4 (Exercise 44 - March No.2)",
        tempo: "Allegro moderato (Alla Marcia)",
        category: "beyer_op101_prep_sonatinas",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA, MS Accomp. Marcia (Battute 1-8) ---
            // Battuta 1 (Nuovo tema marziale, arpeggio ascendente)
            { keys: ["c/5"], duration: "q" }, { keys: ["e/5"], duration: "q" }, { keys: ["g/5"], duration: "q" }, { keys: ["c/6"], duration: "q" },
            // Battuta 2 (Discesa e nota tenuta)
            { keys: ["b/5"], duration: "q" }, { keys: ["a/5"], duration: "q" }, { keys: ["g/5"], duration: "h" },
            // Battuta 3 (Pattern ritmico su accordo di F)
            { keys: ["f/5"], duration: "q" }, { keys: ["a/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["c/5"], duration: "q" }, { keys: ["a/4"], duration: "q" },
            // Battuta 4 (Risposta e cadenza su G)
            { keys: ["g/4"], duration: "q" }, { keys: ["b/4"], duration: "q" }, { keys: ["d/5"], duration: "q" }, { keys: ["g/4"], duration: "q" },
            // Battuta 5 (Ripresa variata del tema)
            { keys: ["e/5"], duration: "q" }, { keys: ["g/5"], duration: "q" }, { keys: ["c/6"], duration: "q" }, { keys: ["e/6"], duration: "q" },
            // Battuta 6 (Discesa verso Dm)
            { keys: ["d/6"], duration: "q" }, { keys: ["c/6"], duration: "q" }, { keys: ["a/5"], duration: "h" },
            // Battuta 7 (Passaggio più scalare)
            { keys: ["g/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" },
            { keys: ["c/5"], duration: "q" }, { keys: ["b/4"], duration: "q" },
            // Battuta 8 (Cadenza sulla dominante)
            { keys: ["a/4"], duration: "q" }, { keys: ["d/5"], duration: "q" }, { keys: ["g/4"], duration: "h" },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO MARCIA (Battute 9-16) ---
            // Battuta 9 (Accordo C | Accordo G)
            { keys: ["e/4", "g/4", "c/5"], duration: "h" }, { keys: ["d/4", "g/4", "b/4"], duration: "h" },
            // Battuta 10 (Accordo F | Accordo C)
            { keys: ["f/4", "a/4", "c/5"], duration: "h" }, { keys: ["e/4", "g/4", "c/5"], duration: "h" },
            // Battuta 11 (Accordo G | Accordo C)
            { keys: ["d/4", "g/4", "b/4"], duration: "h" }, { keys: ["e/4", "g/4", "c/5"], duration: "h" },
            // Battuta 12 (Accordo Dm | Accordo G)
            { keys: ["d/4", "f/4", "a/4"], duration: "h" }, { keys: ["b/3", "d/4", "g/4"], duration: "h" },
            // Battuta 13 (Accordo Am | Accordo E7)
            { keys: ["c/4", "e/4", "a/4"], duration: "h" }, { keys: ["b/3", "d#/4", "e/4", "g#/4"], duration: "h" },
            // Battuta 14 (Accordo Dm | Accordo G7)
            { keys: ["d/4", "f/4", "a/4"], duration: "h" }, { keys: ["b/3", "d/4", "f/4", "g/4"], duration: "h" },
            // Battuta 15 (Accordo C | Accordo G)
            { keys: ["c/4", "e/4", "g/4"], duration: "h" }, { keys: ["b/3", "d/4", "g/4"], duration: "h" },
            // Battuta 16 (Accordo C)
            { keys: ["c/4", "e/4", "g/4"], duration: "w" },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MD melodia brillante su C)
            { keys: ["c/6"], duration: "q" }, { keys: ["g/5"], duration: "q" }, { keys: ["e/5"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            // Battuta 18 (Su G)
            { keys: ["b/5"], duration: "q" }, { keys: ["g/5"], duration: "q" }, { keys: ["d/5"], duration: "q" }, { keys: ["b/4"], duration: "q" },
            // Battuta 19 (Fanfara su F)
            { keys: ["f/5"], duration: "8" }, { keys: ["a/5"], duration: "8" }, { keys: ["c/6"], duration: "8" }, { keys: ["a/5"], duration: "8" },
            { keys: ["f/5"], duration: "q" }, { keys: ["f/5"], duration: "q" },
            // Battuta 20 (Fanfara su G)
            { keys: ["g/5"], duration: "8" }, { keys: ["b/5"], duration: "8" }, { keys: ["d/6"], duration: "8" }, { keys: ["b/5"], duration: "8" },
            { keys: ["g/5"], duration: "q" }, { keys: ["g/5"], duration: "q" },
            // Battuta 21 (Passaggio cromatico discendente)
            { keys: ["e/5"], duration: "8" }, { keys: ["eb/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["db/5"], duration: "8" },
            { keys: ["c/5"], duration: "q" }, { keys: ["b/4"], duration: "q" },
            // Battuta 22 (Progressione cadenzale)
            { keys: ["f/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["d/5"], duration: "q" }, { keys: ["f/5"], duration: "q" }, // Dm7
            // Battuta 23 (Accordi finali G7 - C)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "h" }, // G7
            { keys: ["c/4", "e/4", "g/4", "c/5"], duration: "h" }, // C
            // Battuta 24 (Conclusione)
            { keys: ["c/4", "e/4", "g/4", "c/5"], duration: "w" }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE A: MS ACCOMPAGNAMENTO MARCIA (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3", "g/3", "c/4"], duration: "h" }, { keys: ["c/3", "g/3", "c/4"], duration: "h" }, // C I | C I
            // Battuta 2
            { keys: ["g/2", "d/3", "g/3"], duration: "h" }, { keys: ["g/2", "d/3", "g/3"], duration: "h" }, // G V | G V
            // Battuta 3
            { keys: ["f/2", "c/3", "f/3"], duration: "h" }, { keys: ["f/2", "c/3", "f/3"], duration: "h" }, // F IV | F IV
            // Battuta 4
            { keys: ["c/3", "g/3", "c/4"], duration: "h" }, { keys: ["g/2", "d/3", "g/3"], duration: "h" }, // C I | G V
            // Battuta 5
            { keys: ["a/2", "e/3", "a/3"], duration: "h" }, { keys: ["a/2", "e/3", "a/3"], duration: "h" }, // Am vi | Am vi
            // Battuta 6
            { keys: ["d/3", "a/3", "d/4"], duration: "h" }, { keys: ["d/3", "a/3", "d/4"], duration: "h" }, // Dm ii | Dm ii
            // Battuta 7
            { keys: ["g/2", "d/3", "g/3"], duration: "h" }, { keys: ["g/2", "b/2", "f/3"], duration: "h" }, // G V | G7 V7
            // Battuta 8
            { keys: ["c/3", "g/3", "c/4"], duration: "w" }, // C I

            // --- SEZIONE B: MS MELODIA (Battute 9-16) ---
            // (Melodia MD della Sez.A, adattata per MS)
            // Battuta 9
            { keys: ["c/4"], duration: "q" }, { keys: ["e/4"], duration: "q" }, { keys: ["g/4"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            // Battuta 10
            { keys: ["b/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["g/4"], duration: "h" },
            // Battuta 11
            { keys: ["f/4"], duration: "q" }, { keys: ["a/4"], duration: "8" }, { keys: ["f/4"], duration: "8" }, { keys: ["c/4"], duration: "q" }, { keys: ["a/3"], duration: "q" },
            // Battuta 12
            { keys: ["g/3"], duration: "q" }, { keys: ["b/3"], duration: "q" }, { keys: ["d/4"], duration: "q" }, { keys: ["g/3"], duration: "q" },
            // Battuta 13
            { keys: ["e/4"], duration: "q" }, { keys: ["g/4"], duration: "q" }, { keys: ["c/5"], duration: "q" }, { keys: ["e/5"], duration: "q" },
            // Battuta 14
            { keys: ["d/5"], duration: "q" }, { keys: ["c/5"], duration: "q" }, { keys: ["a/4"], duration: "h" },
            // Battuta 15
            { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            { keys: ["c/4"], duration: "q" }, { keys: ["b/3"], duration: "q" },
            // Battuta 16
            { keys: ["a/3"], duration: "q" }, { keys: ["d/4"], duration: "q" }, { keys: ["g/3"], duration: "h" },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // (MS accompagna MD con carattere di marcia)
            // Battuta 17
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["c/3", "g/3"], duration: "h" },
            // Battuta 18
            { keys: ["g/2", "d/3"], duration: "h" }, { keys: ["g/2", "d/3"], duration: "h" },
            // Battuta 19
            { keys: ["f/2", "c/3"], duration: "h" }, { keys: ["f/2", "c/3"], duration: "h" },
            // Battuta 20
            { keys: ["g/2", "d/3"], duration: "h" }, { keys: ["g/2", "d/3"], duration: "h" },
            // Battuta 21
            { keys: ["c/2", "g/2", "c/3"], duration: "w" },
            // Battuta 22
            { keys: ["f/2", "a/2", "c/3"], duration: "h" }, { keys: ["g/2", "b/2", "d/3"], duration: "h" },
            // Battuta 23
            { keys: ["c/2", "g/2", "c/3"], duration: "q" }, { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "q" }, // C | G7
            { keys: ["c/2", "e/2", "g/2"], duration: "h" }, // C
            // Battuta 24
            { keys: ["c/2", "e/2", "g/2", "c/3"], duration: "w" }
        ]
    },
 {
        id: "beyer-op101-ex45-sonatina5-semiquaver",
        name: "Preparatory Sonatina No. 5 (Exercise 45 - Semiquavers & Rests)",
        tempo: "Allegro con brio",
        category: "beyer_op101_prep_sonatinas",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA (con semicrome/pause), MS Accomp. (Battute 1-8) ---
            // Battuta 1 (Inizio deciso)
            { keys: ["g/4"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            { keys: ["e/5"], duration: "q" }, { keys: ["g/5"], duration: "q" },
            // Battuta 2 (Pattern ritmico con pausa)
            { keys: ["f/5"], duration: "q" }, { keys: ["r"], duration: "8" }, // Pausa di croma
            { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "q" }, { keys: ["b/4"], duration: "q" },
            // Battuta 3 (Introduzione semicrome - "assolo")
            { keys: ["c/5"], duration: "8" }, { keys: ["d/5"], duration: "16" }, { keys: ["e/5"], duration: "16" }, { keys: ["f/5"], duration: "16" }, { keys: ["g/5"], duration: "16" }, // croma, 4 semicrome
            { keys: ["a/5"], duration: "q" }, { keys: ["g/5"], duration: "q" },
            // Battuta 4 (Continuazione e respiro)
            { keys: ["f/5"], duration: "q" }, { keys: ["e/5"], duration: "q" },
            { keys: ["d/5"], duration: "q" }, { keys: ["r"], duration: "q" }, // Pausa di semiminima
            // Battuta 5 (Nuovo motivo con semicrome)
            { keys: ["g/5"], duration: "q" },
            { keys: ["f/5"], duration: "16" }, { keys: ["e/5"], duration: "16" }, { keys: ["d/5"], duration: "16" }, { keys: ["c/5"], duration: "16" }, // 4 semicrome
            { keys: ["b/4"], duration: "q" }, { keys: ["a/4"], duration: "q" },
            // Battuta 6
            { keys: ["g/4"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            { keys: ["e/5"], duration: "q" }, { keys: ["d/5"], duration: "q" },
            // Battuta 7 (Passaggio brillante)
            { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["g/4"], duration: "8" },
            { keys: ["f#/4"], duration: "q" }, { keys: ["g/4"], duration: "q" },
            // Battuta 8 (Cadenza sulla dominante con pausa)
            { keys: ["d/5"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            { keys: ["b/4"], duration: "q" }, { keys: ["r"], duration: "q" },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO MARCIA (Battute 9-16) ---
            // Battuta 9
            { keys: ["e/4", "g/4"], duration: "h" }, { keys: ["c/4", "g/4"], duration: "h" },
            // Battuta 10
            { keys: ["d/4", "f/4"], duration: "h" }, { keys: ["b/3", "f/4"], duration: "h" },
            // Battuta 11
            { keys: ["c/4", "e/4"], duration: "h" }, { keys: ["g/3", "e/4"], duration: "h" },
            // Battuta 12
            { keys: ["a/3", "f/4"], duration: "h" }, { keys: ["g/3", "d/4"], duration: "h" },
            // Battuta 13
            { keys: ["c/4", "g/4"], duration: "h" }, { keys: ["b/3", "f/4"], duration: "h" },
            // Battuta 14
            { keys: ["a/3", "e/4"], duration: "h" }, { keys: ["g/3", "c/4"], duration: "h" },
            // Battuta 15
            { keys: ["d/4", "f#/4"], duration: "h" }, { keys: ["b/3", "d/4", "g/4"], duration: "h" },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "w" },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MD riprende melodia con semicrome)
            { keys: ["g/5"], duration: "8" }, { keys: ["a/5"], duration: "16" }, { keys: ["b/5"], duration: "16" }, { keys: ["c/6"], duration: "16" }, { keys: ["d/6"], duration: "16" },
            { keys: ["e/6"], duration: "q" }, { keys: ["c/6"], duration: "q" },
            // Battuta 18 (Discesa rapida)
            { keys: ["b/5"], duration: "16" }, { keys: ["a/5"], duration: "16" }, { keys: ["g/5"], duration: "16" }, { keys: ["f/5"], duration: "16" },
            { keys: ["e/5"], duration: "q" }, { keys: ["d/5"], duration: "8" }, { keys: ["r"], duration: "8" },
            // Battuta 19 (Fanfara con pause)
            { keys: ["c/5"], duration: "q" }, { keys: ["r"], duration: "8" }, { keys: ["e/5"], duration: "8" },
            { keys: ["g/5"], duration: "q" }, { keys: ["r"], duration: "q" },
            // Battuta 20
            { keys: ["f/5"], duration: "q" }, { keys: ["r"], duration: "8" }, { keys: ["a/5"], duration: "8" },
            { keys: ["c/6"], duration: "q" }, { keys: ["r"], duration: "q" },
            // Battuta 21 (Crescendo ritmico)
            { keys: ["g/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["f/5"], duration: "8" },
            { keys: ["g/5"], duration: "8" }, { keys: ["b/5"], duration: "8" }, { keys: ["d/6"], duration: "8" }, { keys: ["f/6"], duration: "8" }, // Arpeggio G7
            // Battuta 22 (Cadenza)
            { keys: ["e/6"], duration: "q" }, { keys: ["d/6"], duration: "q" },
            { keys: ["c/6"], duration: "q" }, { keys: ["b/5"], duration: "q" },
            // Battuta 23 (Accordi finali)
            { keys: ["a/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["e/5"], duration: "8" },
            { keys: ["d/5", "f#/5", "a/5", "c/6"], duration: "h" }, // D9 o G13b9/D
            // Battuta 24
            { keys: ["c/5", "e/5", "g/5", "c/6"], duration: "w" } // Accordo C Maggiore finale
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE A: MS ACCOMPAGNAMENTO MARCIA (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["c/3", "e/3"], duration: "h" },
            // Battuta 2
            { keys: ["f/2", "c/3"], duration: "h" }, { keys: ["f/2", "a/2"], duration: "h" },
            // Battuta 3
            { keys: ["g/2", "d/3"], duration: "h" }, { keys: ["g/2", "b/2"], duration: "h" },
            // Battuta 4
            { keys: ["c/3", "e/3"], duration: "h" }, { keys: ["c/3", "g/3"], duration: "h" },
            // Battuta 5
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["b/2", "d/3"], duration: "h" }, // C | G/B
            // Battuta 6
            { keys: ["a/2", "e/3"], duration: "h" }, { keys: ["d/3", "f/3"], duration: "h" }, // Am | Dm
            // Battuta 7
            { keys: ["g/2", "d/3"], duration: "h" }, { keys: ["g/2", "b/2", "f/3"], duration: "h" }, // G | G7
            // Battuta 8
            { keys: ["c/3", "g/3"], duration: "w" }, // C

            // --- SEZIONE B: MS MELODIA (con semicrome/pause) (Battute 9-16) ---
            // Battuta 9
            { keys: ["g/3"], duration: "q" }, { keys: ["c/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" }, { keys: ["g/4"], duration: "q" },
            // Battuta 10
            { keys: ["f/4"], duration: "q" }, { keys: ["r"], duration: "8" },
            { keys: ["d/4"], duration: "8" }, { keys: ["c/4"], duration: "q" }, { keys: ["b/3"], duration: "q" },
            // Battuta 11
            { keys: ["c/4"], duration: "8" }, { keys: ["d/4"], duration: "16" }, { keys: ["e/4"], duration: "16" }, { keys: ["f/4"], duration: "16" }, { keys: ["g/4"], duration: "16" },
            { keys: ["a/4"], duration: "q" }, { keys: ["g/4"], duration: "q" },
            // Battuta 12
            { keys: ["f/4"], duration: "q" }, { keys: ["e/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" }, { keys: ["r"], duration: "q" },
            // Battuta 13
            { keys: ["g/4"], duration: "q" },
            { keys: ["f/4"], duration: "16" }, { keys: ["e/4"], duration: "16" }, { keys: ["d/4"], duration: "16" }, { keys: ["c/4"], duration: "16" },
            { keys: ["b/3"], duration: "q" }, { keys: ["a/3"], duration: "q" },
            // Battuta 14
            { keys: ["g/3"], duration: "q" }, { keys: ["c/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" }, { keys: ["d/4"], duration: "q" },
            // Battuta 15
            { keys: ["c/4"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["f#/3"], duration: "q" }, { keys: ["g/3"], duration: "q" },
            // Battuta 16
            { keys: ["d/4"], duration: "q" }, { keys: ["c/4"], duration: "q" },
            { keys: ["b/3"], duration: "q" }, { keys: ["r"], duration: "q" },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MS accompagna MD)
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["c/3", "e/3"], duration: "h" },
            // Battuta 18
            { keys: ["f/2", "a/2"], duration: "h" }, { keys: ["d/3", "f/3"], duration: "h" },
            // Battuta 19
            { keys: ["g/2", "c/3"], duration: "h" }, { keys: ["e/2", "g/2"], duration: "h" },
            // Battuta 20
            { keys: ["a/2", "d/3"], duration: "h" }, { keys: ["c/3", "f/3"], duration: "h" },
            // Battuta 21
            { keys: ["g/2"], duration: "w" },
            // Battuta 22
            { keys: ["f/2"], duration: "q" }, { keys: ["c/3"], duration: "q" }, { keys: ["g/2"], duration: "q" }, { keys: ["b/2"], duration: "q" },
            // Battuta 23
            { keys: ["g/2", "d/3", "f/3", "b/3"], duration: "h" }, // G7 completo
            { keys: ["c/2", "e/2", "g/2"], duration: "h" }, // C
            // Battuta 24
            { keys: ["c/2"], duration: "w" } // C basso
        ]
    },     
   {
        id: "beyer-op101-ex46-sonatina6-gracious",
        name: "Preparatory Sonatina No. 6 (Exercise 46 - Gracious)",
        tempo: "Allegretto grazioso",
        category: "beyer_op101_prep_sonatinas",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA GRAZIOSA (Battute 1-8) ---
            // Battuta 1
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 2 (Pausa e semicrome)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["r"], duration: "8", isRest: true }, // Pausa croma
            { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["b/4"], duration: "16", midiValues: [71] }, { keys: ["c/5"], duration: "16", midiValues: [72] }, { keys: ["d/5"], duration: "16", midiValues: [74] },
            // Battuta 3
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 4
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["r"], duration: "q", isRest: true }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 5 (Semicrome discendenti)
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["f/5"], duration: "16", midiValues: [77] }, { keys: ["e/5"], duration: "16", midiValues: [76] }, { keys: ["d/5"], duration: "16", midiValues: [74] }, { keys: ["c/5"], duration: "16", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Battuta 6
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Battuta 7 (Pattern con pause)
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            // Battuta 8 (Cadenza sulla dominante)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO FLUIDO (Battute 9-16) ---
            // Battuta 9
            { keys: ["e/4", "g/4"], duration: "h", midiValues: [64, 67] }, { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] },
            // Battuta 10
            { keys: ["f/4", "a/4"], duration: "h", midiValues: [65, 69] }, { keys: ["d/4", "f/4"], duration: "h", midiValues: [62, 65] },
            // Battuta 11
            { keys: ["g/4", "b/4"], duration: "h", midiValues: [67, 71] }, { keys: ["e/4", "g/4"], duration: "h", midiValues: [64, 67] },
            // Battuta 12
            { keys: ["a/4", "c/5"], duration: "h", midiValues: [69, 72] }, { keys: ["f/4", "a/4"], duration: "h", midiValues: [65, 69] },
            // Battuta 13
            { keys: ["g/4", "b/4"], duration: "h", midiValues: [67, 71] }, { keys: ["e/4", "c/5"], duration: "h", midiValues: [64, 72] },
            // Battuta 14
            { keys: ["d/4", "a/4"], duration: "h", midiValues: [62, 69] }, { keys: ["c/4", "g/4"], duration: "h", midiValues: [60, 67] },
            // Battuta 15
            { keys: ["b/3", "d/4", "f#/4"], duration: "h", midiValues: [59, 62, 66] }, { keys: ["a/3", "c/4", "e/4"], duration: "h", midiValues: [57, 60, 64] },
            // Battuta 16
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MD melodia variata con semicrome)
            { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "16" }, { keys: ["g/5"], duration: "16" }, { keys: ["e/5"], duration: "16" }, { keys: ["c/5"], duration: "16" },
            { keys: ["d/5"], duration: "q" }, { keys: ["b/4"], duration: "q" },
            // Battuta 18 (Scala rapida e pausa)
            { keys: ["c/5"], duration: "16" }, { keys: ["d/5"], duration: "16" }, { keys: ["e/5"], duration: "16" }, { keys: ["f/5"], duration: "16" },
            { keys: ["g/5"], duration: "16" }, { keys: ["a/5"], duration: "16" }, { keys: ["b/5"], duration: "16" }, { keys: ["c/6"], duration: "16" },
            { keys: ["r"], duration: "h", isRest: true },
            // Battuta 19 (Dialogo con MS - MD note tenute)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            // Battuta 20
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            // Battuta 21 (Arpeggi spezzati)
            { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "q" },
            { keys: ["f/5"], duration: "8" }, { keys: ["a/5"], duration: "8" }, { keys: ["c/6"], duration: "q" },
            // Battuta 22 (Progressione cadenzale)
            { keys: ["b/5"], duration: "q" }, { keys: ["g/5"], duration: "q" }, { keys: ["d/5"], duration: "q" }, { keys: ["f#/5"], duration: "q" }, // G7
            // Battuta 23 (Accordi finali)
            { keys: ["e/5"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "h", midiValues: [67, 71, 74, 77] }, // Accordo G7
            // Battuta 24
            { keys: ["c/4", "e/4", "g/4", "c/5"], duration: "w", midiValues: [60, 64, 67, 72] } // Accordo C Finale
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE A: MS ACCOMPAGNAMENTO FLUIDO (Battute 1-8) ---
            // Battuta 1 (Arpeggio C)
            { keys: ["c/3"], duration: "q" }, { keys: ["g/3"], duration: "q" }, { keys: ["e/3"], duration: "q" }, { keys: ["g/3"], duration: "q" },
            // Battuta 2 (Arpeggio F)
            { keys: ["f/2"], duration: "q" }, { keys: ["c/3"], duration: "q" }, { keys: ["a/2"], duration: "q" }, { keys: ["c/3"], duration: "q" },
            // Battuta 3 (Arpeggio G)
            { keys: ["g/2"], duration: "q" }, { keys: ["d/3"], duration: "q" }, { keys: ["b/2"], duration: "q" }, { keys: ["d/3"], duration: "q" },
            // Battuta 4 (Accordo C tenuto)
            { keys: ["c/3"], duration: "h" }, { keys: ["e/3", "g/3"], duration: "h", midiValues: [52, 55] },
            // Battuta 5 (Arpeggio Am)
            { keys: ["a/2"], duration: "q" }, { keys: ["e/3"], duration: "q" }, { keys: ["c/3"], duration: "q" }, { keys: ["e/3"], duration: "q" },
            // Battuta 6 (Arpeggio Dm)
            { keys: ["d/3"], duration: "q" }, { keys: ["a/3"], duration: "q" }, { keys: ["f/3"], duration: "q" }, { keys: ["a/3"], duration: "q" },
            // Battuta 7 (Accordo G)
            { keys: ["g/2"], duration: "h" }, { keys: ["b/2", "d/3"], duration: "h", midiValues: [47, 50] },
            // Battuta 8 (Accordo G7)
            { keys: ["g/2", "f/3"], duration: "h", midiValues: [43, 53] }, { keys: ["b/2", "d/3"], duration: "h", midiValues: [47, 50] },

            // --- SEZIONE B: MS MELODIA GRAZIOSA (Battute 9-16) ---
            // Battuta 9
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 10
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["a/3"], duration: "16", midiValues: [57] }, { keys: ["b/3"], duration: "16", midiValues: [59] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["d/4"], duration: "16", midiValues: [62] },
            // Battuta 11
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 12
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["r"], duration: "q", isRest: true }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            // Battuta 13
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["e/4"], duration: "16", midiValues: [64] }, { keys: ["d/4"], duration: "16", midiValues: [62] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 14
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Battuta 15
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            // Battuta 16
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g/3"], duration: "q", midiValues: [55] },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MS arpeggi per accompagnare)
            { keys: ["c/3"], duration: "q" }, { keys: ["g/3"], duration: "q" }, { keys: ["c/4"], duration: "q" }, { keys: ["g/3"], duration: "q" },
            // Battuta 18
            { keys: ["f/2"], duration: "q" }, { keys: ["c/3"], duration: "q" }, { keys: ["a/2"], duration: "q" }, { keys: ["c/3"], duration: "q" },
            // Battuta 19 (Risposta alla MD)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Battuta 20
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Battuta 21
            { keys: ["c/2"], duration: "w", midiValues: [36] },
            // Battuta 22
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 23
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 24
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    },
{
        id: "beyer-op101-ex47-sonatina7-scherzoso",
        name: "Preparatory Sonatina No. 7 (Exercise 47 - Scherzoso)",
        tempo: "Allegretto scherzoso",
        category: "beyer_op101_prep_sonatinas",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA SCHERZOSA (Battute 1-8) ---
            // Battuta 1 (Inizio con staccato e salto)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Battuta 2 (Semicrome discendenti)
            { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "16", midiValues: [71] }, { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["f/4"], duration: "16", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 3 (Pattern ritmico)
            { keys: ["a/4"], duration: "qd", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 4 (Pausa e risposta)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["r"], duration: "q", isRest: true },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 5 (Variazione con semicrome)
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "16", midiValues: [71] }, { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["c/5"], duration: "16", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 6
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 7 (Salto e discesa)
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            // Battuta 8 (Cadenza sulla dominante)
            { keys: ["g/4"], duration: "q" }, { keys: ["b/4"], duration: "q" },
            { keys: ["d/5"], duration: "q" }, { keys: ["r"], duration: "q", isRest: true },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO LEGGERO (Battute 9-16) ---
            // Battuta 9
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] }, { keys: ["g/3", "e/4"], duration: "h", midiValues: [55, 64] },
            // Battuta 10
            { keys: ["a/3", "f/4"], duration: "h", midiValues: [57, 65] }, { keys: ["c/4", "f/4"], duration: "h", midiValues: [60, 65] },
            // Battuta 11
            { keys: ["b/3", "g/4"], duration: "h", midiValues: [59, 67] }, { keys: ["d/4", "g/4"], duration: "h", midiValues: [62, 67] },
            // Battuta 12
            { keys: ["g/3", "e/4"], duration: "h", midiValues: [55, 64] }, { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] },
            // Battuta 13
            { keys: ["a/3", "e/4"], duration: "h", midiValues: [57, 64] }, { keys: ["f#/3", "c/4"], duration: "h", midiValues: [54, 60] }, // D7/F#
            // Battuta 14
            { keys: ["g/3", "d/4"], duration: "h", midiValues: [55, 62] }, { keys: ["e/3", "c/4"], duration: "h", midiValues: [52, 60] },
            // Battuta 15
            { keys: ["f#/3", "d/4", "a/4"], duration: "h", midiValues: [54, 62, 69] }, // D7
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "h", midiValues: [55, 59, 62, 65] }, // G7
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MD melodia con eco)
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            { keys: ["r"], duration: "8", isRest: true }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 18 (Semicrome brillanti)
            { keys: ["c/5"], duration: "16" }, { keys: ["d/5"], duration: "16" }, { keys: ["e/5"], duration: "16" }, { keys: ["f/5"], duration: "16" },
            { keys: ["g/5"], duration: "16" }, { keys: ["a/5"], duration: "16" }, { keys: ["b/5"], duration: "16" }, { keys: ["c/6"], duration: "16" },
            { keys: ["d/6"], duration: "16" }, { keys: ["c/6"], duration: "16" }, { keys: ["b/5"], duration: "16" }, { keys: ["a/5"], duration: "16" },
            { keys: ["g/5"], duration: "q", midiValues: [79] },
            // Battuta 19 (Dialogo staccato)
            { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["r"], duration: "8", isRest: true },
            // Battuta 20 (Risposta e pausa lunga)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["r"], duration: "h", isRest: true },
            // Battuta 21 (Figure ascendenti sincopate)
            { keys: ["r"], duration: "8", isRest: true }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["r"], duration: "8", isRest: true }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 22 (Crescendo verso dominante)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["e/5"], duration: "8" }, { keys: ["f#/5"], duration: "8" }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            // Battuta 23 (Accordi finali G7 - C)
            { keys: ["d/5", "f#/5", "g/5", "b/5"], duration: "h", midiValues: [74, 78, 79, 83] }, // G7 brillante
            { keys: ["c/5", "e/5", "g/5", "c/6"], duration: "h", midiValues: [72, 76, 79, 84] }, // C
            // Battuta 24
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE A: MS ACCOMPAGNAMENTO LEGGERO (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Battuta 2
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 3
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 4
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 5
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 6
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 7
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Battuta 8
            { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43, 47, 50] }, // Accordo G

            // --- SEZIONE B: MS MELODIA SCHERZOSA (Battute 9-16) ---
            // Battuta 9
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 10
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["b/3"], duration: "16", midiValues: [59] }, { keys: ["a/3"], duration: "16", midiValues: [57] }, { keys: ["g/3"], duration: "16", midiValues: [55] }, { keys: ["f/3"], duration: "16", midiValues: [53] },
            { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 11
            { keys: ["a/3"], duration: "qd", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["r"], duration: "q", isRest: true },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 13
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "16", midiValues: [59] }, { keys: ["a/3"], duration: "16", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "16", midiValues: [57] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Battuta 14
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Battuta 15
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Battuta 16
            { keys: ["g/3"], duration: "q" }, { keys: ["b/3"], duration: "q" },
            { keys: ["d/4"], duration: "q" }, { keys: ["r"], duration: "q", isRest: true },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MS risponde)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 18 (Accompagnamento più pieno)
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] },
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] },
            // Battuta 19
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 20
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 21
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Battuta 22
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 23 (Pedale di dominante)
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 24
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    },
// =======================================================================================
// === ESERCIZIO N.48 (SUONATINA PREPARATORIA 8 - VIRTUOSISTICA LEGGERA) ===
// =======================================================================================

    {
        id: "beyer-op101-ex48-sonatina8-virtuosic",
        name: "Preparatory Sonatina No. 8 (Exercise 48 - Light Virtuosity)",
        tempo: "Vivace",
        category: "beyer_op101_prep_sonatinas",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA COMPLESSA (Battute 1-8) ---
            // Battuta 1 (Scala rapida e staccato)
            { keys: ["c/5"], duration: "16" }, { keys: ["d/5"], duration: "16" }, { keys: ["e/5"], duration: "16" }, { keys: ["f/5"], duration: "16" },
            { keys: ["g/5"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["e/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            // Battuta 2 (Arpeggio e pausa)
            { keys: ["c/4"], duration: "q" },
            { keys: ["g/4"], duration: "16" }, { keys: ["c/5"], duration: "16" }, { keys: ["e/5"], duration: "16" }, { keys: ["g/5"], duration: "16" },
            { keys: ["c/6"], duration: "q" }, { keys: ["r"], duration: "q", isRest: true },
            // Battuta 3 (Croma puntata + semicroma, e discesa veloce)
            { keys: ["b/5"], duration: "8d", midiValues: [83] }, { keys: ["a/5"], duration: "16", midiValues: [81] },
            { keys: ["g/5"], duration: "8" }, { keys: ["f/5"], duration: "16" }, { keys: ["e/5"], duration: "16" }, { keys: ["d/5"], duration: "16" }, { keys: ["c/5"], duration: "16" },
            { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 4 (Pattern ritmico con pause enfatiche)
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Battuta 5 (Passaggio cromatico in semicrome)
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["e/4"], duration: "16" }, { keys: ["f/4"], duration: "16" }, { keys: ["f#/4"], duration: "16" }, { keys: ["g/4"], duration: "16" },
            { keys: ["g#/4"], duration: "16" }, { keys: ["a/4"], duration: "16" }, { keys: ["a#/4"], duration: "16" }, { keys: ["b/4"], duration: "16", midiValues: [71] },
            // Battuta 6 (Salto e arpeggio spezzato)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["e/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            // Battuta 7 (Figura virtuosistica ascendente)
            { keys: ["d/4"], duration: "16" }, { keys: ["e/4"], duration: "16" }, { keys: ["f/4"], duration: "16" }, { keys: ["g/4"], duration: "16" },
            { keys: ["a/4"], duration: "16" }, { keys: ["b/4"], duration: "16" }, { keys: ["c/5"], duration: "16" }, { keys: ["d/5"], duration: "16" },
            { keys: ["e/5"], duration: "16" }, { keys: ["f/5"], duration: "16" }, { keys: ["g/5"], duration: "16" }, { keys: ["a/5"], duration: "16" },
            { keys: ["b/5"], duration: "16" }, { keys: ["c/6"], duration: "16" }, { keys: ["r"], duration: "8", isRest: true },
            // Battuta 8 (Cadenza sulla dominante, staccato)
            { keys: ["g/5"], duration: "8", midiValues: [79] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["r"], duration: "8", isRest: true },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO LEGGERO (Battute 9-16) ---
            // Battuta 9
            { keys: ["g/3", "e/4"], duration: "h" }, { keys: ["c/4", "g/4"], duration: "h" },
            // Battuta 10
            { keys: ["c/4", "e/4"], duration: "h" }, { keys: ["g/3", "e/4"], duration: "h" },
            // Battuta 11
            { keys: ["a/3", "f/4"], duration: "h" }, { keys: ["d/4", "f/4"], duration: "h" },
            // Battuta 12
            { keys: ["g/3", "e/4"], duration: "h" }, { keys: ["c/4", "d/4"], duration: "h" },
            // Battuta 13
            { keys: ["f/3", "c/4"], duration: "h" }, { keys: ["d/3", "b/3"], duration: "h" },
            // Battuta 14
            { keys: ["e/3", "c/4"], duration: "h" }, { keys: ["g/2", "e/3"], duration: "h" },
            // Battuta 15
            { keys: ["b/3", "d/4", "g/4"], duration: "h" }, { keys: ["a/3", "c/4", "f#/4"], duration: "h" }, // G - D7/F#
            // Battuta 16
            { keys: ["g/3", "b/3", "d/4"], duration: "w" }, // G

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MD riprende motivo cromatico)
            { keys: ["c/5"], duration: "8" }, { keys: ["c#/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["d#/5"], duration: "8" },
            { keys: ["e/5"], duration: "q" }, { keys: ["r"], duration: "q", isRest: true },
            // Battuta 18 (Scala discendente rapida)
            { keys: ["g/5"], duration: "16" }, { keys: ["f#/5"], duration: "16" }, { keys: ["f/5"], duration: "16" }, { keys: ["e/5"], duration: "16" },
            { keys: ["eb/5"], duration: "16" }, { keys: ["d/5"], duration: "16" }, { keys: ["db/5"], duration: "16" }, { keys: ["c/5"], duration: "16" },
            { keys: ["b/4"], duration: "q" }, { keys: ["a/4"], duration: "q" },
            // Battuta 19 (Arpeggi spezzati con pause)
            { keys: ["c/4"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["g/4"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["e/5"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["g/5"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true },
            // Battuta 20
            { keys: ["c/6"], duration: "q" }, { keys: ["g/5"], duration: "q" }, { keys: ["e/5"], duration: "q" }, { keys: ["c/5"], duration: "q" },
            // Battuta 21 (Progressione armonica più densa)
            { keys: ["f/4", "a/4"], duration: "q" }, { keys: ["c/5", "e/5"], duration: "q" }, // F - C/E
            { keys: ["d/4", "f#/4", "a/4"], duration: "q" }, { keys: ["b/3", "d/4", "g/4"], duration: "q" }, // D - G/B
            // Battuta 22 (Cadenza)
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "h" }, // Am7
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "h" }, // G7
            // Battuta 23 (Accordo finale C)
            { keys: ["c/4", "e/4", "g/4", "c/5"], duration: "w" }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- PARTE 1: MS ACCOMPAGNAMENTO LEGGERO (Battute 1-8) ---
            // Battuta 1
            { keys: ["c/3"], duration: "q" }, { keys: ["g/2"], duration: "q" }, { keys: ["c/3"], duration: "q" }, { keys: ["e/3"], duration: "q" },
            // Battuta 2
            { keys: ["f/2"], duration: "h" }, { keys: ["c/3"], duration: "h" },
            // Battuta 3
            { keys: ["g/2"], duration: "q" }, { keys: ["d/3"], duration: "q" }, { keys: ["b/2"], duration: "q" }, { keys: ["g/2"], duration: "q" },
            // Battuta 4
            { keys: ["c/3"], duration: "h" }, { keys: ["e/3"], duration: "h" },
            // Battuta 5
            { keys: ["a/2"], duration: "q" }, { keys: ["e/3"], duration: "q" }, { keys: ["a/2"], duration: "q" }, { keys: ["c/3"], duration: "q" },
            // Battuta 6
            { keys: ["d/3"], duration: "h" }, { keys: ["f/2"], duration: "h" },
            // Battuta 7
            { keys: ["g/2"], duration: "w" },
            // Battuta 8
            { keys: ["g/2", "b/2", "d/3"], duration: "w" },

            // --- PARTE 2: MS MELODIA COMPLESSA (Battute 9-16) ---
            // Battuta 9
            { keys: ["c/3"], duration: "16" }, { keys: ["d/3"], duration: "16" }, { keys: ["e/3"], duration: "16" }, { keys: ["f/3"], duration: "16" },
            { keys: ["g/3"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["e/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["e/2"], duration: "8" },
            // Battuta 10
            { keys: ["c/2"], duration: "q" },
            { keys: ["g/2"], duration: "16" }, { keys: ["c/3"], duration: "16" }, { keys: ["e/3"], duration: "16" }, { keys: ["g/3"], duration: "16" },
            { keys: ["c/4"], duration: "q" }, { keys: ["r"], duration: "q", isRest: true },
            // Battuta 11
            { keys: ["b/3"], duration: "8d" }, { keys: ["a/3"], duration: "16" },
            { keys: ["g/3"], duration: "8" }, { keys: ["f/3"], duration: "16" }, { keys: ["e/3"], duration: "16" }, { keys: ["d/3"], duration: "16" }, { keys: ["c/3"], duration: "16" },
            { keys: ["b/2"], duration: "q" },
            // Battuta 12
            { keys: ["a/2"], duration: "q" }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["g/2"], duration: "8" },
            { keys: ["f#/2"], duration: "q" }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["e/2"], duration: "8" },
            // Battuta 13
            { keys: ["d/2"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["e/2"], duration: "16" }, { keys: ["f/2"], duration: "16" }, { keys: ["f#/2"], duration: "16" }, { keys: ["g/2"], duration: "16" },
            { keys: ["g#/2"], duration: "16" }, { keys: ["a/2"], duration: "16" }, { keys: ["a#/2"], duration: "16" }, { keys: ["b/2"], duration: "16" },
            // Battuta 14
            { keys: ["c/3"], duration: "q" }, { keys: ["g/2"], duration: "q" },
            { keys: ["e/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["e/2"], duration: "8" },
            // Battuta 15
            { keys: ["d/2"], duration: "16" }, { keys: ["e/2"], duration: "16" }, { keys: ["f/2"], duration: "16" }, { keys: ["g/2"], duration: "16" },
            { keys: ["a/2"], duration: "16" }, { keys: ["b/2"], duration: "16" }, { keys: ["c/3"], duration: "16" }, { keys: ["d/3"], duration: "16" },
            { keys: ["e/3"], duration: "16" }, { keys: ["f/3"], duration: "16" }, { keys: ["g/3"], duration: "16" }, { keys: ["a/3"], duration: "16" },
            { keys: ["b/3"], duration: "16" }, { keys: ["c/4"], duration: "16" }, { keys: ["r"], duration: "8", isRest: true },
            // Battuta 16
            { keys: ["g/3"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["e/3"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true },
            { keys: ["d/3"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["b/2"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MS accompagna)
            { keys: ["c/3", "g/3"], duration: "h" }, { keys: ["e/3", "g/3"], duration: "h" },
            // Battuta 18
            { keys: ["f/2", "c/3"], duration: "h" }, { keys: ["g/2", "d/3"], duration: "h" },
            // Battuta 19 (Dialogo con MD)
            { keys: ["c/3"], duration: "q" }, { keys: ["g/2"], duration: "q" }, { keys: ["e/3"], duration: "q" }, { keys: ["c/3"], duration: "q" },
            // Battuta 20
            { keys: ["f/2"], duration: "q" }, { keys: ["d/2"], duration: "q" }, { keys: ["b/1"], duration: "q" }, { keys: ["g/1"], duration: "q" },
            // Battuta 21
            { keys: ["c/2"], duration: "w" },
            // Battuta 22
            { keys: ["d/2"], duration: "h" }, { keys: ["g/1"], duration: "h" }, // D - G bassi
            // Battuta 23
            { keys: ["c/2"], duration: "w" }
        ]
    },
   
    {
        id: "beyer-op101-ex49-sonatina9-scales",
        name: "Preparatory Sonatina No. 9 (Exercise 49 - Modulating Scales)",
        tempo: "Allegro scorrevole",
        category: "beyer_op101_prep_sonatinas",
        staveLayout: "grand",
        keySignature: "C", // Key C, ma con alterazioni per scale di D e A
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA (SCALE), MS Accomp. (Battute 1-8) ---
            // Battuta 1 (Scala DoM ascendente)
            { keys: ["c/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["f/5"], duration: "8" },
            { keys: ["g/5"], duration: "8" }, { keys: ["a/5"], duration: "8" }, { keys: ["b/5"], duration: "8" }, { keys: ["c/6"], duration: "8" },
            // Battuta 2 (Scala DoM discendente)
            { keys: ["b/5"], duration: "8" }, { keys: ["a/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["f/5"], duration: "8" },
            { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["g/4"], duration: "8" }, // Chiude su G4
            // Battuta 3 (Scala ReM ascendente - F# e C#)
            { keys: ["d/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["f#/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["a/5"], duration: "8" }, { keys: ["b/5"], duration: "8" }, { keys: ["c#/6"], duration: "8" }, { keys: ["d/6"], duration: "8" },
            // Battuta 4 (Scala ReM discendente)
            { keys: ["c#/6"], duration: "8" }, { keys: ["b/5"], duration: "8" }, { keys: ["a/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            { keys: ["f#/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["a/4"], duration: "8" }, // Chiude su A4
            // Battuta 5 (Scala LaM ascendente - F#, C#, G#)
            { keys: ["a/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["c#/5"], duration: "8" }, { keys: ["d/5"], duration: "8" },
            { keys: ["e/5"], duration: "8" }, { keys: ["f#/5"], duration: "8" }, { keys: ["g#/5"], duration: "8" }, { keys: ["a/5"], duration: "8" },
            // Battuta 6 (Scala LaM discendente)
            { keys: ["g#/5"], duration: "8" }, { keys: ["f#/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" },
            { keys: ["c#/5"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, // Chiude su E4
            // Battuta 7 (Ritorno a C - Passaggio su G7)
            { keys: ["f/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            { keys: ["c/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["f#/5"], duration: "8" },
            // Battuta 8 (Cadenza su Do)
            { keys: ["g/5"], duration: "q" }, { keys: ["e/5"], duration: "q" }, { keys: ["c/5"], duration: "h" },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO (Battute 9-16) ---
            // Battuta 9 (Acc. per scala Do MS)
            { keys: ["e/4", "g/4"], duration: "h" }, { keys: ["c/4", "e/4"], duration: "h" },
            // Battuta 10
            { keys: ["d/4", "f/4"], duration: "h" }, { keys: ["b/3", "d/4"], duration: "h" },
            // Battuta 11 (Acc. per scala Re MS)
            { keys: ["f#/4", "a/4"], duration: "h" }, { keys: ["d/4", "f#/4"], duration: "h" },
            // Battuta 12
            { keys: ["e/4", "g/4"], duration: "h" }, { keys: ["c#/4", "e/4"], duration: "h" },
            // Battuta 13 (Acc. per scala La MS)
            { keys: ["c#/4", "e/4", "a/4"], duration: "h" }, { keys: ["e/4", "g#/4", "b/4"], duration: "h" },
            // Battuta 14
            { keys: ["d/4", "f#/4", "a/4"], duration: "h" }, { keys: ["b/3", "d/4", "g#/4"], duration: "h" },
            // Battuta 15 (Acc. per ritorno a C)
            { keys: ["c/4", "f/4", "a/4"], duration: "h" }, { keys: ["b/3", "d/4", "g/4"], duration: "h" }, // F | G
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "w" }, // C

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MD riprende scala Do variata)
            { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["e/5"], duration: "8" },
            { keys: ["f/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            // Battuta 18 (Scala Re con fioritura)
            { keys: ["a/4"], duration: "8" }, { keys: ["d/5"], duration: "16" }, { keys: ["c#/5"], duration: "16" }, { keys: ["b/4"], duration: "16" }, { keys: ["a/4"], duration: "16" },
            { keys: ["g/4"], duration: "8" }, { keys: ["f#/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            // Battuta 19 (Scala La con pausa)
            { keys: ["a/4"], duration: "q" }, { keys: ["c#/5"], duration: "q" },
            { keys: ["e/5"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["f#/5"], duration: "8" }, { keys: ["g#/5"], duration: "8" },
            // Battuta 20 (Ritorno graduale a C)
            { keys: ["a/5"], duration: "q" }, { keys: ["g/5"], duration: "q" }, { keys: ["f/5"], duration: "q" }, { keys: ["e/5"], duration: "q" },
            // Battuta 21 (Arpeggi C - G7)
            { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["c/6"], duration: "8" },
            { keys: ["b/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["d/5"], duration: "8" },
            // Battuta 22 (Dominante estesa)
            { keys: ["g/4"], duration: "q" }, { keys: ["b/4"], duration: "q" }, { keys: ["d/5"], duration: "q" }, { keys: ["f/5"], duration: "q" },
            // Battuta 23 (Cadenza finale)
            { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" },
            { keys: ["a/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["f#/4"], duration: "8" }, { keys: ["g/4"], duration: "8" },
            // Battuta 24
            { keys: ["c/4", "e/4", "g/4", "c/5"], duration: "w" }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE A: MS ACCOMPAGNAMENTO (Battute 1-8) ---
            // Battuta 1 (Accordo C)
            { keys: ["c/3", "e/3", "g/3"], duration: "h" }, { keys: ["c/3", "e/3", "g/3"], duration: "h" },
            // Battuta 2
            { keys: ["c/3", "e/3", "g/3"], duration: "h" }, { keys: ["c/3", "e/3", "g/3"], duration: "h" },
            // Battuta 3 (Accordo D)
            { keys: ["d/3", "f#/3", "a/3"], duration: "h" }, { keys: ["d/3", "f#/3", "a/3"], duration: "h" },
            // Battuta 4
            { keys: ["d/3", "f#/3", "a/3"], duration: "h" }, { keys: ["d/3", "f#/3", "a/3"], duration: "h" },
            // Battuta 5 (Accordo A)
            { keys: ["a/2", "c#/3", "e/3"], duration: "h" }, { keys: ["a/2", "c#/3", "e/3"], duration: "h" },
            // Battuta 6
            { keys: ["a/2", "c#/3", "e/3"], duration: "h" }, { keys: ["a/2", "c#/3", "e/3"], duration: "h" },
            // Battuta 7 (Accordo G7)
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "h" }, { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "h" },
            // Battuta 8 (Accordo C)
            { keys: ["c/3", "e/3", "g/3"], duration: "w" },

            // --- SEZIONE B: MS MELODIA (SCALE) (Battute 9-16) ---
            // Battuta 9 (Scala DoM ascendente)
            { keys: ["c/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["f/3"], duration: "8" },
            { keys: ["g/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            // Battuta 10 (Scala DoM discendente)
            { keys: ["b/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["f/3"], duration: "8" },
            { keys: ["e/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["c/3"], duration: "8" }, { keys: ["g/2"], duration: "8" },
            // Battuta 11 (Scala ReM ascendente)
            { keys: ["d/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["f#/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["a/3"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["c#/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            // Battuta 12 (Scala ReM discendente)
            { keys: ["c#/4"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["g/3"], duration: "8" },
            { keys: ["f#/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["a/2"], duration: "8" },
            // Battuta 13 (Scala LaM ascendente)
            { keys: ["a/2"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["c#/3"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            { keys: ["e/3"], duration: "8" }, { keys: ["f#/3"], duration: "8" }, { keys: ["g#/3"], duration: "8" }, { keys: ["a/3"], duration: "8" },
            // Battuta 14 (Scala LaM discendente)
            { keys: ["g#/3"], duration: "8" }, { keys: ["f#/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            { keys: ["c#/3"], duration: "8" }, { keys: ["b/2"], duration: "8" }, { keys: ["a/2"], duration: "8" }, { keys: ["e/2"], duration: "8" },
            // Battuta 15 (Ritorno a C - Passaggio su G7)
            { keys: ["f/2"], duration: "8" }, { keys: ["g/2"], duration: "8" }, { keys: ["a/2"], duration: "8" }, { keys: ["b/2"], duration: "8" },
            { keys: ["c/3"], duration: "8" }, { keys: ["d/3"], duration: "8" }, { keys: ["e/3"], duration: "8" }, { keys: ["f#/3"], duration: "8" },
            // Battuta 16 (Cadenza su Do)
            { keys: ["g/3"], duration: "q" }, { keys: ["e/3"], duration: "q" }, { keys: ["c/3"], duration: "h" },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MS accompagna con accordi)
            { keys: ["c/2", "g/2", "c/3"], duration: "h" }, { keys: ["e/2", "g/2", "c/3"], duration: "h" },
            // Battuta 18
            { keys: ["d/2", "a/2", "d/3"], duration: "h" }, { keys: ["f#/2", "a/2", "d/3"], duration: "h" },
            // Battuta 19
            { keys: ["a/1", "e/2", "a/2"], duration: "h" }, { keys: ["c#/2", "e/2", "a/2"], duration: "h" },
            // Battuta 20 (Arpeggi spezzati per variare)
            { keys: ["c/3"], duration: "q" }, { keys: ["g/2"], duration: "q" }, { keys: ["e/3"], duration: "q" }, { keys: ["g/2"], duration: "q" },
            // Battuta 21
            { keys: ["c/2"], duration: "w" },
            // Battuta 22 (Basso per progressione MD)
            { keys: ["f/2"], duration: "h" }, { keys: ["g/2"], duration: "h" },
            // Battuta 23
            { keys: ["g/1", "d/2", "f/2", "b/2"], duration: "w" }, // G7 basso e profondo
            // Battuta 24
            { keys: ["c/1", "g/1", "c/2", "e/2"], duration: "w" } // C finale basso e pieno
        ]
    },
{
        id: "beyer-op101-ex50-sonatina10-newscales",
        name: "Preparatory Sonatina No. 10 (Exercise 50 - New Scales)",
        tempo: "Allegro vivace",
        category: "beyer_op101_prep_sonatinas",
        staveLayout: "grand",
        keySignature: "C", // Key C, ma con alterazioni per F, G, Am
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE A: MD MELODIA (SCALE), MS Accomp. (Battute 1-8) ---
            // Battuta 1 (Scala FaM ascendente - Bb)
            { keys: ["f/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["bb/4"], duration: "8" },
            { keys: ["c/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["f/5"], duration: "8" },
            // Battuta 2 (Scala FaM discendente)
            { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["bb/4"], duration: "8" },
            { keys: ["a/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" }, { keys: ["c/4"], duration: "8" }, // Chiude su C4
            // Battuta 3 (Scala SolM ascendente - F#)
            { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["c/5"], duration: "8" },
            { keys: ["d/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["f#/5"], duration: "8" }, { keys: ["g/5"], duration: "8" },
            // Battuta 4 (Scala SolM discendente)
            { keys: ["f#/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" },
            { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["d/4"], duration: "8" }, // Chiude su D4
            // Battuta 5 (Scala La minore armonica ascendente - G#)
            { keys: ["a/4"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["d/5"], duration: "8" },
            { keys: ["e/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["g#/5"], duration: "8" }, { keys: ["a/5"], duration: "8" },
            // Battuta 6 (Scala La minore melodica discendente - G naturale, F naturale)
            { keys: ["a/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["f/5"], duration: "8" }, { keys: ["e/5"], duration: "8" },
            { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" }, { keys: ["b/4"], duration: "8" }, { keys: ["a/4"], duration: "8" },
            // Battuta 7 (Passaggio di transizione su C7 -> F)
            { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/5"], duration: "8" }, { keys: ["bb/5"], duration: "8" }, // C7
            { keys: ["a/5"], duration: "q" }, { keys: ["f/5"], duration: "q" },
            // Battuta 8 (Cadenza su Fa, per ricollegarsi o preparare inversione)
            { keys: ["f/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["c/5"], duration: "h" },

            // --- SEZIONE B: MD ACCOMPAGNAMENTO (Battute 9-16) ---
            // Battuta 9 (Acc. per scala Fa MS)
            { keys: ["a/3", "c/4", "f/4"], duration: "h" }, { keys: ["a/3", "c/4", "f/4"], duration: "h" },
            // Battuta 10
            { keys: ["g/3", "bb/3", "d/4"], duration: "h" }, { keys: ["g/3", "bb/3", "d/4"], duration: "h" }, // Gm
            // Battuta 11 (Acc. per scala Sol MS)
            { keys: ["b/3", "d/4", "g/4"], duration: "h" }, { keys: ["b/3", "d/4", "g/4"], duration: "h" },
            // Battuta 12
            { keys: ["a/3", "c/4", "e/4"], duration: "h" }, { keys: ["a/3", "c/4", "e/4"], duration: "h" }, // Am
            // Battuta 13 (Acc. per scala La min MS)
            { keys: ["e/4", "a/4", "c/5"], duration: "h" }, { keys: ["e/4", "g#/4", "b/4"], duration: "h" }, // Am | E7
            // Battuta 14
            { keys: ["d/4", "f/4", "a/4"], duration: "h" }, { keys: ["d/4", "f/4", "a/4"], duration: "h" }, // Dm
            // Battuta 15 (Acc. per transizione)
            { keys: ["e/4", "g/4", "bb/4"], duration: "h" }, { keys: ["d/4", "f/4", "a/4"], duration: "h" }, // C7 | F
            // Battuta 16
            { keys: ["c/4", "f/4", "a/4"], duration: "w" }, // F

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MD riprende scala Fa variata)
            { keys: ["f/5"], duration: "8" }, { keys: ["a/5"], duration: "8" }, { keys: ["c/6"], duration: "8" }, { keys: ["a/5"], duration: "8" },
            { keys: ["g/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["c/5"], duration: "8" },
            // Battuta 18 (Scala Sol con fioritura)
            { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "16" }, { keys: ["c/5"], duration: "16" }, { keys: ["b/4"], duration: "16" }, { keys: ["a/4"], duration: "16" },
            { keys: ["g/4"], duration: "q" }, { keys: ["f#/4"], duration: "q" },
            // Battuta 19 (Scala La min con pausa e staccato)
            { keys: ["a/4"], duration: "8" }, { keys: ["r"], duration: "8", isRest: true }, { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" },
            { keys: ["g#/5"], duration: "q" }, { keys: ["a/5"], duration: "q" },
            // Battuta 20 (Discesa verso C)
            { keys: ["g/5"], duration: "q" }, { keys: ["f/5"], duration: "q" }, { keys: ["e/5"], duration: "q" }, { keys: ["d/5"], duration: "q" },
            // Battuta 21 (Arpeggi veloci C - G7)
            { keys: ["c/5"], duration: "16" }, { keys: ["e/5"], duration: "16" }, { keys: ["g/5"], duration: "16" }, { keys: ["c/6"], duration: "16" },
            { keys: ["b/5"], duration: "16" }, { keys: ["g/5"], duration: "16" }, { keys: ["f/5"], duration: "16" }, { keys: ["d/5"], duration: "16" },
            { keys: ["g/4"], duration: "16" }, { keys: ["b/4"], duration: "16" }, { keys: ["d/5"], duration: "16" }, { keys: ["f/5"], duration: "16" },
            { keys: ["e/5"], duration: "16" }, { keys: ["c/5"], duration: "16" }, { keys: ["g/4"], duration: "16" }, { keys: ["e/4"], duration: "16" },
            // Battuta 22 (Dominante estesa)
            { keys: ["d/4"], duration: "q" }, { keys: ["f#/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["c/5"], duration: "q" }, // D7
            // Battuta 23 (Cadenza finale G7 - C)
            { keys: ["b/3", "d/4", "f/4", "g/4"], duration: "h" }, // G7
            { keys: ["c/4", "e/4", "g/4", "c/5"], duration: "h" }, // C
            // Battuta 24
            { keys: ["c/4", "e/4", "g/4", "c/5"], duration: "w" }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE A: MS ACCOMPAGNAMENTO (Battute 1-8) ---
            // Battuta 1 (Accordo F)
            { keys: ["f/2", "a/2", "c/3"], duration: "h" }, { keys: ["f/2", "a/2", "c/3"], duration: "h" },
            // Battuta 2
            { keys: ["f/2", "a/2", "c/3"], duration: "h" }, { keys: ["f/2", "a/2", "c/3"], duration: "h" },
            // Battuta 3 (Accordo G)
            { keys: ["g/2", "b/2", "d/3"], duration: "h" }, { keys: ["g/2", "b/2", "d/3"], duration: "h" },
            // Battuta 4
            { keys: ["g/2", "b/2", "d/3"], duration: "h" }, { keys: ["g/2", "b/2", "d/3"], duration: "h" },
            // Battuta 5 (Accordo Am)
            { keys: ["a/2", "c/3", "e/3"], duration: "h" }, { keys: ["a/2", "c/3", "e/3"], duration: "h" },
            // Battuta 6
            { keys: ["a/2", "c/3", "e/3"], duration: "h" }, { keys: ["a/2", "c/3", "e/3"], duration: "h" },
            // Battuta 7 (Accordo C7)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "h" }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "h" },
            // Battuta 8 (Accordo F)
            { keys: ["f/2", "a/2", "c/3"], duration: "w" },

            // --- SEZIONE B: MS MELODIA (SCALE) (Battute 9-16) ---
            // Battuta 9 (Scala FaM ascendente)
            { keys: ["f/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["bb/3"], duration: "8" },
            { keys: ["c/4"], duration: "8" }, { keys: ["d/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["f/4"], duration: "8" },
            // Battuta 10 (Scala FaM discendente)
            { keys: ["e/4"], duration: "8" }, { keys: ["d/4"], duration: "8" }, { keys: ["c/4"], duration: "8" }, { keys: ["bb/3"], duration: "8" },
            { keys: ["a/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["f/3"], duration: "8" }, { keys: ["c/3"], duration: "8" },
            // Battuta 11 (Scala SolM ascendente)
            { keys: ["g/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            { keys: ["d/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["f#/4"], duration: "8" }, { keys: ["g/4"], duration: "8" },
            // Battuta 12 (Scala SolM discendente)
            { keys: ["f#/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["d/4"], duration: "8" }, { keys: ["c/4"], duration: "8" },
            { keys: ["b/3"], duration: "8" }, { keys: ["a/3"], duration: "8" }, { keys: ["g/3"], duration: "8" }, { keys: ["d/3"], duration: "8" },
            // Battuta 13 (Scala La minore armonica ascendente)
            { keys: ["a/3"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["c/4"], duration: "8" }, { keys: ["d/4"], duration: "8" },
            { keys: ["e/4"], duration: "8" }, { keys: ["f/4"], duration: "8" }, { keys: ["g#/4"], duration: "8" }, { keys: ["a/4"], duration: "8" },
            // Battuta 14 (Scala La minore melodica discendente)
            { keys: ["a/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["f/4"], duration: "8" }, { keys: ["e/4"], duration: "8" },
            { keys: ["d/4"], duration: "8" }, { keys: ["c/4"], duration: "8" }, { keys: ["b/3"], duration: "8" }, { keys: ["a/3"], duration: "8" },
            // Battuta 15 (Passaggio di transizione su C7 -> F)
            { keys: ["c/4"], duration: "8" }, { keys: ["e/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["bb/4"], duration: "8" },
            { keys: ["a/4"], duration: "q" }, { keys: ["f/4"], duration: "q" },
            // Battuta 16 (Cadenza su Fa)
            { keys: ["f/3"], duration: "q" }, { keys: ["a/3"], duration: "q" }, { keys: ["c/4"], duration: "h" },

            // --- SEZIONE C: FINALE (Battute 17-24) ---
            // Battuta 17 (MS accompagna con accordi)
            { keys: ["f/2", "c/3", "f/3"], duration: "h" }, { keys: ["a/2", "c/3", "f/3"], duration: "h" },
            // Battuta 18
            { keys: ["g/2", "d/3", "g/3"], duration: "h" }, { keys: ["b/2", "d/3", "g/3"], duration: "h" },
            // Battuta 19
            { keys: ["a/2", "e/3", "a/3"], duration: "h" }, { keys: ["c/3", "e/3", "a/3"], duration: "h" },
            // Battuta 20 (Arpeggi spezzati)
            { keys: ["f/2"], duration: "q" }, { keys: ["c/3"], duration: "q" }, { keys: ["a/2"], duration: "q" }, { keys: ["c/3"], duration: "q" },
            // Battuta 21
            { keys: ["c/2"], duration: "w" },
            // Battuta 22 (Basso per progressione MD)
            { keys: ["d/2"], duration: "h" }, { keys: ["g/1"], duration: "h" },
            // Battuta 23
            { keys: ["g/1", "d/2", "f/2", "b/2"], duration: "w" },
            // Battuta 24
            { keys: ["c/1", "g/1", "c/2", "e/2"], duration: "w" }
        ]
    },
{
        id: "beyer-op101-ex51-handindep-basic",
        name: "Hand Independence Lv.1 - Ex. 51 (Basic: Minims & Crotchets)",
        tempo: "Andante",
        category: "beyer_op101_hand_indep_lvl1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra (MD)
            // Battute 1-4: MD suona MINIME
            // Battuta 1
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Battuta 2
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            // Battuta 3
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            // Battuta 4
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },

            // Battute 5-8: MD suona SEMIMINIME (Inversione)
            // Battuta 5
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 6
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 7
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 8
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // Battute 1-4: MS suona SEMIMINIME
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 2
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },

            // Battute 5-8: MS suona MINIME (Inversione)
            // Battuta 5
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 6
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 7
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 8
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    },

// ... (Aggiungere qui gli altri esercizi quando definiti) ...






];
beyer_op101_preparatory_sonatina_exercises.push(...sonatina_exercise_41);


if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

const categoryKeyPrepSonatinas = "beyer_op101_prep_sonatinas";

if (typeof window.exerciseData[categoryKeyPrepSonatinas] === 'undefined') {
  window.exerciseData[categoryKeyPrepSonatinas] = [];
}

window.exerciseData[categoryKeyPrepSonatinas].push(...beyer_op101_preparatory_sonatina_exercises);

// console.log(`Esercizi aggiunti alla categoria '${categoryKeyPrepSonatinas}':`, window.exerciseData[categoryKeyPrepSonatinas]);
// console.log(`Stato completo di window.exerciseData dopo ${categoryKeyPrepSonatinas}.js:`, window.exerciseData);