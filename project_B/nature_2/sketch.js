let x =0
let y = 0
let speed1 = 1
let speed2 = 1
let color1
let color2
let d;
function setup() {
  let canvas = createCanvas(500, 300);
  canvas.parent("canvasContainer");
  d = new Dancer(width/2, height/2);
  // color1 = random(0,255)
  // color2 = random(150,255)
  background(255)
}
function mousePressed(){
 color1 = random(0,255)
  color2 = random(150,255)
}

function draw() {
  
  if(x>=500){
    speed2=-1
  }
  if(x<=0){
    speed2=1
  }
  fill(102, 178, 255); 
  let y1Fluctuation = random(0, 120);
  let y1 = 20 + y1Fluctuation;
 
  circle(x, y1, 1);
  if(y>=120){
    speed1=-1
  }
  if(y<=0){
    speed1=1
  }
  fill(102, 178, 255); //green
  let x1Fluctuation = random(100,200);
  let x1 = 20 +random(0,500);
 
  circle(x1, y, 1);

  
  
  x = x + speed2;
  y = y+speed1
  text('Click to change the color',30,30)
   push()
  beginShape()
  noStroke()
  fill(color1,color1,255)
  vertex(0,150)
  vertex(500,150)
  vertex(500,210)
  vertex(400,300)
  vertex(0,179)
  endShape()
  pop()
  
  push()
  strokeWeight(8)
  stroke(97,55,1)
  line(0,100,400,210)
  line(400,210,500,120)
  line(400,300,400,210)
  pop()
  push()
  stroke(160,160,160)
  strokeWeight(3)
  line(0,142,395,255)
  line(404,255,500,165)
  line(50,119,50,195)
  line(160,149,160,228)
  line(270,180,270,260)
  line(455,166,455,250)
  pop()
   stroke(0,51,102,150)
  fill(36,227,color2)
  beginShape()
  vertex(0,300)
  vertex(0,180)
  vertex(400,300)
  vertex(0,300)
  endShape()
 
  beginShape()
  vertex(400,300)
  vertex(500,210)
  vertex(500,300)
  vertex(400,300)
  endShape()
  
 


   d.update();
  d.display();
  
}
class Dancer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = 60;
    this.rotAngle = 0
    this.rotSpd = random(-0.03,0.03);
  }
  update() {
    this.rotAngle = this.rotAngle+this.rotSpd
  }
  display() {
    push();
    translate(this.x, this.y);
    noFill()
    stroke(0,color1,0)
    strokeWeight(5)
    line(-120,100,-90,-20)
    line(-100,20,35,60)
    line(-103,30,-10,120)
    // fill(0,233,0)
     rect(-20,100,90,30)
    line(35,60,80,100)
    line(-120,-40,-40,0)
    
    push()
    translate(-120,100)
   
   rotate(this.rotAngle)
    noFill()
    circle(0,0,100)
    line(-50,0,50,0)
    line(0,-50,0,50)
    pop()
    
    push()
     translate(80,100)
    // fill(255,0,0)
    // ellipse(0,0,10)
    rotate(this.rotAngle)
    noFill()
    line(-50,0,50,0)
    line(0,-50,0,50)
    circle(0,0,100)
    pop();
    pop()
    noFill()
  
    }}
