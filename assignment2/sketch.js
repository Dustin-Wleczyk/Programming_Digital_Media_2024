let currentlySelectedColor = "black"; 

class StyledButton {
  constructor(text, x, y, bgColor, padding = '25px') {
    this.button = createButton(text);
    this.button.position(x, y);
    this.button.style('background-color', bgColor);
    this.button.style('padding', padding);
    this.button.mousePressed(() => currentlySelectedColor = bgColor);
  }
}

function setup() {
  createCanvas(1000, 800);
  background(220);
  noStroke();

  new StyledButton("", 0, 0, "red");
  new StyledButton("", 0, 54, "orange");
  new StyledButton("", 0, 108, "yellow");
  new StyledButton("", 0, 162, "#7FFF00"); // Light green
  new StyledButton("", 0, 216, "#00FFFF"); // Cyan
  new StyledButton("", 0, 270, "#0000FF"); // Blue
  new StyledButton("", 0, 324, "#FF00FF"); // Magenta
  new StyledButton("", 0, 378, "#8B4513"); // Brown
  new StyledButton("", 0, 434, "white");
  new StyledButton("", 0, 488, "black");
}

function draw() {
  if (mouseIsPressed && mouseX > 54) {
    stroke(currentlySelectedColor);
    strokeWeight(10);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function drawPalette() {
  noStroke();
  const colors = ["red", "orange", "yellow", "#7FFF00", "#00FFFF", "#0000FF", "#FF00FF", "#8B4513", "white", "black"];
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(0, i * 54, 54, 54); 
  }
}

function mousePressed() {
  if (mouseX <= 54) {
    const index = Math.floor(mouseY / 54);
    if (index >= 0 && index < 10) {
      currentlySelectedColor = ["red", "orange", "yellow", "#7FFF00", "#00FFFF", "#0000FF", "#FF00FF", "#8B4513", "white", "black"][index];
    }
  }
}

function mouseReleased() {
  drawPalette(); 
}
