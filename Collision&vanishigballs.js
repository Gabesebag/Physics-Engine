//if balls from the projectile in the class file collide with an inisible static block inside the bucket they will vanish after 2 seconds
function Collision() {
    Events.on(engine, 'collisionStart', function(event) {
        var pairs = event.pairs;
        pairs.forEach(function(pair) {
            var bodyA = pair.bodyA;
            var bodyB = pair.bodyB;
            if ((bodyA === playerBall.body && bodyB.isStatic) || (bodyB === playerBall.body && bodyA.isStatic)) {
                playerBall.fireTime = millis();
            }
        });

    });
}

//if the ball is greater then the windowWidth, the balls will vanish after 2 seconds
function vanish() {
    if (playerBall.body.position.x > windowWidth || playerBall.body.position.x < 0) {
        playerBall.fireTime = millis();
    }
}