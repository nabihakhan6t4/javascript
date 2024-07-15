// MATH EXPRESSIONS

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = 10;
document.write(
  "<h1>result</h1> " +
    "<br>" +
    "the value of a is:" +
    a +
    "<br>" +
    "<hr>" +
    "the value of ++a " +
    "is:" +
    ++a +
    "<br>" +
    "<hr>" +
    "now the value of a is :" +
    a +
    "<br>" +
    "<hr>" +
    "the value of a++ is:" +
    a++ +
    "<br>" +
    "<hr>" +
    "now the value of a is:" +
    a +
    "<br>" +
    "<hr>" +
    "now the value of --a is: " +
    --a +
    "<br>" +
    "<hr>" +
    "now the value of a is:" +
    a +
    "<br>" +
    "<hr>" +
    "now the value of a is:" +
    a-- +
    "<br>" +
    "<hr>" +
    "now the value of a is:" +
    a +
    "<br>" +
    "<hr>" +
    "<hr>"
);

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

var b = 1;
var a = 2;
var result1 = --a; // Decrements 'a' by 1, so 'a' becomes 1
var result2 = --a - --b; // Decrements 'a' and 'b' before calculation: a becomes 0, b becomes 0; so result is 0 - 0 = 0
var result3 = --a - --b + ++b; // Decrements 'a' and 'b' before calculation, then increments 'b': a becomes -1, b becomes 1; so result is -1 - 1 + 1 = -1
var result4 = --a - --b + ++b + b--; // Decrements 'a' and 'b' before calculation, then increments 'b' and uses its value before decrement: a becomes -2, b becomes 0; so result is -2 - 0 + 1 + 1 = 0
document.write(
  "--a is:" +
    result1 +
    "<br>" +
    " --a - --b is: " +
    result2 +
    "<br>" +
    " --a - --b + ++b is: " +
    result3 +
    "<br>" +
    "--a - --b + ++b + b-- is: " +
    result4 +
    "<br>"
);

// 3. Write a program that takes input a name from user & greet the user.
var name = prompt("enter your name");
alert("hello " + name + " welcome to our website ");

// 5. Write a program to take input a number from user & display its multiplication table on your browser. If the user does not enter a new number, multiplication table of 5 should be displayed by default.
var numbermultiplication = prompt("enter your number ") || 5;
var incrementnumber = 1;
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 1 +
    "<br>"
);
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 2 +
    "<br>"
);
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 3 +
    "<br>"
);
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 4 +
    "<br>"
);
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 5 +
    "<br>"
);
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 6 +
    "<br>"
);
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 7 +
    "<br>"
);
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 8 +
    "<br>"
);
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 9 +
    "<br>"
);
document.write(
  numbermultiplication +
    " x " +
    incrementnumber++ +
    "= " +
    numbermultiplication * 10 +
    "<br>"
);

// 6. Take a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for the first subject from user and store it in a different variable.
var subject1 = prompt("enter you first subject");
var subject2 = prompt("enter you second subject");
var subject3 = prompt("enter you third subject");
var totalmarks = 100;
var obtainedmarks1 = prompt("enter obtained marks for " + subject1 + ":");
var obtainedmarks2 = prompt("enter obtained marks for " + subject2 + ":");
var obtainedmarks3 = prompt("enter obtained marks for " + subject3 + ":");
var totalobtainedmarks = +obtainedmarks1 + +obtainedmarks2 + +obtainedmarks3;
var totalpercentage = (totalobtainedmarks / (3 * totalmarks)) * 100;

// Displaying subject marks in a table format
document.write("<h2>subject marks</h2>");
document.write("<table border='1'>");
document.write(
  "<tr><th>subject</th><th>total marks</th><th>obtained marks</th></tr>"
);
document.write(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    totalmarks +
    "</td><td>" +
    obtainedmarks1 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    totalmarks +
    "</td><td>" +
    obtainedmarks2 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    totalmarks +
    "</td><td>" +
    obtainedmarks3 +
    "</td></tr>"
);
document.write(
  "<tr><td colspan='2'> total marks obtained </td><td>" +
    totalobtainedmarks +
    "</td></tr>"
);
document.write(
  "<tr><td colspan='2'> total marks obtained </td><td>" +
    totalpercentage +
    " % </td></tr>"
);
document.write("</table>");
