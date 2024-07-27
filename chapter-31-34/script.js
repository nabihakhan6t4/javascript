// 1. Display current date and time in your browser
const options = {
    timeZone: 'Asia/Karachi',
    timeZoneName: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
};
const now = new Date();
const dateString = now.toLocaleString('en-US', options);
document.getElementById('dateTime').textContent = dateString + ' PKT'; // PKT label add karna

// 2. Alert the current month in words
function alertCurrentMonth() {
    const now = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = monthNames[now.getMonth()]; // Get the current month
    alert(currentMonth); // Show the current month in an alert
}

// 3. Alert the first 3 letters of the current day
function alertCurrentDay() {
    const now = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = dayNames[now.getDay()].substring(0, 3); // Get the first 3 letters of the current day
    alert(currentDay); // Show the first 3 letters of the current day in an alert
}

// 4. Show message if it's Saturday or Sunday
function checkFunDay() {
    const now = new Date();
    const day = now.getDay(); // Get the current day (0 is Sunday, 6 is Saturday)

    if (day === 0 || day === 6) { // Check if it's Sunday (0) or Saturday (6)
        document.getElementById('funDayMessage').textContent = "It's Fun day!"; // Display message
    } else {
        document.getElementById('funDayMessage').textContent = "It's a regular day."; // Display alternate message
    }
}

// 5. Show message based on the current date
function checkDays() {
    const now = new Date();
    const day = now.getDate(); // Get the current date

    if (day < 16) { // Check if date is less than 16
        document.getElementById('daysMessage').textContent = "First fifteen days of the month"; // Display message
    } else {
        document.getElementById('daysMessage').textContent = "Last days of the month"; // Display alternate message
    }
}

// 6. Calculate minutes since midnight, Jan. 1, 1970
function calculateMinutes() {
    const date = new Date(0); // Create a new Date object for Jan. 1, 1970
    const now = new Date(); // Get the current date and time

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = now - date;

    // Convert milliseconds to minutes
    const minutesSinceMidnight = Math.floor(differenceInMilliseconds / (1000 * 60));

    // Display the result
    document.getElementById('minutesDisplay').textContent = `Minutes since midnight, Jan. 1, 1970: ${minutesSinceMidnight}`;
}

// 7. Check if it's AM or PM
function checkAMorPM() {
    const now = new Date(); // Get the current date and time
    const hours = now.getHours(); // Get the current hour (0-23)

    if (hours < 12) { // Check if it's before noon
        alert("It's AM"); // Alert for AM
    } else {
        alert("It's PM"); // Alert for PM
    }
}

// 8. Create a Date object for the last day of the last month of 2020
const laterDate = new Date(2020, 11, 31); // 11 represents December (0-11)

function showLaterDate() {
    // Display the date in a readable format
    document.getElementById('dateDisplay').textContent = `The last day of the last month of 2020 is: ${laterDate.toDateString()}`;
}


/*9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015*/
// Function to calculate the number of days since 1st Ramadan (June 18, 2015)

// Existing code...

// Function to calculate the number of days since 1st Ramadan (June 18, 2015)
function calculateDaysSinceRamadan() {
    const ramadanStartDate = new Date(2015, 5, 18); // 5 represents June (0-11)
    const today = new Date(); // Get today's date

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = today - ramadanStartDate;

    // Convert milliseconds to days
    const daysSinceRamadan = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    // Display the result
    document.getElementById('ramadanMessage').textContent = `Days since 1st Ramadan: ${daysSinceRamadan}`;
}


/*10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015.*/
// Existing code...

// Function to create a Date object for the current date and time,
// extract the hours, reset the date object an hour ahead,
// and display the updated date object
function updateDateTime() {
    const now = new Date(); // Create a Date object for the current date and time
    const hours = now.getHours(); // Extract the current hour

    // Reset the date object an hour ahead
    now.setHours(hours + 1);

    // Display the updated date object in a readable format
    document.getElementById('updatedDateTime').textContent = `Updated Date and Time (1 Hour Ahead): ${now.toLocaleString('en-US', { timeZone: 'Asia/Karachi', timeZoneName: 'short' })} PKT`;
}

/*11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser.*/
