/**
 * js/vexflow_renderer.js
 * Renderer per esercizi musicali usando VexFlow.
 * Gestisce la diteggiatura e il layout adattivo dei sistemi.
 *
 * Piano IA revisited bayer op 101
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Assicurati che Vex sia disponibile globalmente (caricato via <script> in HTML)
const { Factory, Stave, StaveNote, Formatter, Voice, Beam, Accidental, Dot, Fingering, StaveConnector, TickContext, Fraction, Note, Stem } = Vex.Flow;

// --- Costanti ---
const MEASURES_PER_LINE = 3; // Battute per riga standard (puoi aggiustare: 2, 3, o 4)
const SYSTEM_SPACING = 280;
const SINGLE_STAVE_SYSTEM_SPACING = 100;
const STAVE_START_X = 10;
const STAVE_RIGHT_MARGIN = 15; // Aumentato leggermente per più respiro a destra
const STAVE_START_Y_GRAND = 40;
const STAVE_START_Y_SINGLE = 60;
const STAVE_VERTICAL_DISTANCE = 125;
const SCROLL_OFFSET_Y = 20;

// --- Funzioni Helper ---
function durationToTicks(durationString) {
    const BEAT_TICKS = Vex.Flow.RESOLUTION / 4;
    let ticks = 0;
    const baseDuration = durationString.replace(/[.d]/g, '');

    switch (baseDuration) {
        case 'w': ticks = 4 * BEAT_TICKS; break;
        case 'h': ticks = 2 * BEAT_TICKS; break;
        case 'q': ticks = BEAT_TICKS; break;
        case '8': ticks = BEAT_TICKS / 2; break;
        case '16': ticks = BEAT_TICKS / 4; break;
        case '32': ticks = BEAT_TICKS / 8; break;
        default:
            console.warn(`Durata non riconosciuta: ${durationString}. Usando semiminima (q).`);
            ticks = BEAT_TICKS;
            break;
    }

    if (durationString.includes('.')) {
        let numDots = (durationString.match(/\./g) || []).length;
        let dotValue = ticks;
        for (let i = 0; i < numDots; i++) {
            dotValue /= 2;
            ticks += dotValue;
        }
    } else if (durationString.endsWith('d') && !durationString.includes('.')) {
         if (!durationString.includes('.')) {
             ticks = ticks * 1.5;
         } else {
             console.warn(`Formato durata misto punto/d non supportato: ${durationString}. Ignorando 'd'.`);
         }
    }
    return ticks;
}

function getTicksPerMeasure(timeSignature) {
    try {
        if (!timeSignature) return Vex.Flow.RESOLUTION;
        const parts = timeSignature.split('/');
        if (parts.length !== 2) {
             console.warn("Formato indicazione tempo non valido:", timeSignature, "Fallback a 4/4.");
             return Vex.Flow.RESOLUTION;
        }
        const beats = parseInt(parts[0]);
        const beatValue = parseInt(parts[1]);
        if (isNaN(beats) || isNaN(beatValue) || beatValue === 0 || !Number.isInteger(beats) || !Number.isInteger(beatValue)) {
             console.warn("Valori indicazione tempo non validi:", timeSignature, "Fallback a 4/4.");
             return Vex.Flow.RESOLUTION;
        }
        return (Vex.Flow.RESOLUTION / beatValue) * beats;
    } catch (e) {
        console.error("Errore durante il parsing dell'indicazione tempo:", timeSignature, e);
        return Vex.Flow.RESOLUTION;
    }
}

function calculateNoteTicks(notesArray, ticksPerMeasure) {
    if (!notesArray || !Array.isArray(notesArray)) return [];
    let currentTick = 0;
    let currentMeasureTick = 0;
    let currentMeasure = 0;

    return notesArray.map(note => {
        if (!note || typeof note !== 'object' || typeof note.duration !== 'string') {
            console.warn("Oggetto nota/pausa non valido trovato durante il calcolo dei ticks:", note);
            return null;
        }
        const noteTicks = durationToTicks(note.duration);
        if (isNaN(noteTicks) || noteTicks <= 0) {
             console.warn(`Durata non valida o zero per la nota: ${note.duration}. Ticks calcolati: ${noteTicks}. Salto la nota.`);
             return null;
        }
        while (currentMeasureTick + noteTicks > ticksPerMeasure) {
             currentMeasure++;
             currentMeasureTick = 0;
             currentTick = currentMeasure * ticksPerMeasure;
        }
        const noteWithTick = { ...note, startTick: currentTick };
        currentTick += noteTicks;
        currentMeasureTick += noteTicks;
        if (currentMeasureTick === ticksPerMeasure) {
            currentMeasure++;
            currentMeasureTick = 0;
        }
        return noteWithTick;
    }).filter(note => note !== null);
}

function segmentNotesByMeasure(notes, ticksPerMeasure, measuresPerLine) {
    if (!notes || !Array.isArray(notes) || notes.length === 0) return [];
    const segments = [];
    let currentSegment = [];
    const ticksPerLine = ticksPerMeasure * measuresPerLine;
    const validNotes = notes.filter(note => note && typeof note.duration === 'string' && typeof note.startTick === 'number');

    validNotes.forEach(note => {
        const noteTicks = durationToTicks(note.duration);
         if (isNaN(noteTicks) || noteTicks <= 0) {
             console.warn("Nota con ticks non validi trovata durante la segmentazione, salto:", note);
             return;
         }
        const noteEndTick = note.startTick + noteTicks;
        const segmentStartTick = currentSegment.length > 0 ? currentSegment[0].startTick : note.startTick;
        const currentLineEndTick = segmentStartTick + ticksPerLine;

        if ( (currentSegment.length === 0 && note.startTick % ticksPerLine === 0) ||
             (currentSegment.length > 0 && note.startTick >= currentLineEndTick) ||
             (currentSegment.length === 0 && noteTicks > ticksPerLine)
           ) {
             if (currentSegment.length > 0) {
                segments.push(currentSegment);
             }
            currentSegment = [note];
             if (noteTicks > ticksPerLine) {
                 segments.push(currentSegment);
                 currentSegment = [];
             }
        } else {
            currentSegment.push(note);
        }
        const currentSegmentStartTick = currentSegment.length > 0 ? currentSegment[0].startTick : 0;
        if (currentSegment.length > 0 && noteEndTick === currentSegmentStartTick + ticksPerLine) {
             segments.push(currentSegment);
             currentSegment = [];
        }
    });
    if (currentSegment.length > 0) {
        segments.push(currentSegment);
    }
    return segments;
}

// === FUNZIONE createStyledStaveNotes CON DITEGGIATURA ===
function createStyledStaveNotes(noteDataArray, clefType, defaultFill = '#333', defaultStroke = '#333') {
    if (!noteDataArray || !Array.isArray(noteDataArray)) return [];

    return noteDataArray.map((noteData) => {
        if (!noteData || typeof noteData !== 'object' || !noteData.keys || !Array.isArray(noteData.keys) || noteData.keys.length === 0 || typeof noteData.duration !== 'string') {
            console.warn("Oggetto nota dati non valido o incompleto per VexFlow:", noteData);
            return null;
        }

        const isRest = noteData.keys[0].toLowerCase().startsWith('r/');
        const baseDuration = noteData.duration.replace(/[.d]/g, '');

        const noteConfig = {
            keys: isRest ? ["b/4"] : noteData.keys,
            duration: baseDuration,
            clef: clefType,
            auto_stem: true
        };
        if (isRest) {
            noteConfig.type = 'r';
        }

        let staveNote;
        try {
            staveNote = new StaveNote(noteConfig);
        } catch (e) {
            console.error("Errore creazione StaveNote:", noteConfig, noteData, e);
            return null;
        }

        if (!isRest && noteData.keys) {
            noteData.keys.forEach((key, keyIndex) => {
                const pitchName = key.split('/')[0];
                let accidentalSymbol = null;
                if (pitchName.includes("##")) accidentalSymbol = "##";
                else if (pitchName.includes("bb")) accidentalSymbol = "bb";
                else if (pitchName.endsWith("#") && !pitchName.endsWith("##")) accidentalSymbol = "#";
                else if (pitchName.endsWith("b") && !pitchName.endsWith("bb") && pitchName !== "b") accidentalSymbol = "b";

                if (accidentalSymbol) {
                    try { staveNote.addModifier(new Accidental(accidentalSymbol), keyIndex); }
                    catch (e) { console.error("Errore aggiunta alterazione:", e); }
                }
            });
        }

        if (noteData.duration.includes('.')) {
            const numDots = (noteData.duration.match(/\./g) || []).length;
            for (let i = 0; i < numDots; i++) {
                try { Dot.buildAndAttach([staveNote], { all: true }); }
                catch (e) { try { staveNote.addDotToAll(); } catch (e2) { console.error("Errore aggiunta punto (fallback):", e2); } }
            }
        } else if (noteData.duration.endsWith('d') && !noteData.duration.includes('.')) {
             try { Dot.buildAndAttach([staveNote], { all: true }); } catch(e) {
                 try { staveNote.addDotToAll(); } catch (e2) { console.error("Errore aggiunta punto 'd' (fallback):", e2); }
             }
        }

        if (noteData.fingering && !isRest) {
            if (Array.isArray(noteData.fingering)) {
                noteData.fingering.forEach((fingerStr, index) => {
                    if (fingerStr && index < staveNote.getKeys().length) {
                        try {
                            const fingeringObj = new Fingering(String(fingerStr));
                            staveNote.addModifier(fingeringObj, index);
                        } catch (e) { console.error(`Errore diteggiatura accordo (dito: ${fingerStr}, idx: ${index}):`, e); }
                    }
                });
            } else {
                try {
                    const fingeringObj = new Fingering(String(noteData.fingering));
                    let position = Vex.Flow.Modifier.Position.ABOVE; // Default sopra
                    // Potresti aggiungere logica per la posizione BELOW basata su clefType o direzione del gambo se necessario
                    // if (clefType === 'bass' && staveNote.getStemDirection && staveNote.getStemDirection() === Stem.DOWN) {
                    //     position = Vex.Flow.Modifier.Position.BELOW;
                    // }
                    fingeringObj.setPosition(position);
                    staveNote.addModifier(fingeringObj, 0);
                } catch (e) { console.error(`Errore diteggiatura singola (dito: ${noteData.fingering}):`, e); }
            }
        }

        let fillStyle = defaultFill;
        let strokeStyle = defaultStroke;
        if (!isRest && noteData.status) {
            switch (noteData.status) {
                case 'correct': fillStyle = '#28a745'; strokeStyle = '#1c7430'; break;
                case 'incorrect': fillStyle = 'rgba(220, 53, 69, 0.4)'; strokeStyle = '#a71d2a'; break;
                case 'expected': fillStyle = 'rgba(0, 123, 255, 0.3)'; strokeStyle = 'rgba(0, 123, 255, 0.5)'; break;
            }
        }
        try { staveNote.setStyle({ fillStyle: fillStyle, strokeStyle: strokeStyle }); }
        catch (e) { console.error("Errore impostazione stile:", e); }

        return staveNote;
    }).filter(note => note !== null);
}


// --- Funzione Principale Esportata ---
export function renderExercise(elementId, exercise) {
    const scoreDiv = document.getElementById(elementId);
    if (!scoreDiv) { console.error(`Elemento "${elementId}" non trovato.`); return { systemPositions: [], totalTicks: 0, processedNotes: {} }; }
    scoreDiv.innerHTML = '';

    if (!exercise || typeof exercise !== 'object') {
        console.error("Oggetto esercizio non valido.");
        scoreDiv.innerHTML = "<p style='color: red;'>Dati esercizio non validi.</p>";
        return { systemPositions: [], totalTicks: 0, processedNotes: {} };
    }

    const useGrandStaff = exercise.staveLayout === 'grand' || (exercise.notesTreble && exercise.notesBass);
    let availableWidth = scoreDiv.clientWidth;
    if (availableWidth <= 0) {
        availableWidth = 780; // Fallback
        console.warn("#score clientWidth è 0. Uso fallback:", availableWidth);
    }
    const rendererWidth = availableWidth; // L'SVG occupa tutta la larghezza disponibile

    const ticksPerMeasure = getTicksPerMeasure(exercise.timeSignature || "4/4");
    const processedNotesTreble = calculateNoteTicks(exercise.notesTreble, ticksPerMeasure);
    const processedNotesBass = calculateNoteTicks(exercise.notesBass, ticksPerMeasure);
    const processedNotesSingle = !useGrandStaff ? calculateNoteTicks(exercise.notes, ticksPerMeasure) : [];

    let lastTick = 0;
    [...processedNotesTreble, ...processedNotesBass, ...processedNotesSingle].forEach(note => {
        if (note && typeof note.startTick === 'number' && typeof note.duration === 'string') {
            const noteTicks = durationToTicks(note.duration);
            if (!isNaN(noteTicks)) lastTick = Math.max(lastTick, note.startTick + noteTicks);
        }
    });
    const totalTicks = lastTick;

    const trebleSegments = segmentNotesByMeasure(processedNotesTreble, ticksPerMeasure, MEASURES_PER_LINE);
    const bassSegments = segmentNotesByMeasure(processedNotesBass, ticksPerMeasure, MEASURES_PER_LINE);
    const singleStaveSegments = segmentNotesByMeasure(processedNotesSingle, ticksPerMeasure, MEASURES_PER_LINE);

    const numSystems = useGrandStaff
        ? Math.max(trebleSegments.length, bassSegments.length)
        : singleStaveSegments.length;

    if (numSystems === 0) {
        scoreDiv.innerHTML = "<p>Nessuna nota da visualizzare.</p>";
        return { systemPositions: [], totalTicks: totalTicks, processedNotes: { treble: processedNotesTreble, bass: processedNotesBass, single: processedNotesSingle } };
    }

    const estimatedSystemHeight = useGrandStaff ? SYSTEM_SPACING : SINGLE_STAVE_SYSTEM_SPACING;
    const totalHeight = Math.max(STAVE_START_Y_GRAND + STAVE_VERTICAL_DISTANCE + (numSystems * estimatedSystemHeight) + 100, 300);

    const factory = new Factory({ renderer: { elementId: elementId, width: rendererWidth, height: totalHeight } });
    const context = factory.getContext();
    context.setFont('Arial', 10);

    const systemPositions = [];
    const vexNotesWithOriginalData = []; // Non usata attivamente in questa versione per yPos

    const fullStaveContentWidth = rendererWidth - STAVE_START_X - STAVE_RIGHT_MARGIN;
    if (fullStaveContentWidth <= 0) {
        console.error("Larghezza per pentagramma (fullStaveContentWidth) <= 0.");
        return { systemPositions: [], totalTicks: totalTicks, processedNotes: { treble: processedNotesTreble, bass: processedNotesBass, single: processedNotesSingle } };
    }
    const fullFormatWidthForNotes = Math.max(10, fullStaveContentWidth - 20); // -20 per respiro interno

    try {
        for (let i = 0; i < numSystems; i++) {
            context.beginPath(); // Inizia un nuovo path per evitare "sanguinamenti" di stile tra sistemi (buona pratica)
            const isLastSystem = (i === numSystems - 1);
            let currentStaveWidth = fullStaveContentWidth;
            let currentFormatWidth = fullFormatWidthForNotes;

            if (isLastSystem) {
                let numMeasuresInLastSystem = 0;
                let lastSegmentNotesList = [];
                if (useGrandStaff) {
                    const lastTrebleSegment = trebleSegments[i] || [];
                    const lastBassSegment = bassSegments[i] || [];
                    lastSegmentNotesList = lastTrebleSegment.length >= lastBassSegment.length ? lastTrebleSegment : lastBassSegment;
                } else {
                    lastSegmentNotesList = singleStaveSegments[i] || [];
                }
                if (lastSegmentNotesList.length > 0) {
                    const totalTicksInLastSegment = lastSegmentNotesList.reduce((sum, note) => sum + durationToTicks(note.duration), 0);
                    numMeasuresInLastSystem = Math.ceil(totalTicksInLastSegment / ticksPerMeasure);
                    if (numMeasuresInLastSystem === 0 && totalTicksInLastSegment > 0) numMeasuresInLastSystem = 1;
                }
                if (numMeasuresInLastSystem > 0 && numMeasuresInLastSystem < MEASURES_PER_LINE) {
                    currentStaveWidth = Math.max(100, (fullStaveContentWidth / MEASURES_PER_LINE) * numMeasuresInLastSystem);
                    currentFormatWidth = Math.max(10, currentStaveWidth - 10); // Adatta format width
                }
            }

            let staveTreble = null, staveBass = null;
            const systemY_Treble = (useGrandStaff ? STAVE_START_Y_GRAND : STAVE_START_Y_SINGLE) + (i * estimatedSystemHeight);
            const systemY_Bass = STAVE_START_Y_GRAND + STAVE_VERTICAL_DISTANCE + (i * estimatedSystemHeight); // Usare estimatedSystemHeight

            if (useGrandStaff) {
                staveTreble = new Stave(STAVE_START_X, systemY_Treble, currentStaveWidth);
                staveBass = new Stave(STAVE_START_X, systemY_Bass, currentStaveWidth);
                if (i === 0) {
                    staveTreble.addClef('treble').addTimeSignature(exercise.timeSignature || "4/4");
                    staveBass.addClef('bass').addTimeSignature(exercise.timeSignature || "4/4");
                    if (exercise.keySignature) {
                        staveTreble.addKeySignature(exercise.keySignature);
                        staveBass.addKeySignature(exercise.keySignature);
                    }
                } else {
                    staveTreble.addClef('treble'); // Aggiungi clef su ogni riga per chiarezza
                    staveBass.addClef('bass');
                }
                new StaveConnector(staveTreble, staveBass).setType(StaveConnector.type.BRACE).setContext(context).draw();
                new StaveConnector(staveTreble, staveBass).setType(StaveConnector.type.SINGLE_LEFT).setContext(context).draw();
                if (isLastSystem || i === numSystems -1) { // Barra finale doppia o singola
                     new StaveConnector(staveTreble, staveBass).setType(StaveConnector.type.SINGLE_RIGHT).setContext(context).draw();
                }
            } else {
                const clef = exercise.clef || 'treble';
                staveTreble = new Stave(STAVE_START_X, systemY_Treble, currentStaveWidth);
                if (i === 0) {
                    staveTreble.addClef(clef).addTimeSignature(exercise.timeSignature || "4/4");
                    if (exercise.keySignature) staveTreble.addKeySignature(exercise.keySignature);
                } else {
                     staveTreble.addClef(clef);
                }
                 new StaveConnector(staveTreble, null).setType(StaveConnector.type.SINGLE_LEFT).setContext(context).draw();
                 if (isLastSystem || i === numSystems -1) {
                     new StaveConnector(staveTreble, null).setType(StaveConnector.type.SINGLE_RIGHT).setContext(context).draw();
                 }
                if (clef === 'bass') staveBass = staveTreble;
            }
            staveTreble.setContext(context).draw();
            if (staveBass && staveBass !== staveTreble) staveBass.setContext(context).draw();

            let systemStartTick = Infinity;
            // ... (logica per systemStartTick e systemPositions) ...
            if (useGrandStaff) {
                 if (trebleSegments[i] && trebleSegments[i].length > 0) systemStartTick = Math.min(systemStartTick, trebleSegments[i][0].startTick);
                 if (bassSegments[i] && bassSegments[i].length > 0) systemStartTick = Math.min(systemStartTick, bassSegments[i][0].startTick);
            } else {
                 if (singleStaveSegments[i] && singleStaveSegments[i].length > 0) systemStartTick = singleStaveSegments[i][0].startTick;
            }
            if (systemStartTick !== Infinity) {
                 systemPositions.push({ tick: systemStartTick, y: staveTreble.getYForTopText() - SCROLL_OFFSET_Y });
            }


            const voicesToFormat = [];
            let notesVexTreble = [], notesVexBass = [];

            if (useGrandStaff) {
                if (trebleSegments[i] && trebleSegments[i].length > 0) {
                    notesVexTreble = createStyledStaveNotes(trebleSegments[i], 'treble');
                    if (notesVexTreble.length > 0) {
                        try { voicesToFormat.push(new Voice({ num_beats: (ticksPerMeasure * MEASURES_PER_LINE / (Vex.Flow.RESOLUTION / 4)), beat_value: 4 }).setMode(Voice.Mode.SOFT).addTickables(notesVexTreble)); }
                        catch (e) { console.error("Errore creazione voce treble:", e); }
                    }
                }
                if (bassSegments[i] && bassSegments[i].length > 0) {
                    notesVexBass = createStyledStaveNotes(bassSegments[i], 'bass');
                    if (notesVexBass.length > 0) {
                        try { voicesToFormat.push(new Voice({ num_beats: (ticksPerMeasure * MEASURES_PER_LINE / (Vex.Flow.RESOLUTION / 4)), beat_value: 4 }).setMode(Voice.Mode.SOFT).addTickables(notesVexBass)); }
                        catch (e) { console.error("Errore creazione voce bass:", e); }
                    }
                }
            } else {
                const clefType = exercise.clef || 'treble';
                if (singleStaveSegments[i] && singleStaveSegments[i].length > 0) {
                    const styledNotes = createStyledStaveNotes(singleStaveSegments[i], clefType);
                    if (styledNotes.length > 0) {
                        try { voicesToFormat.push(new Voice({ num_beats: (ticksPerMeasure * MEASURES_PER_LINE / (Vex.Flow.RESOLUTION / 4)), beat_value: 4 }).setMode(Voice.Mode.SOFT).addTickables(styledNotes)); }
                        catch (e) { console.error("Errore creazione voce single:", e); }
                    }
                }
            }

            if (voicesToFormat.length > 0) {
                new Formatter().format(voicesToFormat, currentFormatWidth, { align_rests: false, context: context });
                voicesToFormat.forEach(voice => {
                    const targetStave = (notesVexBass.includes(voice.getTickables()[0]) && staveBass) ? staveBass : staveTreble;
                    if (targetStave) {
                        voice.draw(context, targetStave);
                        Beam.generateBeams(voice.getTickables()).forEach(beam => beam.setContext(context).draw());
                    }
                });
            }
        }
    } catch (error) {
        console.error("Errore VexFlow:", error);
        scoreDiv.innerHTML = `<p style='color: red;'>Errore VexFlow: ${error.message}</p>`;
    }

    return {
        systemPositions: systemPositions,
        totalTicks: totalTicks,
        processedNotes: {
            treble: processedNotesTreble,
            bass: processedNotesBass,
            single: processedNotesSingle
        }
    };
}