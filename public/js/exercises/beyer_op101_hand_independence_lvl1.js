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