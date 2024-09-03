// 1. Display Current Date and Time
function displayDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  document.getElementById("dateTime").innerText = dateTimeString;
}

// Call displayDateTime when the page loads
window.onload = displayDateTime;

// 2. Greet User
function greetUser() {
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const fullName = `${firstName} ${lastName}`;
  const greeting = `Hello, ${fullName}! Welcome!`;
  document.getElementById("greetingMessage").innerText = greeting;
}

// 3. Add Two Numbers
function addTwoNumbers() {
  const number1 = parseFloat(prompt("Enter the first number:"));
  const number2 = parseFloat(prompt("Enter the second number:"));
  if (isNaN(number1) || isNaN(number2)) {
    alert("Please enter valid numbers.");
    return;
  }
  const sum = number1 + number2;
  document.getElementById(
    "sumResult"
  ).innerText = `The sum of ${number1} and ${number2} is: ${sum}`;
}

// 4. Simple Calculator
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error: Division by zero is not allowed!";
      }
      break;
    default:
      result = "Invalid operator!";
  }
  document.getElementById("calculatorResult").innerText = `Result: ${result}`;
}

// 5. Square a Number
function squareNumber(num) {
  return num * num;
}

function displaySquare() {
  const input = document.getElementById("squareInput").value;
  const number = parseFloat(input);
  if (!isNaN(number)) {
    const result = squareNumber(number);
    document.getElementById(
      "squareResult"
    ).innerText = `The square of ${number} is ${result}.`;
  } else {
    document.getElementById("squareResult").innerText =
      "Please enter a valid number.";
  }
}

// 6. Calculate Factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function calculateFactorial() {
  const input = document.getElementById("factorialInput").value;
  const number = parseInt(input, 10);
  if (isNaN(number) || number < 0) {
    document.getElementById("factorialResult").innerText =
      "Please enter a valid non-negative number.";
  } else {
    const result = factorial(number);
    document.getElementById(
      "factorialResult"
    ).innerText = `The factorial of ${number} is ${result}.`;
  }
}

// 7. Display Counting Sequence
function displayCounting() {
  const start = parseInt(document.getElementById("startNumber").value, 10);
  const end = parseInt(document.getElementById("endNumber").value, 10);
  if (isNaN(start) || isNaN(end)) {
    document.getElementById("countingResult").innerText =
      "Please enter valid numbers.";
    return;
  }
  if (start > end) {
    document.getElementById("countingResult").innerText =
      "Start number must be less than or equal to end number.";
    return;
  }
  let countingSequence = "";
  for (let i = start; i <= end; i++) {
    countingSequence += i + " ";
  }
  document.getElementById(
    "countingResult"
  ).innerText = `Counting from ${start} to ${end}: ${countingSequence.trim()}`;
}

// 8. Calculate Hypotenuse
function calculateHypotenuse() {
  const base = parseFloat(document.getElementById("base").value);
  const perpendicular = parseFloat(
    document.getElementById("perpendicular").value
  );

  if (isNaN(base) || isNaN(perpendicular) || base <= 0 || perpendicular <= 0) {
    document.getElementById("hypotenuseResult").innerText =
      "Please enter valid positive numbers for base and perpendicular.";
    return;
  }

  function calculateSquare(x) {
    return x * x;
  }

  const baseSquare = calculateSquare(base);
  const perpendicularSquare = calculateSquare(perpendicular);
  const hypotenuseSquare = baseSquare + perpendicularSquare;
  const hypotenuse = Math.sqrt(hypotenuseSquare);

  document.getElementById(
    "hypotenuseResult"
  ).innerText = `The hypotenuse is ${hypotenuse.toFixed(2)}.`;
}

// 9. Calculate Rectangle Area
function calculateArea(width, height) {
  return width * height;
}

function displayArea() {
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);
  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    document.getElementById("areaResult").innerText =
      "Please enter valid positive numbers for width and height.";
    return;
  }
  const area = calculateArea(width, height);
  document.getElementById(
    "areaResult"
  ).innerText = `The area of the rectangle with width ${width} and height ${height} is ${area}.`;
}

// 10. Check Palindrome
function isPalindrome(str) {
  const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = normalizedStr.split("").reverse().join("");
  return normalizedStr === reversedStr;
}

function checkPalindrome() {
  const input = document.getElementById("inputString").value;
  const result = isPalindrome(input);
  document.getElementById("palindromeResult").innerText = result
    ? `"${input}" is a palindrome.`
    : `"${input}" is not a palindrome.`;
}

// 11. Capitalize First Letters
function capitalizeFirstLetter(sentence) {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
  });
  return capitalizedWords.join(" ");
}

function capitalizeSentence() {
  const sentence = document.getElementById("inputSentence").value;
  const result = capitalizeFirstLetter(sentence);
  document.getElementById("outputSentence").innerText = result;
}

// 12. Find the Longest Word
function findLongestWord() {
  const input = document.getElementById("longestWordInput").value;
  const words = input.split(" ");

  if (words.length === 0) {
    document.getElementById("longestWordResult").innerText =
      "Please enter a sentence.";
    return;
  }

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  document.getElementById(
    "longestWordResult"
  ).innerText = `The longest word is: "${longestWord}".`;
}

// 13. Count Letter Occurrences
function countLetterOccurrences() {
  var str = document.getElementById("letterCountString").value;
  var letter = document.getElementById("letterCountLetter").value;

  // Check if the letter input is a single character
  if (letter.length !== 1) {
    document.getElementById("letterCountResult").innerText =
      "Please enter exactly one letter.";
    return;
  }

  var count = 0;

  // Loop through the string and count occurrences of the letter
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }

  document.getElementById("letterCountResult").innerText =
    'The letter "' + letter + '" occurs ' + count + " times.";
}

// 14. The Geometrizer

// Function to calculate circumference of a circle
function calcCircumference() {
  var radius = parseFloat(document.getElementById("circleRadius").value);

  // Check if the radius is a valid number
  if (isNaN(radius) || radius <= 0) {
    document.getElementById("circumferenceResult").innerText =
      "Please enter a valid positive number for the radius.";
    return;
  }

  var circumference = 2 * Math.PI * radius;
  document.getElementById("circumferenceResult").innerText =
    "The circumference is " + circumference.toFixed(2) + ".";
}

// Function to calculate area of a circle
function calcArea() {
  var radius = parseFloat(document.getElementById("circleRadius").value);

  // Check if the radius is a valid number
  if (isNaN(radius) || radius <= 0) {
    document.getElementById("areaResult").innerText =
      "Please enter a valid positive number for the radius.";
    return;
  }

  var area = Math.PI * Math.pow(radius, 2);
  document.getElementById("areaResult").innerText =
    "The area is " + area.toFixed(2) + ".";
}
