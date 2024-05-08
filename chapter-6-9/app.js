//MATH EXPRESSIONS


//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a = 10;
// document.write("<h1>result</h1> " + "<br>"  + "the value of a is:" + a + "<br>" + "<hr>" + "the value of ++a " + "is:" + ++a + "<br>" + "<hr>" + "now the value of a is :" + a + "<br>" + "<hr>" + "the value of a++ is:" + a++ + "<br>" + "<hr>" + "now the value of a is:" + a + "<br>" + "<hr>" + "now the value of --a is: " + --a + "<br>" + "<hr>" + "now the value of a is:" + a  + "<br>" + "<hr>" + "now the value of a is:" + a-- + "<br>" + "<hr>" +  "now the value of a is:" + a + "<br>" + "<hr>"+ "<hr>") ;



//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

var b = 1;
var a =2;
var result1 = --a;
var result2 = --a - --b;
var result3 = --a - --b + ++b;
var result4 = --a - --b + ++b + b--;

document.write("--a is:" + result1 + "<br>" + " --a - --b is: " + result2 + "<br>" + " --a - --b + ++b is: " +  result3 );





//3. Write a program that takes input a name from user & greet the user.
var name = prompt("enter your name");
alert("hello " + name + " welcome to our website ");

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var number = prompt("enter your number");





//6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable.

var subject1 = prompt("enter you first subject");
var subject2 = prompt("enter you second subject");
var subject3 = prompt("enter you third subject");

var totalmarks = 100;

var obtainedmarks1 = prompt("enter obtained marks for " + subject1 + ":");
var obtainedmarks2 = prompt("enter obtained marks for " + subject2 + ":");
var obtainedmarks3 = prompt("enter obtained marks for " + subject3 + ":");

var totalobtainedmarks = + obtainedmarks1 + +obtainedmarks2 + +obtainedmarks3;
var totalpercentage = (totalobtainedmarks / ( 3 * totalmarks)) * 100;


document.write("<h2>subject marks</h2>");
document.write("<table border = '1'>" );
document.write("<tr><th>subject</th><th>total marks</th><th>obtained marks</th></tr>");
document.write("<tr><td>" + subject1 +" </td><td>" + totalmarks + "</td><td>" + obtainedmarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 +" </td><td>" + totalmarks + "</td><td>" + obtainedmarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 +" </td><td>" + totalmarks + "</td><td>" + obtainedmarks3 + "</td></tr>");
document.write("<tr><td colspan = '2'> total marks obtained </td><td>" +totalobtainedmarks +  "</td></tr>");
document.write("<tr><td colspan = '2'> total marks obtained </td><td>" +totalpercentage +  " % </td></tr>");
document.write("</table>");








