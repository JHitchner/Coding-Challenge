
// Stringy Function: Function that took in an int and checked to see if value given was >= 1. If true, loop through counting down from the value of numSize. Push numSize - 1 (next number down) to newArray until var i = 0.
var numSize;
var numArray = [];
function myArray(numSize) {
 if ( numSize >= 1) {
   for (var i = numSize; i > 0; i--) {
     numArray.push(numSize);
     numSize = numSize - 1;
   };
   i--;
  //  In the case that the number entered was 0
 }else{
   console.log(0);
 };
};
// Function that took in numArray and looped through and set odd to 0 and even to 1.
function stringy(numArray){
  for ( var i = 0; i <= numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      numArray[i] = 1;
    }else if (numArray[i] % 2 == 1) {
      numArray[i] = 0;
    };
  };
};
myArray(7);
stringy(numArray);
console.log(numArray.join(""));
//////////////////////////////////////////////////////

// Reverse an integer: Set my numList to an int.  Converted that int to a str. Split the int into an array.

// Looped from the end of my first array and push to a new array.Wrapped code in function.
function reverse(number) {
  var numList = number;
  var numString = numList.toString();
  var newArray = [];
  var firstArray = [];
  firstArray = numString.split("");
  for ( i = firstArray.length - 1; i >= 0; i--) {
    newArray.push(firstArray[i]);
  };
  console.log(newArray);
};
reverse(123456);
//////////////////////////////////////////////////////
//Fibonacci sequence:
// While i is < 10 + the previous two numbers of array to = next number in array. Wrapped code in function.
function fibSequence(num1, num2) {
  var fibArray = [];
  fibArray.push(num1, num2);
  for( var i = 0; i < 10; i++) {
    fibArray[i + 2] = fibArray[i] + fibArray[i+1];
  }
  console.log(fibArray);
}
fibSequence(2,3);
/////////////////////////////////////////////////////
// Expired Coupon: Created a hash that contained the numeric value for each month. Then depending on the values put in I compared the sum to the target sum. If it was greater alert "Coupon date is incorrect" and if it's less or equal alert "Coupon is accepted"


var months = {"January":1, "February": 2, "March": 3, "April": 4, "May":5, "June":6, "July": 7, "August":8 , "September": 9, "October": 10, "November": 11, "December": 12};

function checkCoupon(month, day, year) {
  var month_input = months[month];
  if(month_input+day+year <= months.June+14+2014) {
    alert("Your coupon has been accepted");
    console.log("true");
  }else if(month_input+day+year >= months.June+14+2014) {
    alert("Your coupon date is incorrect");
    console.log("false");
  };
};
checkCoupon("October", 14, 2014);
