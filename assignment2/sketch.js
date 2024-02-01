

let currentlySelectedColor = ""

class StyledButton {
  constructor(text, x, y, bgColor, padding = '25px') {
    this.button = createButton(text);
    this.button.position(x, y);
    this.button.style('background-color', bgColor);
    this.button.style('padding', padding);
  }

  onClick(callback) {
    this.button.mousePressed(callback);
  }
}


function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(255);

  let redButton = new StyledButton("", 0, 0, "red")
  redButton.onClick(() => {
    currentlySelectedColor = 'red';
  });

  let orangeButton = new StyledButton("", 0, 54, "orange")
  orangeButton.onClick(() => {
    currentlySelectedColor = 'orange';
  });

  let yellowButton = new StyledButton("", 0, 108, "yellow")
  yellowButton.onClick(() => {
    currentlySelectedColor = 'yellow';
  });

  let lightGreenButton = new StyledButton("", 0, 162, "#7FFF00")
  lightGreenButton.onClick(() => {
    currentlySelectedColor = '#7FFF00';
  });

  let lightBlueButton = new StyledButton("", 0, 216, "#00FFFF")
  lightBlueButton.onClick(() => {
    currentlySelectedColor = '#00FFFF';
  });

  let blueButton = new StyledButton("", 0, 270, "#0000FF")
  blueButton.onClick(() => {
    currentlySelectedColor = '#0000FF';
  });


  let hotPinkButton = new StyledButton("", 0, 324, "#FF00FF")
  hotPinkButton.onClick(() => {
    currentlySelectedColor = '#FF00FF';
  });


  let brownButton = new StyledButton("", 0, 378, "#8B4513")
  brownButton.onClick(() => {
    currentlySelectedColor = '#8B4513';
  });
 

  let whiteButton = new StyledButton("", 0, 432, "white")
  whiteButton.onClick(() => {
    currentlySelectedColor = 'white';
  });


  let blackButton = new StyledButton("", 0, 486, "black")
  blackButton.onClick(() => {
    currentlySelectedColor = 'black';
  });




}
