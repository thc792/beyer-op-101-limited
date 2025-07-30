/**
 * js/exercises/beyer_op101_fase3_ex_31_50_REVISED_NO_EXTRA_RESTS.js
 * Fase 3 - CORRETTA RIMUOVENDO PAUSE ESPLICITE NON NECESSARIE
 */

const beyer_op101_fase3_exercises_31_50_revised_no_extra_rests = [
    // =======================================================================================
    // === SCALA DI DO MAGGIORE ===
    // =======================================================================================
    {
        id: "beyer-op101-f3-ex31",
        name: "Fase 3 - Ex. 31: Scala Do Magg. - MD 1 Ottava",
        purpose: "Introdurre la scala di Do Maggiore, mano destra, 1 ottava.",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // 15 note 'q' + 1 'qr' = 4 battute. Ora 15 note 'q', quasi 4 battute.
        repetitions: 2,
        notesTreble: [
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }
            // RIMOSSA: { keys: ["b/4"], type:"rest", duration: "qr" }
        ],
        notesBass: []
    },
    {
        id: "beyer-op101-f3-ex32",
        name: "Fase 3 - Ex. 32: Scala Do Magg. - MS 1 Ottava",
        purpose: "Introdurre la scala di Do Maggiore, mano sinistra, 1 ottava.",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [],
        notesBass: [
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }
            // RIMOSSA: { keys: ["b/4"], type:"rest", duration: "qr" }
        ]
    },
    {
        id: "beyer-op101-f3-ex33",
        name: "Fase 3 - Ex. 33: Scala Do Magg. - Mani Unite 1 Ottava",
        purpose: "Coordinare le mani nella scala di Do Maggiore, 1 ottava.",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }
            // RIMOSSA PAUSA
        ],
        notesBass: [
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }
            // RIMOSSA PAUSA
        ]
    },
    {
        id: "beyer-op101-f3-ex34",
        name: "Fase 3 - Ex. 34: Arpeggio Do Magg. - MD e MS Separate",
        purpose: "Introdurre l'arpeggio spezzato di Do Maggiore, mani separate.",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "3/4", // Ogni mano suona per 3 battute
        repetitions: 2,
        notesTreble: [ // MD suona per 3 battute
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["c/4"], duration: "h.", midiValues: [60]}
        ],
        notesBass: [ // MS suona per le successive 3 battute. Il renderer deve gestire l'allineamento.
                     // Se ciò non avviene, si dovrebbero inserire pause esplicite in MD per le battute 4-6.
                     // O, meglio, dividere in due esercizi: uno per MD, uno per MS.
                     // Per ora, assumo che il renderer allinei le due parti indipendentemente se non sono della stessa lunghezza.
                     // Oppure, se devono essere sincrone, l'array più corto implica pause.
            // Per essere sicuri, faccio suonare MS dopo MD, quindi MD avrà pause implicite dopo.
            // E MS avrà pause implicite prima. Questo è il modo più semplice se il renderer lo permette.
            // Se il renderer necessita di Array della stessa "lunghezza temporale", allora servono pause esplicite.
            // Dato l'errore, è meglio semplificare.
            // Riscrivo come se MS iniziasse DOPO che MD ha finito.
            // Questo esercizio ora dura 6 battute totali, 3 MD e 3 MS.
            // Il renderer dovrebbe mostrare MD, poi MS.
            // SE invece si vogliono sovrapporre o alternare, la struttura deve essere più complessa con pause esplicite.
            // MANTENGO LA STRUTTURA PRECEDENTE CON PAUSE ESPLICITE PER MS, ma standard Vexflow:
            { keys: ["b/4"], type:"rest", duration: "wr" }, // Pausa semibreve (che in 3/4 è più di una battuta, VexFlow la adatta o la spezza)
                                                          // Meglio: { keys: ["b/4"], type:"rest", duration: "hdr" } (minima puntata con pausa)
            { keys: ["b/4"], type:"rest", duration: "hdr" }, // Battuta 1 di pausa MS
            { keys: ["b/4"], type:"rest", duration: "hdr" }, // Battuta 2 di pausa MS
            { keys: ["b/4"], type:"rest", duration: "hdr" }, // Battuta 3 di pausa MS
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Battuta 4 MS
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, // Battuta 5 MS
            { keys: ["c/3"], duration: "h.", midiValues: [48]} // Battuta 6 MS
        ]
    },
    // ... Tutti gli esercizi successivi (35-50) devono avere le pause 'qr' rimosse dalla fine delle sequenze di note ...
    // Esempio per Ex. 35:
    {
        id: "beyer-op101-f3-ex35",
        name: "Fase 3 - Ex. 35: Scala Sol Magg. - MD 1 Ottava",
        purpose: "Scala di Sol Maggiore (con Fa#), mano destra, 1 ottava.",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "G",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }
            // RIMOSSA PAUSA
        ],
        notesBass: []
    },
    // Esempio per Ex. 36:
    {
        id: "beyer-op101-f3-ex36",
        name: "Fase 3 - Ex. 36: Scala Sol Magg. - MS 1 Ottava",
        purpose: "Scala di Sol Maggiore, mano sinistra, 1 ottava.",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "G",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [],
        notesBass: [
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }
            // RIMOSSA PAUSA
        ]
    },
    // Esempio per Ex. 37 (Arpeggio Sol Magg. Mani Unite)
    {
        id: "beyer-op101-f3-ex37",
        name: "Fase 3 - Ex. 37: Arpeggio Sol Magg. - Mani Unite",
        purpose: "Arpeggio spezzato di Sol Maggiore, mani unite.",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "G",
        timeSignature: "4/4", // 4 battute
        repetitions: 2,
        notesTreble: [
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/4"], type:"rest", duration: "qr" }, // Pausa per riempire la seconda battuta
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // Battuta 3
            { keys: ["g/4"], duration: "w", midiValues: [67] } // Battuta 4
        ],
        notesBass: [
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/4"], type:"rest", duration: "qr" },
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            { keys: ["g/2"], duration: "w", midiValues: [43] }
        ]
    },
    // Continuare questo pattern per tutti gli esercizi da 38 a 48, rimuovendo le pause '{ keys: ["b/4"], type:"rest", duration: "qr" }'
    // alla fine delle sequenze di scale.

    // Esempio per Ex. 38 (Scala Fa MD):
    {
        id: "beyer-op101-f3-ex38",
        name: "Fase 3 - Ex. 38: Scala Fa Magg. - MD 1 Ottava",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "F",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["bb/3"], duration: "q", midiValues: [58] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["bb/3"], duration: "q", midiValues: [58] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }
        ],
        notesBass: []
    },
    // Esempio per Ex. 39 (Scala Fa MS):
    {
        id: "beyer-op101-f3-ex39",
        name: "Fase 3 - Ex. 39: Scala Fa Magg. - MS 1 Ottava",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "F",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [],
        notesBass: [
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["bb/2"], duration: "q", midiValues: [46] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["bb/2"], duration: "q", midiValues: [46] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "q", midiValues: [41] }
        ]
    },
     // Esempio per Ex. 40 (Arpeggio Fa Mani Unite):
    {
        id: "beyer-op101-f3-ex40",
        name: "Fase 3 - Ex. 40: Arpeggio Fa Magg. - Mani Unite",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "F",
        timeSignature: "3/4", // 3 battute
        repetitions: 2,
        notesTreble: [
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["f/3"], duration: "h.", midiValues: [53]}
        ],
        notesBass: [
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["f/2"], duration: "h.", midiValues: [41]}
        ]
    },
    // Esempio per Ex. 41 (Scala Re Mani Unite):
    {
        id: "beyer-op101-f3-ex41",
        name: "Fase 3 - Ex. 41: Scala Re Magg. - Mani Unite 1 Ottava",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "D",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c#/5"], duration: "q", midiValues: [73] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            { keys: ["c#/5"], duration: "q", midiValues: [73] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }
        ],
        notesBass: [
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }
        ]
    },
    // Esempio per Ex. 42 (Arpeggio Re Mani Unite):
    {
        id: "beyer-op101-f3-ex42",
        name: "Fase 3 - Ex. 42: Arpeggio Re Magg. - Mani Unite",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "D",
        timeSignature: "3/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["d/4"], duration: "h.", midiValues: [62]}
        ],
        notesBass: [
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["d/3"], duration: "h.", midiValues: [50]}
        ]
    },
    // Esempio per Ex. 43 (Scala La MD):
    {
        id: "beyer-op101-f3-ex43",
        name: "Fase 3 - Ex. 43: Scala La Magg. - MD 1 Ottava",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "A",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }
        ],
        notesBass: []
    },
    // Esempio per Ex. 44 (Arpeggio La MS):
     {
        id: "beyer-op101-f3-ex44",
        name: "Fase 3 - Ex. 44: Arpeggio La Magg. - MS",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "A",
        timeSignature: "3/4",
        repetitions: 2,
        notesTreble: [],
        notesBass: [
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c#/3"], duration: "q", midiValues: [49] },
            { keys: ["a/2"], duration: "h.", midiValues: [45]}
        ]
    },
    // Esempio per Ex. 45 (Scala Mi MS):
     {
        id: "beyer-op101-f3-ex45",
        name: "Fase 3 - Ex. 45: Scala Mi Magg. - MS 1 Ottava",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "E",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [],
        notesBass: [
            { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["f#/2"], duration: "q", midiValues: [42] }, { keys: ["g#/2"], duration: "q", midiValues: [44] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["g#/2"], duration: "q", midiValues: [44] }, { keys: ["f#/2"], duration: "q", midiValues: [42] }, { keys: ["e/2"], duration: "q", midiValues: [40] }
        ]
    },
    // Esempio per Ex. 46 (Arpeggio Mi MD):
    {
        id: "beyer-op101-f3-ex46",
        name: "Fase 3 - Ex. 46: Arpeggio Mi Magg. - MD",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "E",
        timeSignature: "3/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g#/3"], duration: "q", midiValues: [56] },
            { keys: ["e/3"], duration: "h.", midiValues: [52]}
        ],
        notesBass: []
    },
    // Esempio per Ex. 47 (Scala Si MD):
    {
        id: "beyer-op101-f3-ex47",
        name: "Fase 3 - Ex. 47: Scala Si Magg. - MD 1 Ottava",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "B",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["d#/4"], duration: "q", midiValues: [63] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["a#/4"], duration: "q", midiValues: [70] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a#/4"], duration: "q", midiValues: [70] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d#/4"], duration: "q", midiValues: [63] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["b/3"], duration: "q", midiValues: [59] }
        ],
        notesBass: []
    },
    // Esempio per Ex. 48 (Arpeggio Si Mani Unite):
    {
        id: "beyer-op101-f3-ex48",
        name: "Fase 3 - Ex. 48: Arpeggio Si Magg. - Mani Unite",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "B",
        timeSignature: "3/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["d#/4"], duration: "q", midiValues: [63] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["d#/4"], duration: "q", midiValues: [63] },
            { keys: ["b/3"], duration: "h.", midiValues: [59]}
        ],
        notesBass: [
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["d#/3"], duration: "q", midiValues: [51] },
            { keys: ["b/2"], duration: "h.", midiValues: [47]}
        ]
    },
    // Esercizio Riepilogativo
    {
        id: "beyer-op101-f3-ex49",
        name: "Fase 3 - Ex. 49: Studio su Scale e Arpeggi (Do e Sol)",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67], options:{keySignature:"G"} }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["d/5"], duration: "8", midiValues: [74] }, { keys: ["e/5"], duration: "8", midiValues: [76] }, { keys: ["f#/5"], duration: "8", midiValues: [78] }, { keys: ["g/5"], duration: "8", midiValues: [79] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["g/5"], duration: "h", midiValues: [79] },
            { keys: ["g/4"], duration: "w", midiValues: [67], options:{keySignature:"C"} }
        ],
        notesBass: [
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["d/3"], duration: "h", midiValues: [50], options:{keySignature:"G"} },
            { keys: ["g/2"], duration: "w", midiValues: [43]},
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            { keys: ["c/3"], duration: "w", midiValues: [48], options:{keySignature:"C"} }
        ]
    },
    // Scala Cromatica
    {
        id: "beyer-op101-f3-ex50",
        name: "Fase 3 - Ex. 50: Scala Cromatica (Frammento MD)",
        category: "beyer_op101_fase3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // 3 battute + 1 nota
        repetitions: 1,
        notesTreble: [
            { keys: ["c/4"], duration: "8", midiValues: [60]}, { keys: ["c#/4"], duration: "8", midiValues: [61]}, { keys: ["d/4"], duration: "8", midiValues: [62]}, { keys: ["d#/4"], duration: "8", midiValues: [63]},
            { keys: ["e/4"], duration: "8", midiValues: [64]}, { keys: ["f/4"], duration: "8", midiValues: [65]}, { keys: ["f#/4"], duration: "8", midiValues: [66]}, { keys: ["g/4"], duration: "8", midiValues: [67]},
            { keys: ["g#/4"], duration: "8", midiValues: [68]}, { keys: ["a/4"], duration: "8", midiValues: [69]}, { keys: ["a#/4"], duration: "8", midiValues: [70]}, { keys: ["b/4"], duration: "8", midiValues: [71]},
            { keys: ["c/5"], duration: "w", midiValues: [72]} // Semibreve per riempire la battuta finale
        ],
        notesBass: []
    }
];

// Aggiungi questi esercizi a window.exerciseData
if (typeof window.exerciseData === 'undefined') {
  window.exerciseData = {};
}

if (typeof window.exerciseData.beyer_op101_fase3 === 'undefined') {
  window.exerciseData.beyer_op101_fase3 = [];
}
// Svuota l'array se stai ricaricando per evitare duplicati
// window.exerciseData.beyer_op101_fase3 = []; // Decommenta se necessario
window.exerciseData.beyer_op101_fase3.push(...beyer_op101_fase3_exercises_31_50_revised_no_extra_rests);

// console.log("window.exerciseData dopo beyer_op101_fase3_ex_31_50_REVISED_NO_EXTRA_RESTS.js:", window.exerciseData.beyer_op101_fase3);