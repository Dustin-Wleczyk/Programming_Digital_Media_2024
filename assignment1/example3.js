let s3 = function(example3) {
    example3.setup = function() {
        example3.createCanvas(260, 120).parent("example3");
    };
  
    example3.draw = function() {
        example3.background(2);
        example3.fill(255);
        example3.circle(50, 200, 20);
    };
  };
  var sketch3 = new p5(s3, 'example3');
  