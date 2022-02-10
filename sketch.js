function setup() {
    createCanvas(400,200);
}

function draw() {
  background(200);
  strokeWeight(1)
  point(200,100)
  line(200,200,100,100)

  fill(149,29,42)
  rect(150,100,20,20)
  
  strokeWeight(1)
  ellipse(200,120,20,20)
  
  strokeWeight(2)
  triangle(50,40,80,5,2,4)
  arc(100,100,50,50,radians(30),radians(330))

  strokeJoin((ROUND))
  strokeWeight(5)
  beginShape();
  vertex(300,50);
  vertex(350,100);
  vertex(300,150);
  vertex(250,50);
  vertex(190,20);
  vertex(300,50);
  endShape();

  for(var i=0; i<=3000; i++){
    x = i
    y = 150 + 10*Math.sin(x/10)
    point(x,y)
  }
  
  var y = 200 + 20*Math.sin(PI*j/20)
  var y = 50 + 20*Math.sin(PI*j/20)
  j += 1
  fill(100,192,35)
  ellipse(300,y,50,50)
}