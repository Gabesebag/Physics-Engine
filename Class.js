class projectile {
    constructor(xposition, yposition, diameter, speedX, speedY) {
        this.xposition = xposition;
        this.yposition = yposition;
        this.diameter = diameter;
        this.speedX = speedX;
        this.speedY = speedY;
    }


}

class barrier {
    constructor(position, length, angle, colour = 'black') {
        this.pos = position;
        this.length = length;
        this.width = defaultBarrierWidth;
        this.L1 = createVector(-this.width/2, -this.length/2);
        this.L2 = createVector(-this.width/2, this.length/2);
        this.R1 = createVector(this.width/2, -this.length/2);
        this.R2 = createVector(this.width/2, this.length/2);
        this.corners = [this.L1, this.L2, this.R1, this.R2];
        this.angle = angle;
        this.colour = colour;
    }

    draw() {
        push();
        translate(this.pos);
        rotate(this.angle);
        rectMode(CENTER);
        fill(this.colour);
        rect(0, 0, this.width, this.length);
        pop();
    }
}