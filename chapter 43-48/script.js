// Question 1: Show Alert on Link Click
document
  .getElementById("alertLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    alert("You clicked the link!");
  });

// Question 2: Display Mobile Images and Show Alert on Click
document.querySelectorAll(".clickable-image").forEach(function (image) {
  image.addEventListener("click", function () {
    const message = image.getAttribute("data-message");
    alert(`You clicked on ${message}`);
  });
});

// Question 3: Delete Student Record
document
  .getElementById("studentTable")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const row = event.target.closest("tr");
      row.remove();
    }
  });

// Question 4: Change Image on Mouseover and Mouseout
document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("myImage");
  const originalSrc = "/images/original-image.jpeg";
  const hoverSrc = "images/hovered-image.jpeg";

  image.addEventListener("mouseover", function () {
    image.src = hoverSrc;
  });

  image.addEventListener("mouseout", function () {
    image.src = originalSrc;
  });
});

// Question 5: Counter Functionality
let counter = 0;

document
  .getElementById("increaseButton")
  .addEventListener("click", function () {
    counter++;
    document.getElementById("counterValue").textContent = counter;
  });

document
  .getElementById("decreaseButton")
  .addEventListener("click", function () {
    counter--;
    document.getElementById("counterValue").textContent = counter;
  });
