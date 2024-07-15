// MATH METHODS

/* 1. Write a program that takes a positive integer from user &
   display the following in your browser.
   a. number
   b. round off value of the number
   c. floor value of the number
   d. ceil value of the number */
function displayNumberValues() {
  // Prompt user for input
  let userInput = prompt("Enter a positive integer:");

  // Convert input to a number
  let number = parseInt(userInput);

  // Validate input
  if (isNaN(number) || number <= 0) {
    alert("Invalid input! Please enter a positive integer.");
    return;
  }

  // Calculate values
  let roundOff = Math.round(number);
  let floorValue = Math.floor(number);
  let ceilValue = Math.ceil(number);

  // Display values in the console
  console.log("Number: " + number);
  console.log("Round off value: " + roundOff);
  console.log("Floor value: " + floorValue);
  console.log("Ceil value: " + ceilValue);
}

// Call the function to start the program
displayNumberValues();

/* 2. Write a program that takes a negative floating point
   number from user & display the following in your browser.
   a. number
   b. round off value of the number
   c. floor value of the number
   d. ceil value of the number */
function displayNegativeNumberValues() {
  // Prompt user for input
  let userInput = prompt("Enter a negative floating-point number:");

  // Convert input to a number
  let number = parseFloat(userInput);

  // Validate input
  if (isNaN(number) || number >= 0) {
    alert("Invalid input! Please enter a negative floating-point number.");
    return;
  }

  // Calculate values
  let roundOff = Math.round(number);
  let floorValue = Math.floor(number);
  let ceilValue = Math.ceil(number);

  // Display values in the browser
  document.write("<h2>Number: " + number + "</h2>");
  document.write("<h2>Round off value: " + roundOff + "</h2>");
  document.write("<h2>Floor value: " + floorValue + "</h2>");
  document.write("<h2>Ceil value: " + ceilValue + "</h2>");
}

// Call the function to start the program
displayNegativeNumberValues();

/* 3. Write a program that displays the absolute value of a
   number.
   E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */
function displayAbsoluteValue() {
  // Prompt user for input
  let userInput = prompt("Enter a number:");

  // Convert input to a number
  let number = parseFloat(userInput);

  // Check if input is valid
  if (isNaN(number)) {
    alert("Invalid input! Please enter a valid number.");
    return;
  }

  // Calculate absolute value
  let absoluteValue = Math.abs(number);

  // Display result in the browser
  document.write(
    "<h2>Absolute value of " + number + " is " + absoluteValue + "</h2>"
  );
}

// Call the function to start the program
displayAbsoluteValue();

/* 4. Write a program that simulates a dice using random()
   method of JS Math class. Display the value of dice in your
   browser. */
function rollDice() {
  // Generate a random number between 1 and 6 (for a standard dice)
  let diceValue = Math.floor(Math.random() * 6) + 1;

  // Display the result in the browser
  document.write("<h2>Rolling the dice... You rolled: " + diceValue + "</h2>");
}

// Call the function to simulate rolling a dice
rollDice();

/* 5. Write a program that simulates a coin toss using random()
   method of JS Math class. Display the value of coin in your
   browser */
function tossCoin() {
  // Generate a random number (0 or 1) to represent Heads or Tails
  let randomNumber = Math.random();
  let coinValue = randomNumber < 0.5 ? "Heads" : "Tails";

  // Display the result in the console
  console.log("Coin landed on: " + coinValue);
}

// Call the function to simulate a coin toss
tossCoin();

/* 6. Write a program that shows a random number between 1
   and 100 in your browser. */
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write(
  "<h2>Random number between 1 and 100: " + randomNumber + "</h2>"
);

/* 7. Write a program that asks the user about his weight. Parse
   the user input and display his weight in your browser.
   Possible user inputs can be:
   a. 50
   b. 50kgs
   c. 50.2kgs
   d. 50.2kilograms */
function displayWeight() {
  // Prompt user for input
  let userInput = prompt("Enter your weight:");

  // Extract numerical value from input using regular expression
  let weight = parseFloat(userInput.match(/\d+(\.\d+)?/));

  // Check if parsed weight is a valid number
  if (isNaN(weight)) {
    alert("Invalid input! Please enter a valid weight.");
    return;
  }

  // Display weight in the browser
  document.write("<h2>Your weight is: " + weight + " kgs</h2>");
}

// Call the function to start the program
displayWeight();

/* 8. Write a program that stores a random secret number from
   1 to 10 in a variable. Ask the user to input a number
   between 1 and 10. If the user input equals the secret
   number, congratulate the user. */
// Generate a random secret number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Function to handle user input and check against the secret number
function guessSecretNumber() {
  // Prompt user to enter a number between 1 and 10
  let userInput = prompt("Guess the secret number between 1 and 10:");

  // Convert input to a number
  let userGuess = parseInt(userInput);

  // Check if the input is a valid number between 1 and 10
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Invalid input! Please enter a number between 1 and 10.");
    return;
  }

  // Check if user's guess matches the secret number
  if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the secret number.");
  } else {
    alert("Wrong guess! Try again.");
  }
}

// Call the function to start the game
guessSecretNumber();
