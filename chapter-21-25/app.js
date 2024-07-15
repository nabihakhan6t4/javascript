// STRING METHODS
/* 1. Write a program that takes two user inputs for first and
   last name using prompt and merge them in a new variable
   titled fullName. Greet the user using his full name. */

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");

console.log("Hello, " + fullName + "! Welcome!");

/* 2. Write a program to take a user input about his favorite
      mobile phone model. Find and display the length of user
      input in your browser */
let favoriteModel = prompt("What is your favorite mobile phone model?");

let lengthOfInput = favoriteModel.length;

document.write(
  `<p>The length of your favorite mobile phone model (${favoriteModel}) is ${lengthOfInput} characters.</p>`
);

/* 3. Write a program to find the index of letter “n” in the word
      “Pakistani” and display the result in your browser. */
var word = "Pakistani";

let index = word.indexOf("n");

document.write(
  `<p>The index of letter "n" in the word "${word}" is ${index}.</p>`
);

/* 4. Write a program to find the last index of letter “l” in the
      word “Hello World” and display the result in your browser. */
let phrase = "Hello World";

let lastIndex = phrase.lastIndexOf("l");

document.write(
  `<p>The last index of letter "l" in the phrase "${phrase}" is ${lastIndex}.</p>`
);

/* 5. Write a program to find the character at 3rd index in the
      word “Pakistani” and display the result in your browser. */
var word = "Pakistani";

let character = word[3];

document.write(
  `<p>The character at the 3rd index in the word "${word}" is "${character}".</p>`
);

/* 6. Repeat Q1 using string concat() method. */
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "! Welcome!");

console.log("Hello, " + fullName + "! Welcome!");

/* 7. Write a program to replace the “Hyder” to “Islam” in the
      word “Hyderabad” and display the result in your browser. */
let originalWord = "Hyderabad";

let modifiedWord = originalWord.replace("Hyder", "Islam");

document.write(`<p>Original Word: ${originalWord}</p>`);
document.write(`<p>Modified Word: ${modifiedWord}</p>`);

/* 8. Write a program to replace all occurrences of “and” in the
      string with “&” and display the result in your browser.
      var message = “Ali and Sami are best friends. They play cricket and
      football together.”; */
let message =
  "Ali and Sami are best friends. They play cricket and football together.";

let modifiedMessage = message.replace(/and/g, "&");

document.write(`<p>Original Message: ${message}</p>`);
document.write(`<p>Modified Message: ${modifiedMessage}</p>`);

/* 9. Write a program that converts a string “472” to a number
      472. Display the values & types in your browser. */
let str = "472";

var num = parseInt(str);

document.write(`<p>String Value: ${str}, Type: ${typeof str}</p>`);
document.write(`<p>Number Value: ${num}, Type: ${typeof num}</p>`);

/* 10. Write a program that takes user input. Convert and
      show the input in capital letters. */
var userInput = prompt("Enter some text:");

let upperCaseInput = userInput.toUpperCase();

document.write(`<p>Original Input: ${userInput}</p>`);
document.write(`<p>Converted to Uppercase: ${upperCaseInput}</p>`);

/* 11. Write a program that takes user input. Convert and
      show the input in title case. */
