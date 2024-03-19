let auraImage;
let noiseSynth, bassSynth, filter;
let filterFreqSlider;

function preload() {
  auraImage = loadImage('Aura_Sound.png');
}

function setup() {
  createCanvas(700, 700);

  // Noise synth for texture
  noiseSynth = new Tone.NoiseSynth({
    noise: { type: 'brown' },
    envelope: {
      attack: 0.1,
      decay: 1.2,
      sustain: 0,
      release: 1.5,
    }
  }).toDestination();

  // Bass synth for depth
  bassSynth = new Tone.Synth({
    oscillator: { type: 'sawtooth' },
    envelope: {
      attack: 0.1,
      decay: 0.4,
      sustain: 0.01,
      release: 1.4,
    }
  }).toDestination();

  // Filter to shape the overall sound
  filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 800, // Initial frequency
    Q: 6,
  });

  noiseSynth.connect(filter);
  bassSynth.connect(filter);
  filter.toDestination();

  // Controlling the filter frequency
  filterFreqSlider = createSlider(100, 1500, 800, 1);
  filterFreqSlider.position(10, height - 30);
  filterFreqSlider.style('width', '680px');

  text('Drag the slider to modulate the menacing-aura sound', 10, height - 40);
}

function draw() {
  background(220);
  image(auraImage, width / 2 - auraImage.width / 2, height / 2 - auraImage.height / 2);
  text('Click the canvas to hear the sound!', 10, 20);
  filter.frequency.value = filterFreqSlider.value();
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height - 50) {
    noiseSynth.triggerAttackRelease("4n");
    bassSynth.triggerAttackRelease("G1", "2n"); // Lower pitch for a deeper sound
  }
}
