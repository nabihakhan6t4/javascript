/*1. Declare and initialize an empty multidimensional array.
(Array of arrays)*/

let multidimensionalArray = [];

multidimensionalArray.push([1, 2, 3]);
multidimensionalArray.push(["a", "b", "c"]);
multidimensionalArray.push([true, false]);

console.log(multidimensionalArray);

/*2. Declare and initialize a multidimensional array
representing the following matrix:*/

let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

console.log(matrix);

/*3. Write a program to print numeric counting from 1 to 10.*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
/*4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.*/
function printMultiplicationTable() {
  let number = parseInt(prompt("Enter a number:"));
  let length = parseInt(prompt("Enter the length of the table:"));

  if (isNaN(number) || isNaN(length) || number <= 0 || length <= 0) {
    alert("Please enter valid positive integers for number and length.");
    return;
  }

  console.log(`Multiplication Table of ${number}`);
  console.log("------------------------");

  for (let i = 1; i <= length; i++) {
    let product = number * i;
    console.log(`${number} * ${i} = ${product}`);
  }
}

printMultiplicationTable();
/*5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]*/
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
/*6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/
// a. Counting: 1 to 15
let counting = [];
for (let i = 1; i <= 15; i++) {
  counting.push(i);
}
console.log("Counting:", counting.join(", "));

// b. Reverse counting: 10 to 1
let reverseCounting = [];
for (let i = 10; i >= 1; i--) {
  reverseCounting.push(i);
}
console.log("Reverse counting:", reverseCounting.join(", "));

// c. Even numbers: 0 to 20 (even numbers)
let evenNumbers = [];
for (let i = 0; i <= 20; i += 2) {
  evenNumbers.push(i);
}
console.log("Even:", evenNumbers.join(", "));

// d. Odd numbers: 1 to 19 (odd numbers)
let oddNumbers = [];
for (let i = 1; i <= 19; i += 2) {
  oddNumbers.push(i);
}
console.log("Odd:", oddNumbers.join(", "));

// e. Series: 2k to 20k (multiples of 2)
let series = [];
for (let i = 1; i <= 10; i++) {
  series.push(2 * i + "k");
}
console.log("Series:", series.join(", "));
/*7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:*/
// Define the array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(item) {
  // Convert input to lowercase for case-insensitive search
  item = item.toLowerCase();

  // Check if the item exists in the array
  let found = A.includes(item);

  // Return the result of the search
  return found;
}

// Function to handle user input and search
function searchByUserInput() {
  // Prompt user for input
  let userInput = prompt(
    "Welcome to our bakery! What do you want to order today?"
  );

  // Perform search using the searchItem function
  let isFound = searchItem(userInput.toLowerCase());

  // Display result based on whether item is found
  if (isFound) {
    alert(`Yes, we have ${userInput} available at our bakery.`);
  } else {
    alert(`Sorry, we do not have ${userInput} at our bakery.`);
  }
}

// Call the function to initiate the search
searchByUserInput();
/*9. Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]*/
// Define the array
var A = [24, 53, 78, 91, 12];

// Function to find the smallest number in the array
function findSmallestNumber(arr) {
  // Initialize a variable to store the smallest number
  let smallest = arr[0]; // Assume the first element is the smallest

  // Iterate through the array to find the smallest number
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  // Return the smallest number found
  return smallest;
}

// Call the function to find the smallest number in array A
let smallestNumber = findSmallestNumber(A);

// Output the result
console.log(`The smallest number in the array is: ${smallestNumber}`);
/*10. Write a program to print multiples of 5 ranging 1 to
100.*/
// Write a program to print multiples of 5 ranging from 1 to 100

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
