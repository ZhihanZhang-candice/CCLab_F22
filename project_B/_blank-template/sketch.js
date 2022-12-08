let color1 = [255,255,204,229,255,240,224,255,255,255]
let color2 = [204,229,229,204,204,128,255,182,240,255]
let color3 = [204,204,255,255,229,128,255,193,245,255]
let a,b,c,e,f,g,h,x,y,z,n
function setup() {
  let canvas = createCanvas(1900,800);
  canvas.parent("canvasContainer");
  // background();
}
function mousePressed(){
  console.log("change")
   n = floor(random(0,10))
  e = floor(random(0,10))
  f = floor(random(0,10))
  g = floor(random(0,10))
  h = floor(random(0,10))
   a = floor(random(0,10))
  b= floor(random(0,10))
  c = floor(random(0,10))
   x = floor(random(0,10))
  y= floor(random(0,10))
  z = floor(random(0,10))
}

function draw() {
  background(147,112,219);
  stroke(0)
  rect(140,250,140,520)
 fill(color1[n],color2[n],color3[n])
  quad(160,250,180,220,240,220,260,250)
    fill(color1[a],color2[a],color3[a])
  rect(90,450,150,320)
  rect(620,180,120,590)
  fill(color1[e],color2[e],color3[e])
  rect(470,200,170,570)
   rect(170,350,130,420)
  
 fill(color1[f],color2[f],color3[f])
  rect(490,160,120,40)
  quad(510,160,530,140,570,140,590,160)
  push()
  strokeWeight(5)
  line(550,137,550,90)
   line(1375,320,1375,270)
   line(1185,270,1185,190)
  pop()
   fill(color1[g],color2[g],color3[g])
  rect(340,500,200,270)
  rect(730,600,150,170)
  rect(920,350,250,420)
  fill(color1[h],color2[h],color3[h])
  quad(1100,770,1100,250,1250,350,1250,770)
  quad(1150,283,1150,270,1220,270,1220,330)
  fill(color1[b],color2[b],color3[b])
  rect(1300,390,150,380)
  fill(color1[b],color2[b],color3[b])
  rect(1330,370,90,20)
   fill(color1[y],color2[y],color3[y])
  rect(1365,320,20,50)
  fill(color1[c],color2[c],color3[c])
  rect(1250,450,50,320)
    fill(color1[z],color2[z],color3[z])
  rect(1680,350,100,420)
  fill(color1[x],color2[x],color3[x])
  rect(1600,450,100,320)
}