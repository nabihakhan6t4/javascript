// Function to calculate power
function power(a, b) {
  if (b === 0) {
    return 1;
  }
  if (b < 0) {
    a = 1 / a;
    b = -b;
  }

  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

// Function to check if a year is a leap year
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Divisible by 400
      } else {
        return false; // Divisible by 100 but not by 400
      }
    } else {
      return true; // Divisible by 4 but not by 100
    }
  } else {
    return false; // Not divisible by 4
  }
}

// Function to handle leap year check
function checkLeapYear() {
  const year = parseInt(document.getElementById("yearInput").value);
  const resultElement = document.getElementById("result");

  if (isNaN(year)) {
    resultElement.textContent = "Please enter a valid year.";
    return;
  }

  if (isLeapYear(year)) {
    resultElement.textContent = year + " is a leap year.";
  } else {
    resultElement.textContent = year + " is not a leap year.";
  }
}

// Function to handle power calculation
function calculatePower() {
  const base = parseFloat(document.getElementById("baseInput").value);
  const exponent = parseInt(document.getElementById("exponentInput").value);
  const powerResultElement = document.getElementById("powerResult");

  if (isNaN(base) || isNaN(exponent)) {
    powerResultElement.textContent = "Please enter valid base and exponent.";
    return;
  }

  const result = power(base, exponent);
  powerResultElement.textContent = `Result of ${base} raised to ${exponent} is ${result}.`;
}

// Function to calculate the semi-perimeter of the triangle
function calculateSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}

// Function to calculate the area of the triangle using the semi-perimeter
function calculateArea(a, b, c) {
  const s = calculateSemiPerimeter(a, b, c);
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

// Function to handle area calculation from user input
function calculateTriangleArea() {
  const a = parseFloat(document.getElementById("sideA").value);
  const b = parseFloat(document.getElementById("sideB").value);
  const c = parseFloat(document.getElementById("sideC").value);
  const areaResultElement = document.getElementById("areaResult");

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    areaResultElement.textContent = "Please enter valid positive side lengths.";
    return;
  }

  const area = calculateArea(a, b, c);
  areaResultElement.textContent = `The area of the triangle is ${area.toFixed(
    2
  )} square units.`;
}
