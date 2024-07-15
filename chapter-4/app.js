// 1. Declare 3 variables in one statement.
var a = 1,
  b = 2,
  c = 3;

// 2. Declare 5 legal & 5 illegal variable names.

// Illegal variable names
// var my name = "nabiha"; // contains space
// var !studentname = "khan"; // starts with special character
// var var = "var";  // uses reserved keyword
// var 2name = "number"; // starts with a number
// var curr-ency  = "money"; // contains special character

// Legal variable names
var myname = "nabiha";
var $studentname = "khan";
var Var = "VAR";
var nam2e = "number";
var curr_ency = "money";

// 3. Display this in your browser:
document.write("<h1>Rules for naming JS variables</h1>");
document.write(
  "<p>Variable names can only contain letters, numbers, $, and _. For example $my_1stVariable</p>"
);
document.write(
  "<p>Variables must begin with a letter, $, or _. For example $name, _name, or name</p>"
);
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");
