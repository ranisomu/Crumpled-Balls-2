var bin1;
var paper,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Bin(650,620,150,120);

	paper = new Paper(200,200,30);
	
	ground = new Ground(width/2,690,width,10);

	Engine.run(engine);
  
}


function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER);
  bin1.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
 if(keyCode === UP_ARROW) {

  Matter.Body.applyForce(paper.body,paper.body.position,{x:230,y:-230})


 }

}

