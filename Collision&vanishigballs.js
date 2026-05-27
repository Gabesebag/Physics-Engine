//if balls from the projectile in the class file collide with an inisible static block inside the bucket they will vanish after 2 seconds and will give them a score, if the balls from the projectile in the class file collide with the ground they will also vanish after 2 seconds but will not give them a score
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

//if the ball is greater then the windowHeight, the balls will vanish after 2 seconds
function vanish() {
    if (playerBall.body.position.y > windowHeight) {
        playerBall.fireTime = millis();
    }
}