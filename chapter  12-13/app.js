// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var userInput = prompt("Enter a character (number or letter):");
var code = userInput.charCodeAt(0);
if (code >= 48 && code <= 57) {
  alert(userInput + " is a number");
} else if (code >= 65 && code <= 90) {
  alert(userInput + "is a uppercase letter");
} else if (code >= 97 && code <= 122) {
  alert(userInput + " is a lowercase letter");
} else {
  alert(userInput + "this is not a number or letter");
}

/* 2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.*/

var num1 = prompt("Enter the first integer:");

var num2 = prompt("Enter the second integer:");

num1 = +num1;
num2 = +num2;

var largerNumber;
var message;

if (num1 > num2) {
  largerNumber = num1;
  message = "The larger number is: " + largerNumber;
} else if (num2 > num1) {
  largerNumber = num2;
  message = "The larger number is: " + largerNumber;
} else {
  message = "Both numbers are equal.";
}

alert(message);

/* 3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero.*/

var number = prompt("Enter a number:");

number = +number;

if (number > 0) {
  alert(number + " is a positive number.");
} else if (number < 0) {
  alert(number + " is a negative number.");
} else {
  alert("The number is zero.");
}
