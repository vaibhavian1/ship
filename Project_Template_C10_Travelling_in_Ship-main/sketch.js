
function preload(){
shipI=loadAnimation("images/ship-1.png","images/ship-2.png","images/ship-3.png","images/ship-4.png")
seaI=loadImage("images/sea.png")
}

function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaI);
  spriteName.addImage(shipI)
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2;
  }
 
}