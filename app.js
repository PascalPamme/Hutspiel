console.log("Willkommen zum grossartigen Hutspiel! Zu Beginn erhaelst du zunaechst 3 Muenzen. Errate unter welchem Hut sich der Ball befindet und du erhälst eine weitere Muenze. Ratest du allerdings falsch verlierst eine Muenze. Das Spiel ist vorbei sobald du keine Muenzen mehr uebrig hast Tippe A, B oder C und druecke enter. Achte dabei darauf nur Kleinbuchstaben zu verwenden. ");
var readlineSync = require('readline-sync');

//function for random String generator A-C (a-c)
function hideBallUnderCup(length = 1) {
    var result           = '';
    var characters       = "abc";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Coin wallet and overall game mechanics
var coins = 3;
function playGame(){
    var currentposition = hideBallUnderCup();
    var input = readlineSync.question("Unter Welchem Hut befindet sich der Ball nun? \n");

    if (currentposition === input) {
        console.log("Glueckwunch! Der Ball war unter dem richtigen Hut");
    }
    else {
        console.log("Der Ball war unter Hut " + currentposition);
        console.log('Leider keine Muenze fuer dich');
    }
  
    if (currentposition === input) {
        coins++;
    }
    else {
        coins--;
    
    }
    if (input =! "A", "B", "C", "a", "b", "c") {
        console.log("Es gibt nur Hut A, B oder C.. Versuch's nochmal!");
    }
    
    console.log("Du hast noch " + coins + " Muenzen\n");
    if (coins === 0) {
        console.log("Game Over");
    }
}


while (coins >= 1) {
    playGame();
}








