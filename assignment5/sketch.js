let sounds = new Tone.Players({
  'chicken': "assets/chicken.mp3",
  'explosion': "assets/explosion.mp3",
  'firework': "assets/firework.mp3",
  'glass': "assets/glass.mp3"
   });
 
let delAmt = new Tone.FeedbackDelay ("8n", 0.5);
let distAmt = new Tone.Distortion (0.5); 

let button1;
let button2;

let delaySlider;
let fbSlider;
let distSlider;



sounds.connect(delAmt);
delAmt.connect(distAmt);
distAmt.toDestination();


function setup() {
  createCanvas(400, 400);

  button1 = createButton("Chicken");
  button1.position(50,50);
  button1.mousePressed(() => sounds.player("chicken").start());

  button2 = createButton("Explosion");
  button2.position(120,50);
  button2.mousePressed(() => sounds.player("explosion").start());

  button3 = createButton("Firework");
  button3.position(198,50);
  button3.mousePressed(() => sounds.player("firework").start());

  button4 = createButton("Glass");
  button4.position(275,50);
  button4.mousePressed(() => sounds.player("glass").start());

  delaySlider = createSlider(0, 1, 0, 0.05);
  delaySlider.position(width/4, 110);
  delaySlider.mouseMoved(() => delAmt.delayTime.value = delaySlider.value());

  fbSlider = createSlider(0, 0.9, 0, 0.05);
  fbSlider.position(width/4, 150);
  fbSlider.mouseMoved(() => delAmt.feedback.value = fbSlider.value());

  distSlider = createSlider(0, 0.9, 0, 0.05);
  distSlider.position(width/4, 190);
  distSlider.mouseMoved( () => distAmt.distortion = distSlider.value());

}

function draw() {
  background(10, 150, 255);

  text ("Press buttons for sound", width/3, 30);
  text ("Add delay", width/3, 105);
  text ("Add feedback", width/3, 145);
  text ("Add distortion", width/3, 185);
}
