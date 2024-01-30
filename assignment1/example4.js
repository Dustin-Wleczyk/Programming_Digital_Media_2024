let s4 = function(example4) {
    example4.setup = function() {
        example4.createCanvas(200, 200).parent("example4");
        example4.angleMode(example4.RADIANS);
    };
  
    example4.draw = function() {
        example4.background(0, 0, 129);

        example4.strokeWeight(3);
        example4.stroke(255);

        example4.fill(0, 128, 0);
        example4.circle(100, 100, 100, 100);

        example4.fill(255, 0, 0);
        drawStar(example4, 100, 100, 20, 50, 5); 
    };

    function drawStar(p, x, y, radius1, radius2, npoints) {
        let angle = p.TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        p.beginShape();
        for (let a = -p.HALF_PI; a < p.TWO_PI - p.HALF_PI; a += angle) {
          let sx = x + p.cos(a) * radius2;
          let sy = y + p.sin(a) * radius2;
          p.vertex(sx, sy);
          sx = x + p.cos(a + halfAngle) * radius1;
          sy = y + p.sin(a + halfAngle) * radius1;
          p.vertex(sx, sy);
        }
        p.endShape(p.CLOSE);
      }

  };
  var sketch4 = new p5(s4, 'example4');
  