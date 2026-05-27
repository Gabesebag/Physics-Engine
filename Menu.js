function Menu () {
    if (screen === 0){
		buttonColour = color(200, 200, 200);
		if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
			mouseY > windowHeight / 2 - 50 && mouseY < windowHeight / 2 + 50) {
			buttonColour = color(225, 225, 225);
		}
        // Draw the start button
		fill(buttonColour);
		rectMode(CENTER)
		rect(windowWidth / 2, windowHeight / 2, 200, 100, 10);
		fill('black')
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Start Game", windowWidth / 2, windowHeight / 2);
        
        //draw the player1 name box where they can type their name in
        fill(255);
        rect(windowWidth / 2, windowHeight / 2 + 150, 200, 50, 10);
        fill(0);
        textSize(16);
        textAlign(CENTER, CENTER);
        text("Player 1 Name", windowWidth / 2, windowHeight / 2 + 150);

        //draw the player2 name box where they can type their name in
        fill(255);
        rect(windowWidth / 2, windowHeight / 2 + 300, 200, 50, 10);
        fill(0);
        textSize(16);
        textAlign(CENTER, CENTER);
        text("Player 2 Name", windowWidth / 2, windowHeight / 2 + 150);
    }
}

function mousePressed() {
    if (screen === 0) {
        if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 &&
            mouseY > windowHeight / 2 - 50 && mouseY < windowHeight / 2 + 50) {
            screen = 1; // Change to the game screen
        }
    }
}