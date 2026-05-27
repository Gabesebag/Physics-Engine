var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite;

let world;
let runner, render, engine;

let collision;
let vanish;


function setup() {

let x = windowWidth/2;
let y = windowHeight - 100;

let coulour1 = "Blue"
let colour2 = "Red"

    angleMode(DEGREES);
    
    engine = Engine.create();
    world = engine.world;

    const canvas = createCanvas(windowWidth, windowHeight);

    render = Render.create({
        canvas: canvas.elt,
        engine: engine,
        options: {
            width: windowWidth,
            height: windowHeight,
            wireframes: false,
        }
    });
    
var buckets = [
    
	// Initialize buckets
	//LVL 1
	//Bucket 1
    new Bucket(createVector(20, 170)),
	//bucket 2
    new Bucket(createVector(windowWidth/2 - width, 170, 10)),
	// //Bucket 3
    new Bucket(createVector(windowWidth - width - 35, 170)),
	// //LVL 2
	// //Bucket 4
    new Bucket(createVector(windowWidth/3 - width - 40, 500)),
	// //Bucket 5
	 new Bucket(createVector(windowWidth - windowWidth/3 - 40, 500)),
	// //LVL 3
	// //Bucket 6
	 new Bucket(createVector(20, 800)),
	// //Bucket 7
	 new Bucket(createVector(windowWidth/2 - width, 800)),
	// //Bucket 8
    new Bucket(createVector(windowWidth - width - 35, 800)),
    ]
    
    fill("White")
    shooter = Bodies.circle(x, y, 30, {
        isStatic: true,
        render: {
            fillStyle: "blue"
        }
    });
    Composite.add(engine.world, shooter);
    
    for (let bucket of buckets) {
        Composite.add(engine.world, bucket.walls);
    }


    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);
	
}

function draw() {
    handlePlayerMovement();
    //Collision();
    vanish();
    background(220);
}
