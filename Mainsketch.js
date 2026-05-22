var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Render = Matter.Render;
    Runner = Matter.Runner;
    Composite = Matter.Composite;

    let world;
    let runner, render, engine;


function setup() {
    angleMode(DEGREES);
    
    engine = Engine.create();
    world = engine.world;
    render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: innerWidth,
            height: innerHeight,
            wireframes: false,
        }
    });
    
    
    createCanvas(windowWidth, windowHeight, render.canvas);
    
    var buckets = [
        new Bucket(createVector(10, 300)),
        // new Bucket(createVector(200, 300)),
        // new Bucket(createVector(400, 300)),
        // new Bucket(createVector(10, 200)),
    ]
    
    // Initialize buckets
    //LVL 1
    //Bucket 1
    
    //bucket 2
    
    //Bucket 3
    
    //LVL 2
    //Bucket 4
    
    //Bucket 5
    
    //LVL 3
    //Bucket 6
    
    //Bucket 7
    
    //Bucket 8
    
    
    
    for (let bucket of buckets) {
        Composite.add(engine.world, bucket.walls);
    }
    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);
	
}


