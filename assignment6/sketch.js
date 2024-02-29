// // Include p5.js library in your HTML before this script
// // Include Tone.js library in your HTML before this script

// let synth, filter, delay, delayEnabled = false;

// function setup() {
//   createCanvas(400, 200); // Create a canvas for any additional UI/visual feedback

//   // Initialize the synth with Tone.js
//   synth = new Tone.PolySynth(Tone.Synth).toDestination();

//   // Initialize the filter and connect it
//   filter = new Tone.Filter(1000, "lowpass").toDestination();
//   synth.connect(filter);

//   // Initialize the delay but don't connect it yet
//   delay = new Tone.FeedbackDelay("8n", 0.5);

//   // UI Elements
//   filterFreqSlider = createSlider(100, 10000, 1000);
//   filterFreqSlider.position(10, height + 10);
//   filterFreqSlider.input(() => filter.frequency.value = filterFreqSlider.value());

//   toggleDelayButton = createButton('Toggle Delay');
//   toggleDelayButton.position(10, filterFreqSlider.position().y + 40);
//   toggleDelayButton.mousePressed(toggleDelay);
// }

// function draw() {
//   background(220);
// }

// function keyPressed() {
//   let noteMap = {
//     'a': 'C4', 's': 'D4', 'd': 'E4', 'f': 'F4',
//     'g': 'G4', 'h': 'A4', 'j': 'B4', 'k': 'C5'
//   };
//   let note = noteMap[key];
//   if (note) {
//     synth.triggerAttack(note);
//   }
// }

// function keyReleased() {
//   let noteMap = {
//     'a': 'C4', 's': 'D4', 'd': 'E4', 'f': 'F4',
//     'g': 'G4', 'h': 'A4', 'j': 'B4', 'k': 'C5'
//   };
//   let note = noteMap[key];
//   if (note) {
//     synth.triggerRelease(note);
//   }
// }

// function toggleDelay() {
//   delayEnabled = !delayEnabled;
//   if (delayEnabled) {
//     synth.disconnect();
//     synth.connect(delay);
//     delay.toDestination();
//   } else {
//     synth.disconnect();
//     synth.connect(filter);
//   }
// }



let synth = new Tone.PolySynth(Tone.Synth);
let bend = new Tone.PitchShift();

bend.pitch = 0;
synth.connect(bend);
bend.toDestination();

let notes = {
  'a' : 'C4',
  's' : 'D4',
  'd' : 'E4',
  'f' : 'F4',
  'g' : 'G4',
  'h' : 'A4',
  'j' : 'B4',
  'k' : 'C5'
}

function setup() {
  createCanvas(400, 400);

pitchSlider = createSlider(-12, 12, 0, 0.1); 
pitchSlider.position (120, 200);
pitchSlider.mouseMoved(()=> bend.pitch = pitchSlider.value());

}

function keyPressed(){
  let playNotes = notes[key];
  synth.triggerAttack(playNotes);
}

function keyReleased(){
  let playNotes = notes[key];
  synth.triggerRelease(playNotes,'+0.03');
}

function draw() {
  background(100, 220, 150);
  text ('play A-K for synth', 140, 180)
}