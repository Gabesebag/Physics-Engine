let left = false
let right = false

let shooting = false;

function keyPressed() {
    if (keyCode === 65 && player.x >= 70) {
        left = true;
    }
    if (keyCode === 68 && player.x <= windowWidth - 70) {
        right = true;
    }
}

function mouseClick() {
    shooting = true;
}

