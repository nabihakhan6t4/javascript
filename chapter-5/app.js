//MATH EXPRESSIONS

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var number3 = 3;
var number5 = 5;
var number8 = number3 + number5;

document.write("sum of " + number3 +  " and " + number5 + " is " + number8  + "<br>");

//2. Repeat task1 for subtraction, multiplication, division & modulus.

var number3 = 3;
var number5 = 5;
var number2 =  number3 - number5;

document.write("subtraction of" + " "  + number3 + " " + "and" + " " + number5 + " " + "is" + " " + number2 + "<br>" );

var number3 = 3;
var number5 = 5;
var number15 = number3 * number5;

document.write("multiplication of " + number3 + " and " + number5 + " is " + number15 + "<br>");

var number3 = 3;
var number5 = 5;
var numberdivision = number3 / number5;

document.write("division of " + number3 + " and " + number5 + " is " + numberdivision + "<br>");

var number3 = 3;
var number5 = 5;
var numbermodulas = number3 % number5;

document.write("modulas of " + number3 + " and " + number5 + " is " + numbermodulas + "<br>"); 

//3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3. l. Output : “The remainder is : 0”.

var variable;

document.write("value after variable declaration is " + variable + "<br>");

variable = 5;

document.write("initialize value : " + variable + "<br>" );

variable++;

document.write("value after increment is: " + variable + "<br>");

variable+= 7;

document.write("value after addition is: " + variable + "<br>");

variable--;

document.write("value after decreament is: " + variable + "<br>");

var reminder = variable % 3;

document.write("value after decreament is: " + reminder + "<br>");


//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

var movieticket = 600;

var ticketprice = movieticket * 5;

document.write("total cost to by " + 5 + " tickets to movie in a " + ticketprice + "PKR" + "<br>");



//5. Write a script to display multiplication table of any number in your browser. E.g

var number = 4;

document.write("<h2> table of 4 </h2>");

document.write(number + " x 1 = " + number * 1 + "<br>");

document.write(number + " x 2 = " + number * 2  + "<br>");

document.write(number + " x 3 = " + number * 3  + "<br>");

document.write(number + " x 4 = " + number * 4  + "<br>");

document.write(number + " x 5 = " + number * 5  + "<br>");

document.write(number + " x 6 = " + number * 6  + "<br>");

document.write(number + " x 7 = " + number * 7  + "<br>");

document.write(number + " x 8 = " + number * 8  + "<br>");

document.write(number + " x 9 = " + number * 9  + "<br>");

document.write(number + " x 10 = " + number * 10  + "<br>");