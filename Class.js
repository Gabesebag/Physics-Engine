let playerBall

// Bullet properties
class Projectile {
	constructor(force = 0.015, mass = 0.09, radius = 10, colour = 'blue') {
		this.radius = radius
		this.fireTime = 2000
        this.colour = colour
		this.force = force
		this.mass = mass
	}

	fire(position, direction) {
		this.direction = direction
		this.body = Bodies.circle(position.x, position.y, this.radius, {
			render: {
				fillStyle: this.colour,
				strokeStyle: 'black',
				lineWidth: 1
			}
		})
		Body.setMass(this.body, this.mass);

		// set the ball position
		Composite.add(engine.world, [this.body]);

		// set the force in the direction
		this.direction.setMag(this.force)

		// apply the force to the ball
		Body.applyForce(this.body, this.body.position, this.direction)
		this.fireTime = millis()
	}

	update() {
		var now = millis()
		if (this.body && this.fireTime > 0 && now - this.fireTime > 2000) {
			Composite.remove(engine.world, this.body)
			
		}
	}
}

//if mouse is clicked, then balls are fired to the mouse axis
function mouseClicked() {
	playerBall = new Projectile()
	v1 = createVector(player.position.x, player.position.y)
	v2 = createVector(mouseX, mouseY)
	v3 = v2.sub(v1)
	playerBall.fire(v1, v3)
}

class Bucket {
    constructor(position, wallWidth = defaultBucketwallWidth, width = 200, height = 200, colour = 'white') {
        this.pos = position;
        this.wallWidth = wallWidth;
        this.width = width;
        this.height = height;
        this.colour = colour;
        this.walls = [
        Bodies.rectangle(this.pos.x, this.pos.y, this.wallWidth, this.height, {
        isStatic: true,
        render: {
            fillStyle: this.colour
        }
        }), // Left wall
        Bodies.rectangle(this.pos.x +this.width - this.wallWidth, this.pos.y, this.wallWidth, this.height, {
        isStatic: true,
        render: {
            fillStyle: this.colour
        }
        }), // Right wall
        Bodies.rectangle(this.pos.x + 88  , this.pos.y + this.height/2 - this.wallWidth/2, this.width, this.wallWidth, {
        isStatic: true, 
        render: { 
            fillStyle: this.colour } })  // Bottom wall
        ]
       print("x: " + this.pos.x, "y: " + this.pos.y, "h: " + this.height, "wW: " + this.wallWidth);
    }

    draw() {
        push();
        translate(this.pos);
        //rotate(this.angle);
        rectMode(CENTER);
        fill(this.colour);
        rect(0, 0, this.width, this.height);
        pop();
    }
}