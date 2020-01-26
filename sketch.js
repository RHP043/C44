var homeImage,cutter,saplingImage;
var sapling
function preload() {
  homeImage = loadImage("House.png");
  cutter = loadImage("woodcutter.jpg");
  saplingImage = loadImage("sapling.jpg");
}

function setup() {
  createCanvas(1200,500);
  sapling = createSprite(1200,100,50,50);
  sapling.velocityX = -2;
  sapling.addImage("sapling",saplingImage);
  sapling.scale = 0.1;
}



function draw() {
  background("#FFFFF");  
  image(homeImage,600,300,100,100);
  image(cutter,400,350,50,50);
  if(mousePressedOver(sapling)){
    console.log("presseddd");
  }
  drawSprites();
}