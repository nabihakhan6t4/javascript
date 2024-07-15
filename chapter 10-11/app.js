// USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user.
// If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = "karachi";
var cityname = prompt("enter your city name ");
if (city === cityname) {
  alert("welcome to the city of lights");
}

// 2. Write a program to take “gender” as input from user.
// If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.
var sir = "male";
var madam = "female";
var gender = prompt("enter your gender please");
if (gender === sir) {
  alert("hello sir! good morning");
} else if (gender === madam) {
  alert("hello mam! good morning");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Signal color      Message
// Red               Must Stop
// Yellow            Ready to move
// Green             Move now
var trafficSignal = prompt("Enter the color of road traffic signal:");
if (trafficSignal == "red") {
  alert("Must Stop");
} else if (trafficSignal == "yellow") {
  alert("Ready to move");
} else if (trafficSignal == "green") {
  alert("Move now");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user.
// If the current fuel is less than 0.25 litres, show the message “Please refill the fuel in your car”
var userCarFuel = prompt("enter your car fuel");
if (userCarFuel <= 0.25) {
  alert("Please refill the fuel in your car");
}

/* 5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

e. if (true){
alert("True");
}
if (false){
alert("False");
}

f. if("car" < "cat"){
alert("car is smaller than cat");
} */

// Part 5: Checking conditions and displaying alerts based on various scenarios
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

/* 6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:
Percentage Grade Remarks
>= 80        A       Excellent
>= 60        B       Good
>= 40        C       Pass
< 40         Fail    Sorry, you failed.
Show the total marks, marks obtained, percentage, grade & remarks */

var subject1 = prompt("Enter marks obtained in Subject 1:");
var subject2 = prompt("Enter marks obtained in Subject 2:");
var subject3 = prompt("Enter marks obtained in Subject 3:");
var totalMarks = prompt("Enter total marks for each subject:");

subject1 = Number(subject1);
subject2 = Number(subject2);
subject3 = Number(subject3);
totalMarks = Number(totalMarks);

var totalObtainedMarks = subject1 + subject2 + subject3;

var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

var grade, remarks;

if (percentage >= 80) {
  grade = "A";
  remarks = "Excellent";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "Good";
} else if (percentage >= 40) {
  grade = "C";
  remarks = "Pass";
} else {
  grade = "Fail";
  remarks = "Sorry, you failed.";
}

document.write("<h2>Mark Sheet</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Marks Obtained</th></tr>");
document.write("<tr><td>Subject 1</td><td>" + subject1 + "</td></tr>");
document.write("<tr><td>Subject 2</td><td>" + subject2 + "</td></tr>");
document.write("<tr><td>Subject 3</td><td>" + subject3 + "</td></tr>");
document.write("<tr><th>Total Marks</th><td>" + 3 * totalMarks + "</td></tr>");
document.write(
  "<tr><th>Marks Obtained</th><td>" + totalObtainedMarks + "</td></tr>"
);
document.write(
  "<tr><th>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>"
);
document.write("<tr><th>Grade</th><td>" + grade + "</td></tr>");
document.write("<tr><th>Remarks</th><td>" + remarks + "</td></tr>");
document.write("</table>");

/* 7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”. */

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = prompt("Guess the secret number (between 1 and 10):");

userGuess = Number(userGuess);

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
  alert("Close enough to the correct answer.");
} else {
  alert("Sorry, incorrect guess. The correct number was " + secretNumber + ".");
}

/* 8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3. */

var number = prompt("Enter a number:");

if (number % 3 === 0) {
  alert(number + " is divisible by 3.");
} else {
  alert(number + " is not divisible by 3.");
}

/* 9. Write a program that checks whether the given input is an
even number or an odd number. */

var number = prompt("Enter a number:");

number = +number;

if (number % 2 === 0) {
  alert(number + " is an even number.");
} else {
  alert(number + " is an odd number.");
}

/* 10. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */

var temperature = prompt("Enter the temperature:");

temperature = +temperature;

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("The temperature is very low.");
}

/* 11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/

var num1 = prompt("Enter the first number:");
num1 = +num1;

var num2 = prompt("Enter the second number:");
num2 = +num2;

var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 === 0) {
    result = "Division by zero is not allowed.";
  } else {
    result = num1 / num2;
  }
} else if (operation === "%") {
  result = num1 % num2;
} else {
  result = "Invalid operation entered.";
}

alert("Result: " + result);
