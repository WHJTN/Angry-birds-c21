var somthing1
var somthing2
var somthing3
var somthing4

function setup() {
  createCanvas(800,400);
  somthing1 = createSprite(600, 200, 50, 50);
  somthing2 = createSprite(200, 200, 50, 50);
  somthing3 = createSprite(400, 300, 50, 50);
  somthing4 = createSprite(400, 100, 50, 50);
  somthing4.velocityY = 2
}

function draw() {
  background(200,200,200);
  drawSprites();
  somthing1.x = mouseX;
  somthing1.y = mouseY;

  somthing1.shapeColor = "blue";

  
  four(somthing1, somthing4)
  four(somthing3, somthing4);

  if (three(somthing1, somthing2)) {
    somthing1.shapeColor = "green";
    somthing2.shapeColor = "green";
  }
  else {
    somthing2.shapeColor = "yellow";
  }
  
  if (three(somthing1, somthing3)) {
    somthing1.shapeColor = "black";
    somthing3.shapeColor = "black";
  }
  else {
    somthing3.shapeColor = "orange";
  }

  if (three(somthing1,somthing4)) {
    somthing1.shapeColor = "red"
    somthing4.shapeColor = "red"
  }
  else {
    somthing4.shapeColor = "purple"
  }
}

