let characters = [];


function preload() {

  let animations = {
    stand: {row: 0, frames: 1 },
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  }

  sprite1 = new Sprite(Math.floor(Math.random() * 201), Math.floor(Math.random() * 201), 80, 80);
  sprite1.spriteSheet = 'assets/spleunky_guy.png';
  sprite1.anis.frameDelay = 8;
  sprite1.addAnis(animations);
  sprite1.changeAni('walkRight');

  sprite2 = new Sprite(Math.floor(Math.random() * 201), Math.floor(Math.random() * 201), 80, 80);
  sprite2.spriteSheet = 'assets/green.png';
  sprite2.anis.frameDelay = 8;
  sprite2.addAnis(animations);
  sprite2.changeAni('walkRight');

  sprite3 = new Sprite(Math.floor(Math.random() * 201), Math.floor(Math.random() * 201), 80, 80);
  sprite3.spriteSheet = 'assets/viking.png';
  sprite3.anis.frameDelay = 8;
  sprite3.addAnis(animations);
  sprite3.changeAni('walkRight');
  
  characters.push(sprite1);
  characters.push(sprite2);
  characters.push(sprite3);

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  characters.forEach(char => {
    char.rotation = 0;
  });

  function stop() {
    characters.forEach(char => {
      char.vel.x = 0;
      char.vel.y = 0;
      char.changeAni('stand');
    });
  }

  function walkRight() {
    characters.forEach(char => {
      if (char.x + char.width / 2 < width) { 
        char.vel.x = 1;
        char.scale.x = 1;
        char.vel.y = 0;
        char.changeAni('walkRight');
      } else {
        char.velocity.x = 0;
      }
      char.changeAni('walkRight');
    });
  }
  
  function walkLeft() {
    characters.forEach(char => {
      if (char.x - char.width /2 > 0) { 
        char.vel.x = -1;
        char.scale.x = -1;
        char.vel.y = 0;
        char.changeAni('walkRight');
      } else {
        char.velocity.x = 0;
      }
      char.changeAni('walkRight'); 
    });
  }
  
  function walkUp() {
    characters.forEach(char => {
      if (char.y - char.height / 2 > 0) { 
        char.vel.x = 0;
        char.vel.y = -1;
        char.changeAni('walkUp');
      } else {
        char.velocity.y = 0; 
      }
      char.changeAni('walkUp');
    });
  }
  
  function walkDown() {
    characters.forEach(char => {
      if (char.y + char.height / 2 < height) {
        char.vel.x = 0;
        char.vel.y = 1;
        char.changeAni('walkDown');
      } else {
        char.velocity.y = 0; 
      }
      char.changeAni('walkDown');
    });
  }
  

  let moving = false;

  if (kb.pressing('d')) {
    walkRight();
  } else if (kb.pressing('a')) {
    walkLeft();
  } else if (kb.pressing('w')) {
    walkUp();
  } else if (kb.pressing('s')) {
    walkDown();
  } else {
    stop();
    moving = false;
  }
}