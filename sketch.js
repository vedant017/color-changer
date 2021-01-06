function setup() {
  createCanvas(800,400);
 ball= createSprite(400, 200, 50, 50);
 bat= createSprite(300, 150, 40, 40);
}

function draw() {
  background("lightgreen");  
  bat.x=mouseX
  bat.y=mouseY
  if(abs(ball.x-bat.x)<=ball.width/2+bat.width/2&&
  abs(ball.y-bat.y)<=ball.height/2+bat.height/2){
    ball.shapeColor="red"
     bat.shapeColor="red"
  }else{
     ball.shapeColor="yellow"
     bat.shapeColor="yellow"
  }
  drawSprites();
}