var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Render = Matter.Render;
    Runner = Matter.Runner;
    Composite = Matter.Composite;

    let world;
    let runner, render, engine;


function setup() {
    createCanvas(windowWidth, windowHeight, render.canvas);
    angleMode(DEGREES);
    
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: innerWidth,
            height: innerHeight,
            wireframes: false,
        }
    });

    // Initialize barriers
    barriers.push(
        //LVL 1
        //Bucket 1
        new barrier(createVector(innerWidth/3, 200), 100, 0, 'white'),
        new barrier(createVector(innerWidth/3 * 2, 200), 100, 0, 'white'),
        new barrier(createVector(innerWidth/3 * 2 - 70, 200), 100, 0, 'white'),
        //bucket 2
        new barrier(createVector(innerWidth/3, 200), 100, 0, 'white'),
        new barrier(createVector(innerWidth/3 * 2, 200), 100, 0, 'white'),
        new barrier(createVector(innerWidth/3 * 2 - 70, 200), 100, 0, 'white'),
        //Bucket 3
        new barrier(createVector(innerWidth/3, 200), 100, 0, 'white'),
        new barrier(createVector(innerWidth/3 * 2, 200), 100, 0, 'white'),
        new barrier(createVector(innerWidth/3 * 2 - 70, 200), 100, 0, 'white'),
        //LVL 2
        //Bucket 4
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white'),
        //Bucket 5
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white'),
        //LVL 3
        //Bucket 6
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white'),
        //Bucket 7
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white'),
        //Bucket 8
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white'),
        new barrier(createVector(200, 200), 100, 0, 'white')
    );

	//Composite.add(engine.world, [barrier

    Render.run(render);
}


