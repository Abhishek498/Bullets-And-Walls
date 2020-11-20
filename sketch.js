
var bullet;
var wall;
var speed , thickness , weight;
var damage;

function setup(){

createCanvas(1600,400);

wall = createSprite(1200,200,thickness,height/2)
wall.shapeColor = color(80,80,80);

bullet = createSprite(50,200,50,50);
bullet.velocityX = speed;

thickness = random (22,83);
speed = random(223,321);
weight = random(30,52);

}

function draw(){

    if(wall.x-bullet.x < (bullet.width/2 + wall.width/2) ){
        bullet.velocityX = 0;
        damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
        
        if(damage < 10 || damage === 10){
        
        bullet.shapeColor = "green";
        
        }
        
        if(damage > 10 ){
        
        bullet.shapeColor = "red";
        
        }

        
        }

drawSprites();                      
    
}