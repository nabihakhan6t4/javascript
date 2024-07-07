// ARRAYS

/*1. Declare an empty array using JS literal notation to store
student names in future.*/

let studentNames = [];
studentNames.push("nabiha");
studentNames.push("khan");
studentNames.push("kirat");
console.log(studentNames);

/* 2. Declare an empty array using JS object notation to store
 student names in future.*/

let studentNamesObject = { names: [] };
studentNames.push("nabiha");
studentNames.push("khan");
studentNames.push("kirat");
console.log(studentNames);

/*3. Declare and initialize a strings array.*/

let fruits = ["apple", "banana", "orange"];

/*4. Declare and initialize a numbers array.*/

let numbers = [10, 20, 3.14, -5];

/*5. Declare and initialize a boolean array.*/

let booleanArray = [true, false, true, true, false];

/*6. Declare and initialize a mixed array.*/

let mixedArray = [
  "apple",
  3,
  true,
  ["orange", "banana"],
  { name: "John", age: 25 },
];

/*7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications*/

let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phil.",
  "PhD",
];

console.log("Available Qualifications:");
for (let i = 0; i < qualifications.length; i++) {
  console.log(qualifications[i]);
}

/*8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:*/

let johnScore = 230;
let tonyScore = 480;
let michaelScore = 320;
let totalMarks = 500;

let johnPercentage = (johnScore / totalMarks) * 100;
let tonyPercentage = (tonyScore / totalMarks) * 100;
let michaelPercentage = (michaelScore / totalMarks) * 100;

console.log(`Score of John is ${johnScore}. Percentage: ${johnPercentage}%`);
console.log(`Score of Tony is ${tonyScore}. Percentage: ${tonyPercentage}%`);
console.log(
  `Score of Michael is ${michaelScore}. Percentage: ${michaelPercentage}%`
);

/*9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/

let colors = ["Red", "Green", "Blue"];

console.log("Initial Array:", colors);

let colorToAddAtStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtStart);
console.log("After adding color at the beginning:", colors);

let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
console.log("After adding color at the end:", colors);

colors.unshift("Purple", "Yellow");
console.log("After adding two more colors at the beginning:", colors);

colors.shift();
console.log("After deleting the first color:", colors);

colors.pop();
console.log("After deleting the last color:", colors);

let indexToAdd = prompt("Enter the index where you want to add a color:");
let colorToAddAtIndex = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
console.log("After adding color at index:", colors);

let indexToDelete = prompt(
  "Enter the index from where you want to delete color(s):"
);
let numberOfColorsToDelete = prompt(
  "Enter how many colors you want to delete:"
);
colors.splice(indexToDelete, numberOfColorsToDelete);
console.log("After deleting colors from index:", colors);
/*10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.*/

let studentScores = [320, 230, 480, 120];

studentScores.sort(function (a, b) {
  return a - b;
});

console.log("Ordered scores of students:", studentScores);

/*11. Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.*/

let cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];

let selectedCities = cities.slice(2, 4);

console.log("cities list:");
console.log(cities.join(","));
console.log("selected cities list:");
console.log(selectedCities.join(","));

/*12. Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)*/

var arr = ["This ", " is ", " my ", " cat"];
var resultString = arr.join("");
console.log(resultString);

/*13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)*/

var queue = [];

queue.push("First");
queue.push("Second");
queue.push("Third");

var firstElement = queue.shift();
var secondElement = queue.shift();
var thirdElement = queue.shift();

console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);

/*14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-
First Out)*/

var stack = [];

stack.push("First");
stack.push("Second");
stack.push("Third");

var lastElement = stack.pop();
var secondLastElement = stack.pop();
var thirdLastElement = stack.pop();

console.log(lastElement);
console.log(secondLastElement);
console.log(thirdLastElement);

/*15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method:*/

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
  document.write(
    "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>"
  );
}

document.write("</select>");
