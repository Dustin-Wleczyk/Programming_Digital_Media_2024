const synth1 = new Tone.PolySynth(Tone.FMSynth);
const synth2 = new Tone.PolySynth(Tone.MembraneSynth);
const synth3 = new Tone.PolySynth(Tone.MetalSynth);
const synth4 = new Tone.PolySynth(Tone.Synth);

const bend = new Tone.PitchShift();
bend.pitch = 0;

synth1.connect(bend);
bend.toDestination();

synth2.connect(bend);
bend.toDestination();

synth3.connect(bend);
bend.toDestination();

synth4.connect(bend);
bend.toDestination();

let notes = { 
  'a': 'C4',
  's': 'D4',
  'd': 'Eb4',
  'f': 'F4',
  'g': 'G4',
  'h': 'Ab4',
  'j': 'B4',
  'k': 'C5'
}

function setup() {
  createCanvas(400, 400);

  //creating dropdown
  mySelect = createSelect();
  mySelect.position(138, 100);
  mySelect.option('FM Synth');
  mySelect.option('Membrane Synth');
  mySelect.option('AM Synth');
  mySelect.option('Synth');
  mySelect.selected('FM Synth');

  
  pitchSlider = createSlider (-12, 12, 0, 0.01);
  pitchSlider.position (120,200);
  pitchSlider.mouseMoved(() => bend.pitch = pitchSlider.value());

}

function draw() {
  background(200, 200, 200);
  text("Play A through K and change pitch with slider.", 75, 150)

}

function keyPressed() {
  if (mySelect.selected() === 'FM Synth') {
    let playNotes = notes[key];
    synth1.triggerAttackRelease(playNotes, 0.8);
  } else if (mySelect.selected() === 'Membrane Synth') {
    let playNotes = notes[key];
    synth2.triggerAttackRelease(playNotes, 0.8);
  } else if (mySelect.selected() === 'AM Synth') {
    let playNotes = notes[key];
    synth3.triggerAttackRelease(playNotes, 0.8);
  } else if (mySelect.selected() === 'Synth') {
    let playNotes = notes[key];
    synth4.triggerAttackRelease(playNotes, 0.8);
  }
}
