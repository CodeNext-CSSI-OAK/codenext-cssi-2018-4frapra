let readline = require("readline-sync");
// let correctPassword = "prado";
// let input = "";
// let attempts = 2;
//
// while (input !== correctPassword && attempts >= 0) {
//   input = readline.question("Please enter the correct password: ");
//   attempts--;
// }
//
// if (input === correctPassword) {
//   console.log("ACCESS GRANTED");
// } else {
//   console.log("ACCESS DENIED");
// }
////////////////////////////////////////////////////////////////////////////////
// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   for(let i = 0; i < alphabet.length; i++) {
//     console.log(alphabet.charAt(i));
//   }
////////////////////////////////////////////////////////////////////////////////
// for(let count = 0; count <= 30; count++) {
//   console.log(count);
// }
////////////////////////////////////////////////////////////////////////////////
// let students ="MFAD";
// for(let i = 0; 1 < students.length; i++) {
//   console.log("Give " + students.charAt(i) + " a cookie.")
// }
// let i = 0;
// while(i < students.length) {
//   console.log("Give " + students.charAt(i) + " a cookie.")
//   i++;
// }
// let correctPassword = "hamzah";
//   for(let input = ""; correctPassword !== input;) {
//     input = readline.question("Please enter the correct password: ");
// }
////////////////////////////////////////////////////////////////////////////////
// function containsSpace(Str) {
//   for(let i = 0; i < Str.length; i++) {
//     if(Str.charAt(i) === " ") {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(containsSpace("Star wars"));
// console.log(containsSpace("Starwars"));
// console.log(containsSpace(""));
// console.log(containsSpace("     "));
////////////////////////////////////////////////////////////////////////////////
// function  countAs(str) {
//   let count =0
//   for(let i = 0; i < str.length; i++) {
//     if(str.charAt(i) === "a" || str.charAt(i) === "A") {
//       count++;
//     }
//   }
//   return count;
// }
//   console.log(countAs("Francisco"));
//   console.log(countAs("Prado"));
//   console.log(countAs("Cuevas"));
//   console.log(countAs("happy"));
//   console.log(countAs("lady gaga"));
//   console.log(countAs(""));
////////////////////////////////////////////////////////////////////////////////
function reverseString(str) {
  let reverse = "";
  for(let i = str.length - 1;i >= 0;i--) {
    reverse += str.charAt(i);
  }
  return reverse;
}
console.log(reverseString("Francisco"));
console.log(reverseString("Prado"));
console.log(reverseString("Cuevas"));
console.log(reverseString("happy"));
console.log(reverseString("lady Gaga"));
console.log(reverseString("god"));
console.log(reverseString("dog"));
