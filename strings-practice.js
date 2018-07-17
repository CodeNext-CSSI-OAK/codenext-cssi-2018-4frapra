//function makeAbba(a, b) {
  //return a + b + b + a;
//}
//console.log(makeAbba("Welcome", "agent"));

//function comboString(a, b) {
  //if (a.length > b.length) {
    //return b + a + b;

  //} else {
    //return a + b + a;
  //}
//}
//console.log(comboString("Hi", "Hello"));
//console.log(comboString("Hello", "Hi"));

function lastTwo(str) {
  if (str.length >= 2) {
  let lastChar = str.charAt(str.length - 1);
  let secondLastChar = str.charAt(str.length - 2);
  let firstPart = str.substring(0, str.length - 2);
  return firstPart + lastChar + secondLastChar;

    return "str.length";

    return "str";
  }
}
console.log(lastTwo("cssi"));
