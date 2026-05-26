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