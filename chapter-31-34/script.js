// Display the current date and time in your browser
const options = {
  timeZone: "Asia/Karachi", // Set the timezone to Karachi
  timeZoneName: "short", // Use a short format for the timezone name
  year: "numeric", // Display the year in numeric format
  month: "long", // Display the full name of the month
  day: "numeric", // Display the day in numeric format
  hour: "numeric", // Display the hour in numeric format
  minute: "numeric", // Display the minute in numeric format
  second: "numeric", // Display the second in numeric format
  hour12: false, // Use a 24-hour format
};

// Create a new Date object for the current date and time
const now = new Date();
// Format the date and time based on the specified options
const dateString = now.toLocaleString("en-US", options);
// Display the formatted date and time in the HTML element with id "dateTime"
document.getElementById("dateTime").textContent = dateString + " PKT"; // PKT label add karna

// Alert the current month in words
function alertCurrentMonth() {
  const now = new Date(); // Create a new Date object for the current date and time
  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December",
  ];
  // Get the current month by its index (0-11)
  const currentMonth = monthNames[now.getMonth()];
  alert(currentMonth); // Show the current month in an alert
}

// Alert the first 3 letters of the current day
function alertCurrentDay() {
  const now = new Date(); // Create a new Date object for the current date and time
  // Array of day names
  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];
  // Get the current day by its index (0-6) and extract the first 3 letters
  const currentDay = dayNames[now.getDay()].substring(0, 3);
  alert(currentDay); // Show the first 3 letters of the current day in an alert
}

// Show message if it's Saturday or Sunday
function checkFunDay() {
  const now = new Date(); // Create a new Date object for the current date and time
  const day = now.getDay(); // Get the current day (0 is Sunday, 6 is Saturday)

  // Check if it's Sunday (0) or Saturday (6)
  if (day === 0 || day === 6) {
    // Display message for fun day
    document.getElementById("funDayMessage").textContent = "It's Fun day!";
  } else {
    // Display alternate message for regular days
    document.getElementById("funDayMessage").textContent = "It's a regular day.";
  }
}

// Show message based on the current date
function checkDays() {
  const now = new Date(); // Create a new Date object for the current date and time
  const day = now.getDate(); // Get the current date (1-31)

  // Check if the date is less than 16
  if (day < 16) {
    // Display message for the first fifteen days of the month
    document.getElementById("daysMessage").textContent = "First fifteen days of the month";
  } else {
    // Display alternate message for the last days of the month
    document.getElementById("daysMessage").textContent = "Last days of the month";
  }
}

// Calculate minutes since midnight, Jan. 1, 1970
function calculateMinutes() {
  const date = new Date(0); // Create a new Date object for Jan. 1, 1970
  const now = new Date(); // Get the current date and time

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = now - date;

  // Convert milliseconds to minutes
  const minutesSinceMidnight = Math.floor(differenceInMilliseconds / (1000 * 60));

  // Display the result in the HTML element with id "minutesDisplay"
  document.getElementById("minutesDisplay").textContent = `Minutes since midnight, Jan. 1, 1970: ${minutesSinceMidnight}`;
}

// Check if it's AM or PM
function checkAMorPM() {
  const now = new Date(); // Get the current date and time
  const hours = now.getHours(); // Get the current hour (0-23)

  // Check if it's before noon
  if (hours < 12) {
    alert("It's AM"); // Alert for AM
  } else {
    alert("It's PM"); // Alert for PM
  }
}

// Create a Date object for the last day of the last month of 2020
const laterDate = new Date(2020, 11, 31); // 11 represents December (0-11)

// Function to show the last day of December 2020
function showLaterDate() {
  // Display the date in a readable format
  document.getElementById("dateDisplay").textContent = `The last day of the last month of 2020 is: ${laterDate.toDateString()}`;
}

// Calculate the number of days since 1st Ramadan (June 18, 2015)
function calculateDaysSinceRamadan() {
  const ramadanStartDate = new Date(2015, 5, 18); // 5 represents June (0-11)
  const today = new Date(); // Get today's date

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = today - ramadanStartDate;

  // Convert milliseconds to days
  const daysSinceRamadan = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  // Display the result in the HTML element with id "ramadanMessage"
  document.getElementById("ramadanMessage").textContent = `Days since 1st Ramadan: ${daysSinceRamadan}`;
}

// Create a Date object for the current date and time, extract the hours, reset the date object an hour ahead, and display the updated date object
function updateDateTime() {
  const now = new Date(); // Create a Date object for the current date and time
  const hours = now.getHours(); // Extract the current hour

  // Reset the date object an hour ahead
  now.setHours(hours + 1);

  // Display the updated date object in a readable format
  document.getElementById("updatedDateTime").textContent = `Updated Date and Time (1 Hour Ahead): ${now.toLocaleString("en-US", { timeZone: "Asia/Karachi", timeZoneName: "short" })} PKT`;
}

// Show the date in an alert box that is reset to 100 years back
function showDate100YearsBack() {
  // Create a Date object for the current date
  const currentDate = new Date();
  
  // Calculate the date 100 years back
  const date100YearsBack = new Date(currentDate.setFullYear(currentDate.getFullYear() - 100));
  
  // Display the date in a readable format
  alert(`Date 100 Years Back: ${date100YearsBack.toDateString()}`);
}

// Prompt user for their age and calculate the birth year
function calculateBirthYear() {
  const age = prompt("Enter your age:"); // Prompt user for age
  const currentYear = new Date().getFullYear(); // Get current year

  // Calculate birth year
  const birthYear = currentYear - age; 

  // Display the birth year in the HTML element with id "birthYearDisplay"
  document.getElementById("birthYearDisplay").textContent = `You were born in: ${birthYear}`;
}

// Generate a random K-Electric bill
function generateBill() {
  const billAmount = Math.floor(Math.random() * (5000 - 500 + 1)) + 500; // Generate random bill amount between 500 and 5000

  // Display the generated bill amount in the HTML element with id "billDisplay"
  document.getElementById("billDisplay").textContent = `Your K-Electric bill amount is: Rs. ${billAmount}`;
}
