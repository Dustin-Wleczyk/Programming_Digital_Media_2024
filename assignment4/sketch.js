let bugs = [];
let score = 0;
let gameTime = 30;
let gameTimer;
let bugSpriteSheet;

function preload() {
  bugSpriteSheet = loadImage('assets/bug.png');
}

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 30; i++) { // Change number of bugs to what you want
    bugs.push(new Bug(random(width - 30), random(height - 30)));
  }
  gameTimer = gameTime;
  setInterval(() => {
    if (gameTimer > 0) gameTimer--;
  }, 1000);
}

function draw() {
  background(220);
  bugs.forEach(bug => {
    bug.update();
    bug.display();
  });
  displayScoreAndTimer();
  checkGameEnd();
}

function mousePressed() {
  bugs.forEach(bug => {
    if (bug.isClicked(mouseX, mouseY)) {
      if (!bug.isSquished) {
        bug.squish();
        score++;
      }
    }
  });
}

function displayScoreAndTimer() {
  fill(0);
  textSize(16);
  text(`Score: ${score}`, 10, 20);
  text(`Time: ${gameTimer}`, 10, 40);
}

function checkGameEnd() {
  if (gameTimer === 0) {
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text("Game Over!", width / 2, height / 2);
    noLoop();
  }
}

class Bug {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.isSquished = false;
    this.speed = 2; 
    this.direction = 'up'; 
    this.moveCounter = 0;
  }

  update() {
    if (!this.isSquished) {
      this.moveRandomly();
    }
  }

  display() {
    push();
    imageMode(CENTER);
    let row = this.getRowForDirection();
    let sx = 0; 
    let sy = row * this.size;
    image(bugSpriteSheet, this.x, this.y, this.size, this.size, sx, sy, this.size, this.size);
    pop();
  }

  getRowForDirection() {
    switch (this.direction) {
      case 'up':
      case 'stand': // Combined 'stand' and 'up' as per the specification
        return 0;
      case 'right':
        return 1;
      case 'left':
        return 2;
      case 'down':
        return 3;
      case 'squish':
        return 4;
      default:
        return 0; 
    }
  }

  moveRandomly() {
    if (this.moveCounter <= 0) {
      let dir = floor(random(4));
      switch (dir) {
        case 0:
          this.direction = 'right';
          break;
        case 1:
          this.direction = 'left';
          break;
        case 2:
          this.direction = 'up';
          break;
        case 3:
          this.direction = 'down';
          break;
      }
      this.moveCounter = random(20, 60); // Change direction after some frames
    } else {
      this.moveCounter--;
    }

    switch (this.direction) {
        case 'right':
          this.x += this.speed;
          break;
        case 'left':
          this.x -= this.speed;
          break;
        case 'up':
          this.y -= this.speed;
          break;
        case 'down':
          this.y += this.speed;
          break;
    }

    this.x = constrain(this.x, this.size / 2, width - this.size / 2);
    this.y = constrain(this.y, this.size / 2, height - this.size / 2);
  }

  isClicked(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < this.size / 2;
  }

  squish() {
    if (!this.isSquished) { 
      this.isSquished = true;
      this.direction = 'squish'; 
      increaseSpeed(); 
    }
  }
}
function increaseSpeed() {
  bugs.forEach(bug => {
    if (!bug.isSquished) { 
      bug.speed += 0.5; 
    }
  });
}
