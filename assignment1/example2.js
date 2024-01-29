let s2 = function(example2) {
    example2.setup = function() {
        example2.createCanvas(400, 200).parent("example2");
    };
  
    example2.draw = function() {
        example2.background(0);
        example2.fill(255);
        example2.circle(50, 200, 20);
    };
  };
  var sketch2 = new p5(s2, 'example2');
  