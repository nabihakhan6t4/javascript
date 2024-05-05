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
var counter = 1;
var increment = 1;
document.write("<h2> table of 4 </h2>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");

document.write(number + " x " + counter++ + " = " + number * increment++ + "<br>");





//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a. Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. Conversion Formulae:


var celsiusTemp = 25;


var fahrenheitTemp = celsiusTemp * 9/5 + 32;


var fahrenheitTemp2 = 77;


var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;


document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");





//7. Write a program to implement checkout process of a shopping cart system for an e-commerce
//a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges Compute the total cost & show the receipt in your browser.

document.write("<h1>shopping cart</h1>");

var item1 = 650;
var quantityOfOneitem1 = 3;
var item2 = 100;
var quantityOfOneitem2 = 7;
var Shippingcharges = 100;
var output = (item1 * quantityOfOneitem1) + (item2 * quantityOfOneitem2) + Shippingcharges;

document.write("price of item 1 is " + item1 + "<br></br>");
document.write("quantity of item 1 is " + quantityOfOneitem1 + "<br></br>");
document.write("price of item 2 is " + item2 + "<br></br>");
document.write("quantity of item 2 is " + quantityOfOneitem2 + "<br></br>");
document.write("total cost of your order is " + output);




//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 980;
var marksObtained = 804;
var percentage =(marksObtained / totalMarks) * 100;

document.write("<h1>result</h1>");
document.write("total marks: " + totalMarks + "<br>" );
document.write("marks obtained " + marksObtained + "<br>");
document.write("percentage: " + percentage + "<br>" + "<br>" + "<br>");





//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


var usdollar = 10;
var saudiriyals = 25;

var pakistani_Dollar_Exhange = 2774.16 ;
var pakistai_Saudi_riyals = 1849.13 ;

var output = (usdollar * pakistani_Dollar_Exhange) + (saudiriyals * pakistai_Saudi_riyals);

document.write("<h1>Currency in PKR</h1>")
document.write("total currency in PKR is " + output + "<br>");




//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

var initialnumber = 7;
var result = (initialnumber + 5) * 10/2;

console.log(result + "result ");



//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NN years old”.


var currentyear = 2024;
var birthyear = 2006;

var age1 = currentyear - birthyear;
var age2 = age1 - 1;

document.write("<h1>age calculator</h1> " + "<br>");
document.write("current year: " + currentyear  + "<br>");
document.write("birth year: " + birthyear  + "<br>");
document.write("yong age is: " + age1 + " or " + age2 + "<br>");
console.log("they are either " + age1 + " or " + age2 );



//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


var radius = 20;
var circumfrance = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h1>the geometrizer</h1>"  + "<br>" + "radius of circle  " + radius  + "<br>"  + "the circumfrance is " + circumfrance  + "<br>" + "the area is " + area + "<br>");





//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.


var favouritefood = "biryani";
var currentage = 18;
var maxiumage = 68;
var amountpay = 100;
var remainingyears = maxiumage - currentage;
var biryanineeded = remainingyears * 365 * amountpay;

document.write("<h1>the lifetime supply calculator</h1> " + "<br>" + "favouritefood: " + favouritefood + "<br>" + "currentage: " + currentage + "<br>" + "estimated maximumage: " + maxiumage + "<br>"+ "amount of food per day:" + amountpay + "<br>");
document.write("You will need " + biryanineeded + " " + favouritefood + " to last you until the ripe old age of " + maxiumage + ".");