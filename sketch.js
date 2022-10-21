var apple,bg,box,coin,spike2,ground,spike,invisibleGround,score,coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10;
var appleImg,spike2Img,bgImg,boxImg,coinImg,groundImg,spikeImg,coin2Img,coin3Img,coin4Img,coin5Img,coin6Img,coin7Img,coin8Img,coin9Img,coin10Img;
var invisibleline;
var score=0;

function preload(){
appleImg = loadImage("apple.png");
  bgImg = loadImage("bg.jpg");
  groundImg=loadImage("ground.jpg")
  boxImg = loadImage("box.png");
  spikeImg=loadImage("spike.png")
  coinImg=loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png","coin7.png","coin8.png","coin9.png","coin10.png")
 
 //animation

}


function setup() {
  createCanvas(1280,600);

 
  
  bg=createSprite(630,300,1280,600)
  bg.addImage(bgImg)
  bg.scale=2.3

  box=createSprite(90, 355, 50, 50);
  box.addImage(boxImg);
  box.scale=0.6

  ground=createSprite(840,927,1380,300)
  ground.addImage(groundImg)
  ground.scale=3

  invisibleGround=createSprite(640,537,1380,300)
  box.debug=true
  
  invisibleline=createSprite(60,300,12,1200)

 box.setCollider("rectangle",-45,0,100,100)
  
}

function draw() {
  background("lightGrey");  

if(keyDown("space")){
  box.velocityY = box.velocityY - 2
  coin.velocityX=-7
 
}

box.velocityY = box.velocityY + 0.4;
box.collide(invisibleGround)
box.depth=box.depth+1
if(box.isTouching(coin)){
  coin.destroy()
}
text("score "+score,900,60)

spike();
coin();
//score();





  drawSprites();
}

function spike() {
  //write code here to spawn the clouds
  if (frameCount % 90 === 0) {
    var spike = createSprite(1280,40,50,50);
    spike.y = Math.round(random(340,340));
    spike.addImage(spikeImg);
    spike.scale = 0.2;
    spike.velocityX = -7;
    spike.lifetime=190
  }
}

function coin(){
  if (frameCount % 200 === 0) {
    var coin = createSprite(1280,340,50,50);
    coin.addAnimation("coin",coinImg)
   
    coin.scale = 0.4;
    coin.velocityX = -7;
    coin.lifetime=190
  }
}

function Score()
{
       
        textSize(100);
        fill("yellow");
       text("score "+score,270,50)
     
       
  
}

