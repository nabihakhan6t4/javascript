//USER INPUT & CONDITIONAL STATEMENT

//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = "karachi";
var cityname = prompt("enter your city name ");
if (city === cityname ){
   alert( "welcome to the city of lights")
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var sir = "male";
var madam = "female";
var gender = prompt("enter your gender please");
if(gender === sir ){
    alert("hello sir! good morning")
}
if(gender === madam ){
    alert("hello mam! good morning")
}

