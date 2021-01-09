var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200, 200, 50, 50);

}

function draw() {
  background(255,255,255); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


isTouching();
  drawSprites();
}

