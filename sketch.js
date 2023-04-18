var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
 harryImg=loadImage("/assets/hp_1-removebg-preview.png")
 snitchImg=loadImage("/assets/snitchIMG-removebg-preview.png")
voldemortImg=loadImage("/assets/voldemortIMG-removebg-preview.png")
dementorImg=loadImage("/assets/dementorIMG-removebg-preview.png")
bgImg=loadImage("/assets/bg-img.JPG")
boxImg=loadImage("/assets/cratebox-removebg-preview.png")
bludgerImg=loadImage("/assets/bludgerrr-removebg-preview.png")
fireworkImg=loadImage("/assets/weasley's whizard wheezes.png")
killspellImg=loadImage("/assets/avadakedavra-removebg-preview.png")
blastspellImg=loadImage("/assets/bombarda-removebg-preview-removebg-preview.png")
patronusspellImg=loadImage("/assets/patronus-removebg-preview.png")


harry_running=loadAnimation("hp_1.png","hp_2.png","hp_3.png")



}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  // adding the background image
  bg = createSprite(0,0,width,height)
bg.addImage(bgImg)
bg.scale = 7.5
bg.x = bg.width /2;
  bg.velocityX = -4;
  

//creating the player sprite
player = createSprite(80, displayHeight-300, 50, 50);
 player.addImage(harryImg)
   player.scale = 5
  //  player.debug = true
   player.setCollider("rectangle",0,0,20,30)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(harryImg)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(harryImg)
}

drawSprites(); 

}
