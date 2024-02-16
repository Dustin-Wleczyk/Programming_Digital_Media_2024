let characters = [];
class Character {
  constructor(x,y,width,height,spriteSheet,animations) {

    this.sprite = new Sprite(x,y,width,height);
    this.sprite.spriteSheet = spriteSheet;
    this.sprite.collider = 'none';
    this.sprite.anis.frameDelay = 8;
    this.sprite.addAnis(animations);
    this.sprite.changeAni('stand');
  }

  stop() {
    this.sprite.vel.x = 0;
    this.sprite.vel.y = 0;
    this.sprite.changeAni('stand');
  }
  
  walkRight() {
    this.sprite.changeAni('walkRight');
    if (this.sprite.x + this.sprite.width / 4 < width) { 
      this.sprite.vel.x = 1;
      this.sprite.scale.x = 1;
      this.sprite.vel.y = 0;
      this.sprite.changeAni('walkRight');
    } else {
      this.sprite.velocity.x = 0;
    }
  }
  
  walkLeft() {
    this.sprite.changeAni('walkRight');

    if (this.sprite.x - this.sprite.width / 4 > 0) { 
      this.sprite.vel.x = -1;
      this.sprite.scale.x = -1;
      this.sprite.vel.y = 0;
      this.sprite.changeAni('walkRight');
    } else {
      this.sprite.velocity.x = 0;
    }

  }
  
  walkUp() {
    this.sprite.changeAni('walkUp');
    if (this.sprite.y - this.sprite.height / 4 > 0) { 
      this.sprite.vel.y = -1;
      this.sprite.vel.x = 0;
      this.sprite.changeAni('walkUp');
    } else {
      this.sprite.velocity.y = 0;
    }

  }
  
  walkDown() {
    this.sprite.changeAni('walkDown');

    if (this.sprite.y + this.sprite.height / 4 < height) { 
      this.sprite.vel.y = 1;
      this.sprite.vel.x = 0;
      this.sprite.changeAni('walkDown');
    } else {
      this.sprite.velocity.y = 0; 
    }
 
  }

}

function preload() {

  let animations = {
    stand: {row: 0, frames: 1 },
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  }

  characters.push(new Character(100,100,80,80,'assets/spleunky_guy.png',animations));
  characters.push(new Character(200,200,80,80,'assets/green.png',animations));
  characters.push(new Character(50,50,80,80,'assets/viking.png',animations));

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (kb.pressing('d')) {
    characters.forEach((char) => {
      char.walkRight();
    });
  } else if (kb.pressing('a')) {
    characters.forEach((char) => {
      char.walkLeft();
    });
  } else if (kb.pressing('w')) {
    characters.forEach((char) => {
      char.walkUp();
    });
  } else if (kb.pressing('s')) {
    characters.forEach((char) => {
      char.walkDown();
    });
  } else {
    characters.forEach((char) => {
      char.stop();
    });

  }
}
