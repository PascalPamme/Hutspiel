console.log("Willkommen zum grossartigen Hutspiel! Zu Beginn erhaelst du zunaechst 3 Muenzen. Errate unter welchem Hut sich der Ball befindet und du erhälst eine weitere Muenze. Ratest du allerdings falsch verlierst eine Muenze. Das Spiel ist vorbei sobald du keine Muenzen mehr uebrig hast ")
var readlineSync = require('readline-sync');
//var coins = 3;

function hideBallUnderCup(){
  
  var randomNumber = Math.floor(Math.random() * 2);
  return String(randomNumber);
}
var coins = 3;
function playGame(){
  var currentposition = hideBallUnderCup();
  var input = readlineSync.question("Unter Welchem Hut befindet sich der Ball nun? Tippe A, B oder C und druecke enter");
  //console.log(typeof input, input);
  //console.log(typeof currentposition, currentposition)
  if (currentposition === input) {
    console.log("Glueckwunch! Der Ball war unter dem richtigen Hut");
  }
  else {
    
    console.log('Leider keine Muenze fuer dich');
  }
  
  if (currentposition === input) {
    coins++
  }
  else {
    coins--
    
  }
console.log("Du hast noch " + coins + "Muenzen");
if (coins === 0) {
  console.log("Game Over")
}
}


while (coins >= 1) {
  playGame();
};

//playGame();

/*if (readlineSync.keyInYN(currentposition)) {
    
    console.log("Glueckwunch! Der Ball war unter dem richtigen Hut");
   
  } else {
    
    console.log('Leider keine Muenze fuer dich');

  }
  function currentposition(){
    var currentposition = hideBallUnderCup();
    console.log(currentposition);
  }*/





