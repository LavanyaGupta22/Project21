//Create variables
var bullet, wall;
var speed, weight;
var thickness;

function setup() {
//Create a canvas
  createCanvas(1600,400);

//Assign random values to speed, thickness and weight of the bullet
 speed = random(223,321);
 weight = random(30,52);
 thickness = random(22,83);

//Create sprites of bullet and wall
 bullet = createSprite(50,200,25,25);
 bullet.velocityX = speed;
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);

}

function draw() {
//Give the background a color  
  background(0,0,0);
 
//Execute the function of the bullet to collide the wall  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
    if (damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }
    if (damage<10)
    {
      wall.shapeColor= color (0,255,0);
    }
  }
console.log(damage);
//Display the sprites  
  drawSprites();

}

//Create a function to collide the bullet to the wall
function hasCollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
}