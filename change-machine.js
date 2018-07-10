// Author: Francisco Prado

console.log("*************************************************");
console.log("*  Whats up!! I am the SUPER CHANGE MACHINE!!!  *");

let readline = require("readline-sync");

let cents = Number(readline.question("    Please enter cents as a positive integer: "));

let Quarters = Math.floor(cents / 25);
console.log("Quarters: " + Quarters);

cents = cents % 25;

let Dimes = Math.floor(cents / 10);
console.log("Dimes: " + Dimes);

cents = cents % 10;

let Nickels = Math.floor(cents / 5);
console.log("Nickels: " + Nickels);

cents = cents % 5;

let Pennies = Math.floor(cents / 1);
console.log("Pennies: " + Pennies);

cents = cents % 1;

console.log("Hope you hade a great experience here.");

readline.question("Please rate us from 0-10 on how good I was: ");
console.log("Thanks, I'll be sure to put it in my database.");
console.log("Goodbye.");
console.log("*************************************************");
