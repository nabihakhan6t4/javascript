/*1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.*/

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");

console.log("Hello, " + fullName + "! Welcome!");
/*2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser*/

let favoriteModel = prompt("What is your favorite mobile phone model?");

let lengthOfInput = favoriteModel.length;

document.write(
  `<p>The length of your favorite mobile phone model (${favoriteModel}) is ${lengthOfInput} characters.</p>`
);
/*3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .*/

var word = "Pakistani";

let index = word.indexOf("n");

document.write(
  `<p>The index of letter "n" in the word "${word}" is ${index}.</p>`
);
/*4. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser.*/

let phrase = "Hello World";

let lastIndex = phrase.lastIndexOf("l");

document.write(
  `<p>The last index of letter "l" in the phrase "${phrase}" is ${lastIndex}.</p>`
);
/*5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.*/

var word = "Pakistani";

let character = word[3];

document.write(
  `<p>The character at the 3rd index in the word "${word}" is "${character}".</p>`
);
/*6. Repeat Q1 using string concat() method.*/

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "! Welcome!");

console.log("Hello, " + fullName + "! Welcome!");
