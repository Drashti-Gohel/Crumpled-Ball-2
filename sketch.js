
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,540,30);

	bottomBody = new Dustbin(550, 490 );
	World.add(world, bottomBody);
	
	leftBody = new Dustbin(510, 490, 40, 50  );
 	World.add(world, leftBody);

	rightBody = new Dustbin(580, 490, 40, 100  );
 	World.add(world, rightBody);

	ground = new Ground(400, 560, 800, 10 );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ball.display();
  leftBody.display();
  rightBody.display();
  bottomBody.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:110,y:-140});

	}
}



