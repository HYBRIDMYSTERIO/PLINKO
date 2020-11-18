
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world , ground , pin1,pin2,pin3,pin4,pin5,pin6
,pin7,pin8,pin8,pin9,pin10,pin11,pin12,pin13,pin14,pin15,pin16,pin17,pin18,pin19,pin20,pin21;

var division1,division2,division3,division4,division5,division6,division7;

var particales = [];
var plinko = [];
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	
	
	ground = new Ground(400,760,800,10);
	//paper = new Paper(100,1,10);

	pin1 = new Pin(20,80,10);
	pin2 = new Pin(70,80,10);
	pin3 = new Pin(120,80,10);
	pin4 = new Pin(170,80,10);
	pin5 = new Pin(220,80,10);
	pin6 = new Pin(270,80,10);
	pin7 = new Pin(320,80,10);
	pin8 =  new Pin(370,80,10);
	pin9 = new Pin(420,80,10);
	pin10 = new Pin(470,80,10);
	pin11 = new Pin(30,150,10);
	pin12 = new Pin(80,150,10);
	pin14= new Pin(130,150,10);
	pin15= new Pin(180,150,10);
	pin16= new Pin(230,150,10);
	pin17= new Pin(280,150,10);
	pin18= new Pin(330,150,10);
	pin19= new Pin(380,150,10);
	pin20= new Pin(430,150,10);
	pin21= new Pin(480,150,10);

	pin22 = new Pin(20,230,10);
	pin23 = new Pin(70,230,10);
	pin24 = new Pin(120,230,10);
	pin25 = new Pin(170,230,10);
	pin26 = new Pin(220,230,10);
	pin27= new Pin(270,230,10);
	pin28= new Pin(320,230,10);
	pin29=  new Pin(370,230,10);
	pin30 = new Pin(420,230,10);
	pin31 = new Pin(470,230,10);
	pin32 = new Pin(30,320,10);
	pin33 = new Pin(80,320,10);
	pin34= new Pin(130,320,10);
	pin35= new Pin(180,320,10);
	pin36= new Pin(230,320,10);
	pin37= new Pin(280,320,10);
	pin38= new Pin(330,320,10);
	pin39= new Pin(380,320,10);
	pin40= new Pin(430,320,10);
	pin41= new Pin(480,320,10);

	division1 = new Division(5,650,5,200)
	division2= new Division(90,650,5,200)
	division3 = new Division(175,650,5,200)
	division4 = new Division(265,650,5,200)
	division5 = new Division(380,650,5,200)
	division6 = new Division(475,650,5,200)
	division7 = new Division(5,650,5,200)


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.displayground();
//  paper.displaypapers();
  pin1.displaypin();
  pin2.displaypin();
  pin3.displaypin();
  pin4.displaypin();
  pin5.displaypin();
  pin6.displaypin();
  pin7.displaypin();
  pin8.displaypin();
  pin9.displaypin();
  pin10.displaypin();
  pin11.displaypin();
  pin12.displaypin();
  pin14.displaypin();
  pin15.displaypin();
  pin16.displaypin();
  pin17.displaypin();
  pin18.displaypin();
  pin19.displaypin();
  pin20.displaypin();
  pin21.displaypin();

  pin22.displaypin();
  pin23.displaypin();
  pin24.displaypin();
  pin25.displaypin();
  pin26.displaypin();
  pin27.displaypin();
  pin28.displaypin();
  pin29.displaypin();
  pin30.displaypin();
  pin31.displaypin();
  pin32.displaypin();
  pin33.displaypin();
  pin34.displaypin();
  pin35.displaypin();
  pin36.displaypin();
  pin37.displaypin();
  pin38.displaypin();
  pin39.displaypin();
  pin40.displaypin();
  pin41.displaypin();

  division1.displaydivision();
  division2.displaydivision();
  division3.displaydivision();
  division4.displaydivision();
  division5.displaydivision();
  division6.displaydivision();
  division7.displaydivision();

  

  for(var i = 0; i < particales.length; i ++){

	particales[i].display();
}

if(frameCount%60 === 0){
 
	particales.push(new Particale(random(width/2-10, width/2+10), 1,15))
  }

  drawSprites();
 
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:115,y:-115});
	}
}*/

