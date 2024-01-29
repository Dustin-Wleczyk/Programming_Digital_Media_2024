let s1 = function(example1) {
  example1.setup = function() {
    example1.createCanvas(415, 202).parent("example1");
  };

  example1.draw = function() {
      example1.background('rgb(0,255,0)');
      example1.stroke(0);
      example1.fill(255);
      example1.strokeWeight(3)
      example1.circle(103, example1.height / 2, 180);
      example1.rect(220, 10, 180, 180);
  };
};
var sketch1 = new p5(s1, 'example1');
