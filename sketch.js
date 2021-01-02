const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, division1, division2 , division3, division4, division5, division6, division7, division8, plinko, particle;
var particles = [];
var plinko = [];
function setup() {
  createCanvas(650,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 790, 1400, 10);
  division1 = new Division(10, 635, 5, 300);
  division2 = new Division(100, 635, 5, 300);
  division3 = new Division(190, 635, 5, 300);
  division4 = new Division(280, 635, 5, 300);
  division5 = new Division(370, 635, 5, 300);
  division6 = new Division(460, 635, 5, 300);
  division7 = new Division(550, 635, 5, 300);
  division8 = new Division(640, 635, 5, 300);
  plinko = new Plinko(20,300,10);
  //particle = new Particle
} 
var division = [];
var particle = [];
var plinko = [];
function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  plinko.display();
 

  drawSprites();


}