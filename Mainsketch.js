var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Render = Matter.Render;
    Runner = Matter.Runner;
    Composite = Matter.Composite;

    let world;
    let runner, render, engine;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: windowWidth,
            height: windowHeight,
            wireframes: false,
        }
    });
    Render.run(render);
}

