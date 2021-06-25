var shipImage;
var seaImage;
var sea;
var ship;
function preload(){
shipImage = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png");
seaImage = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);
  
// sea
sea = createSprite(400,200);
sea.addAnimation("sea",seaImage);
sea.scale = 0.3;
sea.velocityX = -10;

//ship
ship = createSprite(130,200);
ship.addAnimation("ship",shipImage);
ship.scale = 0.25;





}

function draw() {
  background("blue");

// moving sea
if(sea.x < 0)
{
  sea.x = sea.width/8;
}


 drawSprites()
}