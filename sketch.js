
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var m1,m2,m3,m4,t1,b1,tree1;

function preload()
{
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
}



function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create()
	world = engine.world;


	

	m1=new Mango(200,200)
	m2=new Mango(400,400)
	m3=new Mango(600,400)
	m4=new Mango(500,600)
	

	t1=createSprite(500,500)
	b1=new Boy(200,300)
	s1=new Stone(b1.body,200,100)

	t1.shapeColor="green"
	b1.shapeColor="blue"
 
	t1.addImage(treeImg)
	t1.scale=0.2;
}


function draw() {
  background("white");
  Engine.update(engine);

 
  
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  t1.display()
  b1.display()
  s1.display()
  
  drawSprites();
 
}



