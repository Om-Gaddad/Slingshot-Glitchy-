//Namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,975,2000,50);
    stand1 = new Ground(400,800,400,30);
    stand2 = new Ground(800,650,300,30);
    box1 = new Box(260,740);
    box2 = new Box(330,740);
    box3 = new Box(400,740);
    box4 = new Box(470,740);
    box5 = new Box(540,740);
    box6 = new Box(330,650);
    box7 = new Box(400,650);
    box8 = new Box(470,650);
    box9 = new Box(400,560);

    box10 = new Box(730,590);
    box11 = new Box(800,590);
    box12 = new Box(870,590);
    box13 = new Box(800,500);
    polygon = new Polygon(70,560);
    slingshot = new Slingshot(polygon.body,{x:140, y:560});
    

}

function draw(){
    background("lightblue");
    Engine.update(engine);

    // text(mouseX + "," + mouseY,mouseX,mouseY);


    ground.display();
    stand1.display();
    stand2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    polygon.display();
    slingshot.display();

    textSize(27);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.", 133,245)


}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY})
}


function mouseReleased(){
    slingshot.fly();
}


/*
--Creating--
1. Create a variable
2. var = Bodies.something();
3. Add it to the world
4. options (optional)

--Displaying--
5. shapeMode();
6. shape();
*/