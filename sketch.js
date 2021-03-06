
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var dust1, dust2, dust3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new Paper(200,650);
ground = new Box(400,660,800,15);
dust1 = new Box(700,645,200,15);
dust2 = new Box(600,612,15,80);
dust3 = new Box(800,612,15,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  drawSprites();
 
}



