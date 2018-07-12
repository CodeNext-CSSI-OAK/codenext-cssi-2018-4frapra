//Author: Francisco Prado
//function makeSandwich() {
//  console.log("This is my function.");
//}

//makeSandwich();
/////////////////////////////////////////////////////////////////////////

function subtract(num1, num2) {
  console.log(num1 -num2);

  return num1 - num2;
}

//let result = subtract(6, 4);
//console.log("The result is: " + result);

//the line down is simplified from the two lines on top
// console.log("The result is " + subtract(6, 4));

 console.log("The result is " + subtract(6, subtract(100, 99)));
 ////////////////////////////////////////////////////////////////////////

function absoluteDifference(num1, num2) {
  if (num2 > num1) {
    return num2-num1;
  }
  return num1 - num2;
}

console.log(absoluteDifference(6,4));
console.log(absoluteDifference(4,6));
