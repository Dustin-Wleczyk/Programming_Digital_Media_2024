let s3 = function(example3) {
    example3.setup = function() {
        example3.createCanvas(180, 90).parent("example3");
        example3.angleMode(example3.DEGREES);
    };
  
    example3.draw = function() {
        
        example3.background(0);
        example3.noStroke();

        example3.fill("yellow"); 
        example3.arc(40, 46, 70, 70, 225, 135); 
        
        example3.fill(255, 0, 0); 
        example3.rect(100, 42, 64, 35); 
        example3.arc(132, 42, 64, 65, 180, 360); 


        example3.fill(255); 
        example3.ellipse(115, 42, 20, 20); 
        example3.ellipse(148, 42, 20, 20); 
        
        example3.fill(0, 0, 255); 
        example3.ellipse(115, 42, 13, 13); 
        example3.ellipse(148, 42, 13, 13); 
        
    };
  };
  var sketch3 = new p5(s3, 'example3');
  