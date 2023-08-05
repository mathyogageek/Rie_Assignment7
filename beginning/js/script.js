//  1: Get ADD EMPLOYEE FORM and EMPLOYEE TABLE from the DOM
const employeeForm = document.getElementById("addForm");
const employeeTable = document.getElementById("employees");

 
// 2: SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;
const employeeCountDisplay = document.getElementById("empCount");

//  3: ADD EMPLOYEE
employeeForm.addEventListener("submit", (e) => {
  //  4: PREVENT FORM SUBMISSION
  e.preventDefault();

  // 5:  GET THE VALUES FROM THE TEXT BOXES
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const extension = document.getElementById("extension").value;
  const email = document.getElementById("email").value;
  const department = document.getElementById("department").value;

  // 6: Create A NEW FOR THE TABLE
  const newRow = employeeTable.insertRow();

  // Step 7: Creating an array to hold values & references to the individual cells in a table row.
  const cells = [
    newRow.insertCell(), //  ID -Cell 
    newRow.insertCell(), //  Name - Cell 
    newRow.insertCell(), // Extension -Cell
    newRow.insertCell(), // Email - Cell
    newRow.insertCell(), // Department -Cell
    newRow.insertCell()  // Delete Button - Cell
  ];

  // 8 :Set the text content for each cell
  // Add a child node to a parent node in the HTML DOM
  cells[0].appendChild(document.createTextNode(id)); // Set ID 
  cells[1].appendChild(document.createTextNode(name)); // Set Name 
  cells[2].appendChild(document.createTextNode(extension)); // Set Extension 
  cells[3].appendChild(document.createTextNode(email)); // Set Email 
  cells[4].appendChild(document.createTextNode(department)); // Set Department 

  // 9:CREATE THE DELETE BUTTON $ append the delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteBtn";
  deleteButton.textContent = "Delete";
  cells[5].appendChild(deleteButton);

  // 10: RESET THE FORM
  employeeForm.reset();

  // 11:SET FOCUS BACK TO THE ID TEXT BOX
  document.getElementById("id").focus();

  // 12: INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  employeeCount++;
  employeeCountDisplay.textContent = employeeCount;
});

// DELETE EMPLOYEE
employeeTable.addEventListener("click", (e) => {
  // 13: Check if the clicked element is the delete button
  if (e.target.classList.contains("deleteBtn")) {
    // 14: Confirm deletion to the user
    if (confirm("Delete the employee??")) {
      // 15: Get the row and delete it from the table
      const row = e.target.parentNode.parentNode;
      employeeTable.deleteRow(row.rowIndex);

      // 16:  Decrement the number of employees in the table
      employeeCount--;
      employeeCountDisplay.textContent = employeeCount;
    }
  }
});
