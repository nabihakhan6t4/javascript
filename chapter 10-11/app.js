// //USER INPUT & CONDITIONAL STATEMENT

// //1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// var city = "karachi";
// var cityname = prompt("enter your city name ");
// if (city === cityname) {
//   alert("welcome to the city of lights");
// }

// //2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// var sir = "male";
// var madam = "female";
// var gender = prompt("enter your gender please");
// if (gender === sir) {
//   alert("hello sir! good morning");
// } else if (gender === madam) {
//   alert("hello mam! good morning");
// }

// //3. Write a program to take input color of road traffic signal from the user & show the message according to this table: Signal color Message Red Must Stop Yellow Ready to move Green Move now
// var trafficSignal = prompt("Enter the color of road traffic signal:");
// if (trafficSignal == "red") {
//   alert("Must Stop");
// } else if (trafficSignal == "yellow") {
//   alert("Ready to move");
// } else if (trafficSignal == "green") {
//   alert("Move now");
// }

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var userCarFuel = prompt("enter your car fuel");
if (userCarFuel <= 0.25) {
  alert("“Please refill the fuel in your car”");
}
