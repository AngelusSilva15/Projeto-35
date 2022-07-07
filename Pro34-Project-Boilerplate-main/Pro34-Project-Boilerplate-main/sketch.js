
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var caminhao
function preload(){
  fundoimg = loadImage("fundo.jpg")
  cleidosvaldoincomodado = loadImage("incomdado.png")
  cleidosvaldoatacante = loadImage("jogando.png")
  cleidosvaldoparado = loadImage("parado.png")

}


function setup() {
  createCanvas(1600,700);
  
  engine = Engine.create();
  world = engine.world;
  caminhao = Bodies.rectangle(800,200,100,100)
World.add(world,caminhao)
cleidosvaldo.addAnimation("atirando",cleidosvaldoatacante)
cleidosvaldo.addAnimation("derrotado",cleidosvaldoincomodado)
cleidosvaldo.addAnimation("parado",cleidosvaldoparado)
soloiv = createSprite(300,150,600,20);
 soloiv.visible = false;
 
}


function draw() {
  background(fundoimg);
  Engine.update(engine);
  rect(caminhao.position.x,caminhao.position.y,100,100)
  cleidosvaldo.collide(soloiv);
  if(gamestate === PLAY) {

  }

 if(gamestate === END) {
  if (cleidosvaldo.isTouching(soloiv)){
    cleidosvaldo.changeAnimation("atirando",cleidosvaldoatacante);
    }
    drawSprites()
  }


}

