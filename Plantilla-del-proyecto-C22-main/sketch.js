const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, bow;
var baseimage, playerimage,backgroundImg,bowimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  bowimage = loadImage("./assets/playerArcher.png");
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);// Se ajusta a la pantalla del dispositivo
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  //Opción para evitar el movimiento del objeto
  var static = {
    isStatic: true
  }
  //Jugador
  player = Bodies.rectangle(190, 120, 40, 40, static)
  World.add(world,player)
  //Arco
  bow =  Bodies.rectangle(190, 80, 130, 100,  static)
  World.add(world,bow)
  //Base del jugador
 playerBase = Bodies.rectangle(190, 208, 150, 50, static)
 World.add(world,playerBase)

}

function draw() {
  background(backgroundImg);

  push();
  imageMode(CENTER);
  image(playerimage,player.position.x, player.position.y, 70, 100);
  pop();  

  push();
  imageMode(CENTER);
  image(baseimage,playerBase.position.x, playerBase.position.y, 140, 90);
  pop();  

  push();
  imageMode(CENTER);
  image(bowimage,tower.bow.x, bow.position.y, 50, 60);
  pop();  


  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
