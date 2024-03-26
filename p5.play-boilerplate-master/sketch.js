var Akane
var AkaneImage
var floor
var floorImage
var enemy
var enemygroup
function preload() {

AkaneImage = loadImage ("pixilart-drawing.png")
floorImage = loadImage ("floor2.jpeg")
}
function setup() {
  createCanvas(1600,700);
  Akane= createSprite(800, 400, 500, 50, ); Akane.scale = 1
  Akane.addImage("Akane",AkaneImage)
  enemygroup = new Group()
  
}

function draw() {
  background("white");  
  if (keyDown("left")){
Akane.x = Akane.x-3
 }
 if (keyDown("right")){
  Akane.x = Akane.x+3
   }
   if (keyDown("down")){
    Akane.y = Akane.y+3
     }
     if (keyDown("up")){
      Akane.y = Akane.y-3
       }
       enemy1 ()

      // console.log (girl.y)
  drawSprites();

} 
function enemy1(){
if (frameCount% 200 == 0)
{ enemy= createSprite(
x,y,50,50
)
 var x = Math.random (0,1000)
 var y = Math.random (0,500)
  enemy.velocityX = Math.random ( -5,5)
  enemy.velocityY = Math.random (
 -5,5
  )
  



}

enemygroup.add( enemy)
 if (enemygroup.isTouching (Akane) ) {
 text("GameOver!:(" ,500,500)
 console.log("Gameover!:(")
 }

}