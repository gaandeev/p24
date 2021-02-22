
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber,stone,sand,Hammer;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rubber = new Rubber(252,500,50,50);
	sand = new sand(300,200,40,40);
	stone = new stone(400,500,101,100);
	hammer = new hammer(500,700,50,50);
	ground = new Ground(800,700,800,50);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rubber.display();
  sand.display();
  stone.display();
  hammer.display();
  ground.display();
  
  drawSprites();
 
}



