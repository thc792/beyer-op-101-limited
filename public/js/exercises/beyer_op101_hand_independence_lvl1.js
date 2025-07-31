// File: beyer_op101_hand_independence_lvl1.js

/**
 * js/exercises/beyer_op101_hand_independence_lvl1.js
 * Esercizi per lo sviluppo dell'indipendenza delle mani - Livello 1.
 * Basato sul Beyer Op. 101, reinterpretato.
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli oggetti esercizio definiti in questo file
const beyer_op101_hand_independence_lvl1_exercises = [];

// =======================================================================================
// === ESERCIZIO N.51 (DIALOGO RITMICO SEMPLICE) ===
// =======================================================================================
const hand_independence_ex51 = [
    {
    id: "beyer-op101-f3-ex51",
    name: "Hand Independence Lv.1 51: Introduzione Basso Alberti (Do Magg.)",
    purpose: "Introdurre il pattern del Basso Alberti sulla tonica di Do Maggiore.",
    category: "beyer_op101_fase3_studi",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 1,
    notesTreble: [
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["d/4"], duration: "w", midiValue: 62 },
        { keys: ["c/4"], duration: "w", midiValue: 60 },
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
        { keys: ["c/4"], duration: "w", midiValue: 60 }
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
// Ex. 52 (CORRETTO - 'notesTreble' ora usa 'midiValue' per note singole)
{
    id: "beyer-op101-f3-ex52",
    name: "Hand Independence Lv.1 52: Basso Alberti (Do-Sol-Fa-Do)",
    purpose: "Applicare il Basso Alberti su una progressione armonica I-V-IV-I in Do Magg.",
    category: "beyer_op101_fase3_studi",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 1,
    notesTreble: [
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
        { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "h", midiValue: 70 },
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
        { keys: ["c/4"], duration: "w", midiValue: 60 }
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
}




];
beyer_op101_hand_independence_lvl1_exercises.push(...hand_independence_ex51);

// File: beyer_op101_hand_independence_lvl1.js
// ... (Intestazione e array principale come prima) ...



// File: beyer_op101_hand_independence_lvl1.js
// ... (Intestazione e array principale come prima) ...

// =======================================================================================
// === ESERCIZIO N.53 (MOVIMENTO CONTRARIO COSTANTE) ===
// =======================================================================================
const hand_independence_ex53 = [
    {
        id: "beyer-op101-ex53-handindep-contrary",
        name: "Hand Independence Lv.1 - Ex. 53 (Constant Contrary Motion Idea)",
        tempo: "Moderato scorrevole",
        category: "beyer_op101_hand_indep_lvl1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 8 battute
        notesTreble: [ // Mano Destra (MD) - Pattern C4-G5 in semiminime
            // Ciclo 1 (Battute 1-2)
            // Battuta 1 (Ascendente)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 2 (Discendente, toccando G5)
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Ciclo 2 (Battute 3-4)
            // Battuta 3 (Ascendente)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 4 (Discendente, toccando G5)
            { keys: ["g/5"], duration: "q", midiValues: [79] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Ciclo 3 (Battute 5-6) - Variazione armonica nell'accompagnamento
            // Battuta 5 (Ascendente)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // Inizia da D su accordo G
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Battuta 6 (Discendente, toccando A5 - adattato per Dm o G)
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["f/5"], duration: "q", midiValues: [77] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Ciclo 4 (Battute 7-8) - Ritorno a C e Cadenza
            // Battuta 7 (Ascendente verso C)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, // Sensibile per G
            // Battuta 8 (Risoluzione)
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["g/4"], duration: "h", midiValues: [67] } // Accordo C
        ],
        notesBass: [ // Mano Sinistra (MS) - Minime
            // Battuta 1 (Accordo C)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 2
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 3 (Accordo F)
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["a/2"], duration: "h", midiValues: [45] },
            // Battuta 4
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 5 (Accordo G)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Battuta 6
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 7 (Accordo G7 - preparazione)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["f/2"], duration: "h", midiValues: [41] }, // G e F per G7
            // Battuta 8 (Accordo C)
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    }
];
beyer_op101_hand_independence_lvl1_exercises.push(...hand_independence_ex53);

// File: beyer_op101_hand_independence_lvl1.js
// ... (Intestazione e array principale come prima) ...

// =======================================================================================
// === ESERCIZIO N.54 (MOVIMENTO CONTRARIO COSTANTE - INVERTITO) ===
// =======================================================================================
const hand_independence_ex54 = [
    {
        id: "beyer-op101-ex54-handindep-contrary-inv",
        name: "Hand Independence Lv.1 - Ex. 54 (Constant Contrary Inv.)",
        tempo: "Moderato scorrevole",
        category: "beyer_op101_hand_indep_lvl1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 8 battute
        notesTreble: [ // Mano Destra (MD) - Minime (Accompagnamento)
            // Battuta 1 (Accordo C)
            { keys: ["e/4", "g/4"], duration: "h", midiValues: [64, 67] }, { keys: ["c/5", "e/5"], duration: "h", midiValues: [72, 76] },
            // Battuta 2
            { keys: ["d/4", "b/4"], duration: "h", midiValues: [62, 71] }, { keys: ["e/4", "c/5"], duration: "h", midiValues: [64, 72] },
            // Battuta 3 (Accordo F)
            { keys: ["a/3", "f/4"], duration: "h", midiValues: [57, 65] }, { keys: ["c/4", "a/4"], duration: "h", midiValues: [60, 69] },
            // Battuta 4
            { keys: ["e/4", "c/5"], duration: "h", midiValues: [64, 72] }, { keys: ["d/4", "b/4"], duration: "h", midiValues: [62, 71] },
            // Battuta 5 (Accordo G)
            { keys: ["d/4", "b/4"], duration: "h", midiValues: [62, 71] }, { keys: ["g/4", "d/5"], duration: "h", midiValues: [67, 74] },
            // Battuta 6
            { keys: ["a/4", "f/5"], duration: "h", midiValues: [69, 77] }, { keys: ["d/4", "b/4"], duration: "h", midiValues: [62, 71] },
            // Battuta 7 (Accordo G7 - preparazione)
            { keys: ["b/3", "d/4", "f/4"], duration: "h", midiValues: [59, 62, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "h", midiValues: [57, 60, 65] },
            // Battuta 8 (Accordo C)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }
        ],
        notesBass: [ // Mano Sinistra (MS) - Pattern C2/C3-G3/G4 in semiminime
            // Ciclo 1 (Battute 1-2)
            // Battuta 1 (Ascendente C2-G3)
            { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["e/2"], duration: "q", midiValues: [40] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 2 (Discendente, toccando G3)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Ciclo 2 (Battute 3-4)
            // Battuta 3 (Ascendente F2-C4)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 4 (Discendente, toccando C4)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Ciclo 3 (Battute 5-6) - Variazione armonica
            // Battuta 5 (Ascendente G2-D4)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 6 (Discendente, toccando D4)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Ciclo 4 (Battute 7-8) - Ritorno a C e Cadenza
            // Battuta 7 (Ascendente verso G3 - Dominante)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // Nota F per G7
            // Battuta 8 (Risoluzione)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] } // Accordo C (fondamentale e quinta)
        ]
    }
];
beyer_op101_hand_independence_lvl1_exercises.push(...hand_independence_ex54);

// File: beyer_op101_hand_independence_lvl1.js
// ... (Intestazione e array principale come prima) ...

// =======================================================================================
// === ESERCIZIO N.55 (DIALOGO NUMERICO 5-1 e 5-3) - CORRETTO ===
// =======================================================================================
const hand_independence_ex55 = [
    {
        id: "beyer-op101-ex55-handindep-numeric",
        name: "Hand Independence Lv.1 - Ex. 55 (Numeric Dialogue)",
        tempo: "Andante con moto",
        category: "beyer_op101_hand_indep_lvl1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 16 battute
        notesTreble: [ // Mano Destra (MD)
            // --- SEZIONE 1 (Battute 1-8): MD "5" o "3", MS l'altro ---
            // Battute 1-2: MD "5", MS "1"
            // Battuta 1 (MD: 4 semiminime)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Battuta 2 (MD: 5a nota + risoluzione)
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["r/4"], duration: "q" }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Battute 3-4: MD "5", MS "1"
            // Battuta 3
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            // Battuta 4
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["r/4"], duration: "q" }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Battute 5-6: MD "5", MS "3" (RITMO CORRETTO: 4 crome + 1 minima)
            // Battuta 5
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g/5"], duration: "h", midiValue: 79 },
            // Battuta 6
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
            // Battute 7-8: MD "5", MS "3"
            // Battuta 7
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "h", midiValue: 76 },
            // Battuta 8
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "h", midiValue: 59 },

            // --- SEZIONE 2 (Battute 9-16): INVERSIONE ---
            // Battute 9-10: MD "1", MS "5"
            // Battuta 9 (MD accompagna)
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] }, { keys: ["g/3", "e/4"], duration: "h", midiValues: [55, 64] },
            // Battuta 10
            { keys: ["b/3", "d/4"], duration: "h", midiValues: [59, 62] }, { keys: ["g/3", "c/4"], duration: "h", midiValues: [55, 60] },
            // Battute 11-12: MD "1", MS "5"
            // Battuta 11
            { keys: ["a/3", "f/4"], duration: "h", midiValues: [57, 65] }, { keys: ["c/4", "f/4"], duration: "h", midiValues: [60, 65] },
            // Battuta 12
            { keys: ["b/3", "d/4"], duration: "h", midiValues: [59, 62] }, { keys: ["g/3", "e/4"], duration: "h", midiValues: [55, 64] },
            // Battute 13-14: MD "3", MS "5"
            // Battuta 13
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Battuta 14
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Battute 15-16: MD "3", MS "5" (Cadenza)
            // Battuta 15
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f#/4"], duration: "h", midiValue: 66 }, // G7
            // Battuta 16
            { keys: ["c/4"], duration: "w", midiValue: 60 }
        ],
        notesBass: [ // Mano Sinistra (MS)
            // --- SEZIONE 1 (Battute 1-8): MD "5" o "3", MS l'altro ---
            // Battute 1-2: MD "5", MS "1"
            // Battuta 1
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 2
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battute 3-4: MD "5", MS "1"
            // Battuta 3
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 4
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battute 5-6: MD "5", MS "3"
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 6
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Battute 7-8: MD "5", MS "3"
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Battuta 8
            { keys: ["c/3"], duration: "w", midiValues: [48] },

            // --- SEZIONE 2 (Battute 9-16): INVERSIONE ---
            // Battute 9-10: MD "1", MS "5"
            // Battuta 9
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 10
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battute 11-12: MD "1", MS "5"
            // Battuta 11
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Battuta 12
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["r/4"], duration: "q" }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battute 13-14: MD "3", MS "5" (RITMO CORRETTO: 4 crome + 1 minima)
            // Battuta 13
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Battuta 14
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Battute 15-16: MD "3", MS "5" (Cadenza)
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // G7
            // Battuta 16
            { keys: ["c/2"], duration: "w", midiValues: [36] }
        ]
    }
];
beyer_op101_hand_independence_lvl1_exercises.push(...hand_independence_ex55);

// File: beyer_op101_hand_independence_lvl1.js
// ... (Intestazione e array principale come prima) ...

// =======================================================================================
// === ESERCIZIO N.56 (OSTINATO RITMICO CONTRASTANTE) ===
// =======================================================================================
const hand_independence_ex56 = [
    {
        id: "beyer-op101-ex56-handindep-ostinato",
        name: "Hand Independence Lv.1 - Ex. 56 (Contrasting Rhythmic Ostinato)",
        tempo: "Allegretto con precisione",
        category: "beyer_op101_hand_indep_lvl1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 8 battute
        notesTreble: [ // Mano Destra (MD) - Pattern semiminime e crome
            // Battuta 1 (Motivo A su C)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 2 (Motivo A su G)
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            // Battuta 3 (Motivo A su Am)
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 4 (Motivo A su Dm)
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 5 (Variazione del Motivo su F)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 6 (Variazione del Motivo su C)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 7 (Variazione del Motivo su G7)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // F naturale per G7
            // Battuta 8 (Cadenza su C)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }
        ],
        notesBass: [ // Mano Sinistra (MS) - Crome costanti (Arpeggi)
            // Battuta 1 (Arpeggio C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // Battuta 2 (Arpeggio G)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Battuta 3 (Arpeggio Am)
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["e/2"], duration: "8", midiValues: [40] },
            // Battuta 4 (Arpeggio Dm)
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["a/2"], duration: "8", midiValues: [45] },
            // Battuta 5 (Arpeggio F)
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Battuta 6 (Arpeggio C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // Battuta 7 (Arpeggio G7)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Battuta 8 (Accordo C)
            { keys: ["c/2", "g/2", "e/3"], duration: "w", midiValues: [36, 43, 52] } // C maggiore, E come nota melodica più alta del basso
        ]
    }
];
beyer_op101_hand_independence_lvl1_exercises.push(...hand_independence_ex56);

// File: beyer_op101_hand_independence_lvl1.js
// ... (Intestazione e array principale come prima) ...

// =======================================================================================
// === ESERCIZIO N.57 (NOTA TENUTA E DOMANDA/RISPOSTA) ===
// =======================================================================================
const hand_independence_ex57 = [
    {
        id: "beyer-op101-ex57-handindep-heldresponse",
        name: "Hand Independence Lv.1 - Ex. 57 (Held Note & Call/Response)",
        tempo: "Andante cantabile",
        category: "beyer_op101_hand_indep_lvl1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 8 battute
        notesTreble: [ // Mano Destra (MD)
            // Battuta 1 (MD melodia, MS tiene)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 2
            { keys: ["d/5"], duration: "h", midiValues: [74] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            // Battuta 3 (MD tiene, MS risponde)
            { keys: ["g/4"], duration: "w", midiValues: [67] }, // MD tiene G4
            // Battuta 4
            { keys: ["f/4"], duration: "w", midiValues: [65] }, // MD tiene F4
            // Battuta 5 (MD melodia, MS tiene - variazione)
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Battuta 6
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f#/4"], duration: "h", midiValues: [66] }, // Prepara G
            // Battuta 7 (MD tiene, MS risponde - verso cadenza)
            { keys: ["g/4"], duration: "w", midiValues: [67] }, // MD tiene G4 (dominante)
            // Battuta 8 (Cadenza)
            { keys: ["c/4"], duration: "w", midiValues: [60] }  // MD risolve su C4
        ],
        notesBass: [ // Mano Sinistra (MS)
            // Battuta 1 (MS tiene, MD melodia)
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // MS tiene C3
            // Battuta 2
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // MS tiene G2
            // Battuta 3 (MS risponde, MD tiene)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 4
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 5 (MS tiene, MD melodia)
            { keys: ["a/2"], duration: "w", midiValues: [45] }, // MS tiene A2 (Am)
            // Battuta 6
            { keys: ["d/3"], duration: "w", midiValues: [50] }, // MS tiene D3 (Dm o G)
            // Battuta 7 (MS risponde, MD tiene - verso cadenza)
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, // Linea verso G
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // Per G7
            // Battuta 8 (Cadenza)
            { keys: ["c/2"], duration: "w", midiValues: [36] }  // MS risolve su C2
        ]
    }
];
beyer_op101_hand_independence_lvl1_exercises.push(...hand_independence_ex57);

// File: beyer_op101_hand_independence_lvl1.js
// ... (Intestazione e array principale come prima) ...

// =======================================================================================
// === ESERCIZIO N.58 (SOSTEGNO E RISPOSTA MELODICA) ===
// =======================================================================================
const hand_independence_ex58 = [
    {
        id: "beyer-op101-ex58-handindep-sustain-reply",
        name: "Hand Independence Lv.1 - Ex. 58 (Sustain & Melodic Reply)",
        tempo: "Andante espressivo",
        category: "beyer_op101_hand_indep_lvl1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 8 battute
        notesTreble: [ // Mano Destra (MD)
            // Battuta 1 (MD tiene accordo C)
            { keys: ["e/4", "g/4", "c/5"], duration: "w", midiValues: [64, 67, 72] },
            // Battuta 2
            { keys: ["d/4", "g/4", "b/4"], duration: "w", midiValues: [62, 67, 71] }, // Accordo G
            // Battuta 3 (MD risponde, MS tiene)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 4
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 5 (MD tiene accordo F)
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] },
            // Battuta 6 (MD tiene accordo C/E)
            { keys: ["e/4", "g/4", "c/5"], duration: "w", midiValues: [64, 67, 72] },
            // Battuta 7 (MD frase conclusiva, preparando cadenza)
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 8 (Cadenza finale)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] } // Accordo C
        ],
        notesBass: [ // Mano Sinistra (MS)
            // Battuta 1 (MS frase melodica, MD tiene)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 2
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Battuta 3 (MS tiene, MD risponde)
            { keys: ["a/2"], duration: "w", midiValues: [45] }, // MS tiene A2 (per F o Am)
            // Battuta 4
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // MS tiene G2 (per C o G)
            // Battuta 5 (MS frase melodica, MD tiene)
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 6
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Battuta 7 (MS tiene nota pedale G, MD conclude)
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 8 (Cadenza finale)
            { keys: ["c/2"], duration: "w", midiValues: [36] } // MS risolve su C2 basso
        ]
    }
];
beyer_op101_hand_independence_lvl1_exercises.push(...hand_independence_ex58);

// File: beyer_op101_hand_independence_lvl1.js
// ... (Intestazione e array principale come prima) ...

// =======================================================================================
// === ESERCIZIO N.59 (MELODIA CON BASSO ALBERTINO SEMPLIFICATO) ===
// =======================================================================================
const hand_independence_ex59 = [
    {
        id: "beyer-op101-ex59-handindep-alberti",
        name: "Hand Independence Lv.1 - Ex. 59 (Melody with Simple Alberti Bass)",
        tempo: "Andante cantabile",
        category: "beyer_op101_hand_indep_lvl1",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // 8 battute
        notesTreble: [ // Mano Destra (MD)
            // Battute 1-4: MD MELODIA
            // Battuta 1
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 2
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            // Battuta 3
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 4
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["g/4"], duration: "h", midiValues: [67] },

            // Battute 5-8: MD ACCOMPAGNAMENTO (Basso Albertino adattato)
            // Battuta 5 (Accordo C)
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 6 (Accordo G)
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            // Battuta 7 (Accordo F)
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 8 (Accordo C)
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["c/4"], duration: "w", midiValues: [60] } // Nota finale tenuta
        ],
        notesBass: [ // Mano Sinistra (MS)
            // Battute 1-4: MS ACCOMPAGNAMENTO (Basso Albertino semplificato)
            // Battuta 1 (Accordo C: C-G-E-G)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            // Battuta 2 (Accordo G: G-D-B-D)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Battuta 3 (Accordo F: F-C-A-C)
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Battuta 4 (Accordo C: C-G-E-G)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/2"], duration: "8", midiValues: [43] },

            // Battute 5-8: MS MELODIA
            // Battuta 5
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 6
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 7
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            // Battuta 8
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/2"], duration: "h", midiValues: [36] }
        ]
    },
// =======================================================================================
// === ESERCIZIO 56: Dialogo 3 vs 1 (Do e Sol7) ===
// =======================================================================================
{
    id: "beyer-op101-ex56-handindep-3v1",
    name: "Hand Independence Lv.1 - Ex. 56 (Dialogue 3 vs 1)",
    category: "beyer_op101_hand_indep_lvl1",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 2,
    description: "La mano melodica suona 3 note per battuta contro una nota tenuta dell'altra mano. L'esercizio si inverte a metà.",
    notesTreble: [ // Mano Destra
        // Sezione 1: MD Melodia (3 note), MS Accompagnamento (1 nota)
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // C
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["b/3"], duration: "h", midiValue: 59 }, // G7
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // C
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // G7
        // Sezione 2: Inversione - MD Accompagnamento (1 nota)
        { keys: ["c/4"], duration: "w", midiValue: 60 }, // C
        { keys: ["b/3"], duration: "w", midiValue: 59 }, // G7
        { keys: ["c/4"], duration: "w", midiValue: 60 }, // C
        { keys: ["c/4"], duration: "w", midiValue: 60 }  // C (Finale)
    ],
    notesBass: [ // Mano Sinistra
        // Sezione 1: MS Accompagnamento (1 nota)
        { keys: ["c/3"], duration: "w", midiValues: [48] }, // C
        { keys: ["g/2"], duration: "w", midiValues: [43] }, // G7
        { keys: ["c/3"], duration: "w", midiValues: [48] }, // C
        { keys: ["g/2"], duration: "w", midiValues: [43] }, // G7
        // Sezione 2: Inversione - MS Melodia (3 note)
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "h", midiValues: [48] }, // C
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "h", midiValues: [50] }, // G7
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "h", midiValues: [48] }, // C
        { keys: ["c/2"], duration: "w", midiValues: [36] }  // C (Finale)
    ]
},

// =======================================================================================
// === ESERCIZIO 57: Crome contro Semiminime (Fa Maggiore) ===
// =======================================================================================
{
    id: "beyer-op101-ex57-handindep-8th-vs-q",
    name: "Hand Independence Lv.1 - Ex. 57 (8ths vs Quarters)",
    category: "beyer_op101_hand_indep_lvl1",
    staveLayout: "grand",
    keySignature: "F", // Nuova tonalità
    timeSignature: "4/4",
    repetitions: 2,
    description: "Una mano suona un flusso costante di crome in Fa Maggiore, mentre l'altra suona semplici semiminime.",
    notesTreble: [ // Mano Destra
        // Sezione 1: MD Crome, MS Semiminime
        { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, // F/C
        { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, // Bb
        // Sezione 2: Inversione
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // F
        { keys: ["f/4"], duration: "w", midiValue: 65 }  // F
    ],
    notesBass: [ // Mano Sinistra
        // Sezione 1: MS Semiminime
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // F/C
        { keys: ["bb/2"], duration: "q", midiValues: [46] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, // Bb
        // Sezione 2: Inversione - MS Crome
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, // F
        { keys: ["f/2"], duration: "w", midiValues: [41] }  // F
    ]
},

// =======================================================================================
// === ESERCIZIO 58: Tempo di Valzer (3/4) ===
// =======================================================================================
{
    id: "beyer-op101-ex58-handindep-waltz",
    name: "Hand Independence Lv.1 - Ex. 58 (Waltz Time)",
    category: "beyer_op101_hand_indep_lvl1",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "3/4", // Nuovo tempo
    repetitions: 2,
    description: "Una melodia semplice in 3/4 è accompagnata da un classico pattern 'Oom-Pah-Pah' del valzer.",
    notesTreble: [ // Mano Destra
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // C
        { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // G7
        { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // G7
        { keys: ["c/4"], duration: "h.", midiValue: 60 }, // C
        // Inversione
        { keys: ["c/5"], duration: "h.", midiValue: 72 }, // C
        { keys: ["b/4"], duration: "h.", midiValue: 71 }, // G7
        { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // F
        { keys: ["c/4"], duration: "h.", midiValue: 60 } // C
    ],
    notesBass: [ // Mano Sinistra
        // Accompagnamento Valzer
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3", "f/3"], duration: "q", midiValues: [50, 53] }, { keys: ["d/3", "f/3"], duration: "q", midiValues: [50, 53] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] },
        // Inversione (MS Melodia)
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
        { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["f/2"], duration: "q", midiValues: [41] },
        { keys: ["c/2"], duration: "h.", midiValues: [36] }
    ]
},

// =======================================================================================
// === ESERCIZIO 59: Ritmo Puntato (Sol Maggiore) ===
// =======================================================================================
{
    id: "beyer-op101-ex59-handindep-dotted",
    name: "Hand Independence Lv.1 - Ex. 59 (Dotted Rhythm)",
    category: "beyer_op101_hand_indep_lvl1",
    staveLayout: "grand",
    keySignature: "G", // Nuova tonalità
    timeSignature: "4/4",
    repetitions: 2,
    description: "La mano destra suona un ritmo puntato (croma puntata + semicroma) contro le semiminime costanti della sinistra.",
    notesTreble: [ // Mano Destra
        { keys: ["g/4"], duration: "8d", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "8d", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
        { keys: ["c/5"], duration: "8d", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "8d", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f#/4"], duration: "h", midiValue: 66 },
        { keys: ["g/4"], duration: "8d", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        { keys: ["d/4"], duration: "w", midiValue: 62 },
    ],
    notesBass: [ // Mano Sinistra (semiminime costanti)
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
        { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
        { keys: ["g/2"], duration: "w", midiValues: [43] }
    ]
},

// =======================================================================================
// === ESERCIZIO 60: Contrappunto Semplice (Moto Contrario) ===
// =======================================================================================
{
    id: "beyer-op101-ex60-handindep-contrary",
    name: "Hand Independence Lv.2 - Ex. 60 (Contrary Motion)",
    category: "beyer_op101_hand_indep_lvl2", // Livello 2
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 2,
    description: "Le due mani suonano melodie indipendenti che spesso si muovono in direzione opposta (moto contrario).",
    notesTreble: [ // Mano Destra (linea discendente)
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["c/4"], duration: "w", midiValue: 60 }
    ],
    notesBass: [ // Mano Sinistra (linea ascendente)
        { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
        { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["f/3"], duration: "h", midiValues: [53] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
        { keys: ["c/3"], duration: "w", midiValues: [48] }
    ]
},

// =======================================================================================
// === ESERCIZIO 61: Arpeggi Incrociati (La Minore) ===
// =======================================================================================
{
    id: "beyer-op101-ex61-handindep-arpeggios",
    name: "Hand Independence Lv.2 - Ex. 61 (Crossed Arpeggios)",
    category: "beyer_op101_hand_indep_lvl2",
    staveLayout: "grand",
    keySignature: "Am", // Tonalità minore
    timeSignature: "4/4",
    repetitions: 2,
    description: "Le mani suonano arpeggi che si alternano e si 'incrociano' ritmicamente.",
    notesTreble: [ // Mano Destra
        { keys: ["e/4"], duration: "q" , midiValue: 64}, { keys: ["r/4"], duration: "q" }, { keys: ["c/5"], duration: "q" , midiValue: 72}, { keys: ["r/4"], duration: "q" }, // Am
        { keys: ["d/4"], duration: "q" , midiValue: 62}, { keys: ["r/4"], duration: "q" }, { keys: ["a/4"], duration: "q" , midiValue: 69}, { keys: ["r/4"], duration: "q" }, // Dm
        { keys: ["e/4"], duration: "q" , midiValue: 64}, { keys: ["r/4"], duration: "q" }, { keys: ["b/4"], duration: "q" , midiValue: 71}, { keys: ["r/4"], duration: "q" }, // E
        { keys: ["a/4"], duration: "h" , midiValue: 69}, { keys: ["e/4"], duration: "h" , midiValue: 64}  // Am
    ],
    notesBass: [ // Mano Sinistra
        { keys: ["r/4"], duration: "q" }, { keys: ["a/3"], duration: "q" , midiValues: [57]}, { keys: ["r/4"], duration: "q" }, { keys: ["e/3"], duration: "q" , midiValues: [52]}, // Am
        { keys: ["r/4"], duration: "q" }, { keys: ["f/3"], duration: "q" , midiValues: [53]}, { keys: ["r/4"], duration: "q" }, { keys: ["d/3"], duration: "q" , midiValues: [50]}, // Dm
        { keys: ["r/4"], duration: "q" }, { keys: ["g#/3"], duration: "q" , midiValues: [56]}, { keys: ["r/4"], duration: "q" }, { keys: ["e/3"], duration: "q" , midiValues: [52]}, // E (con G#)
        { keys: ["a/2"], duration: "h" , midiValues: [45]}, { keys: ["e/3"], duration: "h" , midiValues: [52]}  // Am
    ]
},

// =======================================================================================
// === ESERCIZIO 62: Studio con Walking Bass e Melodia Sincopata (NUOVO) ===
// =======================================================================================
{
    id: "beyer-op101-ex62-handindep-walking-bass",
    name: "Hand Independence Lv.2 - Ex. 62 (Walking Bass Study)",
    category: "beyer_op101_hand_indep_lvl2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 1, // È già lungo 16 battute
    description: "Uno studio di 16 battute con una linea di 'walking bass' costante nella mano sinistra e una melodia sincopata e ritmicamente indipendente nella mano destra.",
    notesTreble: [ // Mano Destra (Melodia sincopata)
        // Sezione C (Battute 1-4)
        { keys: ["r/4"], duration: "8" }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["r/4"], duration: "8" }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        { keys: ["r/4"], duration: "8" }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
        // Sezione Am (Battute 5-8)
        { keys: ["r/4"], duration: "8" }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["r/4"], duration: "8" }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 },
        // Sezione F (Battute 9-12)
        { keys: ["r/4"], duration: "8" }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["r/4"], duration: "8" }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        // Sezione G7 -> C (Battute 13-16)
        { keys: ["r/4"], duration: "8" }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
        { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        { keys: ["c/4"], duration: "w", midiValue: 60 }
    ],
    notesBass: [ // Mano Sinistra (Walking Bass)
        // Sezione C (Battute 1-4)
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
        // Sezione Am (Battute 5-8)
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["a/2"], duration: "h", midiValues: [45] },
        // Sezione F (Battute 9-12)
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
        { keys: ["bb/2"], duration: "q", midiValues: [46] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "q", midiValues: [41] },
        { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
        // Sezione G7 -> C (Battute 13-16)
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["e/2"], duration: "q", midiValues: [40] },
        { keys: ["c/2"], duration: "w", midiValues: [36] }
    ]
},

// =======================================================================================
// === ESERCIZIO 63: Melodia Sincopata e Basso Continuo ===
// =======================================================================================
{
    id: "beyer-op101-ex63-handindep-syncopation",
    name: "Hand Independence Lv.2 - Ex. 63 (Syncopation)",
    category: "beyer_op101_hand_indep_lvl2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 2,
    description: "Una melodia sincopata nella mano destra suona contro un Basso Alberti costante nella sinistra.",
    notesTreble: [ // Mano Destra (sincopata)
        { keys: ["r/4"], duration: "8" }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["r/4"], duration: "8" }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        { keys: ["r/4"], duration: "8" }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
    ],
    notesBass: [ // Mano Sinistra (Basso Alberti)
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
        { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
        { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
        { keys: ["c/3","g/3"], duration: "q", midiValues: [48, 55] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] }
    ]
},

// =======================================================================================
// === ESERCIZIO 64: Stile Canone (Voci che si imitano) ===
// =======================================================================================
{
    id: "beyer-op101-ex64-handindep-canon",
    name: "Hand Independence Lv.2 - Ex. 64 (Canon Style)",
    category: "beyer_op101_hand_indep_lvl2",
    staveLayout: "grand",
    keySignature: "G",
    timeSignature: "4/4",
    repetitions: 2,
    description: "La mano sinistra imita la frase della mano destra con un ritardo di una battuta, creando un semplice canone.",
    notesTreble: [ // Mano Destra (Leader)
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "h", midiValue: 66 },
        { keys: ["g/4"], duration: "w", midiValue: 67 }
    ],
    notesBass: [ // Mano Sinistra (Follower)
        { keys: ["r/4"], duration: "w" }, // Pausa per la prima battuta
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
        { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f#/3"], duration: "h", midiValues: [54] }
    ]
},

// =======================================================================================
// === ESERCIZIO 65: Accompagnamento Stride Semplificato ===
// =======================================================================================
{
    id: "beyer-op101-ex65-handindep-stride",
    name: "Hand Independence Lv.1 - Ex. 65 (Simple Stride)",
    category: "beyer_op101_hand_indep_lvl1", // Ritorno a Lv.1 per uno stile diverso
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 2,
    description: "Introduzione allo stile 'stride'. La mano sinistra alterna una nota bassa sul primo e terzo tempo con un accordo sul secondo e quarto.",
    notesTreble: [ // Mano Destra (Melodia semplice)
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
    ],
    notesBass: [ // Mano Sinistra (Pattern Stride)
        // C Major
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] },
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] },
        // F Major
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2", "c/3"], duration: "q", midiValues: [45, 48] },
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2", "c/3"], duration: "q", midiValues: [45, 48] },
        // G Major
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] },
        // C Major
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] },
        { keys: ["c/2"], duration: "h", midiValues: [36] }
    ]
},
// =======================================================================================
// === ESERCIZIO 66: Studio su Scale e Arpeggi Incrociati (16 Battute) ===
// =======================================================================================
{
    id: "beyer-op101-ex66-handindep-scales-arps",
    name: "Hand Independence Lv.2 - Ex. 66 (Scales & Arpeggios)",
    category: "beyer_op101_hand_indep_lvl2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 1,
    description: "Uno studio di 16 battute dove una mano esegue scale fluide mentre l'altra suona accordi arpeggiati.",
    notesTreble: [ // Mano Destra
        // Sezione 1: MD Scale, MS Arpeggi
        { keys: ["c/4"], duration: "8" , midiValue: 60}, { keys: ["d/4"], duration: "8" , midiValue: 62}, { keys: ["e/4"], duration: "8" , midiValue: 64}, { keys: ["f/4"], duration: "8" , midiValue: 65}, { keys: ["g/4"], duration: "8" , midiValue: 67}, { keys: ["a/4"], duration: "8" , midiValue: 69}, { keys: ["b/4"], duration: "8" , midiValue: 71}, { keys: ["c/5"], duration: "8" , midiValue: 72}, // Scala di Do
        { keys: ["b/4"], duration: "8" , midiValue: 71}, { keys: ["a/4"], duration: "8" , midiValue: 69}, { keys: ["g/4"], duration: "8" , midiValue: 67}, { keys: ["f/4"], duration: "8" , midiValue: 65}, { keys: ["e/4"], duration: "h" , midiValue: 64}, // Scala discendente
        { keys: ["d/4"], duration: "8" , midiValue: 62}, { keys: ["e/4"], duration: "8" , midiValue: 64}, { keys: ["f#/4"], duration: "8" , midiValue: 66}, { keys: ["g/4"], duration: "8" , midiValue: 67}, { keys: ["a/4"], duration: "8" , midiValue: 69}, { keys: ["b/4"], duration: "8" , midiValue: 71}, { keys: ["c/5"], duration: "8" , midiValue: 72}, { keys: ["d/5"], duration: "8" , midiValue: 74}, // Scala di Sol
        { keys: ["c/5"], duration: "8" , midiValue: 72}, { keys: ["b/4"], duration: "8" , midiValue: 71}, { keys: ["a/4"], duration: "8" , midiValue: 69}, { keys: ["g/4"], duration: "8" , midiValue: 67}, { keys: ["f#/4"], duration: "h" , midiValue: 66},
        // Sezione 2: Inversione
        { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "h", midiValues: [62, 65, 69] },
        { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
        { keys: ["b/3", "d/4", "g/4"], duration: "h", midiValues: [59, 62, 67] }, { keys: ["c/4", "e/4", "a/4"], duration: "h", midiValues: [60, 64, 69] },
        { keys: ["c/4"], duration: "w", midiValue: 60 }
    ],
    notesBass: [ // Mano Sinistra
        // Sezione 1: MS Arpeggi
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
        // Sezione 2: Inversione (MS Scale)
        { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
        { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["c/3"], duration: "h", midiValues: [48] }
    ]
},

// =======================================================================================
// === ESERCIZIO 67: Canone a due voci esteso (16 battute) ===
// =======================================================================================
{
    id: "beyer-op101-ex67-handindep-extended-canon",
    name: "Hand Independence Lv.2 - Ex. 67 (Extended Canon)",
    category: "beyer_op101_hand_indep_lvl2",
    staveLayout: "grand",
    keySignature: "G",
    timeSignature: "4/4",
    repetitions: 1,
    description: "Un canone più lungo e complesso. La mano sinistra imita la destra dopo un ritardo di due battute.",
    notesTreble: [ // Mano Destra (Leader)
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f#/4"], duration: "h", midiValue: 66 },
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
        { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        { keys: ["f#/4"], duration: "h", midiValue: 66 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["d/4"], duration: "w", midiValue: 62 },
        { keys: ["r/4"], duration: "w"}, { keys: ["r/4"], duration: "w"}, // MD Pausa mentre MS finisce
    ],
    notesBass: [ // Mano Sinistra (Follower, inizia dopo 2 battute)
        { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
        { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
        { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["f#/3"], duration: "h", midiValues: [54] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
        { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
        { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
        { keys: ["f#/3"], duration: "h", midiValues: [54] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
        { keys: ["d/3"], duration: "w", midiValues: [50] }
    ]
},

// =======================================================================================
// === ESERCIZIO 68: Moto Obliquo e Contrario (16 battute) ===
// =======================================================================================
{
    id: "beyer-op101-ex68-handindep-oblique-motion",
    name: "Hand Independence Lv.2 - Ex. 68 (Oblique Motion)",
    category: "beyer_op101_hand_indep_lvl2",
    staveLayout: "grand",
    keySignature: "Am",
    timeSignature: "3/4",
    repetitions: 1,
    description: "Una mano tiene note lunghe (moto obliquo) mentre l'altra si muove. Include sezioni in moto contrario.",
    notesTreble: [ // Mano Destra
        { keys: ["a/4"], duration: "h.", midiValue: 69 },
        { keys: ["b/4"], duration: "h.", midiValue: 71 },
        { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
        { keys: ["a/4"], duration: "h.", midiValue: 69 },
        { keys: ["g#/4"], duration: "h.", midiValue: 68 }, // E7
        { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // Moto contrario
        { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, // Moto contrario
        { keys: ["a/4"], duration: "h.", midiValue: 69 }
    ],
    notesBass: [ // Mano Sinistra
        { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
        { keys: ["b/2"], duration: "h.", midiValues: [47] },
        { keys: ["e/3"], duration: "h.", midiValues: [52] },
        { keys: ["f/3"], duration: "h.", midiValues: [53] },
        { keys: ["d/3"], duration: "h.", midiValues: [50] },
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Moto contrario
        { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // Moto contrario
        { keys: ["a/2"], duration: "h.", midiValues: [45] }
    ]
},

// =======================================================================================
// === ESERCIZIO 69: Studio Avanzato su Ritmi Sincopati (16 battute) ===
// =======================================================================================
{
    id: "beyer-op101-ex69-handindep-advanced-sync",
    name: "Hand Independence Lv.3 - Ex. 69 (Advanced Syncopation)",
    category: "beyer_op101_hand_indep_lvl3", // Livello 3
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 1,
    description: "Entrambe le mani suonano ritmi sincopati che si intrecciano, richiedendo un alto livello di indipendenza ritmica.",
    notesTreble: [ // Mano Destra
        { keys: ["r/4"], duration: "8" }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["r/4"], duration: "8" }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["r/4"], duration: "q" }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        { keys: ["c/4"], duration: "w", midiValue: 60 }
    ],
    notesBass: [ // Mano Sinistra
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["r/4"], duration: "h" }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["r/4"], duration: "h" }, { keys: ["d/3"], duration: "q", midiValues: [50] },
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
        { keys: ["c/3"], duration: "w", midiValues: [48] },
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/3"], duration: "h", midiValues: [48] },
        { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
        { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
        { keys: ["c/2"], duration: "w", midiValues: [36] }
    ]
},

// =======================================================================================
// === ESERCIZIO 70: Fuga Semplice a Due Voci (16 battute) ===
// =======================================================================================
{
    id: "beyer-op101-ex70-handindep-fugue",
    name: "Hand Independence Lv.3 - Ex. 70 (Simple Fugue)",
    category: "beyer_op101_hand_indep_lvl3",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 1,
    description: "Un'introduzione allo stile polifonico di una fuga. La mano destra (soggetto) presenta un tema, e la sinistra (risposta) lo ripropone una quinta sotto, mentre la destra continua con un controsoggetto.",
    notesTreble: [ // Mano Destra (Soggetto e Controsoggetto)
        // Soggetto
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "h", midiValue: 76 },
        { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
        { keys: ["c/5"], duration: "w", midiValue: 72 },
        // Controsoggetto
        { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["e/5"], duration: "h", midiValue: 76 },
        { keys: ["f/5"], duration: "h", midiValue: 77 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
        { keys: ["e/5"], duration: "w", midiValue: 76 },
        // Coda
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["g/4"], duration: "w", midiValue: 67 },
        { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
        { keys: ["c/4"], duration: "w", midiValue: 60 }
    ],
    notesBass: [ // Mano Sinistra (Risposta)
        { keys: ["r/4"], duration: "w" },
        { keys: ["r/4"], duration: "w" },
        { keys: ["r/4"], duration: "w" },
        // Risposta (Soggetto trasposto una quinta sotto)
        { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
        { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
        { keys: ["f/4"], duration: "w", midiValues: [65] },
        // Sviluppo
        { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
        { keys: ["d/4"], duration: "w", midiValues: [62] },
        // Coda
        { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["d/4"], duration: "h", midiValues: [50] }, // Errore MIDI, corretto a d/3 -> 50
        { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
        { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["f/3"], duration: "h", midiValues: [53] },
        { keys: ["e/3"], duration: "w", midiValues: [52] },
        { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
        { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["e/2"], duration: "h", midiValues: [40] },
        { keys: ["c/2"], duration: "w", midiValues: [36] }
    ]
},


    
];
beyer_op101_hand_independence_lvl1_exercises.push(...hand_independence_ex59);


if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

const categoryKeyHandIndepLvl1 = "beyer_op101_hand_indep_lvl1";

if (typeof window.exerciseData[categoryKeyHandIndepLvl1] === 'undefined') {
  window.exerciseData[categoryKeyHandIndepLvl1] = [];
}

window.exerciseData[categoryKeyHandIndepLvl1].push(...beyer_op101_hand_independence_lvl1_exercises);

// console.log(`Esercizi aggiunti alla categoria '${categoryKeyHandIndepLvl1}':`, window.exerciseData[categoryKeyHandIndepLvl1]);