// Function to convert string to title case
function toTitleCase(str) {
  // Split the string into an array of words
  let words = str.split(" ");

  // Iterate through the array of words
  for (let i = 0; i < words.length; i++) {
    // Convert the first character of each word to uppercase and concatenate with the rest of the word
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  // Join the words back into a single string and return
  return words.join(" ");
}

// Example usage:
var userInput = prompt("Enter some text:");
let titleCaseInput = toTitleCase(userInput);

// Display the converted input in the browser
document.write(`<p>Original Input: ${userInput}</p>`);
document.write(`<p>Converted to Title Case: ${titleCaseInput}</p>`);

/* 12. Write a program that converts the variable num to
      string.
      var num = 35.36 ;
      Remove the dot to display “3536” display in your browser. */
var num = 35.36;

let numString = num.toString().replace(".", "");

document.write(`<p>Original Number: ${num}</p>`);
document.write(`<p>Converted String: ${numString}</p>`);

/* 13. Write a program to take user input and store username
      in a variable. If the username contains any special symbol
      among [@ . , !], prompt the user to enter a valid username.
      For character codes of [@ .
   
      Note:
      ASCII code of ! is 33
      ASCII code of , is 44
      ASCII code of . is 46
      ASCII code of @ is 64 */

function isValidUsername(username) {
  for (let i = 0; i < username.length; i++) {
    let charCode = username.charCodeAt(i);

    if (
      charCode === 64 ||
      charCode === 46 ||
      charCode === 44 ||
      charCode === 33
    ) {
      return false;
    }
  }
  return true;
}

function promptForUsername() {
  let username = prompt("Enter your username:");

  if (!isValidUsername(username)) {
    alert(
      "Invalid username. Please enter a valid username without @, ., ,, or !"
    );
    promptForUsername();
  } else {
    alert(`Welcome, ${username}! Username is valid.`);
  }
}

promptForUsername();

/* 14. You have an array
      A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
      Write a program to enable “search by user input” in an
      array. After searching, prompt the user whether the given
      item is found in the list or not.
   
      Note: Perform case insensitive search. Whether the user
      enters cookie, Cookie, COOKIE or coOkIE, program
      should inform about its availability. Example: */

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem(item) {
  item = item.toLowerCase();
  for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === item) {
      return true;
    }
  }
  return false;
}

function searchByUserInput() {
  let userInput = prompt("Welcome! What do you want to search for today?");

  let isFound = searchItem(userInput.toLowerCase());

  if (isFound) {
    alert(`Yes, "${userInput}" is available in our list.`);
  } else {
    alert(`Sorry, "${userInput}" is not found in our list.`);
  }
}

searchByUserInput();

/* 15. Write a program to take password as an input from
      user. The password must qualify these requirements:
      a. It should contain alphabets and numbers
      b. It should not start with a number
      c. It must at least 6 characters long
   
      If the password does not meet above requirements,
      prompt the user to enter a valid password.
   
      For character codes of a-z, A-Z & 0-9, refer to ASCII
      table at the end of this document. */

function isValidPassword(password) {
  if (password.length < 6) {
    return false;
  }

  let firstCharCode = password.charCodeAt(0);
  if (firstCharCode >= 48 && firstCharCode <= 57) {
    return false;
  }

  let hasAlphabet = false;
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    let charCode = password.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      hasAlphabet = true;
    } else if (charCode >= 48 && charCode <= 57) {
      hasNumber = true;
    }
    if (hasAlphabet && hasNumber) {
      return true;
    }
  }

  return false;
}

function promptForPassword() {
  let password = prompt("Enter your password:");

  if (!isValidPassword(password)) {
    alert(
      "Invalid password. Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long."
    );
    promptForPassword();
  } else {
    alert("Password accepted!");
  }
}

promptForPassword();

/* 16. Write a program to convert the following string to an
      array using string split method.
      var university = “University of Karachi”;
      Display the elements of array in your browser. */

var university = "University of Karachi";

var universityArray = university.split(" ");

console.log("Array elements:");
for (var i = 0; i < universityArray.length; i++) {
  console.log(universityArray[i]);
}

/* 17. Write a program to display the last character of a user
      input. */

let userInput = prompt("Enter a string:");

if (userInput !== null && userInput !== "") {
  let lastChar = userInput[userInput.length - 1];

  alert(`The last character of '${userInput}' is '${lastChar}'.`);
} else {
  alert("Invalid input. Please enter a valid string.");
}

/*18. You have a string “The quick brown fox jumps over the
      lazy dog”. Write a program to count number of
      occurrences of word “the” in given string. */

let sentence = "The quick brown fox jumps over the lazy dog";

let lowerCaseSentence = sentence.toLowerCase();

let wordToSearch = "the";

let count = 0;

let words = lowerCaseSentence.split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i] === wordToSearch) {
    count++;
  }
}

console.log(
  `The word "${wordToSearch}" appears ${count} times in the sentence.`
);
