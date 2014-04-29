

var playerLevel = 1;
var playerClass = "none";

function plutoniumDragon (playerLevel) {
  var creatureLevel = 20;

  if(playerLevel < 5){
  	alert("Plutonium Dragon will not pursue anyone of Level 5 or below.");
  }
  else if(playerLevel >= creatureLevel){
    alert("You defeated the monster and won 5 treasures!");
  }
  else{
    alert("If you are Level 5 or greater you must fight the Plutonium Dragon!  Your combat strength must match Level " + creatureLevel + ".  Because you don't match Level " + creatureLevel + ", the Dragon roasts and eats you.");
  };
};


