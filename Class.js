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
    constructor(position, wallWidth = defaultBucketwallWidth, width = 100, height = 100, colour = 'black') {
        this.pos = position;
        this.wallWidth = wallWidth;
        this.width = width;
        this.height = height;
        this.colour = colour;
        this.walls = [
            Bodies.rectangle(this.pos.x, this.pos.y, this.wallWidth, this.height, { isStatic: true }), // Left wall
            Bodies.rectangle(this.pos.x +this.width - this.wallWidth, this.pos.y, this.wallWidth, this.height, { isStatic: true }), // Right wall
            Bodies.rectangle(this.pos.x  , this.pos.y + this.height - this.wallWidth, this.width, this.wallWidth, { isStatic: true })  // Bottom wall
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