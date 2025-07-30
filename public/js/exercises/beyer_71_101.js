/**
 * js/exercises/beyer_op101_fase4_ex_71_75.js
 * Esercizi da 71 a 75 per la Fase 4 - Beyer Op.101 rivisitato
 * Esercizi melodici, studietti, preparazione a brani più complessi.
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

const beyer_op101_fase4_exercises_71_101 = [
    // =======================================================================================
    // === Esercizio 71: Studio Cantabile in Sol Maggiore ===
    // Focus: Melodia legata espressiva, accompagnamento con arpeggi dolci, introduzione tonalità G Maggiore
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex71",
        name: "Fase 4 - Ex. 71: Studio Cantabile (Sol Magg.)",
        purpose: "Sviluppare melodia legata e fraseggio in Sol Maggiore con accompagnamento arpeggiato.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "G", // Fa#
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1 (4 battute)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] }, // C naturale
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            // Frase 2 (4 battute)
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f#/4"], duration: "h", midiValues: [66] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Frase 3 (ripresa variata)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["c/5"], duration: "h", midiValues: [72] }, // Salto espressivo
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f#/4"], duration: "h.", midiValues: [66] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Frase 4 (conclusione)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            { keys: ["g/3"], duration: "w", midiValues: [55] }
        ],
        notesBass: [ // Arpeggi dolci in crome
            // G
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            // C (IV)
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            // G
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            // D7 (V7)
            {keys:["d/2"],duration:"8",midiValues:[38]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f#/2"],duration:"8",midiValues:[42]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f#/2"],duration:"8",midiValues:[42]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["d/2"],duration:"8",midiValues:[38]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f#/2"],duration:"8",midiValues:[42]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f#/2"],duration:"8",midiValues:[42]},{keys:["c/3"],duration:"8",midiValues:[48]},
            // G
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"w",midiValues:[43]},
            // Ripetizione (simile per altre 8 battute)
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["d/2"],duration:"8",midiValues:[38]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f#/2"],duration:"8",midiValues:[42]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f#/2"],duration:"8",midiValues:[42]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["d/2"],duration:"8",midiValues:[38]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f#/2"],duration:"8",midiValues:[42]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f#/2"],duration:"8",midiValues:[42]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"w",midiValues:[43]}
        ]
    },
    // =======================================================================================
    // === Esercizio 72: Studio Allegro in Fa Maggiore ===
    // Focus: Melodia brillante con staccati e legati, Basso Alberti, introduzione tonalità F Maggiore
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex72",
        name: "Fase 4 - Ex. 72: Studio Allegro (Fa Magg.)",
        purpose: "Sviluppare agilità e articolazione (staccato/legato) in Fa Maggiore.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "F", // Sib
        timeSignature: "2/4", // Allegro
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            { keys: ["f/4"], duration: "8", staccato: true, midiValues: [65] }, { keys: ["a/4"], duration: "8", staccato: true, midiValues: [69] }, { keys: ["c/5"], duration: "8", staccato: true, midiValues: [72] }, { keys: ["a/4"], duration: "8", staccato: true, midiValues: [69] },
            { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Legato
            { keys: ["a/4"], duration: "8", staccato: true, midiValues: [69] }, { keys: ["f/4"], duration: "8", staccato: true, midiValues: [65] }, { keys: ["d/4"], duration: "8", staccato: true, midiValues: [62] }, { keys: ["f/4"], duration: "8", staccato: true, midiValues: [65] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, // E naturale accidentale nella dominante C
            // Frase 2
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, // Scaletta legata
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // E naturale
            { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Ripetizione delle 8 battute per arrivare a 16
            { keys: ["f/4"], duration: "8", staccato: true, midiValues: [65] }, { keys: ["a/4"], duration: "8", staccato: true, midiValues: [69] }, { keys: ["c/5"], duration: "8", staccato: true, midiValues: [72] }, { keys: ["a/4"], duration: "8", staccato: true, midiValues: [69] },
            { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "8", staccato: true, midiValues: [69] }, { keys: ["f/4"], duration: "8", staccato: true, midiValues: [65] }, { keys: ["d/4"], duration: "8", staccato: true, midiValues: [62] }, { keys: ["f/4"], duration: "8", staccato: true, midiValues: [65] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }
        ],
        notesBass: [ // Basso Alberti F(FAC A), C(CEG E), Bb(BbDF D)
            // F
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            // C7
            {keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["e/2"],duration:"8",midiValues:[40]},{keys:["g/2"],duration:"8",midiValues:[43]},
            {keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["e/2"],duration:"8",midiValues:[40]},{keys:["g/2"],duration:"8",midiValues:[43]},
            // Bb
            {keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["f/2"],duration:"8",midiValues:[41]},
            {keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["f/2"],duration:"8",midiValues:[41]},
            // F
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            // Ripetizione per 16 battute
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["e/2"],duration:"8",midiValues:[40]},{keys:["g/2"],duration:"8",midiValues:[43]},
            {keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["e/2"],duration:"8",midiValues:[40]},{keys:["g/2"],duration:"8",midiValues:[43]},
            {keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["f/2"],duration:"8",midiValues:[41]},
            {keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["f/2"],duration:"8",midiValues:[41]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f/2"],duration:"h",midiValues:[41]} // Finale
        ]
    },
    // =======================================================================================
    // === Esercizio 73: Studio Espressivo in Re Minore ===
    // Focus: Espressione in tonalità minore, legato, uso di accordi pieni nella MS, introduzione tonalità Dm
    // =======================================================================================
       {
        id: "beyer-op101-f4-ex73",
        name: "Fase 4 - Ex. 73: Studio Espressivo (Re Min.) - Ultra Semplificato",
        purpose: "Sviluppare l'espressività in Re minore, con melodia legata e accordi pieni MS (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "Dm", // Sib (Re minore naturale/armonico)
        timeSignature: "3/4", // Andante
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["a/3"], duration: "h", midiValues: [57] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, // h. -> h + q
            // Frase 2
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["bb/3"], duration: "q", midiValues: [58] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // h. -> h + q
            // Ripetizione variata
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // h. -> h + q
            { keys: ["c#/4"], duration: "h", midiValues: [61] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }  // h. -> h + q
        ],
        notesBass: [ // Accordi pieni e tenuti, valori puntati convertiti
            { keys: ["d/2","a/2","d/3"], duration: "h", midiValues: [38,45,50] }, { keys: ["d/2","a/2","d/3"], duration: "q", midiValues: [38,45,50] },
            { keys: ["g/2","d/3","bb/2"], duration: "h", midiValues: [43,50,46] }, { keys: ["g/2","d/3","bb/2"], duration: "q", midiValues: [43,50,46] },
            { keys: ["a/1","e/2","a/2","c#/3"], duration: "h", midiValues: [33,40,45,49] }, { keys: ["a/1","e/2","a/2","c#/3"], duration: "q", midiValues: [33,40,45,49] },
            { keys: ["d/2","a/2","d/3"], duration: "h", midiValues: [38,45,50] }, { keys: ["d/2","a/2","d/3"], duration: "q", midiValues: [38,45,50] },
            { keys: ["bb/1","f/2","bb/2"], duration: "h", midiValues: [34,41,46] }, { keys: ["bb/1","f/2","bb/2"], duration: "q", midiValues: [34,41,46] },
            { keys: ["c/2","g/2","c/3","e/3"], duration: "h", midiValues: [36,43,48,52] }, { keys: ["c/2","g/2","c/3","e/3"], duration: "q", midiValues: [36,43,48,52] },
            { keys: ["f/1","c/2","f/2","a/2"], duration: "h", midiValues: [29,36,41,45] }, { keys: ["f/1","c/2","f/2","a/2"], duration: "q", midiValues: [29,36,41,45] },
            { keys: ["a/1","e/2","a/2"], duration: "h", midiValues: [33,40,45] }, { keys: ["a/1","e/2","a/2"], duration: "q", midiValues: [33,40,45] },
            { keys: ["d/2","a/2","d/3"], duration: "h", midiValues: [38,45,50] }, { keys: ["d/2","a/2","d/3"], duration: "q", midiValues: [38,45,50] },
            { keys: ["g/2","d/3","bb/2"], duration: "h", midiValues: [43,50,46] }, { keys: ["g/2","d/3","bb/2"], duration: "q", midiValues: [43,50,46] },
            { keys: ["a/1","e/2","a/2","c#/3"], duration: "h", midiValues: [33,40,45,49] }, { keys: ["a/1","e/2","a/2","c#/3"], duration: "q", midiValues: [33,40,45,49] },
            { keys: ["d/2","a/2","d/3"], duration: "h", midiValues: [38,45,50] }, { keys: ["d/2","a/2","d/3"], duration: "q", midiValues: [38,45,50] },
            { keys: ["e/2","b/2","g/2"], duration: "h", midiValues: [40,47,43] }, { keys: ["e/2","b/2","g/2"], duration: "q", midiValues: [40,47,43] },
            { keys: ["a/1","e/2","c#/3"], duration: "h", midiValues: [33,40,49] }, { keys: ["a/1","e/2","c#/3"], duration: "q", midiValues: [33,40,49] },
            { keys: ["d/2","f/2","a/2"], duration: "h", midiValues: [38,41,45] }, { keys: ["d/2","f/2","a/2"], duration: "q", midiValues: [38,41,45] },
            { keys: ["d/1","d/2"], duration: "h", midiValues: [26,38] }, { keys: ["d/1","d/2"], duration: "q", midiValues: [26,38] }
        ]
    },
    // =======================================================================================
    // === Esercizio 74: Studio Ritmico con Sincopi (Do Maggiore) ===
    // Focus: Introdurre semplici sincopi e ritmi puntati, precisione ritmica.
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex74",
        name: "Fase 4 - Ex. 74: Studio Ritmico (Do Magg.) - Semplificato",
        purpose: "Lavorare su ritmi e precisione ritmica.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            // qd + 8 diventa q + 8 + 8 (o q + q)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Sincopa q + 8r + 8 + q + q  diventa q + 8 + 8 + q + q o simile
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // h. + q  -> h + q + q
            // Frase 2
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Ripetizione
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/2"], duration: "h", midiValues: [45] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/2"], duration: "h", midiValues: [45] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    },
    // =======================================================================================
    // === Esercizio 75: Piccolo Rondò Semplice (A-B-A-C-A) ===
    // Focus: Introdurre una forma musicale semplice, alternanza di temi e tonalità vicine.
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex75",
        name: "Fase 4 - Ex. 75: Rondò Semplice (Do Magg.)",
        purpose: "Familiarizzare con la forma Rondò (A-B-A-C-A) e cambi di carattere/tonalità.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // Moderato
        repetitions: 1, // 40 battute (5 sezioni da 8)
        notesTreble: [
            // === SEZIONE A (Tema Principale - Do Magg.) - 8 battute ===
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },

            // === SEZIONE B (Episodio 1 - Sol Magg.) - 8 battute ===
            { keys: ["d/4"], duration: "q", midiValues: [62], options:{keySignature:"G"} }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "h", midiValues: [55] }, // G
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "h", midiValues: [64] }, // C
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["a/4"], duration: "h", midiValues: [69] }, // D
            { keys: ["g/4"], duration: "w", midiValues: [67] }, // G
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["d/4"], duration: "w", midiValues: [62] }, // Dominante per tornare a C

            // === SEZIONE A (Ritorno Tema) - 8 battute ===
            { keys: ["e/4"], duration: "q", midiValues: [64], options:{keySignature:"C"} }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },

            // === SEZIONE C (Episodio 2 - La Minore) - 8 battute ===
            { keys: ["e/4"], duration: "h", midiValues: [64], options:{keySignature:"Am"} }, { keys: ["a/4"], duration: "h", midiValues: [69] }, // Am
            { keys: ["g#/4"], duration: "h", midiValues: [68] }, { keys: ["b/4"], duration: "h", midiValues: [71] }, // E7
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // Dm
            { keys: ["e/4"], duration: "w", midiValues: [64] }, // E (dominante)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["e/4"], duration: "h", midiValues: [64] }, // Am
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // G (relativa maggiore)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "w", midiValues: [52] }, // Dominante per tornare a C

            // === SEZIONE A (Finale Tema) - 8 battute ===
            { keys: ["e/4"], duration: "q", midiValues: [64], options:{keySignature:"C"} }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],
        notesBass: [
            // ACCOMP. SEZIONE A (Basso Alberti)
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["c/3"],duration:"w",midiValues:[48]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["c/3"],duration:"w",midiValues:[48]},

            // ACCOMP. SEZIONE B (Arpeggi Sol Magg.)
            {keys:["g/2"],duration:"8",midiValues:[43],options:{keySignature:"G"}},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]}, // G
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]}, // C
            {keys:["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]}, // D
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"w",midiValues:[43]}, // G
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f#/3"],duration:"8",midiValues:[54]},{keys:["a/3"],duration:"8",midiValues:[57]},
            {keys:["g/2"],duration:"w",midiValues:[43]}, // Dominante G per tornare a C

            // ACCOMP. SEZIONE A (Ritorno Basso Alberti)
            {keys:["c/3"],duration:"8",midiValues:[48],options:{keySignature:"C"}},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["c/3"],duration:"w",midiValues:[48]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["c/3"],duration:"w",midiValues:[48]},

            // ACCOMP. SEZIONE C (Accordi pieni La Minore)
            {keys:["a/2","e/3","a/3"],duration:"h",midiValues:[45,52,57],options:{keySignature:"Am"}},{keys:["a/2","e/3","a/3"],duration:"h",midiValues:[45,52,57]}, // Am
            {keys:["e/2","b/2","e/3","g#/2"],duration:"h",midiValues:[40,47,52,44]},{keys:["e/2","b/2","e/3","g#/2"],duration:"h",midiValues:[40,47,52,44]}, // E7
            {keys:["d/3","a/3","f/3"],duration:"h",midiValues:[50,57,53]},{keys:["d/3","a/3","f/3"],duration:"h",midiValues:[50,57,53]}, // Dm
            {keys:["e/2","b/2","e/3","g#/2"],duration:"w",midiValues:[40,47,52,44]}, // E7
            {keys:["a/2","e/3","c/3"],duration:"h",midiValues:[45,52,48]},{keys:["a/2","e/3","c/3"],duration:"h",midiValues:[45,52,48]}, // Am
            {keys:["g/2","d/3","b/2"],duration:"h",midiValues:[43,50,47]},{keys:["g/2","d/3","b/2"],duration:"h",midiValues:[43,50,47]}, // G (rel maj)
            {keys:["f/2","c/3","a/2"],duration:"h",midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"],duration:"h",midiValues:[41,48,45]}, // F (rel subdom)
            {keys:["e/2","b/2","g#/2"],duration:"w",midiValues:[40,47,44]}, // E (dominante per tornare a C)

            // ACCOMP. SEZIONE A (Finale Basso Alberti)
            {keys:["c/3"],duration:"8",midiValues:[48],options:{keySignature:"C"}},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["c/3"],duration:"w",midiValues:[48]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["c/2","g/2","c/3"],duration:"w",midiValues:[36,43,48]} // Finale C ottava
        ]
    },




    // =======================================================================================
    // === Esercizio 76: Studio Leggiero in Re Maggiore ===
    // Focus: Agilità della mano destra con passaggi veloci (crome), accompagnamento staccato MS. Tonalità Re Magg.
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex76",
        name: "Fase 4 - Ex. 76: Studio Leggiero (Re Magg.)",
        purpose: "Sviluppare agilità MD con crome e staccato MS in Re Maggiore.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "D", // Fa#, Do#
        timeSignature: "2/4", // Allegretto
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c#/5"], duration: "8", midiValues: [73] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c#/5"], duration: "8", midiValues: [73] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f#/4"], duration: "8", midiValues: [66] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            // Frase 2
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["f#/4"], duration: "8", midiValues: [66] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c#/4"], duration: "8", midiValues: [61] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c#/4"], duration: "8", midiValues: [61] },
            { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Ripetizione delle 8 battute per arrivare a 16
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c#/5"], duration: "8", midiValues: [73] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c#/5"], duration: "8", midiValues: [73] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f#/4"], duration: "8", midiValues: [66] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["f#/4"], duration: "8", midiValues: [66] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c#/4"], duration: "8", midiValues: [61] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c#/4"], duration: "8", midiValues: [61] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }
        ],
        notesBass: [ // Accordi staccati (D, G, A7)
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] }, { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] },
            { keys: ["a/2","e/3"], duration: "q", staccato:true, midiValues: [45,52] }, { keys: ["a/2","e/3"], duration: "q", staccato:true, midiValues: [45,52] }, // A (o A7 con C#)
            { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] }, { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] },
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["a/2","c#/3","e/3"], duration: "q", staccato:true, midiValues: [45,49,52] }, { keys: ["a/2","c#/3","e/3"], duration: "q", staccato:true, midiValues: [45,49,52] }, // A7
            { keys: ["d/3","f#/3","a/3"], duration: "h", midiValues: [50,54,57] }, // D
             // Ripetizione per 16 battute
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] }, { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] },
            { keys: ["a/2","e/3"], duration: "q", staccato:true, midiValues: [45,52] }, { keys: ["a/2","e/3"], duration: "q", staccato:true, midiValues: [45,52] },
            { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] }, { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] },
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["a/2","c#/3","e/3"], duration: "q", staccato:true, midiValues: [45,49,52] }, { keys: ["a/2","c#/3","e/3"], duration: "q", staccato:true, midiValues: [45,49,52] },
            { keys: ["d/2","f#/2","a/2"], duration: "h", midiValues: [38,42,45] } // D finale
        ]
    },
    // =======================================================================================
    // === Esercizio 77: Canzone Popolare Semplice (La Minore) ===
    // Focus: Melodia con carattere nostalgico, accompagnamento con arpeggi spezzati lenti, tonalità La Minore Naturale
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex77",
        name: "Fase 4 - Ex. 77: Canzone Popolare (La Min.) - Semplificata",
        purpose: "Sviluppare fraseggio espressivo in La Minore Naturale con accompagnamento arpeggiato (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "Am", // Nessuna alterazione
        timeSignature: "3/4", // Andantino
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // h. -> h + q
            // Frase 2
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // h. -> h + q
             // Frase 3 (ripresa variata)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["a/3"], duration: "h", midiValues: [57] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, // h. -> h + q
            // Frase 4 (conclusione)
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "h", midiValues: [57] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["a/3"], duration: "h", midiValues: [57] }, { keys: ["a/3"], duration: "q", midiValues: [57] }  // h. -> h + q
        ],
        notesBass: [ // Arpeggi spezzati Am (ACE), G (GBD), Dm (DFA), E (EG#B) o E7 (E G# B D)
                     // h. diventa h + q
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["b/2"],duration:"q",midiValues:[47]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["b/2"],duration:"q",midiValues:[47]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["e/2"],duration:"q",midiValues:[40]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["g#/2"],duration:"q",midiValues:[44]},
            {keys:["e/2"],duration:"q",midiValues:[40]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["g#/2"],duration:"q",midiValues:[44]},
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["b/2"],duration:"q",midiValues:[47]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["b/2"],duration:"q",midiValues:[47]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["e/2"],duration:"q",midiValues:[40]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["g#/2"],duration:"q",midiValues:[44]},
            {keys:["a/2"],duration:"h",midiValues:[45]},{keys:["a/2"],duration:"q",midiValues:[45]}
        ]
    },
    // =======================================================================================
    // === Esercizio 78: Studio con Acciaccature Semplici (Do Maggiore) ===
    // Focus: Introduzione alle acciaccature (grace notes) e tocco brillante.
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex78",
        name: "Fase 4 - Ex. 78: Studio con 'Note Veloci' (Do Magg.) - Semplificato",
        purpose: "Brillantezza melodica con note veloci (ex-acciaccature) e accompagnamento staccato.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // Allegro giocoso
        repetitions: 1, // 16 battute
        notesTreble: [
            // qd (semiminima puntata) diventa q + 8
            // Frase 1
            { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Frase 2
            { keys: ["b/4"], duration: "16", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f#/4"], duration: "h", midiValues: [66] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c#/4"], duration: "q", midiValues: [61] },
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            // Ripetizione
            { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["b/4"], duration: "16", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f#/4"], duration: "h", midiValues: [66] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c#/4"], duration: "q", midiValues: [61] },
            { keys: ["d/4"], duration: "w", midiValues: [62] }
        ],
        notesBass: [
            {keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},
            {keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},
            {keys:["f/2","c/3"], duration:"q", staccato:true, midiValues:[41,48]},{keys:["f/2","c/3"], duration:"q", staccato:true, midiValues:[41,48]},{keys:["f/2","c/3"], duration:"q", staccato:true, midiValues:[41,48]},{keys:["f/2","c/3"], duration:"q", staccato:true, midiValues:[41,48]},
            {keys:["c/3","e/3"], duration:"h", midiValues:[48,52]},{keys:["g/2","b/2"], duration:"h", midiValues:[43,47]},
            {keys:["d/3","a/3"], duration:"q", staccato:true, midiValues:[50,57]},{keys:["d/3","a/3"], duration:"q", staccato:true, midiValues:[50,57]},{keys:["d/3","a/3"], duration:"q", staccato:true, midiValues:[50,57]},{keys:["d/3","a/3"], duration:"q", staccato:true, midiValues:[50,57]},
            {keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"h", midiValues:[43,50]},
            {keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["g/2","d/3"], duration:"h", midiValues:[43,50]},
            {keys:["c/3","e/3","g/3"], duration:"w", midiValues:[48,52,55]},
            {keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},
            {keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},
            {keys:["f/2","c/3"], duration:"q", staccato:true, midiValues:[41,48]},{keys:["f/2","c/3"], duration:"q", staccato:true, midiValues:[41,48]},{keys:["f/2","c/3"], duration:"q", staccato:true, midiValues:[41,48]},{keys:["f/2","c/3"], duration:"q", staccato:true, midiValues:[41,48]},
            {keys:["c/3","e/3"], duration:"h", midiValues:[48,52]},{keys:["g/2","b/2"], duration:"h", midiValues:[43,47]},
            {keys:["d/3","a/3"], duration:"q", staccato:true, midiValues:[50,57]},{keys:["d/3","a/3"], duration:"q", staccato:true, midiValues:[50,57]},{keys:["d/3","a/3"], duration:"q", staccato:true, midiValues:[50,57]},{keys:["d/3","a/3"], duration:"q", staccato:true, midiValues:[50,57]},
            {keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"q", staccato:true, midiValues:[43,50]},{keys:["g/2","d/3"], duration:"h", midiValues:[43,50]},
            {keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["c/3","g/3"], duration:"q", staccato:true, midiValues:[48,55]},{keys:["g/2","d/3"], duration:"h", midiValues:[43,50]},
            {keys:["c/2","g/2","c/3"], duration:"w", midiValues:[36,43,48]}
        ]
    },
    // =======================================================================================
    // === Esercizio 79: Studio "Alla Marcia" in Sib Maggiore ===
    // Focus: Ritmo marziale, accordi pieni e decisi, introduzione tonalità Sib Maggiore
    // =======================================================================================
     {
        id: "beyer-op101-f4-ex79",
        name: "Fase 4 - Ex. 79: Studio 'Alla Marcia' (Sib Magg.) - Semplificato",
        purpose: "Sviluppare un carattere deciso e ritmico in Sib Maggiore (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "Bb", // Sib, Mib
        timeSignature: "4/4", // Tempo di marcia (moderato maestoso)
        repetitions: 1, // 16 battute
        notesTreble: [
            // Frase 1
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // h. + q -> h + q + q
            // Frase 2
            { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["ab/4"], duration: "h", midiValues: [68] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["f/4"], duration: "w", midiValues: [65] },
            // Ripetizione
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["ab/4"], duration: "h", midiValues: [68] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["bb/3"], duration: "w", midiValues: [58] }
        ],
        notesBass: [
            {keys:["bb/2","f/3","bb/3"], duration:"q", midiValues:[46,53,58]},{keys:["bb/2","f/3"], duration:"q", midiValues:[46,53]},{keys:["bb/2","f/3","bb/3"], duration:"q", midiValues:[46,53,58]},{keys:["bb/2","f/3"], duration:"q", midiValues:[46,53]},
            {keys:["bb/2","d/3","f/3"], duration:"h", midiValues:[46,50,53]},{keys:["g/2","d/3","bb/2"], duration:"h", midiValues:[43,50,46]},
            {keys:["c/3","g/3","eb/3"], duration:"q", midiValues:[48,55,51]},{keys:["c/3","g/3"], duration:"q", midiValues:[48,55]},{keys:["f/2","c/3","a/2"], duration:"h", midiValues:[41,48,45]},
            {keys:["f/2","a/2","c/3","eb/3"], duration:"w", midiValues:[41,45,48,51]},
            {keys:["eb/2","bb/2","eb/3"], duration:"q", midiValues:[39,46,51]},{keys:["eb/2","bb/2"], duration:"q", midiValues:[39,46]},{keys:["eb/2","bb/2","eb/3"], duration:"q", midiValues:[39,46,51]},{keys:["eb/2","bb/2"], duration:"q", midiValues:[39,46]},
            {keys:["eb/2","g/2","bb/2"], duration:"h", midiValues:[39,43,46]},{keys:["bb/1","f/2","d/2"], duration:"h", midiValues:[34,41,38]},
            {keys:["g/2","eb/3","c/3"], duration:"q", midiValues:[43,51,48]},{keys:["g/2","eb/3"], duration:"q", midiValues:[43,51]},{keys:["f/2","c/3","a/2"], duration:"h", midiValues:[41,48,45]},
            {keys:["bb/1","f/2","bb/2"], duration:"w", midiValues:[34,41,46]},
            {keys:["bb/2","f/3","bb/3"], duration:"q", midiValues:[46,53,58]},{keys:["bb/2","f/3"], duration:"q", midiValues:[46,53]},{keys:["bb/2","f/3","bb/3"], duration:"q", midiValues:[46,53,58]},{keys:["bb/2","f/3"], duration:"q", midiValues:[46,53]},
            {keys:["bb/2","d/3","f/3"], duration:"h", midiValues:[46,50,53]},{keys:["g/2","d/3","bb/2"], duration:"h", midiValues:[43,50,46]},
            {keys:["c/3","g/3","eb/3"], duration:"q", midiValues:[48,55,51]},{keys:["c/3","g/3"], duration:"q", midiValues:[48,55]},{keys:["f/2","c/3","a/2"], duration:"h", midiValues:[41,48,45]},
            {keys:["f/2","a/2","c/3","eb/3"], duration:"w", midiValues:[41,45,48,51]},
            {keys:["eb/2","bb/2","eb/3"], duration:"q", midiValues:[39,46,51]},{keys:["eb/2","bb/2"], duration:"q", midiValues:[39,46]},{keys:["eb/2","bb/2","eb/3"], duration:"q", midiValues:[39,46,51]},{keys:["eb/2","bb/2"], duration:"q", midiValues:[39,46]},
            {keys:["eb/2","g/2","bb/2"], duration:"h", midiValues:[39,43,46]},{keys:["bb/1","f/2","d/2"], duration:"h", midiValues:[34,41,38]},
            {keys:["g/2","eb/3","c/3"], duration:"q", midiValues:[43,51,48]},{keys:["g/2","eb/3"], duration:"q", midiValues:[43,51]},{keys:["f/2","c/3","a/2"], duration:"h", midiValues:[41,48,45]},
            {keys:["bb/1","f/2","d/2","bb/2"], duration:"w", midiValues:[34,41,38,46]}
        ]
    },
    // =======================================================================================
    // === Esercizio 80: Studio "Scherzando" con Cambi di Dinamica Impliciti ===
    // Focus: Tocco leggero e brillante, suggerire cambi di dinamica attraverso la scrittura, contrappunto leggero.
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex80",
        name: "Fase 4 - Ex. 80: Studio Scherzando (Do Magg.) - Semplificato",
        purpose: "Sviluppare tocco leggero, fraseggio (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "6/8", // Allegro leggero
        repetitions: 1, // 24 battute
        notesTreble: [
            // Sez A (piano)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, // qd -> q + 8
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, // qd. -> (q+8) + (q+8)

            // Sez B (forte - più accordale MD)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "8", midiValues: [76] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["f/5"], duration: "8", midiValues: [77] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "8", midiValues: [72] },

            // Sez A (piano - ritorno)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }
        ],
        notesBass: [
            {keys:["c/3"], duration:"q", staccato:true, midiValues:[48]},{keys:["g/2"], duration:"8", staccato:true, midiValues:[43]},{keys:["c/3"], duration:"q", staccato:true, midiValues:[48]},{keys:["g/2"], duration:"8", staccato:true, midiValues:[43]},
            {keys:["f/2"], duration:"q", staccato:true, midiValues:[41]},{keys:["c/3"], duration:"8", staccato:true, midiValues:[48]},{keys:["f/2"], duration:"q", staccato:true, midiValues:[41]},{keys:["c/3"], duration:"8", staccato:true, midiValues:[48]},
            {keys:["g/2"], duration:"q", staccato:true, midiValues:[43]},{keys:["d/3"], duration:"8", staccato:true, midiValues:[50]},{keys:["g/2"], duration:"q", staccato:true, midiValues:[43]},{keys:["d/3"], duration:"8", staccato:true, midiValues:[50]},
            {keys:["c/3"], duration:"q", midiValues:[48]},{keys:["c/3"], duration:"8", midiValues:[48]},{keys:["c/3"], duration:"q", midiValues:[48]},{keys:["c/3"], duration:"8", midiValues:[48]},
            {keys:["c/3"], duration:"q", staccato:true, midiValues:[48]},{keys:["g/2"], duration:"8", staccato:true, midiValues:[43]},{keys:["c/3"], duration:"q", staccato:true, midiValues:[48]},{keys:["g/2"], duration:"8", staccato:true, midiValues:[43]},
            {keys:["f/2"], duration:"q", staccato:true, midiValues:[41]},{keys:["c/3"], duration:"8", staccato:true, midiValues:[48]},{keys:["f/2"], duration:"q", staccato:true, midiValues:[41]},{keys:["c/3"], duration:"8", staccato:true, midiValues:[48]},
            {keys:["g/2"], duration:"q", staccato:true, midiValues:[43]},{keys:["d/3"], duration:"8", staccato:true, midiValues:[50]},{keys:["g/2"], duration:"q", staccato:true, midiValues:[43]},{keys:["d/3"], duration:"8", staccato:true, midiValues:[50]},
            {keys:["c/3"], duration:"q", midiValues:[48]},{keys:["c/3"], duration:"8", midiValues:[48]},{keys:["c/3"], duration:"q", midiValues:[48]},{keys:["c/3"], duration:"8", midiValues:[48]},
            {keys:["c/3","g/3","e/3"], duration:"q", midiValues:[48,55,52]},{keys:["c/3","g/3","e/3"], duration:"8", midiValues:[48,55,52]},{keys:["c/3","g/3","e/3"], duration:"q", midiValues:[48,55,52]},{keys:["c/3","g/3","e/3"], duration:"8", midiValues:[48,55,52]},
            {keys:["f/2","c/3","a/2"], duration:"q", midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"], duration:"8", midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"], duration:"q", midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"], duration:"8", midiValues:[41,48,45]},
            {keys:["g/2","d/3","b/2"], duration:"q", midiValues:[43,50,47]},{keys:["g/2","d/3","b/2"], duration:"8", midiValues:[43,50,47]},{keys:["g/2","d/3","b/2"], duration:"q", midiValues:[43,50,47]},{keys:["g/2","d/3","b/2"], duration:"8", midiValues:[43,50,47]},
            {keys:["c/3","e/3","g/3"], duration:"q", midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"], duration:"q", midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},
            {keys:["c/3","g/3","e/3"], duration:"q", midiValues:[48,55,52]},{keys:["c/3","g/3","e/3"], duration:"8", midiValues:[48,55,52]},{keys:["c/3","g/3","e/3"], duration:"q", midiValues:[48,55,52]},{keys:["c/3","g/3","e/3"], duration:"8", midiValues:[48,55,52]},
            {keys:["f/2","c/3","a/2"], duration:"q", midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"], duration:"8", midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"], duration:"q", midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"], duration:"8", midiValues:[41,48,45]},
            {keys:["g/2","d/3","b/2"], duration:"q", midiValues:[43,50,47]},{keys:["g/2","d/3","b/2"], duration:"8", midiValues:[43,50,47]},{keys:["g/2","d/3","b/2"], duration:"q", midiValues:[43,50,47]},{keys:["g/2","d/3","b/2"], duration:"8", midiValues:[43,50,47]},
            {keys:["c/3","e/3","g/3"], duration:"q", midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"], duration:"q", midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"], duration:"8", midiValues:[48,52,55]},
            {keys:["c/3"], duration:"q", staccato:true, midiValues:[48]},{keys:["g/2"], duration:"8", staccato:true, midiValues:[43]},{keys:["c/3"], duration:"q", staccato:true, midiValues:[48]},{keys:["g/2"], duration:"8", staccato:true, midiValues:[43]},
            {keys:["f/2"], duration:"q", staccato:true, midiValues:[41]},{keys:["c/3"], duration:"8", staccato:true, midiValues:[48]},{keys:["f/2"], duration:"q", staccato:true, midiValues:[41]},{keys:["c/3"], duration:"8", staccato:true, midiValues:[48]},
            {keys:["g/2"], duration:"q", staccato:true, midiValues:[43]},{keys:["d/3"], duration:"8", staccato:true, midiValues:[50]},{keys:["g/2"], duration:"q", staccato:true, midiValues:[43]},{keys:["d/3"], duration:"8", staccato:true, midiValues:[50]},
            {keys:["c/3"], duration:"q", midiValues:[48]},{keys:["c/3"], duration:"8", midiValues:[48]},{keys:["c/3"], duration:"q", midiValues:[48]},{keys:["c/3"], duration:"8", midiValues:[48]},
            {keys:["c/3"], duration:"q", staccato:true, midiValues:[48]},{keys:["g/2"], duration:"8", staccato:true, midiValues:[43]},{keys:["c/3"], duration:"q", staccato:true, midiValues:[48]},{keys:["g/2"], duration:"8", staccato:true, midiValues:[43]},
            {keys:["f/2"], duration:"q", staccato:true, midiValues:[41]},{keys:["c/3"], duration:"8", staccato:true, midiValues:[48]},{keys:["f/2"], duration:"q", staccato:true, midiValues:[41]},{keys:["c/3"], duration:"8", staccato:true, midiValues:[48]},
            {keys:["g/2"], duration:"q", staccato:true, midiValues:[43]},{keys:["d/3"], duration:"8", staccato:true, midiValues:[50]},{keys:["g/2"], duration:"q", staccato:true, midiValues:[43]},{keys:["d/3"], duration:"8", staccato:true, midiValues:[50]},
            {keys:["c/2"], duration:"q", midiValues:[36]},{keys:["c/2"], duration:"8", midiValues:[36]},{keys:["c/2"], duration:"q", midiValues:[36]},{keys:["c/2"], duration:"8", midiValues:[36]}
        ]
    },
 {
        id: "beyer-op101-f4-ex81",
        name: "Fase 4 - Ex. 81: Studio Leggiero (Re Magg.)",
        purpose: "Sviluppare agilità MD con crome e staccato MS in Re Maggiore.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "D", // Fa#, Do#
        timeSignature: "2/4", // Allegretto
        repetitions: 1, // 16 battute
        notesTreble: [
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c#/5"], duration: "8", midiValues: [73] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c#/5"], duration: "8", midiValues: [73] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f#/4"], duration: "8", midiValues: [66] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["f#/4"], duration: "8", midiValues: [66] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c#/4"], duration: "8", midiValues: [61] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c#/4"], duration: "8", midiValues: [61] },
            { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c#/5"], duration: "8", midiValues: [73] }, { keys: ["d/5"], duration: "8", midiValues: [74] },
            { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c#/5"], duration: "8", midiValues: [73] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f#/4"], duration: "8", midiValues: [66] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["f#/4"], duration: "8", midiValues: [66] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["f#/4"], duration: "8", midiValues: [66] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c#/4"], duration: "8", midiValues: [61] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c#/4"], duration: "8", midiValues: [61] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }
        ],
        notesBass: [
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] }, { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] },
            { keys: ["a/2","e/3"], duration: "q", staccato:true, midiValues: [45,52] }, { keys: ["a/2","e/3"], duration: "q", staccato:true, midiValues: [45,52] },
            { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] }, { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] },
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["a/2","c#/3","e/3"], duration: "q", staccato:true, midiValues: [45,49,52] }, { keys: ["a/2","c#/3","e/3"], duration: "q", staccato:true, midiValues: [45,49,52] },
            { keys: ["d/3","f#/3","a/3"], duration: "h", midiValues: [50,54,57] },
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] }, { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] },
            { keys: ["a/2","e/3"], duration: "q", staccato:true, midiValues: [45,52] }, { keys: ["a/2","e/3"], duration: "q", staccato:true, midiValues: [45,52] },
            { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] }, { keys: ["g/2","d/3"], duration: "q", staccato:true, midiValues: [43,50] },
            { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] }, { keys: ["d/3","a/3"], duration: "q", staccato:true, midiValues: [50,57] },
            { keys: ["a/2","c#/3","e/3"], duration: "q", staccato:true, midiValues: [45,49,52] }, { keys: ["a/2","c#/3","e/3"], duration: "q", staccato:true, midiValues: [45,49,52] },
            { keys: ["d/2","f#/2","a/2"], duration: "h", midiValues: [38,42,45] }
        ]
    },
    // =======================================================================================
    // === Esercizio 82 (Precedentemente Ex. 77): Canzone Popolare Semplice (La Minore) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex82", // ID CORRETTO
        name: "Fase 4 - Ex. 82: Canzone Popolare (La Min.)", // NOME CORRETTO
        purpose: "Sviluppare fraseggio espressivo in La Minore Naturale con accompagnamento arpeggiato.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "Am",
        timeSignature: "3/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["e/4"], duration: "h.", midiValues: [64] },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["d/4"], duration: "h.", midiValues: [62] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["a/3"], duration: "h.", midiValues: [57] },
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "h", midiValues: [57] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["a/3"], duration: "h.", midiValues: [57] }
        ],
        notesBass: [
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["b/2"],duration:"q",midiValues:[47]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["b/2"],duration:"q",midiValues:[47]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["e/2"],duration:"q",midiValues:[40]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["g#/2"],duration:"q",midiValues:[44]},
            {keys:["e/2"],duration:"q",midiValues:[40]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["g#/2"],duration:"q",midiValues:[44]},
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["b/2"],duration:"q",midiValues:[47]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["b/2"],duration:"q",midiValues:[47]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["e/2"],duration:"q",midiValues:[40]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["g#/2"],duration:"q",midiValues:[44]},
            {keys:["a/2"],duration:"h.",midiValues:[45]}
        ]
    },
    // =======================================================================================
    // === Esercizio 83 (Precedentemente Ex. 78): Studio con Acciaccature Semplici (Do Maggiore) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex83",
        name: "Fase 4 - Ex. 83: Minuetto Grazioso (Sol Min.) - Semplificato",
        purpose: "Sviluppare il carattere del minuetto e la gestione di Sol minore (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "Gm", // Sib, Mib
        timeSignature: "3/4",
        repetitions: 1, // 24 battute (A-B-A')
        notesTreble: [
            // Sezione A
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["bb/4"],duration:"q",midiValues:[70]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["f#/4"],duration:"q",midiValues:[66]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["eb/4"],duration:"q",midiValues:[63]},
            {keys:["d/4"],duration:"h",midiValues:[62]},{keys:["d/4"],duration:"q",midiValues:[62]}, // h. -> h + q
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["e/4"],duration:"q",midiValues:[64]},
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["bb/3"],duration:"q",midiValues:[58]},
            {keys:["g/3"],duration:"h",midiValues:[55]},{keys:["g/3"],duration:"q",midiValues:[55]}, // h. -> h + q
            // Sezione B (Trio in Sib Maggiore - relativa maggiore)
            {keys:["f/4"],duration:"q",options:{keySignature:"Bb"},midiValues:[65]},{keys:["bb/4"],duration:"q",midiValues:[70]},{keys:["d/5"],duration:"q",midiValues:[74]},
            {keys:["c/5"],duration:"h",midiValues:[72]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["bb/4"],duration:"q",midiValues:[70]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["eb/4"],duration:"q",midiValues:[63]},
            {keys:["f/4"],duration:"h",midiValues:[65]},{keys:["f/4"],duration:"q",midiValues:[65]}, // h. -> h + q
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["bb/4"],duration:"q",midiValues:[70]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["f/4"],duration:"q",midiValues:[65]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["eb/4"],duration:"q",midiValues:[63]},
            {keys:["d/4"],duration:"h",midiValues:[62]},{keys:["d/4"],duration:"q",midiValues:[62]}, // h. -> h + q
            // Sezione A' (Ritorno a Gm)
            {keys:["d/4"],duration:"q",options:{keySignature:"Gm"},midiValues:[62]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["bb/4"],duration:"q",midiValues:[70]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["f#/4"],duration:"q",midiValues:[66]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["eb/4"],duration:"q",midiValues:[63]},
            {keys:["d/4"],duration:"h",midiValues:[62]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["e/4"],duration:"q",midiValues:[64]},
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["bb/3"],duration:"q",midiValues:[58]},
            {keys:["g/3"],duration:"h",midiValues:[55]},{keys:["g/3"],duration:"q",midiValues:[55]}
        ],
        notesBass: [
            {keys:["g/2","d/3","g/3"],duration:"q",midiValues:[43,50,55]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["g/2"],duration:"q",midiValues:[43]},
            {keys:["d/2","a/2","f#/2"],duration:"q",midiValues:[38,45,42]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["d/2"],duration:"q",midiValues:[38]},
            {keys:["g/2","d/3","bb/2"],duration:"q",midiValues:[43,50,46]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["g/2"],duration:"q",midiValues:[43]},
            {keys:["d/2","a/2","d/3"],duration:"h",midiValues:[38,45,50]},{keys:["d/2","a/2","d/3"],duration:"q",midiValues:[38,45,50]},
            {keys:["c/2","g/2","eb/3"],duration:"q",midiValues:[36,43,51]},{keys:["g/2"],duration:"q",midiValues:[43]},{keys:["c/2"],duration:"q",midiValues:[36]},
            {keys:["c/2","g/2","eb/3"],duration:"q",midiValues:[36,43,51]},{keys:["g/2"],duration:"q",midiValues:[43]},{keys:["c/2"],duration:"q",midiValues:[36]},
            {keys:["g/2","d/3","bb/2"],duration:"q",midiValues:[43,50,46]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["g/2"],duration:"q",midiValues:[43]},
            {keys:["g/2","d/3","g/3"],duration:"h",midiValues:[43,50,55]},{keys:["g/2","d/3","g/3"],duration:"q",midiValues:[43,50,55]},
            {keys:["bb/1","f/2","bb/2"],duration:"q",options:{keySignature:"Bb"},midiValues:[34,41,46]},{keys:["f/2"],duration:"q",midiValues:[41]},{keys:["bb/1"],duration:"q",midiValues:[34]},
            {keys:["f/2","c/3","f/3"],duration:"q",midiValues:[41,48,53]},{keys:["c/3"],duration:"q",midiValues:[48]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["eb/2","bb/2","eb/3"],duration:"q",midiValues:[39,46,51]},{keys:["bb/2"],duration:"q",midiValues:[46]},{keys:["eb/2"],duration:"q",midiValues:[39]},
            {keys:["bb/1","f/2","bb/2"],duration:"h",midiValues:[34,41,46]},{keys:["bb/1","f/2","bb/2"],duration:"q",midiValues:[34,41,46]},
            {keys:["gm/2","d/3","bb/2"],duration:"q",midiValues:[43,50,46]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["gm/2"],duration:"q",midiValues:[43]},
            {keys:["cm/2","g/2","eb/3"],duration:"q",midiValues:[36,43,51]},{keys:["g/2"],duration:"q",midiValues:[43]},{keys:["cm/2"],duration:"q",midiValues:[36]},
            {keys:["f/2","c/3","a/2"],duration:"q",midiValues:[41,48,45]},{keys:["c/3"],duration:"q",midiValues:[48]},{keys:["f/2"],duration:"q",midiValues:[41]},
            {keys:["bb/1","f/2","d/2"],duration:"h",midiValues:[34,41,38]},{keys:["bb/1","f/2","d/2"],duration:"q",midiValues:[34,41,38]},
            {keys:["g/2","d/3","g/3"],duration:"q",options:{keySignature:"Gm"},midiValues:[43,50,55]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["g/2"],duration:"q",midiValues:[43]},
            {keys:["d/2","a/2","f#/2"],duration:"q",midiValues:[38,45,42]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["d/2"],duration:"q",midiValues:[38]},
            {keys:["g/2","d/3","bb/2"],duration:"q",midiValues:[43,50,46]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["g/2"],duration:"q",midiValues:[43]},
            {keys:["d/2","a/2","d/3"],duration:"h",midiValues:[38,45,50]},{keys:["d/2","a/2","d/3"],duration:"q",midiValues:[38,45,50]},
            {keys:["c/2","g/2","eb/3"],duration:"q",midiValues:[36,43,51]},{keys:["g/2"],duration:"q",midiValues:[43]},{keys:["c/2"],duration:"q",midiValues:[36]},
            {keys:["c/2","g/2","eb/3"],duration:"q",midiValues:[36,43,51]},{keys:["g/2"],duration:"q",midiValues:[43]},{keys:["c/2"],duration:"q",midiValues:[36]},
            {keys:["g/2","d/3","bb/2"],duration:"q",midiValues:[43,50,46]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["g/2"],duration:"q",midiValues:[43]},
            {keys:["g/1","g/2","d/3"],duration:"h",midiValues:[31,43,50]},{keys:["g/1","g/2","d/3"],duration:"q",midiValues:[31,43,50]}
        ]
    },
    // =======================================================================================
    // === Esercizio 84 (Precedentemente Ex. 79): Studio "Alla Marcia" in Sib Maggiore ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex84", // ID CORRETTO
        name: "Fase 4 - Ex. 84: Studio 'Alla Marcia' (Sib Magg.)", // NOME CORRETTO
        purpose: "Sviluppare un carattere deciso e ritmico in Sib Maggiore.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "Bb",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "h.", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["ab/4"], duration: "h", midiValues: [68] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["f/4"], duration: "w", midiValues: [65] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            { keys: ["c/4"], duration: "h.", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["ab/4"], duration: "h", midiValues: [68] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            { keys: ["bb/3"], duration: "w", midiValues: [58] }
        ],
        notesBass: [
            {keys:["bb/2","f/3","bb/3"], duration:"q", midiValues:[46,53,58]},{keys:["bb/2","f/3"], duration:"q", midiValues:[46,53]},{keys:["bb/2","f/3","bb/3"], duration:"q", midiValues:[46,53,58]},{keys:["bb/2","f/3"], duration:"q", midiValues:[46,53]},
            {keys:["bb/2","d/3","f/3"], duration:"h", midiValues:[46,50,53]},{keys:["g/2","d/3","bb/2"], duration:"h", midiValues:[43,50,46]},
            {keys:["c/3","g/3","eb/3"], duration:"q", midiValues:[48,55,51]},{keys:["c/3","g/3"], duration:"q", midiValues:[48,55]},{keys:["f/2","c/3","a/2"], duration:"h", midiValues:[41,48,45]},
            {keys:["f/2","a/2","c/3","eb/3"], duration:"w", midiValues:[41,45,48,51]},
            {keys:["eb/2","bb/2","eb/3"], duration:"q", midiValues:[39,46,51]},{keys:["eb/2","bb/2"], duration:"q", midiValues:[39,46]},{keys:["eb/2","bb/2","eb/3"], duration:"q", midiValues:[39,46,51]},{keys:["eb/2","bb/2"], duration:"q", midiValues:[39,46]},
            {keys:["eb/2","g/2","bb/2"], duration:"h", midiValues:[39,43,46]},{keys:["bb/1","f/2","d/2"], duration:"h", midiValues:[34,41,38]},
            {keys:["g/2","eb/3","c/3"], duration:"q", midiValues:[43,51,48]},{keys:["g/2","eb/3"], duration:"q", midiValues:[43,51]},{keys:["f/2","c/3","a/2"], duration:"h", midiValues:[41,48,45]},
            {keys:["bb/1","f/2","bb/2"], duration:"w", midiValues:[34,41,46]},
            {keys:["bb/2","f/3","bb/3"], duration:"q", midiValues:[46,53,58]},{keys:["bb/2","f/3"], duration:"q", midiValues:[46,53]},{keys:["bb/2","f/3","bb/3"], duration:"q", midiValues:[46,53,58]},{keys:["bb/2","f/3"], duration:"q", midiValues:[46,53]},
            {keys:["bb/2","d/3","f/3"], duration:"h", midiValues:[46,50,53]},{keys:["g/2","d/3","bb/2"], duration:"h", midiValues:[43,50,46]},
            {keys:["c/3","g/3","eb/3"], duration:"q", midiValues:[48,55,51]},{keys:["c/3","g/3"], duration:"q", midiValues:[48,55]},{keys:["f/2","c/3","a/2"], duration:"h", midiValues:[41,48,45]},
            {keys:["f/2","a/2","c/3","eb/3"], duration:"w", midiValues:[41,45,48,51]},
            {keys:["eb/2","bb/2","eb/3"], duration:"q", midiValues:[39,46,51]},{keys:["eb/2","bb/2"], duration:"q", midiValues:[39,46]},{keys:["eb/2","bb/2","eb/3"], duration:"q", midiValues:[39,46,51]},{keys:["eb/2","bb/2"], duration:"q", midiValues:[39,46]},
            {keys:["eb/2","g/2","bb/2"], duration:"h", midiValues:[39,43,46]},{keys:["bb/1","f/2","d/2"], duration:"h", midiValues:[34,41,38]},
            {keys:["g/2","eb/3","c/3"], duration:"q", midiValues:[43,51,48]},{keys:["g/2","eb/3"], duration:"q", midiValues:[43,51]},{keys:["f/2","c/3","a/2"], duration:"h", midiValues:[41,48,45]},
            {keys:["bb/1","f/2","d/2","bb/2"], duration:"w", midiValues:[34,41,38,46]}
        ]
    },
    // =======================================================================================
    // === Esercizio 85 (Precedentemente Ex. 80): Studio "Scherzando" con Cambi di Dinamica Impliciti ===
    // =======================================================================================
   {
        id: "beyer-op101-f4-ex85",
        name: "Fase 4 - Ex. 85: Romanza Semplice (Fa Magg.) - Semplificata",
        purpose: "Combinare melodia lirica MD con accompagnamento MS (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "F", // Sib
        timeSignature: "4/4", // Andante con moto
        repetitions: 1, // 16 battute
        notesTreble: [
            // h. + q  ->  h + q + q (o w se possibile)
            {keys:["c/4"],duration:"h", midiValues:[60]},{keys:["c/4"],duration:"q", midiValues:[60]},{keys:["d/4"],duration:"q", midiValues:[62]},
            {keys:["e/4"],duration:"h", midiValues:[64]},{keys:["c/4"],duration:"h", midiValues:[60]}, // E naturale
            {keys:["d/4"],duration:"q", midiValues:[62]},{keys:["c/4"],duration:"q", midiValues:[60]},{keys:["bb/3"],duration:"h", midiValues:[58]},
            {keys:["a/3"],duration:"w", midiValues:[57]},
            {keys:["f/4"],duration:"h", midiValues:[65]},{keys:["f/4"],duration:"q", midiValues:[65]},{keys:["g/4"],duration:"q", midiValues:[67]},
            {keys:["a/4"],duration:"h", midiValues:[69]},{keys:["f/4"],duration:"h", midiValues:[65]},
            {keys:["g/4"],duration:"q", midiValues:[67]},{keys:["e/4"],duration:"q", midiValues:[64]},{keys:["c/4"],duration:"h", midiValues:[60]},
            {keys:["f/4"],duration:"w", midiValues:[65]},
            // Ripetizione variata
            {keys:["c/4"],duration:"h", midiValues:[60]},{keys:["c/4"],duration:"q", midiValues:[60]},{keys:["d/4"],duration:"q", midiValues:[62]},
            {keys:["e/4"],duration:"h", midiValues:[64]},{keys:["c/4"],duration:"h", midiValues:[60]},
            {keys:["d/4"],duration:"q", midiValues:[62]},{keys:["c/4"],duration:"q", midiValues:[60]},{keys:["bb/3"],duration:"h", midiValues:[58]},
            {keys:["a/3"],duration:"w", midiValues:[57]},
            {keys:["f/4"],duration:"h", midiValues:[65]},{keys:["f/4"],duration:"q", midiValues:[65]},{keys:["g/4"],duration:"q", midiValues:[67]},
            {keys:["a/4"],duration:"h", midiValues:[69]},{keys:["f/4"],duration:"h", midiValues:[65]},
            {keys:["g/4"],duration:"q", midiValues:[67]},{keys:["e/4"],duration:"q", midiValues:[64]},{keys:["c/4"],duration:"h", midiValues:[60]},
            {keys:["f/3"],duration:"w", midiValues:[53]}
        ],
        notesBass: [ // Rimuovo le pause 8r e trasformo q. in q + 8
            // Pattern originale: Pausa 8r - Accordo q. - Pausa 8r - Accordo q.
            // Diventa: Accordo q - Accordo 8 - Accordo q - Accordo 8
            {keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},
            {keys:["c/2","g/2"],duration:"q", midiValues:[36,43]},{keys:["c/2","g/2"],duration:"8", midiValues:[36,43]},{keys:["c/2","g/2"],duration:"q", midiValues:[36,43]},{keys:["c/2","g/2"],duration:"8", midiValues:[36,43]},
            {keys:["bb/1","f/2"],duration:"q", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"8", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"q", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"8", midiValues:[34,41]},
            {keys:["c/2","g/2","e/2"],duration:"q", midiValues:[36,43,40]},{keys:["c/2","g/2","e/2"],duration:"8", midiValues:[36,43,40]},{keys:["c/2","g/2","e/2"],duration:"q", midiValues:[36,43,40]},{keys:["c/2","g/2","e/2"],duration:"8", midiValues:[36,43,40]},
            {keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},
            {keys:["bb/1","f/2"],duration:"q", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"8", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"q", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"8", midiValues:[34,41]},
            {keys:["c/2","g/2"],duration:"q", midiValues:[36,43]},{keys:["c/2","g/2"],duration:"8", midiValues:[36,43]},{keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},
            {keys:["f/2","a/2","c/3"],duration:"w", midiValues:[41,45,48]},
            {keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},
            {keys:["c/2","g/2"],duration:"q", midiValues:[36,43]},{keys:["c/2","g/2"],duration:"8", midiValues:[36,43]},{keys:["c/2","g/2"],duration:"q", midiValues:[36,43]},{keys:["c/2","g/2"],duration:"8", midiValues:[36,43]},
            {keys:["bb/1","f/2"],duration:"q", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"8", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"q", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"8", midiValues:[34,41]},
            {keys:["c/2","g/2","e/2"],duration:"q", midiValues:[36,43,40]},{keys:["c/2","g/2","e/2"],duration:"8", midiValues:[36,43,40]},{keys:["c/2","g/2","e/2"],duration:"q", midiValues:[36,43,40]},{keys:["c/2","g/2","e/2"],duration:"8", midiValues:[36,43,40]},
            {keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},
            {keys:["bb/1","f/2"],duration:"q", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"8", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"q", midiValues:[34,41]},{keys:["bb/1","f/2"],duration:"8", midiValues:[34,41]},
            {keys:["c/2","g/2"],duration:"q", midiValues:[36,43]},{keys:["c/2","g/2"],duration:"8", midiValues:[36,43]},{keys:["f/2","c/3"],duration:"q", midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8", midiValues:[41,48]},
            {keys:["f/1","f/2","c/3"],duration:"w", midiValues:[29,41,48]}
        ]
    },

    

    // =======================================================================================
    // === Esercizio 86: Studio "Corale" con Accordi Pieni e Movimento Vocale (RIVISTO) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex86",
        name: "Fase 4 - Ex. 86: Studio Corale (Mi Magg.) - Semplificato",
        purpose: "Controllo degli accordi pieni e chiarezza delle linee vocali interne in Mi Maggiore.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "E",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Soprano e Alto
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g#/4"], duration: "h", midiValues: [68] },
            { keys: ["c#/5"], duration: "h", midiValues: [73] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["e/4"], duration: "w", midiValues: [64] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["d#/4"], duration: "h", midiValues: [63] },
            { keys: ["g#/4"], duration: "h", midiValues: [68] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c#/5"], duration: "h", midiValues: [73] },
            { keys: ["b/4"], duration: "w", midiValues: [71] },
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g#/4"], duration: "h", midiValues: [68] },
            { keys: ["c#/5"], duration: "h", midiValues: [73] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["e/4"], duration: "w", midiValues: [64] },
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["d#/4"], duration: "h", midiValues: [63] },
            { keys: ["g#/4"], duration: "h", midiValues: [68] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c#/5"], duration: "h", midiValues: [73] },
            { keys: ["e/4"], duration: "w", midiValues: [64] }
        ],
        notesBass: [ // Tenore e Basso
            { keys: ["e/3", "b/3"], duration: "h", midiValues: [52,59] }, { keys: ["e/3", "g#/3"], duration: "h", midiValues: [52,56] },
            { keys: ["a/2", "e/3"], duration: "h", midiValues: [45,52] }, { keys: ["a/2", "f#/3"], duration: "h", midiValues: [45,54] },
            { keys: ["g#/2", "d#/3"], duration: "q", midiValues: [44,51] }, { keys: ["f#/2", "c#/3"], duration: "q", midiValues: [42,49] }, { keys: ["e/2", "b/2"], duration: "h", midiValues: [40,47] },
            { keys: ["e/2", "g#/2", "b/2"], duration: "w", midiValues: [40,44,47] },
            { keys: ["d#/2", "b/2"], duration: "h", midiValues: [39,47] }, { keys: ["b/1", "f#/2"], duration: "h", midiValues: [35,42] },
            { keys: ["e/2", "b/2"], duration: "h", midiValues: [40,47] }, { keys: ["e/2", "g#/2"], duration: "h", midiValues: [40,44] },
            { keys: ["f#/2", "c#/3"], duration: "q", midiValues: [42,49] }, { keys: ["g#/2", "d#/3"], duration: "q", midiValues: [44,51] }, { keys: ["a/2", "e/3"], duration: "h", midiValues: [45,52] },
            { keys: ["b/1", "f#/2", "b/2", "d#/3"], duration: "w", midiValues: [35,42,47,51] },
            { keys: ["e/3", "b/3"], duration: "h", midiValues: [52,59] }, { keys: ["e/3", "g#/3"], duration: "h", midiValues: [52,56] },
            { keys: ["a/2", "e/3"], duration: "h", midiValues: [45,52] }, { keys: ["a/2", "f#/3"], duration: "h", midiValues: [45,54] },
            { keys: ["g#/2", "d#/3"], duration: "q", midiValues: [44,51] }, { keys: ["f#/2", "c#/3"], duration: "q", midiValues: [42,49] }, { keys: ["e/2", "b/2"], duration: "h", midiValues: [40,47] },
            { keys: ["e/2", "g#/2", "b/2"], duration: "w", midiValues: [40,44,47] },
            { keys: ["d#/2", "b/2"], duration: "h", midiValues: [39,47] }, { keys: ["b/1", "f#/2"], duration: "h", midiValues: [35,42] },
            { keys: ["e/2", "b/2"], duration: "h", midiValues: [40,47] }, { keys: ["e/2", "g#/2"], duration: "h", midiValues: [40,44] },
            { keys: ["f#/2", "c#/3"], duration: "q", midiValues: [42,49] }, { keys: ["g#/2", "d#/3"], duration: "q", midiValues: [44,51] }, { keys: ["a/2", "e/3"], duration: "h", midiValues: [45,52] },
            { keys: ["e/2", "g#/2", "b/2", "e/3"], duration: "w", midiValues: [40,44,47,52] }
        ]
    },
    // =======================================================================================
    // === Esercizio 87: Tarantella Semplice in La Minore (RIVISTO) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex87",
        name: "Fase 4 - Ex. 87: Tarantella Semplice (La Min.) - Semplificata",
        purpose: "Sviluppare velocità e carattere di danza in La Minore, ritmi base.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "Am",
        timeSignature: "6/8",
        repetitions: 1,
        notesTreble: [ // qd (semiminima puntata) diventa q + 8
            {keys:["a/4"],duration:"8",midiValues:[69]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},
            {keys:["e/5"],duration:"q",midiValues:[76]},{keys:["e/5"],duration:"8",midiValues:[76]},{keys:["d/5"],duration:"8",midiValues:[74]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["b/4"],duration:"8",midiValues:[71]},
            {keys:["a/4"],duration:"8",midiValues:[69]},{keys:["g#/4"],duration:"8",midiValues:[68]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["d/4"],duration:"8",midiValues:[62]},
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]}, // Riempie la battuta
            {keys:["a/4"],duration:"8",midiValues:[69]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},
            {keys:["e/5"],duration:"q",midiValues:[76]},{keys:["e/5"],duration:"8",midiValues:[76]},{keys:["d/5"],duration:"8",midiValues:[74]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["b/4"],duration:"8",midiValues:[71]},
            {keys:["a/4"],duration:"8",midiValues:[69]},{keys:["g#/4"],duration:"8",midiValues:[68]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["c/4"],duration:"8",midiValues:[60]},
            {keys:["a/3"],duration:"q",midiValues:[57]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["a/3"],duration:"q",midiValues:[57]},{keys:["a/3"],duration:"8",midiValues:[57]},
            {keys:["c/4"],duration:"8",options:{keySignature:"C"},midiValues:[60]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["d/4"],duration:"8",midiValues:[62]},
            {keys:["c/4"],duration:"8",midiValues:[60]},{keys:["b/3"],duration:"8",midiValues:[59]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["f/3"],duration:"8",midiValues:[53]},
            {keys:["g/3"],duration:"q",midiValues:[55]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["g/3"],duration:"8",midiValues:[55]},
            {keys:["c/4"],duration:"8",midiValues:[60]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["d/4"],duration:"8",midiValues:[62]},
            {keys:["c/4"],duration:"8",midiValues:[60]},{keys:["b/3"],duration:"8",midiValues:[59]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["a/4"],duration:"8",options:{keySignature:"Am"},midiValues:[69]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},
            {keys:["e/5"],duration:"q",midiValues:[76]},{keys:["e/5"],duration:"8",midiValues:[76]},{keys:["d/5"],duration:"8",midiValues:[74]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["b/4"],duration:"8",midiValues:[71]},
            {keys:["a/4"],duration:"8",midiValues:[69]},{keys:["g#/4"],duration:"8",midiValues:[68]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["d/4"],duration:"8",midiValues:[62]},
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["a/4"],duration:"8",midiValues:[69]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},
            {keys:["e/5"],duration:"q",midiValues:[76]},{keys:["e/5"],duration:"8",midiValues:[76]},{keys:["d/5"],duration:"8",midiValues:[74]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["b/4"],duration:"8",midiValues:[71]},
            {keys:["a/4"],duration:"8",midiValues:[69]},{keys:["g#/4"],duration:"8",midiValues:[68]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["c/4"],duration:"8",midiValues:[60]},
            {keys:["a/3"],duration:"q",midiValues:[57]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["a/3"],duration:"q",midiValues:[57]},{keys:["a/3"],duration:"8",midiValues:[57]}
        ],
        notesBass: [ // qd diventa q + 8
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},
            {keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["e/2","g#/2"],duration:"q",midiValues:[40,44]},{keys:["e/2","g#/2"],duration:"8",midiValues:[40,44]},
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},
            {keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["e/2","g#/2"],duration:"q",midiValues:[40,44]},{keys:["e/2","g#/2"],duration:"8",midiValues:[40,44]},
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},
            {keys:["c/3","g/3"],duration:"q",options:{keySignature:"C"},midiValues:[48,55]},{keys:["c/3","g/3"],duration:"8",midiValues:[48,55]},{keys:["c/3","g/3"],duration:"q",midiValues:[48,55]},{keys:["c/3","g/3"],duration:"8",midiValues:[48,55]},
            {keys:["g/2","d/3"],duration:"q",midiValues:[43,50]},{keys:["g/2","d/3"],duration:"8",midiValues:[43,50]},{keys:["g/2","d/3"],duration:"q",midiValues:[43,50]},{keys:["g/2","d/3"],duration:"8",midiValues:[43,50]},
            {keys:["f/2","c/3"],duration:"q",midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8",midiValues:[41,48]},{keys:["f/2","c/3"],duration:"q",midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8",midiValues:[41,48]},
            {keys:["g/2","d/3"],duration:"q",midiValues:[43,50]},{keys:["g/2","d/3"],duration:"8",midiValues:[43,50]},{keys:["g/2","d/3"],duration:"q",midiValues:[43,50]},{keys:["g/2","d/3"],duration:"8",midiValues:[43,50]},
            {keys:["c/3","g/3"],duration:"q",midiValues:[48,55]},{keys:["c/3","g/3"],duration:"8",midiValues:[48,55]},{keys:["c/3","g/3"],duration:"q",midiValues:[48,55]},{keys:["c/3","g/3"],duration:"8",midiValues:[48,55]},
            {keys:["g/2","d/3"],duration:"q",midiValues:[43,50]},{keys:["g/2","d/3"],duration:"8",midiValues:[43,50]},{keys:["g/2","d/3"],duration:"q",midiValues:[43,50]},{keys:["g/2","d/3"],duration:"8",midiValues:[43,50]},
            {keys:["f/2","c/3"],duration:"q",midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8",midiValues:[41,48]},{keys:["f/2","c/3"],duration:"q",midiValues:[41,48]},{keys:["f/2","c/3"],duration:"8",midiValues:[41,48]},
            {keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},
            {keys:["a/2","e/3"],duration:"q",options:{keySignature:"Am"},midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},
            {keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["e/2","g#/2"],duration:"q",midiValues:[40,44]},{keys:["e/2","g#/2"],duration:"8",midiValues:[40,44]},
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},
            {keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"q",midiValues:[40,47]},{keys:["e/2","b/2"],duration:"8",midiValues:[40,47]},
            {keys:["a/2","e/3"],duration:"q",midiValues:[45,52]},{keys:["a/2","e/3"],duration:"8",midiValues:[45,52]},{keys:["e/2","g#/2"],duration:"q",midiValues:[40,44]},{keys:["e/2","g#/2"],duration:"8",midiValues:[40,44]},
            {keys:["a/1","e/2"],duration:"q",midiValues:[33,40]},{keys:["a/1","e/2"],duration:"8",midiValues:[33,40]},{keys:["a/1","e/2"],duration:"q",midiValues:[33,40]},{keys:["a/1","e/2"],duration:"8",midiValues:[33,40]}
        ]
    },
    // =======================================================================================
    // === Esercizio 88: Studio con Incroci di Mani e Arpeggi Ampi (RIVISTO) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex88",
        name: "Fase 4 - Ex. 88: Studio con Incroci di Mani (Do Magg.) - Semplificato",
        purpose: "Coordinazione e fluidità con incroci di mani e arpeggi ampi.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            // MD tace per le battute dispari, MS suona. Poi si alternano.
            // Questo è difficile da rappresentare senza pause esplicite se il renderer non gestisce lunghezze diverse.
            // Assumo che se un array di note è più corto, significhi silenzio.
            // Oppure, rendo le note della mano che tace vuote (ma VexFlow potrebbe non gradirlo).
            // Per sicurezza, alterno le mani in modo che una riempia la battuta e l'altra sia []
            // Battuta 1: MS suona, MD []
            // Battuta 2: MD suona, MS []
            [], // B1
            {keys:["g/5"],duration:"q",midiValues:[79]},{keys:["e/5"],duration:"q",midiValues:[76]},{keys:["c/5"],duration:"h",midiValues:[72]}, // B2
            [], // B3
            {keys:["a/5"],duration:"q",midiValues:[81]},{keys:["f/5"],duration:"q",midiValues:[77]},{keys:["d/5"],duration:"h",midiValues:[74]}, // B4
            [], // B5
            {keys:["g/5"],duration:"q",midiValues:[79]},{keys:["e/5"],duration:"q",midiValues:[76]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]}, // B6
            [], // B7
            {keys:["f/5"],duration:"h",midiValues:[77]},{keys:["d/5"],duration:"h",midiValues:[74]}, // B8
            [], // B9
            {keys:["g/5"],duration:"q",midiValues:[79]},{keys:["e/5"],duration:"q",midiValues:[76]},{keys:["c/5"],duration:"h",midiValues:[72]}, // B10
            [], // B11
            {keys:["a/5"],duration:"q",midiValues:[81]},{keys:["f/5"],duration:"q",midiValues:[77]},{keys:["d/5"],duration:"h",midiValues:[74]}, // B12
            [], // B13
            {keys:["g/5"],duration:"q",midiValues:[79]},{keys:["e/5"],duration:"q",midiValues:[76]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]}, // B14
            [], // B15
            {keys:["c/4"],duration:"w",midiValues:[60]} // B16 (MD e MS insieme)
        ],
        notesBass: [
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["c/4"],duration:"q",midiValues:[60]}, // B1
            [], // B2
            {keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["a/3"],duration:"q",midiValues:[57]},{keys:["d/4"],duration:"q",midiValues:[62]}, // B3
            [], // B4
            {keys:["e/3"],duration:"q",midiValues:[52]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["b/3"],duration:"q",midiValues:[59]},{keys:["e/4"],duration:"q",midiValues:[64]}, // B5
            [], // B6
            {keys:["f/3"],duration:"q",midiValues:[53]},{keys:["a/3"],duration:"q",midiValues:[57]},{keys:["c/4"],duration:"q",midiValues:[60]},{keys:["f/4"],duration:"q",midiValues:[65]}, // B7
            [], // B8
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["c/4"],duration:"q",midiValues:[60]}, // B9
            [], // B10
            {keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["a/3"],duration:"q",midiValues:[57]},{keys:["d/4"],duration:"q",midiValues:[62]}, // B11
            [], // B12
            {keys:["e/3"],duration:"q",midiValues:[52]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["b/3"],duration:"q",midiValues:[59]},{keys:["e/4"],duration:"q",midiValues:[64]}, // B13
            [], // B14
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]}, // B15
            {keys:["c/3"],duration:"w",midiValues:[48]} // B16 (MD e MS insieme)
        ]
    },
    // =======================================================================================
    // === Esercizio 89: Studio "Legatissimo" con Movimento Cromatico MS (RIVISTO) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex89",
        name: "Fase 4 - Ex. 89: Studio Legatissimo (Sol Magg.) - Semplificato",
        purpose: "Legato profondo MD e movimento cromatico melodico MS.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "G",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            {keys:["b/4"],duration:"w",midiValues:[71]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["a/4"],duration:"q",midiValues:[69]},{keys:["g/4"],duration:"q",midiValues:[67]}, // h. -> h + q
            {keys:["f#/4"],duration:"h",midiValues:[66]},{keys:["e/4"],duration:"h",midiValues:[64]},
            {keys:["d/4"],duration:"w",midiValues:[62]},
            {keys:["c/5"],duration:"w",midiValues:[72]},
            {keys:["b/4"],duration:"h",midiValues:[71]},{keys:["b/4"],duration:"q",midiValues:[71]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["f#/4"],duration:"h",midiValues:[66]},
            {keys:["e/4"],duration:"w",midiValues:[64]},
            {keys:["b/4"],duration:"w",midiValues:[71]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["a/4"],duration:"q",midiValues:[69]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["f#/4"],duration:"h",midiValues:[66]},{keys:["e/4"],duration:"h",midiValues:[64]},
            {keys:["d/4"],duration:"w",midiValues:[62]},
            {keys:["c/5"],duration:"w",midiValues:[72]},
            {keys:["b/4"],duration:"h",midiValues:[71]},{keys:["b/4"],duration:"q",midiValues:[71]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["d/4"],duration:"h",midiValues:[62]},
            {keys:["g/3"],duration:"w",midiValues:[55]}
        ],
        notesBass: [
            {keys:["g/3"],duration:"q",midiValues:[55]},{keys:["g#/3"],duration:"q",midiValues:[56]},{keys:["a/3"],duration:"q",midiValues:[57]},{keys:["a#/3"],duration:"q",midiValues:[58]},
            {keys:["b/3"],duration:"h",midiValues:[59]},{keys:["a#/3"],duration:"h",midiValues:[58]},
            {keys:["a/3"],duration:"q",midiValues:[57]},{keys:["g#/3"],duration:"q",midiValues:[56]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["f#/3"],duration:"q",midiValues:[54]},
            {keys:["f/3"],duration:"h",midiValues:[53]},{keys:["e/3"],duration:"h",midiValues:[52]},
            {keys:["eb/3"],duration:"q",midiValues:[51]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["db/3"],duration:"q",midiValues:[49]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["b/2"],duration:"h",midiValues:[47]},{keys:["bb/2"],duration:"h",midiValues:[46]},
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["ab/2"],duration:"q",midiValues:[44]},{keys:["g/2"],duration:"q",midiValues:[43]},{keys:["f#/2"],duration:"q",midiValues:[42]},
            {keys:["f/2"],duration:"h",midiValues:[41]},{keys:["e/2"],duration:"h",midiValues:[40]},
            {keys:["g/3"],duration:"q",midiValues:[55]},{keys:["g#/3"],duration:"q",midiValues:[56]},{keys:["a/3"],duration:"q",midiValues:[57]},{keys:["a#/3"],duration:"q",midiValues:[58]},
            {keys:["b/3"],duration:"h",midiValues:[59]},{keys:["a#/3"],duration:"h",midiValues:[58]},
            {keys:["a/3"],duration:"q",midiValues:[57]},{keys:["g#/3"],duration:"q",midiValues:[56]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["f#/3"],duration:"q",midiValues:[54]},
            {keys:["f/3"],duration:"h",midiValues:[53]},{keys:["e/3"],duration:"h",midiValues:[52]},
            {keys:["eb/3"],duration:"q",midiValues:[51]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["db/3"],duration:"q",midiValues:[49]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["b/2"],duration:"h",midiValues:[47]},{keys:["bb/2"],duration:"h",midiValues:[46]},
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["ab/2"],duration:"q",midiValues:[44]},{keys:["g/2"],duration:"q",midiValues:[43]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["g/2"],duration:"w",midiValues:[43]}
        ]
    },
    // =======================================================================================
    // === Esercizio 90: Capriccio con Ritmi e Salti (RIVISTO) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex90",
        name: "Fase 4 - Ex. 90: Capriccio (Do Magg.) - Semplificato",
        purpose: "Precisione ritmica, controllo dei salti e carattere capriccioso.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "6/8",
        repetitions: 1,
        notesTreble: [ // qd -> q + 8 ; qd. -> q + 8 + q + 8 (o h+8 se possibile)
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["a/4"],duration:"8",midiValues:[69]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["f/4"],duration:"8",midiValues:[65]},
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["b/3"],duration:"q",midiValues:[59]},{keys:["b/3"],duration:"8",midiValues:[59]},
            {keys:["c/4"],duration:"8",midiValues:[60]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["g/4"],duration:"8",midiValues:[67]},
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["c/4"],duration:"q",midiValues:[60]},{keys:["c/4"],duration:"8",midiValues:[60]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["g/4"],duration:"q",midiValues:[67]}, // q. e q -> h e q
            {keys:["f/4"],duration:"h",midiValues:[65]},{keys:["e/4"],duration:"q",midiValues:[64]},
            {keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["b/4"],duration:"8",midiValues:[71]},
            {keys:["c/5"],duration:"q",midiValues:[72]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["c/5"],duration:"8",midiValues:[72]},
            {keys:["b/4"],duration:"h",midiValues:[71]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["f#/4"],duration:"q",midiValues:[66]},
            {keys:["g/4"],duration:"8",midiValues:[67]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["d/4"],duration:"8",midiValues:[62]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["a/4"],duration:"8",midiValues:[69]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["f/4"],duration:"8",midiValues:[65]},
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["b/3"],duration:"q",midiValues:[59]},{keys:["b/3"],duration:"8",midiValues:[59]},
            {keys:["c/4"],duration:"8",midiValues:[60]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["e/4"],duration:"8",midiValues:[64]},
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["c/4"],duration:"q",midiValues:[60]},{keys:["c/4"],duration:"8",midiValues:[60]}
        ],
        notesBass: [
            {keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},{keys:["c/3"],duration:"8",staccato:true,midiValues:[48]},{keys:["g/3"],duration:"q",staccato:true,midiValues:[55]},{keys:["g/3"],duration:"8",staccato:true,midiValues:[55]},
            {keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},{keys:["c/3"],duration:"8",staccato:true,midiValues:[48]},{keys:["e/3"],duration:"q",staccato:true,midiValues:[52]},{keys:["e/3"],duration:"8",staccato:true,midiValues:[52]},
            {keys:["f/2"],duration:"q",staccato:true,midiValues:[41]},{keys:["f/2"],duration:"8",staccato:true,midiValues:[41]},{keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},{keys:["c/3"],duration:"8",staccato:true,midiValues:[48]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["g/2"],duration:"q",midiValues:[43]},{keys:["g/2"],duration:"8",midiValues:[43]},
            {keys:["g/2"],duration:"q",staccato:true,midiValues:[43]},{keys:["g/2"],duration:"8",staccato:true,midiValues:[43]},{keys:["d/3"],duration:"q",staccato:true,midiValues:[50]},{keys:["d/3"],duration:"8",staccato:true,midiValues:[50]},
            {keys:["g/2"],duration:"q",staccato:true,midiValues:[43]},{keys:["g/2"],duration:"8",staccato:true,midiValues:[43]},{keys:["b/2"],duration:"q",staccato:true,midiValues:[47]},{keys:["b/2"],duration:"8",staccato:true,midiValues:[47]},
            {keys:["c/2"],duration:"q",staccato:true,midiValues:[36]},{keys:["c/2"],duration:"8",staccato:true,midiValues:[36]},{keys:["g/2"],duration:"q",staccato:true,midiValues:[43]},{keys:["g/2"],duration:"8",staccato:true,midiValues:[43]},
            {keys:["c/2"],duration:"q",midiValues:[36]},{keys:["c/2"],duration:"8",midiValues:[36]},{keys:["c/2"],duration:"q",midiValues:[36]},{keys:["c/2"],duration:"8",midiValues:[36]},
            {keys:["f/2","c/3","a/2"],duration:"q",midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"],duration:"8",midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"],duration:"q",midiValues:[41,48,45]},{keys:["f/2","c/3","a/2"],duration:"8",midiValues:[41,48,45]},
            {keys:["c/3","g/3","e/3"],duration:"q",midiValues:[48,55,52]},{keys:["c/3","g/3","e/3"],duration:"8",midiValues:[48,55,52]},{keys:["c/3","g/3","e/3"],duration:"q",midiValues:[48,55,52]},{keys:["c/3","g/3","e/3"],duration:"8",midiValues:[48,55,52]},
            {keys:["d/2","a/2","f/3"],duration:"q",midiValues:[38,45,53]},{keys:["d/2","a/2","f/3"],duration:"8",midiValues:[38,45,53]},{keys:["d/2","a/2","f/3"],duration:"q",midiValues:[38,45,53]},{keys:["d/2","a/2","f/3"],duration:"8",midiValues:[38,45,53]},
            {keys:["g/2","d/3","b/2","f/3"],duration:"q",midiValues:[43,50,47,53]},{keys:["g/2","d/3","b/2","f/3"],duration:"8",midiValues:[43,50,47,53]},{keys:["g/2","d/3","b/2","f/3"],duration:"q",midiValues:[43,50,47,53]},{keys:["g/2","d/3","b/2","f/3"],duration:"8",midiValues:[43,50,47,53]},
            {keys:["c/3","e/3","g/3"],duration:"q",midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"],duration:"8",midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"],duration:"q",midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"],duration:"8",midiValues:[48,52,55]},
            {keys:["f/2","a/2","c/3"],duration:"q",midiValues:[41,45,48]},{keys:["f/2","a/2","c/3"],duration:"8",midiValues:[41,45,48]},{keys:["f/2","a/2","c/3"],duration:"q",midiValues:[41,45,48]},{keys:["f/2","a/2","c/3"],duration:"8",midiValues:[41,45,48]},
            {keys:["g/2","b/2","d/3"],duration:"q",midiValues:[43,47,50]},{keys:["g/2","b/2","d/3"],duration:"8",midiValues:[43,47,50]},{keys:["g/2","b/2","d/3"],duration:"q",midiValues:[43,47,50]},{keys:["g/2","b/2","d/3"],duration:"8",midiValues:[43,47,50]},
            {keys:["c/3","e/3","g/3"],duration:"q",midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"],duration:"8",midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"],duration:"q",midiValues:[48,52,55]},{keys:["c/3","e/3","g/3"],duration:"8",midiValues:[48,52,55]},
            {keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},{keys:["c/3"],duration:"8",staccato:true,midiValues:[48]},{keys:["g/3"],duration:"q",staccato:true,midiValues:[55]},{keys:["g/3"],duration:"8",staccato:true,midiValues:[55]},
            {keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},{keys:["c/3"],duration:"8",staccato:true,midiValues:[48]},{keys:["e/3"],duration:"q",staccato:true,midiValues:[52]},{keys:["e/3"],duration:"8",staccato:true,midiValues:[52]},
            {keys:["f/2"],duration:"q",staccato:true,midiValues:[41]},{keys:["f/2"],duration:"8",staccato:true,midiValues:[41]},{keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},{keys:["c/3"],duration:"8",staccato:true,midiValues:[48]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["g/2"],duration:"q",midiValues:[43]},{keys:["g/2"],duration:"8",midiValues:[43]},
            {keys:["g/2"],duration:"q",staccato:true,midiValues:[43]},{keys:["g/2"],duration:"8",staccato:true,midiValues:[43]},{keys:["d/3"],duration:"q",staccato:true,midiValues:[50]},{keys:["d/3"],duration:"8",staccato:true,midiValues:[50]},
            {keys:["g/2"],duration:"q",staccato:true,midiValues:[43]},{keys:["g/2"],duration:"8",staccato:true,midiValues:[43]},{keys:["b/2"],duration:"q",staccato:true,midiValues:[47]},{keys:["b/2"],duration:"8",staccato:true,midiValues:[47]},
            {keys:["c/2"],duration:"q",staccato:true,midiValues:[36]},{keys:["c/2"],duration:"8",staccato:true,midiValues:[36]},{keys:["g/2"],duration:"q",staccato:true,midiValues:[43]},{keys:["g/2"],duration:"8",staccato:true,midiValues:[43]},
            {keys:["c/2","g/2","c/3"],duration:"q",midiValues:[36,43,48]},{keys:["c/2","g/2","c/3"],duration:"8",midiValues:[36,43,48]},{keys:["c/2","g/2","c/3"],duration:"q",midiValues:[36,43,48]},{keys:["c/2","g/2","c/3"],duration:"8",midiValues:[36,43,48]}
        ]
    },

{
        id: "beyer-op101-f4-ex91",
        name: "Fase 4 - Ex. 91: Valzer Semplice (Do Magg.) - Corretto",
        purpose: "Introdurre il ritmo e il carattere del valzer in Do Maggiore (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "3/4",
        repetitions: 1, // 16 battute
        notesTreble: [
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["c/4"],duration:"q",midiValues:[60]},
            {keys:["d/4"],duration:"h",midiValues:[62]},{keys:["e/4"],duration:"q",midiValues:[64]},
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["b/3"],duration:"q",midiValues:[59]},
            {keys:["c/4"],duration:"h",midiValues:[60]},{keys:["g/3"],duration:"q",midiValues:[55]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["a/4"],duration:"q",midiValues:[69]},{keys:["b/4"],duration:"q",midiValues:[71]},
            {keys:["c/5"],duration:"h",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["a/4"],duration:"q",midiValues:[69]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["e/4"],duration:"h",midiValues:[64]},{keys:["c/4"],duration:"q",midiValues:[60]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["c/4"],duration:"q",midiValues:[60]},
            {keys:["d/4"],duration:"h",midiValues:[62]},{keys:["e/4"],duration:"q",midiValues:[64]},
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["b/3"],duration:"q",midiValues:[59]},
            {keys:["c/4"],duration:"h",midiValues:[60]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["e/4"],duration:"h",midiValues:[64]},{keys:["c/4"],duration:"q",midiValues:[60]},
            {keys:["b/3"],duration:"q",midiValues:[59]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["e/3"],duration:"q",midiValues:[52]},
            {keys:["c/4"],duration:"h",midiValues:[60]},{keys:["c/4"],duration:"q",midiValues:[60]} // h. -> h + q
        ],
        notesBass: [
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["a/2","c/3"],duration:"q",midiValues:[45,48]},{keys:["a/2","c/3"],duration:"q",midiValues:[45,48]},
            {keys:["c/2"],duration:"q",midiValues:[36]},{keys:["e/2","g/2"],duration:"q",midiValues:[40,43]},{keys:["e/2","g/2"],duration:"q",midiValues:[40,43]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["a/2","c/3"],duration:"q",midiValues:[45,48]},{keys:["a/2","c/3"],duration:"q",midiValues:[45,48]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},{keys:["c/3","e/3","g/3"],duration:"q",midiValues:[48,52,55]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["a/2","c/3"],duration:"q",midiValues:[45,48]},{keys:["a/2","c/3"],duration:"q",midiValues:[45,48]},
            {keys:["c/2"],duration:"q",midiValues:[36]},{keys:["e/2","g/2"],duration:"q",midiValues:[40,43]},{keys:["e/2","g/2"],duration:"q",midiValues:[40,43]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["a/2","c/3"],duration:"q",midiValues:[45,48]},{keys:["a/2","c/3"],duration:"q",midiValues:[45,48]},
            {keys:["c/2","e/2","g/2"],duration:"h",midiValues:[36,40,43]},{keys:["c/2","e/2","g/2"],duration:"q",midiValues:[36,40,43]}
        ]
    },
    // =======================================================================================
    // === Esercizio 92: Valzer Elegante in Sol Maggiore (CORRETTO!!!) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex92",
        name: "Fase 4 - Ex. 92: Valzer Elegante (Sol Magg.) - Corretto",
        purpose: "Sviluppare fraseggio elegante e controllo dinamico in Sol Maggiore (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "G",
        timeSignature: "3/4",
        repetitions: 1,
        notesTreble: [
            {keys:["d/5"],duration:"q",midiValues:[74]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["b/4"],duration:"q",midiValues:[71]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["f#/4"],duration:"q",midiValues:[66]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["b/3"],duration:"8",midiValues:[59]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["d/5"],duration:"8",midiValues:[74]},{keys:["g/5"],duration:"8",midiValues:[79]},
            {keys:["f#/5"],duration:"h",midiValues:[78]},{keys:["d/5"],duration:"q",midiValues:[74]},
            {keys:["e/5"],duration:"q",midiValues:[76]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["b/4"],duration:"h",midiValues:[71]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["e/4"],duration:"h",midiValues:[64]},{keys:["f#/4"],duration:"q",midiValues:[66]},
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["b/3"],duration:"q",midiValues:[59]},{keys:["a/3"],duration:"q",midiValues:[57]},
            {keys:["d/4"],duration:"h",midiValues:[62]},{keys:["g/3"],duration:"q",midiValues:[55]},
            {keys:["b/3"],duration:"h",midiValues:[59]},{keys:["c/4"],duration:"q",midiValues:[60]},
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["e/4"],duration:"q",midiValues:[64]},{keys:["f#/4"],duration:"q",midiValues:[66]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["b/3"],duration:"q",midiValues:[59]},
            {keys:["g/3"],duration:"h",midiValues:[55]},{keys:["g/3"],duration:"q",midiValues:[55]}
        ],
        notesBass: [
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3","b/2"],duration:"q",midiValues:[50,47]},{keys:["d/3","b/2"],duration:"q",midiValues:[50,47]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["g/3","e/3"],duration:"q",midiValues:[55,52]},{keys:["g/3","e/3"],duration:"q",midiValues:[55,52]},
            {keys:["d/3"],duration:"q",midiValues:[50]},{keys:["a/3","f#/3"],duration:"q",midiValues:[57,54]},{keys:["a/3","f#/3"],duration:"q",midiValues:[57,54]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3","b/2"],duration:"q",midiValues:[50,47]},{keys:["d/3","b/2"],duration:"q",midiValues:[50,47]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["g/3"],duration:"q",midiValues:[55]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["d/3"],duration:"q",midiValues:[50]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["e/3"],duration:"q",midiValues:[52]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3","b/2"],duration:"q",midiValues:[50,47]},{keys:["g/2","d/3","b/2"],duration:"q",midiValues:[43,50,47]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},{keys:["b/2","d/3"],duration:"q",midiValues:[47,50]},
            {keys:["a/2"],duration:"q",midiValues:[45]},{keys:["c/3","e/3"],duration:"q",midiValues:[48,52]},{keys:["c/3","e/3"],duration:"q",midiValues:[48,52]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["f#/2","a/2"],duration:"q",midiValues:[42,45]},{keys:["f#/2","a/2"],duration:"q",midiValues:[42,45]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3","b/2"],duration:"q",midiValues:[50,47]},{keys:["d/3","b/2"],duration:"q",midiValues:[50,47]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},{keys:["e/3","g/3"],duration:"q",midiValues:[52,55]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["f#/2","a/2"],duration:"q",midiValues:[42,45]},{keys:["f#/2","a/2"],duration:"q",midiValues:[42,45]},
            {keys:["g/2","d/3","b/2"],duration:"h",midiValues:[43,50,47]},{keys:["g/2","d/3","b/2"],duration:"q",midiValues:[43,50,47]}
        ]
    },
    // =======================================================================================
    // === Esercizio 93: Valzer Appassionato in Re Minore (CORRETTO!!!) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex93",
        name: "Fase 4 - Ex. 93: Valzer Appassionato (Re Min.) - Corretto",
        purpose: "Esplorare il carattere appassionato del valzer in Re minore armonica (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "Dm",
        timeSignature: "3/4",
        repetitions: 1,
        notesTreble: [
            {keys:["a/4"],duration:"q",midiValues:[69]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["c#/4"],duration:"q",midiValues:[61]},{keys:["a/3"],duration:"q",midiValues:[57]},
            {keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["bb/4"],duration:"8",midiValues:[70]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["d/5"],duration:"q",midiValues:[74]},{keys:["bb/4"],duration:"q",midiValues:[70]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["a/4"],duration:"q",midiValues:[69]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["c#/4"],duration:"8",midiValues:[61]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["c#/4"],duration:"8",midiValues:[61]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["b/3"],duration:"8",midiValues:[59]},
            {keys:["a/3"],duration:"h",midiValues:[57]},{keys:["a/3"],duration:"q",midiValues:[57]},
            {keys:["f/4"],duration:"h",midiValues:[65]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["bb/3"],duration:"q",midiValues:[58]},{keys:["a/3"],duration:"q",midiValues:[57]},
            {keys:["g/3"],duration:"h",midiValues:[55]},{keys:["g/3"],duration:"q",midiValues:[55]},
            {keys:["f/3"],duration:"h",midiValues:[53]},{keys:["a/3"],duration:"q",midiValues:[57]},
            {keys:["g/3"],duration:"h",midiValues:[55]},{keys:["bb/3"],duration:"q",midiValues:[58]},
            {keys:["a/3"],duration:"q",midiValues:[57]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["d/3"],duration:"q",midiValues:[50]},
            {keys:["d/3"],duration:"h",midiValues:[50]},{keys:["d/3"],duration:"q",midiValues:[50]},
            {keys:["a/4"],duration:"q",options:{keySignature:"Dm"},midiValues:[69]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["c#/4"],duration:"q",midiValues:[61]},{keys:["a/3"],duration:"q",midiValues:[57]},
            {keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["bb/4"],duration:"8",midiValues:[70]},
            {keys:["a/4"],duration:"h",midiValues:[69]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["d/5"],duration:"q",midiValues:[74]},{keys:["bb/4"],duration:"q",midiValues:[70]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["a/4"],duration:"q",midiValues:[69]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["c#/4"],duration:"8",midiValues:[61]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["c#/4"],duration:"8",midiValues:[61]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["b/3"],duration:"8",midiValues:[59]},
            {keys:["d/3"],duration:"h",midiValues:[50]},{keys:["d/3"],duration:"q",midiValues:[50]}
        ],
        notesBass: [
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},
            {keys:["a/1"],duration:"q",midiValues:[33]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},
            {keys:["a/1"],duration:"q",midiValues:[33]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},
            {keys:["g/1"],duration:"q",midiValues:[31]},{keys:["d/2","bb/1"],duration:"q",midiValues:[38,34]},{keys:["d/2","bb/1"],duration:"q",midiValues:[38,34]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},
            {keys:["e/2"],duration:"q",midiValues:[40]},{keys:["b/1","g/1"],duration:"q",midiValues:[35,31]},{keys:["b/1","g/1"],duration:"q",midiValues:[35,31]},
            {keys:["a/1"],duration:"h",midiValues:[33]},{keys:["a/1"],duration:"q",midiValues:[33]},
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["c/3","a/2"],duration:"q",midiValues:[48,45]},{keys:["c/3","a/2"],duration:"q",midiValues:[48,45]},
            {keys:["bb/1"],duration:"q",midiValues:[34]},{keys:["f/2","d/2"],duration:"q",midiValues:[41,38]},{keys:["f/2","d/2"],duration:"q",midiValues:[41,38]},
            {keys:["c/2"],duration:"q",midiValues:[36]},{keys:["g/2","e/2"],duration:"q",midiValues:[43,40]},{keys:["g/2","e/2"],duration:"q",midiValues:[43,40]},
            {keys:["f/1"],duration:"h",midiValues:[29]},{keys:["f/1"],duration:"q",midiValues:[29]},
            {keys:["c/2"],duration:"q",midiValues:[36]},{keys:["g/2","e/2"],duration:"q",midiValues:[43,40]},{keys:["g/2","e/2"],duration:"q",midiValues:[43,40]},
            {keys:["bb/1"],duration:"q",midiValues:[34]},{keys:["f/2","d/2"],duration:"q",midiValues:[41,38]},{keys:["f/2","d/2"],duration:"q",midiValues:[41,38]},
            {keys:["a/1"],duration:"q",midiValues:[33]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},
            {keys:["d/2"],duration:"h",midiValues:[38]},{keys:["d/2"],duration:"q",midiValues:[38]},
            {keys:["d/2"],duration:"q",options:{keySignature:"Dm"},midiValues:[38]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},
            {keys:["a/1"],duration:"q",midiValues:[33]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},
            {keys:["a/1"],duration:"q",midiValues:[33]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},{keys:["e/2","c#/2"],duration:"q",midiValues:[40,37]},
            {keys:["g/1"],duration:"q",midiValues:[31]},{keys:["d/2","bb/1"],duration:"q",midiValues:[38,34]},{keys:["d/2","bb/1"],duration:"q",midiValues:[38,34]},
            {keys:["d/2"],duration:"q",midiValues:[38]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},{keys:["a/2","f/2"],duration:"q",midiValues:[45,41]},
            {keys:["e/2"],duration:"q",midiValues:[40]},{keys:["b/1","g/1"],duration:"q",midiValues:[35,31]},{keys:["b/1","g/1"],duration:"q",midiValues:[35,31]},
            {keys:["d/1","a/1","d/2"],duration:"h",midiValues:[26,33,38]},{keys:["d/1","a/1","d/2"],duration:"q",midiValues:[26,33,38]}
        ]
    },
    // =======================================================================================
    // === Esercizio 94: Valzer Lento Espressivo in Mib Maggiore (CORRETTO!!!) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex94",
        name: "Fase 4 - Ex. 94: Valzer Lento (Mib Magg.) - Corretto",
        purpose: "Sviluppare fraseggio espressivo e controllo degli accordi di settima in Mib Maggiore (ritmi base).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "Eb",
        timeSignature: "3/4",
        repetitions: 1,
        notesTreble: [
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["bb/4"],duration:"q",midiValues:[70]},{keys:["eb/5"],duration:"q",midiValues:[75]},
            {keys:["d/5"],duration:"h",midiValues:[74]},{keys:["c/5"],duration:"q",midiValues:[72]},
            {keys:["bb/4"],duration:"q",midiValues:[70]},{keys:["ab/4"],duration:"q",midiValues:[68]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["f/4"],duration:"h",midiValues:[65]},{keys:["eb/4"],duration:"q",midiValues:[63]},
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["f/4"],duration:"q",midiValues:[65]},
            {keys:["eb/4"],duration:"h",midiValues:[63]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["eb/4"],duration:"q",midiValues:[63]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["bb/4"],duration:"h",midiValues:[70]},{keys:["bb/4"],duration:"q",midiValues:[70]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["bb/4"],duration:"q",midiValues:[70]},{keys:["eb/5"],duration:"q",midiValues:[75]},
            {keys:["d/5"],duration:"h",midiValues:[74]},{keys:["c/5"],duration:"q",midiValues:[72]},
            {keys:["bb/4"],duration:"q",midiValues:[70]},{keys:["ab/4"],duration:"q",midiValues:[68]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["f/4"],duration:"h",midiValues:[65]},{keys:["eb/4"],duration:"q",midiValues:[63]},
            {keys:["db/4"],duration:"h",midiValues:[61]},{keys:["c/4"],duration:"q",midiValues:[60]},
            {keys:["bb/3"],duration:"h",midiValues:[58]},{keys:["ab/3"],duration:"q",midiValues:[56]},
            {keys:["g/3"],duration:"q",midiValues:[55]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["eb/3"],duration:"q",midiValues:[51]},
            {keys:["eb/3"],duration:"h",midiValues:[51]},{keys:["eb/3"],duration:"q",midiValues:[51]}
        ],
        notesBass: [
            {keys:["eb/2"],duration:"q",midiValues:[39]},{keys:["g/2","bb/2"],duration:"q",midiValues:[43,46]},{keys:["g/2","bb/2"],duration:"q",midiValues:[43,46]},
            {keys:["bb/1"],duration:"q",midiValues:[34]},{keys:["d/2","f/2"],duration:"q",midiValues:[38,41]},{keys:["d/2","f/2"],duration:"q",midiValues:[38,41]},
            {keys:["ab/1"],duration:"q",midiValues:[32]},{keys:["c/2","eb/2"],duration:"q",midiValues:[36,39]},{keys:["c/2","eb/2"],duration:"q",midiValues:[36,39]},
            {keys:["eb/2"],duration:"q",midiValues:[39]},{keys:["g/2","bb/2"],duration:"q",midiValues:[43,46]},{keys:["g/2","bb/2"],duration:"q",midiValues:[43,46]},
            {keys:["cm/2"],duration:"q",midiValues:[36]},{keys:["g/2","eb/3"],duration:"q",midiValues:[43,51]},{keys:["g/2","eb/3"],duration:"q",midiValues:[43,51]},
            {keys:["fm/1"],duration:"q",midiValues:[29]},{keys:["c/2","ab/2"],duration:"q",midiValues:[36,44]},{keys:["c/2","ab/2"],duration:"q",midiValues:[36,44]},
            {keys:["bb/1"],duration:"q",midiValues:[34]},{keys:["d/2","f/2","ab/2"],duration:"q",midiValues:[38,41,44]},{keys:["d/2","f/2","ab/2"],duration:"q",midiValues:[38,41,44]},
            {keys:["eb/2"],duration:"h",midiValues:[39]},{keys:["eb/2"],duration:"q",midiValues:[39]},
            {keys:["eb/2"],duration:"q",midiValues:[39]},{keys:["g/2","bb/2"],duration:"q",midiValues:[43,46]},{keys:["g/2","bb/2"],duration:"q",midiValues:[43,46]},
            {keys:["bb/1"],duration:"q",midiValues:[34]},{keys:["d/2","f/2"],duration:"q",midiValues:[38,41]},{keys:["d/2","f/2"],duration:"q",midiValues:[38,41]},
            {keys:["ab/1"],duration:"q",midiValues:[32]},{keys:["c/2","eb/2"],duration:"q",midiValues:[36,39]},{keys:["c/2","eb/2"],duration:"q",midiValues:[36,39]},
            {keys:["eb/2"],duration:"q",midiValues:[39]},{keys:["g/2","bb/2"],duration:"q",midiValues:[43,46]},{keys:["g/2","bb/2"],duration:"q",midiValues:[43,46]},
            {keys:["ab/1"],duration:"q",midiValues:[32]},{keys:["eb/2","c/2"],duration:"q",midiValues:[39,36]},{keys:["eb/2","c/2"],duration:"q",midiValues:[39,36]},
            {keys:["db/2"],duration:"q",midiValues:[37]},{keys:["f/2","ab/2"],duration:"q",midiValues:[41,44]},{keys:["f/2","ab/2"],duration:"q",midiValues:[41,44]},
            {keys:["bb/1"],duration:"q",midiValues:[34]},{keys:["f/2","d/2"],duration:"q",midiValues:[41,38]},{keys:["f/2","d/2"],duration:"q",midiValues:[41,38]},
            {keys:["eb/1","g/1","bb/1"],duration:"h",midiValues:[27,31,34]},{keys:["eb/1","g/1","bb/1"],duration:"q",midiValues:[27,31,34]}
        ]
    },
    {
        id: "beyer-op101-f4-ex95",
        name: "Fase 4 - Ex. 95: Slow Blues in Do",
        purpose: "Introdurre il feeling del blues lento, la scala blues di Do e gli accordi di settima.",
        category: "beyer_op101_fase4", // o una nuova categoria "blues_studies"
        staveLayout: "grand",
        keySignature: "C", // Gli accidenti della scala blues saranno scritti
        timeSignature: "4/4", // Slow Blues (può essere anche 12/8 feel, ma usiamo 4/4 con terzine)
        repetitions: 1, // 12 battute (struttura blues classica)
        notesTreble: [ // Melodia con note della scala blues di Do (C, Eb, F, F#, G, Bb)
            // C7 (4 battute)
            {keys:["eb/4"],duration:"q",midiValues:[63]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["bb/4"],duration:"h",midiValues:[70]},
            {keys:["g/4"],duration:"q"},{keys:["eb/4"],duration:"q"},{keys:["c/4"],duration:"h",midiValues:[60]},
            {keys:["f/4"],duration:"8",triplet:"start",midiValues:[65]},{keys:["f#/4"],duration:"8",midiValues:[66]},{keys:["g/4"],duration:"8",triplet:"end",midiValues:[67]},{keys:["eb/4"],duration:"q",midiValues:[63]},{keys:["c/4"],duration:"h",midiValues:[60]},
            {keys:["g/3"],duration:"w",midiValues:[55]}, // Nota lunga o bending simulato
            // F7 (2 battute)
            {keys:["ab/4"],duration:"q",midiValues:[68]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["eb/5"],duration:"h",midiValues:[75]}, // Note della scala blues di Fa su accordo F7
            {keys:["c/5"],duration:"q"},{keys:["ab/4"],duration:"q"},{keys:["f/4"],duration:"h",midiValues:[65]},
            // C7 (2 battute)
            {keys:["eb/4"],duration:"q",midiValues:[63]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["c/4"],duration:"h",midiValues:[60]},
            {keys:["bb/3"],duration:"h",midiValues:[58]},{keys:["g/3"],duration:"h",midiValues:[55]},
            // G7 (1 battuta)
            {keys:["b/3"],duration:"q",midiValues:[59]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["f/4"],duration:"h",midiValues:[65]}, // Note di G7
            // F7 (1 battuta)
            {keys:["ab/3"],duration:"q",midiValues:[56]},{keys:["c/4"],duration:"q",midiValues:[60]},{keys:["eb/4"],duration:"h",midiValues:[63]},
            // C7 (1 battuta)
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["eb/4"],duration:"h",midiValues:[63]},
            // G7 (1 battuta - turnaround) o C7
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["b/3"],duration:"q",midiValues:[59]},{keys:["g/4"],duration:"q",staccato:true,midiValues:[67]} // Staccato finale
        ],
        notesBass: [ // Accompagnamento con accordi di settima o walking bass semplice
            // C7
            {keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},{keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},
            {keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},{keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},
            {keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},{keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},
            {keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},{keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},
            // F7
            {keys:["f/2","a/2","c/3","eb/3"],duration:"h",midiValues:[41,45,48,51]},{keys:["f/2","a/2","c/3","eb/3"],duration:"h",midiValues:[41,45,48,51]},
            {keys:["f/2","a/2","c/3","eb/3"],duration:"h",midiValues:[41,45,48,51]},{keys:["f/2","a/2","c/3","eb/3"],duration:"h",midiValues:[41,45,48,51]},
            // C7
            {keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},{keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},
            {keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},{keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},
            // G7
            {keys:["g/2","b/2","d/3","f/3"],duration:"h",midiValues:[43,47,50,53]},{keys:["g/2","b/2","d/3","f/3"],duration:"h",midiValues:[43,47,50,53]},
            // F7
            {keys:["f/2","a/2","c/3","eb/3"],duration:"h",midiValues:[41,45,48,51]},{keys:["f/2","a/2","c/3","eb/3"],duration:"h",midiValues:[41,45,48,51]},
            // C7
            {keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},{keys:["c/3","e/3","g/3","bb/3"],duration:"h",midiValues:[48,52,55,58]},
            // G7 (turnaround)
            {keys:["g/2","b/2","d/3","f/3"],duration:"w",midiValues:[43,47,50,53]}
        ]
    },
    // =======================================================================================
    // === Esercizio 96: Up-Tempo Blues Shuffle in Sol ===
    // Focus: Scala Blues di Sol, ritmo shuffle (crome terzinate), accordi di settima.
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex96",
        name: "Fase 4 - Ex. 96: Blues Shuffle (Sol Magg.)",
        purpose: "Introdurre il ritmo shuffle e la scala blues di Sol.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "G", // Fa# (ma la scala blues di Sol usa Fa naturale)
        timeSignature: "4/4", // Con feel di shuffle (scritto come crome normali, ma interpretato come terzina q+8)
        repetitions: 1, // 12 battute
        notesTreble: [ // Melodia con note della scala blues di Sol (G, Bb, C, C#, D, F)
            // G7 (4 battute)
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["bb/3"],duration:"q",midiValues:[58]},{keys:["g/3"],duration:"h",midiValues:[55]},
            {keys:["c/4"],duration:"8",triplet:"start",midiValues:[60]},{keys:["c#/4"],duration:"8",midiValues:[61]},{keys:["d/4"],duration:"8",triplet:"end",midiValues:[62]},{keys:["bb/3"],duration:"q",midiValues:[58]},{keys:["g/3"],duration:"h",midiValues:[55]},
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["c/4"],duration:"q",midiValues:[60]},{keys:["bb/3"],duration:"q",midiValues:[58]},
            {keys:["g/3"],duration:"q",midiValues:[55]},{keys:["bb/3"],duration:"q",midiValues:[58]},{keys:["d/4"],duration:"h",midiValues:[62]},
            // C7 (2 battute)
            {keys:["eb/4"],duration:"q",midiValues:[63]},{keys:["c/4"],duration:"q",midiValues:[60]},{keys:["g/3"],duration:"h",midiValues:[55]}, // Note di C7
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["eb/4"],duration:"q",midiValues:[63]},{keys:["c/4"],duration:"q",midiValues:[60]},{keys:["g/4"],duration:"q",midiValues:[67]},
            // G7 (2 battute)
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["bb/3"],duration:"q",midiValues:[58]},{keys:["g/3"],duration:"h",midiValues:[55]},
            {keys:["f/3"],duration:"h",midiValues:[53]},{keys:["d/3"],duration:"h",midiValues:[50]},
            // D7 (1 battuta)
            {keys:["a/3"],duration:"q",midiValues:[57]},{keys:["f#/3"],duration:"q",midiValues:[54]},{keys:["c/4"],duration:"h",midiValues:[60]}, // Note di D7
            // C7 (1 battuta)
            {keys:["g/3"],duration:"q",midiValues:[55]},{keys:["eb/3"],duration:"q",midiValues:[51]},{keys:["c/3"],duration:"h",midiValues:[48]},
            // G7 (2 battute turnaround)
            {keys:["d/4"],duration:"8"},{keys:["bb/3"],duration:"8"},{keys:["g/3"],duration:"8"},{keys:["f/3"],duration:"8"},{keys:["d/3"],duration:"q"}, {midiValues:[62,58,55,53,50]},
            {keys:["d/4"],duration:"q",staccato:true,midiValues:[62]},{keys:["bb/3"],duration:"q",staccato:true,midiValues:[58]},{keys:["g/3"],duration:"h",staccato:true,midiValues:[55]}
        ],
        notesBass: [ // Shuffle Bass (tipicamente figure tipo semiminima-croma terzinata o crome dritte)
            // G7
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["d/3"],duration:"q",midiValues:[50]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["d/3"],duration:"q",midiValues:[50]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["d/3"],duration:"q",midiValues:[50]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["d/3"],duration:"q",midiValues:[50]},
            // C7
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["bb/3"],duration:"q",midiValues:[58]},{keys:["g/3"],duration:"q",midiValues:[55]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["bb/3"],duration:"q",midiValues:[58]},{keys:["g/3"],duration:"q",midiValues:[55]},
            // G7
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["d/3"],duration:"q",midiValues:[50]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["d/3"],duration:"q",midiValues:[50]},
            // D7
            {keys:["d/3"],duration:"q",midiValues:[50]},{keys:["a/3"],duration:"q",midiValues:[57]},{keys:["c/4"],duration:"q",midiValues:[60]},{keys:["a/3"],duration:"q",midiValues:[57]},
            // C7
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["bb/3"],duration:"q",midiValues:[58]},{keys:["g/3"],duration:"q",midiValues:[55]},
            // G7
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["f/3"],duration:"q",midiValues:[53]},{keys:["d/3"],duration:"q",midiValues:[50]},
            {keys:["g/2","b/2","d/3","f/3"],duration:"w",midiValues:[43,47,50,53]} // Accordo finale
        ]
    },
    // =======================================================================================
    // === Esercizio 97: Funky Blues in Fa ===
    // Focus: Scala Blues di Fa, ritmo più sincopato e funky, accordi di settima e nona (semplificati).
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex97",
        name: "Fase 4 - Ex. 97: Funky Blues (Fa)",
        purpose: "Introdurre un feeling funky, la scala blues di Fa e armonie estese (semplificate).",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "F", // Sib (Lab, Si, Mib saranno accidentali per la scala blues)
        timeSignature: "4/4", // Moderato funky
        repetitions: 1, // 16 battute (struttura blues variata)
        notesTreble: [ // Scala Blues di Fa: F, Ab, Bb, B, C, Eb
            // F7 (4 battute)
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["eb/4"],duration:"q",staccato:true,midiValues:[63]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["eb/4"],duration:"q",staccato:true,midiValues:[63]},
            {keys:["c/4"],duration:"8",midiValues:[60]},{keys:["b/3"],duration:"8",midiValues:[59]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["ab/3"],duration:"8",midiValues:[56]},{keys:["f/3"],duration:"h",midiValues:[53]}, // B e Ab per blues
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["ab/4"],duration:"8",staccato:true,midiValues:[68]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["c/4"],duration:"q",staccato:true,midiValues:[60]},
            {keys:["eb/4"],duration:"h",midiValues:[63]},{keys:["c/4"],duration:"h",midiValues:[60]},
            // Bb7 (2 battute)
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["f/4"],duration:"q",staccato:true,midiValues:[65]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["f/4"],duration:"q",staccato:true,midiValues:[65]}, // Note di Bb7
            {keys:["d/4"],duration:"8"},{keys:["c#/4"],duration:"8"},{keys:["d/4"],duration:"8"},{keys:["bb/3"],duration:"8"},{keys:["g/3"],duration:"h"}, {midiValues:[62,61,62,58,55]}, // C# per F7, non Bb7
            // F7 (2 battute)
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["ab/3"],duration:"q",midiValues:[56]},{keys:["f/3"],duration:"h",midiValues:[53]},
            {keys:["eb/4"],duration:"h",staccato:true,midiValues:[63]},{keys:["c/4"],duration:"h",staccato:true,midiValues:[60]},
            // C7 (1 battuta)
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["g/4"],duration:"q",staccato:true,midiValues:[67]},{keys:["bb/4"],duration:"q",midiValues:[70]},{keys:["g/4"],duration:"q",staccato:true,midiValues:[67]}, // Note di C7
            // Bb7 (1 battuta)
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["d/4"],duration:"q",staccato:true,midiValues:[62]},{keys:["ab/3"],duration:"q",midiValues:[56]},{keys:["f/3"],duration:"q",staccato:true,midiValues:[53]},
            // F7 (2 battute, turnaround)
            {keys:["c/4"],duration:"8"},{keys:["eb/4"],duration:"8"},{keys:["f/4"],duration:"8"},{keys:["ab/4"],duration:"8"},{keys:["c/5"],duration:"q"}, {midiValues:[60,63,65,68,72]},
            {keys:["c/5"],duration:"q",staccato:true,midiValues:[72]},{keys:["ab/4"],duration:"q",staccato:true,midiValues:[68]},{keys:["f/4"],duration:"h",staccato:true,midiValues:[65]}
        ],
        notesBass: [ // Accompagnamento con bass line funky o accordi di settima/nona staccati
            // F7 (o F9)
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},{keys:["eb/3"],duration:"q",midiValues:[51]},{keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["a/2"],duration:"q",staccato:true,midiValues:[45]},{keys:["c/3"],duration:"q",midiValues:[48]},{keys:["a/2"],duration:"q",staccato:true,midiValues:[45]},
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},{keys:["eb/3"],duration:"q",midiValues:[51]},{keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["a/2"],duration:"q",staccato:true,midiValues:[45]},{keys:["c/3"],duration:"q",midiValues:[48]},{keys:["a/2"],duration:"q",staccato:true,midiValues:[45]},
            // Bb7 (o Bb9)
            {keys:["bb/1"],duration:"q",midiValues:[34]},{keys:["f/2"],duration:"q",staccato:true,midiValues:[41]},{keys:["ab/2"],duration:"q",midiValues:[44]},{keys:["f/2"],duration:"q",staccato:true,midiValues:[41]},
            {keys:["bb/1"],duration:"q",midiValues:[34]},{keys:["d/2"],duration:"q",staccato:true,midiValues:[38]},{keys:["f/2"],duration:"q",midiValues:[41]},{keys:["d/2"],duration:"q",staccato:true,midiValues:[38]},
            // F7
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},{keys:["eb/3"],duration:"q",midiValues:[51]},{keys:["c/3"],duration:"q",staccato:true,midiValues:[48]},
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["a/2"],duration:"q",staccato:true,midiValues:[45]},{keys:["c/3"],duration:"q",midiValues:[48]},{keys:["a/2"],duration:"q",staccato:true,midiValues:[45]},
            // C7 (o C9)
            {keys:["c/2"],duration:"q",midiValues:[36]},{keys:["g/2"],duration:"q",staccato:true,midiValues:[43]},{keys:["bb/2"],duration:"q",midiValues:[46]},{keys:["g/2"],duration:"q",staccato:true,midiValues:[43]},
            // Bb7
            {keys:["bb/1"],duration:"q",midiValues:[34]},{keys:["f/2"],duration:"q",staccato:true,midiValues:[41]},{keys:["ab/2"],duration:"q",midiValues:[44]},{keys:["f/2"],duration:"q",staccato:true,midiValues:[41]},
            // F7
            {keys:["f/2"],duration:"q",midiValues:[41]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["c/3"],duration:"q",midiValues:[48]},{keys:["eb/3"],duration:"q",midiValues:[51]},
            {keys:["f/1","c/2","f/2","a/2","eb/3"],duration:"w",midiValues:[29,36,41,45,51]} // Accordo F9 finale
        ]
    },

{
        id: "beyer-op101-f4-ex98",
        name: "Fase 4 - Ex. 98: Boogie Woogie Base (Do) - Corretto",
        purpose: "Introdurre il pattern base del Boogie Woogie e riff melodici semplici.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["e/4"],duration:"8",midiValues:[64]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["bb/4"],duration:"8",midiValues:[70]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["c/4"],duration:"8",midiValues:[60]},
            {keys:["g/4"],duration:"h",midiValues:[67]},{keys:["eb/5"],duration:"h",midiValues:[75]},
            {keys:["c/5"],duration:"q",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["eb/4"],duration:"q",midiValues:[63]},{keys:["c/4"],duration:"q",midiValues:[60]},
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["a/4"],duration:"q",midiValues:[69]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["a/4"],duration:"q",midiValues:[69]},
            {keys:["f/4"],duration:"8",midiValues:[65]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["bb/4"],duration:"8",midiValues:[70]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["bb/4"],duration:"8",midiValues:[70]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["d/4"],duration:"8",midiValues:[62]},
            {keys:["e/4"],duration:"q",midiValues:[64]},{keys:["g/4"],duration:"q",midiValues:[67]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["eb/4"],duration:"h",midiValues:[63]},{keys:["c/4"],duration:"h",midiValues:[60]},
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["f/4"],duration:"q",midiValues:[65]},{keys:["b/3"],duration:"q",midiValues:[59]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["c/4"],duration:"q",midiValues:[60]},{keys:["eb/4"],duration:"q",midiValues:[63]},{keys:["a/3"],duration:"q",midiValues:[57]},{keys:["c/4"],duration:"q",midiValues:[60]},
            {keys:["g/4"],duration:"8",midiValues:[67]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["eb/5"],duration:"8",midiValues:[75]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["c/5"],duration:"8",midiValues:[72]}, // qd diventa q+8 per la nota singola
            {keys:["g/4"],duration:"q",staccato:true,midiValues:[67]},{keys:["e/4"],duration:"q",staccato:true,midiValues:[64]},{keys:["c/4"],duration:"h",staccato:true,midiValues:[60]}
        ],
        notesBass: [
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["b/2"],duration:"8",midiValues:[47]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/3"],duration:"8",midiValues:[55]},{keys:["e/3"],duration:"8",midiValues:[52]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["b/2"],duration:"8",midiValues:[47]},{keys:["d/3"],duration:"8",midiValues:[50]},{keys:["f/3"],duration:"8",midiValues:[53]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["e/3"],duration:"8",midiValues:[52]},{keys:["g/2"],duration:"q",midiValues:[43]}
        ]
    },
    // =======================================================================================
    // === Esercizio 99: Boogie Woogie Walking Bass in Sol (CORRETTO!!!) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex99",
        name: "Fase 4 - Ex. 99: Boogie Woogie Walking Bass (Sol) - Corretto",
        purpose: "Sviluppare un walking bass fluido nella MS e melodia bluesy MD.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "G",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            {keys:["d/4","f/4","bb/4"],duration:"q",midiValues:[62,65,70]},{keys:["d/4","f/4","bb/4"],duration:"h",midiValues:[62,65,70]},{keys:["c/4","eb/4","a/4"],duration:"q",midiValues:[60,63,69]},
            {keys:["g/3"],duration:"8",midiValues:[55]},{keys:["bb/3"],duration:"8",midiValues:[58]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["f/4"],duration:"h",midiValues:[65]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["d/4"],duration:"q",midiValues:[62]},{keys:["bb/3"],duration:"q",midiValues:[58]},{keys:["g/3"],duration:"q",midiValues:[55]},
            {keys:["g/3"],duration:"8",midiValues:[55]},{keys:["a/3"],duration:"8",midiValues:[57]},{keys:["bb/3"],duration:"8",midiValues:[58]},{keys:["b/3"],duration:"8",midiValues:[59]},{keys:["c/4"],duration:"8",midiValues:[60]},{keys:["c#/4"],duration:"8",midiValues:[61]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["c/4","eb/4","g/4"],duration:"q",midiValues:[60,63,67]},{keys:["c/4","eb/4","g/4"],duration:"h",midiValues:[60,63,67]},{keys:["bb/3","d/4","f/4"],duration:"q",midiValues:[58,62,65]},
            {keys:["c/4"],duration:"8",midiValues:[60]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["eb/4"],duration:"8",midiValues:[63]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["f/4"],duration:"h",midiValues:[65]},
            {keys:["d/4","f/4","bb/4"],duration:"q",midiValues:[62,65,70]},{keys:["d/4","f/4","bb/4"],duration:"h",midiValues:[62,65,70]},{keys:["g/3","c/4","eb/4"],duration:"q",midiValues:[55,60,63]},
            {keys:["g/3"],duration:"8",midiValues:[55]},{keys:["bb/3"],duration:"8",midiValues:[58]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["g/4"],duration:"h",midiValues:[67]},
            {keys:["a/3","c/4","f#/4"],duration:"q",midiValues:[57,60,66]},{keys:["a/3","c/4","f#/4"],duration:"h",midiValues:[57,60,66]},{keys:["g/3","b/3","e/4"],duration:"q",midiValues:[55,59,64]},
            {keys:["c/4","eb/4","g/4"],duration:"q",midiValues:[60,63,67]},{keys:["c/4","eb/4","g/4"],duration:"h",midiValues:[60,63,67]},{keys:["g/3","bb/3","d/4"],duration:"q",midiValues:[55,58,62]},
            {keys:["d/4"],duration:"8",midiValues:[62]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["bb/4"],duration:"8",midiValues:[70]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["c#/5"],duration:"8",midiValues:[73]},
            {keys:["d/5"],duration:"q",staccato:true,midiValues:[74]},{keys:["bb/4"],duration:"q",staccato:true,midiValues:[70]},{keys:["g/4"],duration:"h",staccato:true,midiValues:[67]}
        ],
        notesBass: [
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["d/3"],duration:"q",midiValues:[50]},{keys:["c/3"],duration:"q",midiValues:[48]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["a/2"],duration:"q",midiValues:[45]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["bb/2"],duration:"q",midiValues:[46]},{keys:["c#/3"],duration:"q",midiValues:[49]},{keys:["d/3"],duration:"q",midiValues:[50]},
            {keys:["f/3"],duration:"q",midiValues:[53]},{keys:["eb/3"],duration:"q",midiValues:[51]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["g/2"],duration:"q",midiValues:[43]},
            {keys:["c/3"],duration:"q",midiValues:[48]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["eb/3"],duration:"q",midiValues:[51]},{keys:["e/3"],duration:"q",midiValues:[52]},
            {keys:["f/3"],duration:"q",midiValues:[53]},{keys:["eb/3"],duration:"q",midiValues:[51]},{keys:["d/3"],duration:"q",midiValues:[50]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["g/2"],duration:"q",midiValues:[43]},{keys:["a/2"],duration:"q",midiValues:[45]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["c/3"],duration:"q",midiValues:[48]},
            {keys:["d/3"],duration:"q",midiValues:[50]},{keys:["c/3"],duration:"q",midiValues:[48]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["g/2"],duration:"q",midiValues:[43]},
            {keys:["d/3"],duration:"q",midiValues:[50]},{keys:["e/3"],duration:"q",midiValues:[52]},{keys:["f#/3"],duration:"q",midiValues:[54]},{keys:["g/3"],duration:"q",midiValues:[55]},
            {keys:["a/3"],duration:"q",midiValues:[57]},{keys:["g/3"],duration:"q",midiValues:[55]},{keys:["f#/3"],duration:"q",midiValues:[54]},{keys:["e/3"],duration:"q",midiValues:[52]},
            {keys:["d/3"],duration:"q",midiValues:[50]},{keys:["c/3"],duration:"q",midiValues:[48]},{keys:["b/2"],duration:"q",midiValues:[47]},{keys:["a/2"],duration:"q",midiValues:[45]},
            {keys:["g/2"],duration:"w",midiValues:[43]}
        ]
    },
    // =======================================================================================
    // === Esercizio 100: Boogie Woogie "Train" in Fa (CORRETTO!!!) ===
    // =======================================================================================
    {
        id: "beyer-op101-f4-ex100",
        name: "Fase 4 - Ex. 100: Boogie Woogie 'Train' (Fa) - Corretto",
        purpose: "Creare un effetto 'treno' con la MS e melodia ritmica MD.",
        category: "beyer_op101_fase4",
        staveLayout: "grand",
        keySignature: "F",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            {keys:["f/4"],duration:"q",midiValues:[65]},{keys:["a/4"],duration:"q",midiValues:[69]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["eb/5"],duration:"q",midiValues:[75]},
            {keys:["c/5"],duration:"8",midiValues:[72]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["eb/4"],duration:"8",midiValues:[63]},{keys:["c/4"],duration:"h",midiValues:[60]},
            {keys:["f/4","a/4"],duration:"q",staccato:true,midiValues:[65,69]},{keys:["f/4","a/4"],duration:"q",staccato:true,midiValues:[65,69]},{keys:["c/5","eb/5"],duration:"h",staccato:true,midiValues:[72,75]},
            {keys:["a/4"],duration:"8",midiValues:[69]},{keys:["bb/4"],duration:"8",midiValues:[70]},{keys:["b/4"],duration:"8",midiValues:[71]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["ab/4"],duration:"q",midiValues:[68]},{keys:["f/4"],duration:"q",midiValues:[65]},
            {keys:["bb/3","d/4","f/4"],duration:"q",midiValues:[58,62,65]},{keys:["bb/3","d/4","f/4"],duration:"h",midiValues:[58,62,65]},{keys:["ab/3","c/4","eb/4"],duration:"q",midiValues:[56,60,63]},
            {keys:["f/4"],duration:"8",midiValues:[65]},{keys:["g/4"],duration:"8",midiValues:[67]},{keys:["ab/4"],duration:"8",midiValues:[68]},{keys:["bb/4"],duration:"8",midiValues:[70]},{keys:["f/4"],duration:"h",midiValues:[65]},
            {keys:["f/4","a/4"],duration:"q",staccato:true,midiValues:[65,69]},{keys:["f/4","a/4"],duration:"q",staccato:true,midiValues:[65,69]},{keys:["c/5","eb/5"],duration:"h",staccato:true,midiValues:[72,75]},
            {keys:["c/5"],duration:"8",midiValues:[72]},{keys:["a/4"],duration:"8",midiValues:[69]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["eb/4"],duration:"8",midiValues:[63]},{keys:["c/4"],duration:"h",midiValues:[60]},
            {keys:["c/4","e/4","g/4"],duration:"q",midiValues:[60,64,67]},{keys:["c/4","e/4","g/4"],duration:"h",midiValues:[60,64,67]},{keys:["bb/3","d/4","f/4"],duration:"q",midiValues:[58,62,65]},
            {keys:["bb/3","d/4","f/4"],duration:"q",midiValues:[58,62,65]},{keys:["bb/3","d/4","f/4"],duration:"h",midiValues:[58,62,65]},{keys:["g/3","c/4","eb/4"],duration:"q",midiValues:[55,60,63]},
            {keys:["a/4"],duration:"8",midiValues:[69]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["d/5"],duration:"8",midiValues:[74]},{keys:["eb/5"],duration:"8",midiValues:[75]},{keys:["c/5"],duration:"q",midiValues:[72]},{keys:["c/5"],duration:"8",midiValues:[72]}, // qd -> q+8
            {keys:["a/4"],duration:"q",staccato:true,midiValues:[69]},{keys:["f/4"],duration:"q",staccato:true,midiValues:[65]},{keys:["c/4"],duration:"h",staccato:true,midiValues:[60]}
        ],
        notesBass: [
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["d/2"],duration:"8",midiValues:[38]},
            {keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["d/2"],duration:"8",midiValues:[38]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["a/2"],duration:"8",midiValues:[45]},
            {keys:["c/2"],duration:"8",midiValues:[36]},{keys:["c/2"],duration:"8",midiValues:[36]},{keys:["e/2"],duration:"8",midiValues:[40]},{keys:["e/2"],duration:"8",midiValues:[40]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["e/2"],duration:"8",midiValues:[40]},{keys:["e/2"],duration:"8",midiValues:[40]},
            {keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["d/2"],duration:"8",midiValues:[38]},{keys:["d/2"],duration:"8",midiValues:[38]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["eb/3"],duration:"8",midiValues:[51]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["a/2"],duration:"8",midiValues:[45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["eb/2"],duration:"8",midiValues:[39]}, // Turnaround
            {keys:["f/1","a/1","c/2"],duration:"w",midiValues:[29,33,36]}
        ]
    },
{
        id: "beyer-op101-f4-ex101",
        name: "Fase 4 - Ex. 101: The Entertainer (Simple Arrangement)",
        purpose: "Gran finale con un arrangiamento semplificato di un classico ragtime.",
        category: "beyer_op101_fase4", // o "ragtime_finale"
        staveLayout: "grand",
        keySignature: "C", // Inizia in Do Maggiore
        timeSignature: "2/4", // Tipico del ragtime
        repetitions: 1, // Lo scrivo per 16-24 battute circa
        notesTreble: [ // Melodia principale con sincopi
            // Introduzione/Tema A - Battute 1-4
            {keys:["d/5"],duration:"8",midiValues:[74]},{keys:["eb/5"],duration:"8",midiValues:[75]},{keys:["e/5"],duration:"8",midiValues:[76]},{keys:["c/5"],duration:"8",midiValues:[72]},
            {keys:["e/5"],duration:"8",midiValues:[76]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["b/3"],duration:"8r",midiValues:[null]},{keys:["g/3"],duration:"8r",midiValues:[null]},{keys:["d/4"],duration:"q",midiValues:[62]}, // Pause per respiro e sincope
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["d/5"],duration:"q",midiValues:[74]},

            // Battute 5-8
            {keys:["d/5"],duration:"8",midiValues:[74]},{keys:["eb/5"],duration:"8",midiValues:[75]},{keys:["e/5"],duration:"8",midiValues:[76]},{keys:["c/5"],duration:"8",midiValues:[72]},
            {keys:["e/5"],duration:"8",midiValues:[76]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["b/3"],duration:"8r",midiValues:[null]},{keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["c/4"],duration:"8",midiValues:[60]},
            {keys:["d/4"],duration:"q",midiValues:[62]},{keys:["g/3"],duration:"q",midiValues:[55]}, // Nota: la melodia scende

            // Battute 9-12 (Ripetizione variata o continuazione)
            {keys:["d/5"],duration:"8",midiValues:[74]},{keys:["eb/5"],duration:"8",midiValues:[75]},{keys:["e/5"],duration:"8",midiValues:[76]},{keys:["c/5"],duration:"8",midiValues:[72]},
            {keys:["e/5"],duration:"8",midiValues:[76]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["b/3"],duration:"8r",midiValues:[null]},{keys:["g/3"],duration:"8r",midiValues:[null]},{keys:["d/4"],duration:"q",midiValues:[62]},
            {keys:["g/4"],duration:"q",midiValues:[67]},{keys:["d/5"],duration:"q",midiValues:[74]},

            // Battute 13-16 (Conclusione Tema A o inizio ponte)
            {keys:["d/5"],duration:"8",midiValues:[74]},{keys:["eb/5"],duration:"8",midiValues:[75]},{keys:["e/5"],duration:"8",midiValues:[76]},{keys:["c/5"],duration:"8",midiValues:[72]},
            {keys:["e/5"],duration:"8",midiValues:[76]},{keys:["c/5"],duration:"8",midiValues:[72]},{keys:["g/4"],duration:"q",midiValues:[67]},
            {keys:["d/4"],duration:"8",midiValues:[62]},{keys:["e/4"],duration:"8",midiValues:[64]},{keys:["f/4"],duration:"8",midiValues:[65]},{keys:["d/4"],duration:"8",midiValues:[62]}, // Verso F
            {keys:["c/4"],duration:"h",midiValues:[60]},

            // Sezione B (Semplificata, 8 battute) - Tonalità di Fa Maggiore
            {keys:["a/4"],duration:"q",options:{keySignature:"F"},midiValues:[69]},{keys:["f/4"],duration:"q",midiValues:[65]},
            {keys:["g/4"],duration:"8"},{keys:["a/4"],duration:"8"},{keys:["bb/4"],duration:"8"},{keys:["g/4"],duration:"8",midiValues:[67,69,70,67]},
            {keys:["f/4"],duration:"q"},{keys:["d/4"],duration:"q",midiValues:[65,62]},
            {keys:["c/4"],duration:"h",midiValues:[60]},
            {keys:["c/5"],duration:"q"},{keys:["a/4"],duration:"q",midiValues:[72,69]},
            {keys:["bb/4"],duration:"8"},{keys:["a/4"],duration:"8"},{keys:["g/4"],duration:"8"},{keys:["f/4"],duration:"8",midiValues:[70,69,67,65]},
            {keys:["e/4"],duration:"q"},{keys:["c/4"],duration:"q",midiValues:[64,60]}, // E naturale per C7
            {keys:["f/4"],duration:"h",options:{keySignature:"C"},midiValues:[65]} // Ritorno a C per chiudere o per un Da Capo non scritto
        ],
        notesBass: [ // Accompagnamento "basso-accordo" semplificato
            // Introduzione/Tema A
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]}, // C
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3","b/2","g/2"],duration:"8",staccato:true,midiValues:[50,47,43]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3","b/2","g/2"],duration:"8",staccato:true,midiValues:[50,47,43]}, // G
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},

            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3","b/2","g/2"],duration:"8",staccato:true,midiValues:[50,47,43]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3","b/2","g/2"],duration:"8",staccato:true,midiValues:[50,47,43]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},

            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2","f/2"],duration:"8",staccato:true,midiValues:[48,45,41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2","f/2"],duration:"8",staccato:true,midiValues:[48,45,41]}, // F
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2","f/2"],duration:"8",staccato:true,midiValues:[48,45,41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2","f/2"],duration:"8",staccato:true,midiValues:[48,45,41]},
            {keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},{keys:["c/3"],duration:"8",midiValues:[48]},{keys:["g/3","e/3","c/3"],duration:"8",staccato:true,midiValues:[55,52,48]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3","b/2","g/2"],duration:"8",staccato:true,midiValues:[50,47,43]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3","b/2","g/2"],duration:"8",staccato:true,midiValues:[50,47,43]},

            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2","f/2"],duration:"8",staccato:true,midiValues:[48,45,41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2","f/2"],duration:"8",staccato:true,midiValues:[48,45,41]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2","f/2"],duration:"8",staccato:true,midiValues:[48,45,41]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2","f/2"],duration:"8",staccato:true,midiValues:[48,45,41]},
            {keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3","b/2","g/2"],duration:"8",staccato:true,midiValues:[50,47,43]},{keys:["g/2"],duration:"8",midiValues:[43]},{keys:["d/3","b/2","g/2"],duration:"8",staccato:true,midiValues:[50,47,43]},
            {keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2","e/2","c/2"],duration:"8",staccato:true,midiValues:[43,40,36]},{keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2","e/2","c/2"],duration:"8",staccato:true,midiValues:[43,40,36]}, // C

            // Sezione B
            {keys:["f/2"],duration:"8",options:{keySignature:"F"},midiValues:[41]},{keys:["c/3","a/2"],duration:"8",staccato:true,midiValues:[48,45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2"],duration:"8",staccato:true,midiValues:[48,45]},
            {keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["f/2","d/2"],duration:"8",staccato:true,midiValues:[41,38]},{keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["f/2","d/2"],duration:"8",staccato:true,midiValues:[41,38]},
            {keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2","e/2"],duration:"8",staccato:true,midiValues:[43,40]},{keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2","e/2"],duration:"8",staccato:true,midiValues:[43,40]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2"],duration:"8",staccato:true,midiValues:[48,45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2"],duration:"8",staccato:true,midiValues:[48,45]},
            {keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2"],duration:"8",staccato:true,midiValues:[48,45]},{keys:["f/2"],duration:"8",midiValues:[41]},{keys:["c/3","a/2"],duration:"8",staccato:true,midiValues:[48,45]},
            {keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["f/2","d/2"],duration:"8",staccato:true,midiValues:[41,38]},{keys:["bb/1"],duration:"8",midiValues:[34]},{keys:["f/2","d/2"],duration:"8",staccato:true,midiValues:[41,38]},
            {keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2","e/2"],duration:"8",staccato:true,midiValues:[43,40]},{keys:["c/2"],duration:"8",midiValues:[36]},{keys:["g/2","e/2"],duration:"8",staccato:true,midiValues:[43,40]},
            {keys:["f/1"],duration:"8",options:{keySignature:"C"},midiValues:[29]},{keys:["c/2","a/1"],duration:"8",staccato:true,midiValues:[36,33]},{keys:["f/1"],duration:"8",midiValues:[29]},{keys:["c/2","a/1"],duration:"8",staccato:true,midiValues:[36,33]}
        ]
    }

];

// Aggiungi questi esercizi a window.exerciseData
// Questo permette di caricare esercizi da più file e categorie
if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

if (typeof window.exerciseData.beyer_op101_fase4 === 'undefined') {
  window.exerciseData.beyer_op101_fase4 = [];
}
// Svuota l'array se stai ricaricando per evitare duplicati e stai testando solo questi
// window.exerciseData.beyer_op101_fase4 = [];
window.exerciseData.beyer_op101_fase4.push(...beyer_op101_fase4_exercises_71_101);

// Per debug, puoi loggare l'oggetto exerciseData aggiornato
// console.log("window.exerciseData dopo beyer_op101_fase4_ex_76_80.js:", window.exerciseData.beyer_op101_fase4);