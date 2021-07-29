const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, trashCan, ground

function preload()
{}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	trashCan = new bin(200,200,1);
	paperBall = new paper(100,200,70);
	ground = new Ground(400,480,900,20);

	Engine.run(engine);

	
  
	keyPressed();
  
}


function draw() {

  rectMode(CENTER);
  background("cyan");
  
  ground.display();
  paperBall.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	   Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:153,y:-300});
	   if(paperBall.body.y > 90){
	   paperBall.body.isStatic = true;
	   }
	 }
   }



