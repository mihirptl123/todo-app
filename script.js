const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");

  // Handle delete
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
