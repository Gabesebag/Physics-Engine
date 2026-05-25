class projectile {
    constructor(xposition, yposition, diameter, speedX, speedY) {
        this.xposition = xposition;
        this.yposition = yposition;
        this.diameter = diameter;
        this.speedX = speedX;
        this.speedY = speedY;
    }


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
        rect(0, 0, this.width, this.length);
        pop();
    }
}