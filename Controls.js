let isGamePaused = false;

function handlePlayerMovement() {
    if (!player) return;

    const currentX = player.position.x;
    let nextX = currentX;

    // Use continuous key state to move while the key is held down
    if ((keyIsDown(65) || keyIsDown(LEFT_ARROW)) && currentX >= 70) {
        nextX -= 5;
    }
    if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && currentX <= windowWidth - 70) {
        nextX += 5;
    }

    if (nextX !== currentX) {
        Matter.Body.setPosition(player, { x: nextX, y: player.position.y });
    }
}           

//if tab is pressed it will pause the game an switch to the pause screen, if tab is pressed again it will unpause the game and switch back to the game screen
function keyIsPressed() {
if (key ===9 && !isGamePaused) {
    screen = 2;
    isGamePaused = true;
} else if (key === 9 && isGamePaused) {
    screen = 1;
}
}