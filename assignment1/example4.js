let s4 = function(example4) {
    example4.setup = function() {
        example4.createCanvas(400, 200).parent("example4");
    };
  
    example4.draw = function() {
        example4.background(0);
        example4.fill(255);
        example4.circle(50, 200, 20);
    };
  };
  var sketch4 = new p5(s4, 'example4');
  