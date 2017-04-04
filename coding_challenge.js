
// Stringy Function: Function that took in an int and checked to see if value given was >= 1. If true, loop through counting down from the value of numSize. Push numSize - 1 (next number down) to newArray until var i = 0.
var numSize;
var numArray = []
function myArray(numSize) {
 if ( numSize >= 1) {
   for (var i = numSize; i > 0; i--) {
     numArray.push(numSize)
     numSize = numSize - 1;
    }
   i--;
  //  In the case that the number entered was 0
 }else{
   console.log(0);
 }
}
// Function that took in numArray and looped through and set odd to 0 and even to 1.
function stringy(numArray){
  for ( var i = 0; i <= numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      numArray[i] = 1;
    }else if (numArray[i] % 2 == 1) {
      numArray[i] = 0;
    }
  }
}
myArray(7);
stringy(numArray)
console.log(numArray.join(""))
//////////////////////////////////////////////////////

// Reverse an integer: Set my numList to an int.  Converted that int to a str. Split the int into an array.

var numList = 123456;
var numString = numList.toString();
var newArray = [];
var firstArray = [];
firstArray = numString.split("");

// Looped from the end of my first array and push to a new array.
for ( i = firstArray.length - 1; i >= 0; i--) {
   newArray.push(firstArray[i]);
}
console.log(newArray);
//////////////////////////////////////////////////////

//Fibonacci sequence:
// 0 + 1 = 1 1 + 1 = 2 1 + 2 = 3 2 + 3 = 5 3 + 5 = 8 …
// While i is < 10 + the previous two numbers of array to = next number in array.
var fibArray = [0,1];
for( var i = 0; i < 10; i++) {
fibArray[i + 2] = fibArray[i] + fibArray[i+1];
}
console.log(fibArray);
