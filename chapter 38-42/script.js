// Function to calculate a raised to the power of b
function power(a, b) {
  return Math.pow(a, b);
}

// Example usage of power function
console.log(power(2, 3)); // Output: 8
console.log(power(5, 4)); // Output: 625

// Function to determine if a year is a leap year or not
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Example usage of isLeapYear function
let year = 2024; // Change this year for testing
if (isLeapYear(year)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// Function to calculate the semi-perimeter (S) of a triangle
function calculateS(a, b, c) {
  return (a + b + c) / 2;
}

// Function to calculate the area of a triangle using Heron's formula
function calculateArea(a, b, c) {
  const S = calculateS(a, b, c); // Calculate semi-perimeter
  const area = Math.sqrt(S * (S - a) * (S - b) * (S - c)); // Heron's formula
  return area;
}

// Example usage of calculateArea function
let a = 5,
  b = 6,
  c = 7; // Change these sides for testing
console.log(
  "The area of the triangle with sides " +
    a +
    ", " +
    b +
    ", " +
    c +
    " is: " +
    calculateArea(a, b, c)
);

// Function to calculate the average of marks in 3 subjects
function calculateAverage(marks1, marks2, marks3) {
  return (marks1 + marks2 + marks3) / 3;
}

// Function to calculate the percentage of marks in 3 subjects
function calculatePercentage(marks1, marks2, marks3, totalMarks) {
  const obtainedMarks = marks1 + marks2 + marks3;
  return (obtainedMarks / totalMarks) * 100;
}

// Main function to calculate and display average and percentage
function mainFunction(marks1, marks2, marks3, totalMarks) {
  const average = calculateAverage(marks1, marks2, marks3);
  const percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);

  console.log("Average Marks: " + average.toFixed(2));
  console.log("Percentage: " + percentage.toFixed(2) + "%");
}

// Example usage of mainFunction
let marks1 = 75,
  marks2 = 85,
  marks3 = 90; // Change these marks for testing
let totalMarks = 300; // Total marks for 3 subjects
mainFunction(marks1, marks2, marks3, totalMarks);

// Custom function to find the index of a character in a string
function customIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    // Iterate over each character in the string
    if (str[i] === char) {
      // Check if the character matches
      return i; // Return the index if found
    }
  }
  return -1; // Return -1 if not found
}

// Example usage of customIndexOf function
let testString = "hello world";
let searchChar = "o";
let index = customIndexOf(testString, searchChar);
console.log(
  "The index of '" +
    searchChar +
    "' in the string '" +
    testString +
    "' is: " +
    index
);

// Function to remove all vowels from a sentence
function removeVowels(sentence) {
  // Define a regular expression to match all vowels (both lowercase and uppercase)
  const vowels = /[aeiouAEIOU]/g;

  // Replace all vowels with an empty string
  let result = sentence.replace(vowels, "");

  return result;
}

// Example usage of removeVowels function
let sentence = "This is a test sentence."; // Example sentence
let result = removeVowels(sentence);
console.log("Original Sentence: " + sentence);
console.log("Sentence without vowels: " + result);

// Another test case
sentence = "Hello World!";
result = removeVowels(sentence);
console.log("Original Sentence: " + sentence);
console.log("Sentence without vowels: " + result); // Output: "Hll Wrld!"

// Function to count occurrences of two successive vowels in a line of text
function countSuccessiveVowels(sentence) {
  let count = 0; // Initialize count for successive vowels
  let vowels = "aeiouAEIOU"; // Define vowels

  // Loop through the sentence to check for successive vowels
  for (let i = 0; i < sentence.length - 1; i++) {
    let currentChar = sentence[i]; // Current character
    let nextChar = sentence[i + 1]; // Next character

    // Check if both current and next characters are vowels
    if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
      count++; // Increment count if successive vowels are found
      console.log("Found successive vowels: " + currentChar + nextChar); // Log the found pair
    }
  }

  return count; // Return the count of successive vowels
}

// Example usage of countSuccessiveVowels function
let text = "Pleases read this application and give me gratuity"; // Example text
let successiveVowelCount = countSuccessiveVowels(text);
console.log(
  "Total number of occurrences of successive vowels: " + successiveVowelCount
);

// Function to convert distance from kilometers to meters
function convertToMeters(distanceInKm) {
  return distanceInKm * 1000; // 1 km = 1000 meters
}

// Function to convert distance from kilometers to feet
function convertToFeet(distanceInKm) {
  return distanceInKm * 3280.84; // 1 km = 3280.84 feet
}

// Function to convert distance from kilometers to inches
function convertToInches(distanceInKm) {
  return distanceInKm * 39370.1; // 1 km = 39370.1 inches
}

// Function to convert distance from kilometers to centimeters
function convertToCentimeters(distanceInKm) {
  return distanceInKm * 100000; // 1 km = 100000 centimeters
}

// Main function to input distance and convert it using other functions
function convertDistance(distanceInKm) {
  // Convert distance to different units
  let distanceInMeters = convertToMeters(distanceInKm);
  let distanceInFeet = convertToFeet(distanceInKm);
  let distanceInInches = convertToInches(distanceInKm);
  let distanceInCentimeters = convertToCentimeters(distanceInKm);

  // Print converted distances
  console.log("Distance in Meters: " + distanceInMeters.toFixed(2));
  console.log("Distance in Feet: " + distanceInFeet.toFixed(2));
  console.log("Distance in Inches: " + distanceInInches.toFixed(2));
  console.log("Distance in Centimeters: " + distanceInCentimeters.toFixed(2));
}

// Example usage of convertDistance function
let distanceInKm = 5; // Example distance in kilometers
convertDistance(distanceInKm);

// Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
  const regularHours = 40; // Regular working hours per week
  const overtimeRate = 12; // Overtime pay rate per hour in Rs.

  let overtimeHours =
    hoursWorked > regularHours ? hoursWorked - regularHours : 0; // Calculate overtime hours
  let overtimePay = overtimeHours * overtimeRate; // Calculate overtime pay

  return overtimePay;
}

// Example usage of calculateOvertimePay function
let hoursWorked = 50; // Example total hours worked
let overtimePay = calculateOvertimePay(hoursWorked);
console.log(
  "Overtime Pay for " +
    hoursWorked +
    " hours worked: Rs. " +
    overtimePay.toFixed(2)
);

// Function to calculate the number of currency notes needed for a given amount
function calculateCurrencyNotes(amount) {
  const noteDenominations = [100, 50, 10]; // Currency note denominations
  let notesCount = {}; // Object to store the count of each note denomination

  // Iterate through each denomination
  for (let denomination of noteDenominations) {
    if (amount >= denomination) {
      notesCount[denomination] = Math.floor(amount / denomination); // Calculate number of notes of this denomination
      amount %= denomination; // Update the remaining amount
    } else {
      notesCount[denomination] = 0; // No notes of this denomination
    }
  }

  return notesCount;
}

// Example usage of calculateCurrencyNotes function
let amountToWithdraw = 370; // Amount in hundreds (i.e., 37000 Rs.)
let notes = calculateCurrencyNotes(amountToWithdraw);
console.log("Currency Notes for " + amountToWithdraw + " Rs.:");
console.log("100 Rs. Notes: " + notes[100]);
console.log("50 Rs. Notes: " + notes[50]);
console.log("10 Rs. Notes: " + notes[10]);
