var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();

}

if (bullets.x - wall.x < wall.width/2 + bullets.width/2
  && wall.x - bullets.x < wall.width/2 + bullets.width/2) {
bullets.velocityX = bullets.velocityX * (-1);
wall.velocityX = wall.velocityX * (-1);
}
if (bullets.y - wall.y < wall.height/2 + bullets.height/2
&& wall.y - bullets.y < wall.height/2 + bullets.height/2){
bullets.velocityY = bullets.velocityY * (-1);
wall.velocityY = wall.velocityY * (-1);
}