let s1 = function(example1) {
  example1.setup = function() {
    example1.createCanvas(275, 130).parent("example1");
  };

  example1.draw = function() {
      example1.background('rgb(0,255,0)');
      example1.stroke(0);
      example1.fill(255);
      example1.strokeWeight(3)
      example1.circle(70, example1.height / 2, 110);
      example1.rect(150, 10, 110, 110);
  };
};
var sketch1 = new p5(s1, 'example1');
