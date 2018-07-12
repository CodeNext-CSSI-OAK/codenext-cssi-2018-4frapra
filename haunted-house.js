// Author: FirstName LastName
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Francisco Prado");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like crying coming from inside the house.");
var enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  // your code here
  console.log("You enter the house.");
  console.log("As you are in the hall, you feel something on you neck");
  let checkNeck = readline.question("Slap your neck? (yes or no) ");
  if(checkNeck == "y" || checkNeck == "yes") {
    console.log("You slap your neck as if there was a mosquito trying to suck you blood.");
    console.log("Later you see in you hand is a squashed trantula the size of your hand.");
    console.log("You keep moving. At the end of the hall you see a door.");
    let openDoor = readline.question("Do you open the door? (yes or no) ")
    if(openDoor == "y" || openDoor == "yes") {
      console.log("You open the door and you feel the coldness running through your spine.");
      console.log("Then you see a a woman in the dark sitting on the chair");
      console.log("She seems to be crying.");
      let theCryingLady = readline.question("What do you do: \nA. Run towards the front of the house to escape \nB. Try to comfort the woman \nC. Stay silent \nD.Grab a piece of wood \n");
      if(theCryingLady == "a" || theCryingLady == "A") {
        console.log("You break for it!");
        console.log("You run as fast as you can towards the door.");
        console.log("As you are next to the door you see that there is no doorknob on the door.");
        console.log("You here the crying behind you louder.");
        console.log("You turn around and to the woman as the woman rips through your chest towards your heart and pulls it out.");
        console.log("You died");
      } else if(theCryingLady == "b" || theCryingLady == "B") {
        console.log("You walk towards the woman as she is still crying.");
        console.log("You ask if she is ok.");
        console.log("After a while of talking she is finally better and welcomes you anytime in her house.");
        console.log("You walk back to your house as you say that she in a very nice person");
      } else if(theCryingLady == "c" || theCryingLady == "C") {
        console.log("You stayed silent.");
        console.log("The woman stops crying and stands up looking at you.");
        console.log("You don't know what to do so you don't do anything");
        console.log("As you stared at her and her staring back, you startd to feel dizzy and fainted on the floor.");
        console.log("You wake up and at your house.");
        console.log("Thinking it was a dream you see a letter on your bed.");
        console.log("'Thanks for not being loud or scared.'-From: your new neighbor.:)");
      } else {
        console.log("You grab a piece of old wood as she starts standing up.");
        console.log("She looks at you and starts running toward you.");
        console.log("You stab the woman in the stomach and starts to bleed out.");
        console.log("You tried to stop the bleeding but she died.");
        console.log("The cops then came and arrested you.");
        console.log("Turns out that she was missing for three days.");
        console.log("You are convicted with second degree murder and with a sentence of 20 years.");
      }
    } else {
      console.log("You decide not to open the door.");
      console.log("As you are leaving you see a painting of a man looking right at you.");
      console.log("Then when you started to walk again you looked at the painting again, but see that the man is gone.");
      console.log("You look in front of the door and see a man filled with paint.");
      console.log("You try to make a run for it but before you can act, he already sliced your neck with a knife.");
      console.log("You died.");
    }

  } else {
    console.log("You ignore the feeling and keep going.");
    console.log("After a short distance you feel a sting on your neck.");
    console.log("Your feet start to tremble as you fall to the floor.");
    console.log("last thing you see is a woman holding the trantula.");
    console.log("You died.");
  }

} else {
  // your code here
console.log("You decide not to enter the house and start walking back to your house curiuosly thinking what would have happened if you did.");
}
console.log("Thanks for playing!");
