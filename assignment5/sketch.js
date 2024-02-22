
// function preload() {
//   soundFx = new Tone.Players({
//     popcorn: "assets/popcorn.mp3",
//     water: "assets/water.mp3"
//   }).toDestination();
// }

function preload() {
  soundFx = new Tone.Players({
    water: "assets/water.mp3"
  }).toDestination();
}

function keyPressed() {
  if (key == "q") {
    soundFx.player('water').start()
  }
}

function play1() {
  soundFx.player('water').start()
}

function setup() {

  button1 = createButton("water")
  button1.position(50,50)
  button1.mousePressed(play1())

  createCanvas(400, 400);
}

function draw() {
  background(220);
}
