var bullet;
var wall,thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  weight=random(400,1500);
  speed=random(15,33);
  thickness=random(30,52)

  bullet=createSprite(50, 245, 25, 25);
  bullet.velocityX=speed;
  bullet.weight=weight;

  wall=createSprite(1550,230,thickness,280);
  wall.shapeColor=('silver');
}

function draw() {
  background('orange');

  fill('yellow');
  rect(0,290,1550,4);
  rect(0,190,1550,4);

  fill('white');
  textSize(20);
  text('AK-47',100,270);

  textSize(40);
  text('Bullet Testing Community',100,55);

  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapecolor=color('green')
    }

    if(damage<10){
      wall.shapeColor=color('red');
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall){
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}