function draw() {
    background(30);

    if (barriers.length === 0) {
        barriers.push(
            new barrier(createVector(200, 200), 100, 0),
            new barrier(createVector(320, 200), 100, 0),
            new barrier(createVector(250, 200), 100, 90)
        );
    }

    rectMode(CENTER);
    for (let b of barriers) {
        b.draw();
    }
}