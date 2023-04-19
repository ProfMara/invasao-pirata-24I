const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//facilitar a sua vida
const Body = Matter.Body;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;

var angulo = 15;
function preload(){
    //carrega a imagem do fundo
    cenario = loadImage("fundo.gif");

}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    parado = { isStatic: true };

    solo = Bodies.rectangle(width/2, height-2, width, 2, parado);
    World.add(world, solo);

    angleMode(DEGREES);
    //cria um objeto da classe Torre
    torre = new Torre(160, 350,150,310);
    canhao = new Canhao(180, 125, 130, 100,angulo);
   
    rectMode(CENTER);
    imageMode (CENTER)
}

function draw() {
    Engine.update(engine);
    background("cyan");
    //coloca uma imagem no meio do jogo
    image(cenario, width/2, height/2, width, height)

    fill("green")
    rect(solo.position.x, solo.position.y, width, 10);

    //mostra o canhao
    canhao.show();    
    //mostra a torre
    torre.show();


}