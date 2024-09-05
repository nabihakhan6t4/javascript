// 1. Create a signup form and display form data in your web
// page on submission.
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Display form data
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>Form Data:</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
  });

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

document.getElementById("readMoreBtn").addEventListener("click", function () {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("readMoreBtn");
  
    if (moreText.classList.contains("d-none")) {
      moreText.classList.remove("d-none");
      btn.textContent = "Read less";
    } else {
      moreText.classList.add("d-none");
      btn.textContent = "Read more";
    }
  });
  
// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.
document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;

    // Add row to table
    const tableBody = document.getElementById("studentTableBody");
    const rowIndex = tableBody.rows.length;
    const row = tableBody.insertRow(rowIndex);

    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = age;
    row.insertCell(2).textContent = grade;

    // Create and append Edit and Delete buttons
    const actionsCell = row.insertCell(3);
    actionsCell.innerHTML = `
        <button class="btn btn-warning btn-sm edit-btn">Edit</button>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    `;

    // Clear the form
    document.getElementById("studentForm").reset();
  });

document
  .getElementById("studentTableBody")
  .addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("delete-btn")) {
      // Delete row
      const row = target.closest("tr");
      row.remove();
    }

    if (target.classList.contains("edit-btn")) {
      // Show edit form
      const row = target.closest("tr");
      const name = row.cells[0].textContent;
      const age = row.cells[1].textContent;
      const grade = row.cells[2].textContent;
      const rowIndex = row.rowIndex;

      document.getElementById("editName").value = name;
      document.getElementById("editAge").value = age;
      document.getElementById("editGrade").value = grade;
      document.getElementById("editRowIndex").value = rowIndex;
      document.getElementById("editFormContainer").style.display = "block";
    }
  });

document
  .getElementById("editForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const rowIndex = document.getElementById("editRowIndex").value;
    const name = document.getElementById("editName").value;
    const age = document.getElementById("editAge").value;
    const grade = document.getElementById("editGrade").value;

    // Update row in table
    const tableBody = document.getElementById("studentTableBody");
    const row = tableBody.rows[rowIndex];

    row.cells[0].textContent = name;
    row.cells[1].textContent = age;
    row.cells[2].textContent = grade;

    // Hide edit form
    document.getElementById("editFormContainer").style.display = "none";
  });

document.getElementById("cancelEdit").addEventListener("click", function () {
  document.getElementById("editFormContainer").style.display = "none";
});
