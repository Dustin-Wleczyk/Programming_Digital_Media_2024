let s2 = function(example2) {
    example2.setup = function() {
        example2.createCanvas(290, 280).parent("example2");
    };
  
    example2.draw = function() {
        example2.background(255);
        example2.noStroke();
        example2.fill(255, 0, 0, 100);
        example2.circle(140, 100, 140);       

        example2.fill(0, 255, 0, 100);
        example2.circle(192, 180, 140);

        example2.fill(0, 0, 255, 100);
        example2.circle(98, 180, 140);
    };
  };
  var sketch2 = new p5(s2, 'example2');
  