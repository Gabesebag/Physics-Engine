function draw() {
    background(30);
    
    // Draw all barriers
    for (let barrier of barriers) {
        barrier.draw();
    }
}