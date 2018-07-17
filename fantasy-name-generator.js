// Author: Francisco Prado
let readline = require("readline-sync");

console.log("")
// global variables
let firstName, lastName, momMaidenName, cityBorn, dreamCar, street, fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName() {
  return firstName.substring(0, 3) + lastName.substring(0, 2).toLowerCase();
}

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName() {
  return momMaidenName.substring(0, 2) + cityBorn.substring(0, 3).toLowerCase();
}

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle() {
  let thirdToLast = lastName.charAt(lastName.length - 3);
  let secondToLast = lastName.charAt(lastName.length - 2);
  let last = lastName.charAt(lastName.length - 1).toUpperCase();
  return last + secondToLast + thirdToLast + dreamCar.substring(0, dreamCar.length).toLowerCase();
}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific() {
  return getTitle() + " of " + street;
}

/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {
  firstName = readline.question("what is your first name: ");
  lastName = readline.question("what is your last name: ");
  momMaidenName = readline.question("what is your mom's maiden name: ");
  cityBorn = readline.question("which city were you born in: ");
  dreamCar = readline.question("what is or was your dream car: ");
  street = readline.question("enter the street you live in: ");
  console.log(getNewFirstName() + " " + getNewLastName() + " " + getHonorific());
}

// Run the program!
run();
