const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine, world;
var backGroundImg
var snow 
var ground 

function preload(){
  backGroundImg= loadImage ("snow2.jpg");
}

function setup() {
  var canvas = createCanvas(1200,600);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1200,20);
  
  
}

function draw() {
    background(backGroundImg);
    ground.display();

    if(frameCount%60===0){
      snow.push(new Snow(random(width/2-30, width/2+30), 10,10));
    }

    for (var i = 0; i < snow.length; i++) {
      snow[i].display();
   }

  
    drawSprites();
}