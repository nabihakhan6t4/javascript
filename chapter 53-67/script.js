// i. Get element of id "main-content" and assign them in a variable
var mainContent = document.getElementById("main-content");

// ii. Display all child elements of "main-content" element
console.log("Child elements of main-content:");
Array.from(mainContent.children).forEach(function (child) {
  console.log(child);
});

// iii. Get all elements of class "render" and show their innerHTML in browser
var renderElements = document.getElementsByClassName("render");
Array.from(renderElements).forEach(function (element) {
  console.log("Inner HTML of render element:", element.innerHTML);
});

// iv. Fill input value whose element id is "first-name" using JavaScript
document.getElementById("first-name").value = "John";

// v. Repeat part iv for id "last-name" and "email"
document.getElementById("last-name").value = "Doe";
document.getElementById("email").value = "johndoe@example.com";

// i. What is node type of element having id "form-content"
var formContent = document.getElementById("form-content");
console.log("Node type of form-content:", formContent.nodeType);

// ii. Show node type of element having id "lastName" and its child node
var lastNameElement = document.getElementById("lastName");
console.log("Node type of lastName:", lastNameElement.nodeType);
console.log(
  "Node type of child node of lastName:",
  lastNameElement.firstChild.nodeType
);

// iii. Update child node of element having id "lastName"
lastNameElement.firstChild.nodeValue = "Last Name: Smith";

// iv. Get first and last child of id "main-content"
var mainContent = document.getElementById("main-content");
console.log("First child of main-content:", mainContent.firstChild);
console.log("Last child of main-content:", mainContent.lastChild);

// v. Get next and previous siblings of id "lastName"
console.log("Next sibling of lastName:", lastNameElement.nextSibling);
console.log("Previous sibling of lastName:", lastNameElement.previousSibling);

// vi. Get parent node and node type of element having id "email"
var emailElement = document.getElementById("email");
console.log("Parent node of email:", emailElement.parentNode);
console.log(
  "Node type of parent node of email:",
  emailElement.parentNode.nodeType
);


