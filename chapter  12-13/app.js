// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var userInput = prompt("Enter a character (number or letter):");
var code = userInput.charCodeAt(0);

if (code >= 48 && code <= 57) {
  alert(userInput + " is a number");
} else if (code >= 65 && code <= 90) {
  alert(userInput + " is an uppercase letter");
} else if (code >= 97 && code <= 122) {
  alert(userInput + " is a lowercase letter");
} else {
  alert(userInput + " is not a number or letter");
}

/* 2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.*/

var num1 = prompt("Enter the first integer:");
var num2 = prompt("Enter the second integer:");

num1 = +num1; // Convert to number
num2 = +num2; // Convert to number

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
number = +number; // Convert to number

if (number > 0) {
  alert(number + " is a positive number.");
} else if (number < 0) {
  alert(number + " is a negative number.");
} else {
  alert("The number is zero.");
}

/* 4. Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise*/

var character = prompt("Enter a character:");

if (character.length === 1) {
  character = character.toLowerCase(); // Convert to lowercase

  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
  ) {
    alert("True: The character '" + character + "' is a vowel.");
  } else {
    alert("False: The character '" + character + "' is not a vowel.");
  }
} else {
  alert("Please enter exactly one character.");
}

/* 5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.*/

var correctPassword = "SecretPassword123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
  alert("Please enter your password.");
} else {
  if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
  } else {
    alert("Incorrect password.");
  }
}

/* 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}*/
var greeting;
var hour = prompt("Enter your current hour (0-23)");

if (hour >= 0 && hour <= 23) {
  hour = +hour; // Convert to number
  if (hour < 18) {
    alert("Good day");
  } else {
    alert("Good evening");
  }
} else {
  alert("Invalid input. Please enter a valid hour between 0 and 23.");
}

/*7. Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements*/
// Taking input from the user (you can replace this with your input method)
let userInput = prompt(
  "Enter the time in 24-hour format (e.g., 1900 for 7pm):"
);
let time = userInput;

if (time >= "0000" && time < "1200") {
  console.log("Good morning!");
} else if (time >= "1200" && time < "1700") {
  console.log("Good afternoon!");
} else if (time >= "1700" && time < "2100") {
  console.log("Good evening!");
} else if (time >= "2100" && time <= "2359") {
  console.log("Good night!");
} else {
  console.log("Invalid time input.");
}
