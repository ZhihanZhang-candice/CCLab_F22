let circles = [];
let stars = [];

function setup() {
    let cnv= createCanvas(400, 400);
    cnv.parent("canvasContainer")
    for (let i = 0; i < 200; i++) {
        circles.push(
          new Circle(random(width), random(height), 50, 108, 0, 18, 100, 199, 2, 6)
        ); // ***
        circles.push(
          new Circle(
            random(width),
            random(height),
            100,
            137,
            25,
            100,
            200,
            249,
            2,
            6
          )
        );
        circles.push(
          new Circle(random(width), random(height), 0, 25, 0, 40, 200, 249, 2, 6)
        );
        circles.push(
          new Circle(random(width), random(height), 200, 249, 0, 25, 159, 249, 2, 6)
        );
      }
      for (let i = 0; i < 100; i++) {
        circles.push(
          new Circle(
            random(width),
            random(height),
            25,
            100,
            150,
            249,
            159,
            197,
            1,
            5
          )
        );
        circles.push(
          new Circle(
            random(width),
            random(height),
            230,
            255,
            225,
            255,
            180,
            200,
            1,
            5
          )
        );
        circles.push(
          new Circle(
            random(width),
            random(height),
            255,
            255,
            255,
            255,
            255,
            255,
            2,
            6
          )
        );
      }
      for (let i = 0; i < 40; i++) {
        stars.push(new Star(random(width), random(height)));
      }
   
}
function draw() {
    background(45, 6, 84);

  for (let i = 0; i < circles.length; i++) {
    let p = circles[i];
    p.display();
  }
  for (let i = 0; i < stars.length; i++) {
    let b = stars[i];
    if (mouseIsPressed) {
      b.slow();
    }
    b.move1();
    b.display1();
    b.adjustScale(-0.01);
  }
}

//

class Circle {
  constructor(x, y, r1, r2, g1, g2, b1, b2, a1, a2) {
    this.x = x;
    this.y = y;
    this.dia = random(a1, a2);
    this.colorcircle = random(r1, r2);
    this.colorcircle1 = random(g1, g2);
    this.colorcircle2 = random(b1, b2);
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.colorcircle, this.colorcircle1, this.colorcircle2);
    circle(0, 0, this.dia);
    fill(255);
    pop();
    fill(255);
    text("press mouse the star will slow down", 5, 590);
  }
}
class Star {
  constructor(x1, y1) {
    this.x1 = x1;
    this.y1 = y1;
    this.xSpd = random(-2, 2);
    this.ySpd = random(-2, 2);
    this.scl = 0.8;
  }
  move1() {
    this.x1 += this.xSpd;
    this.y1 += this.ySpd;
  }
  slow() {
    this.xSpd = this.xSpd * 0.8;
    this.ySpd = this.ySpd * 0.8;
  }
  adjustScale(value) {
    this.scl += value;
    this.scl = constrain(this.scl, 0.5, 2);
  }
  display1() {
    push();
    translate(this.x1, this.y1);
    scale(this.scl);
    beginShape();
    fill(random(250, 255), 255, random(219, 255));
    noStroke();
    vertex(-15, -20);
    vertex(-10, -10);
    vertex(0, -10);
    vertex(-10, -2);
    vertex(-5, 10);
    vertex(-15, 0);
    vertex(-25, 10);
    vertex(-20, -2);
    vertex(-30, -10);
    vertex(-20, -10);
    vertex(-15, -20);

    endShape();

    pop();
  }
   
}
