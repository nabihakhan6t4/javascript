// 1. Write a program that takes two numbers & add them in a new variable. Show the result in your browser.

var number3 = 3; // Declaring and initializing first number
var number5 = 5; // Declaring and initializing second number
var number8 = number3 + number5; // Adding both numbers and storing the result in number8

document.write(
  "Sum of " + number3 + " and " + number5 + " is " + number8 + "<br>"
);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var number3 = 3; // Re-initializing first number for subtraction
var number5 = 5; // Re-initializing second number for subtraction
var number2 = number3 - number5; // Performing subtraction and storing the result in number2

document.write(
  "Subtraction of " + number3 + " and " + number5 + " is " + number2 + "<br>"
);

var number3 = 3; // Re-initializing first number for multiplication
var number5 = 5; // Re-initializing second number for multiplication
var number15 = number3 * number5; // Performing multiplication and storing the result in number15

document.write(
  "Multiplication of " +
    number3 +
    " and " +
    number5 +
    " is " +
    number15 +
    "<br>"
);

var number3 = 3; // Re-initializing first number for division
var number5 = 5; // Re-initializing second number for division
var numberdivision = number3 / number5; // Performing division and storing the result in numberdivision

document.write(
  "Division of " +
    number3 +
    " and " +
    number5 +
    " is " +
    numberdivision +
    "<br>"
);

var number3 = 3; // Re-initializing first number for modulus
var number5 = 5; // Re-initializing second number for modulus
var numbermodulas = number3 % number5; // Performing modulus operation and storing the result in numbermodulas

document.write(
  "Modulus of " + number3 + " and " + number5 + " is " + numbermodulas + "<br>"
);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var variable;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is " + variable + "<br>");

// c. Initialize the variable with some number.
variable = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + variable + "<br>");

// e. Increment the variable.
variable++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + variable + "<br>");

// g. Add 7 to the variable.
variable += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + variable + "<br>");

// i. Decrement the variable.
variable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + variable + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var reminder = variable % 3;

// l. Output : “The remainder is : 0”.
document.write(
  "The remainder after dividing " + variable + " by 3 is: " + reminder + "<br>"
);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var movieticket = 600; // Cost of one movie ticket

var ticketprice = movieticket * 5; // Calculating cost of 5 tickets

document.write(
  "Total cost to buy 5 tickets to a movie is " + ticketprice + " PKR" + "<br>"
);

// 5. Write a script to display multiplication table of any number in your browser.

var number = 4; // Number for which multiplication table is generated
var counter = 1; // Counter variable for multiplication table
var increment = 1; // Increment variable for multiplication table

document.write("<h2>Multiplication table of " + number + "</h2>");

// Displaying multiplication table up to 10
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);
document.write(
  number + " x " + counter++ + " = " + number * increment++ + "<br>"
);

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var celsiusTemp = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemp2 = 77;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemp2 = ((fahrenheitTemp2 - 32) * 5) / 9;

document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C<br>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce
// a. Price of item 1
var item1 = 650;
// b. Price of item 2
var item2 = 100;
// c. Ordered quantity of item 1
var quantityOfOneitem1 = 3;
// d. Ordered Quantity of item 2
var quantityOfOneitem2 = 7;
// e. Shipping charges
var shippingCharges = 100;
// Compute the total cost & show the receipt in your browser.

document.write("<h1>Shopping Cart</h1>");

// Calculating total cost
var totalCost =
  item1 * quantityOfOneitem1 + item2 * quantityOfOneitem2 + shippingCharges;

document.write("Price of item 1 is " + item1 + " PKR<br>");
document.write("Quantity of item 1 is " + quantityOfOneitem1 + "<br>");
document.write("Price of item 2 is " + item2 + " PKR<br>");
document.write("Quantity of item 2 is " + quantityOfOneitem2 + "<br>");
document.write("Shipping charges: " + shippingCharges + " PKR<br>");
document.write("<br>Total cost of your order is " + totalCost + " PKR<br>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Result</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateUSD = 104.8;
var exchangeRateSAR = 28;

// Calculating total currency in PKR
var totalCurrencyInPKR =
  usDollars * exchangeRateUSD + saudiRiyals * exchangeRateSAR;

document.write("<h1>Currency in PKR</h1>");
document.write("Total currency in PKR is " + totalCurrencyInPKR + " PKR<br>");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var initialNumber = 7;
var result = ((initialNumber + 5) * 10) / 2;

document.write("Result: " + result + "<br>");

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
var currentYear = 2024;
// b. Store their birth year in a variable.
var birthYear = 2006;
// c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NN years old”.
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");
document.write("Current year: " + currentYear + "<br>");
document.write("Birth year: " + birthYear + "<br>");
document.write("They are either " + age1 + " or " + age2 + " years old<br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
var radius = 20;
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)
var circumference = 2 * 3.142 * radius;
// c. Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var area = 3.142 * radius * radius;

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br>");

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
var favoriteFood = "Biryani";
// b. Store your current age into a variable
var currentAge = 18;
// c. Store a maximum age into a variable
var maximumAge = 68;
// d. Store an estimated amount per day (as a number)
var amountPerDay = 100;
// e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var remainingYears = maximumAge - currentAge;
var biryaniNeeded = remainingYears * 365 * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favorite food: " + favoriteFood + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated maximum age: " + maximumAge + "<br>");
document.write("Amount of food per day: " + amountPerDay + "<br>");
document.write(
  "You will need " +
    biryaniNeeded +
    " plates of " +
    favoriteFood +
    " to last you until the ripe old age of " +
    maximumAge +
    "<br>"
);
