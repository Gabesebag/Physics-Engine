function draw() {
//     background(30);
    
//   //Bucket text
// // 	LVL 1
// // 	text()
// // // 	LVL 2
// // 	text()
// // // 	LVL 3
// // 	text()
// // // 	LVL 3
// // 	text()
// // // 	LVL 4
// // 	text()
// // //    LVL 5
// // 	text( )
// // // 	LVL 6
// // 	text("10", 20, 800)
// // // 	LVL 7
// // 	text("10", windowWidth/2 - width, 800)
// // // 	LVL 8
// // 	text("10", windowWidth - width - 35, 800)

switch(screen){
    case start:
        menu();
        break;
    case game:
        game();
        break;
    case pause:
        pause();
        break;
}
}