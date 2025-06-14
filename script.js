const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage when page loads
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((taskText) => {
    createTaskElement(taskText);
  });
};

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  createTaskElement(taskText);
  saveTaskToLocal(taskText);
  taskInput.value = "";
}

// Helper: Create a task DOM element
function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");

  // Handle delete
  deleteBtn.onclick = function () {
    li.remove();
    removeTaskFromLocal(taskText);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Helper: Save task to localStorage
function saveTaskToLocal(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Helper: Remove task from localStorage
function removeTaskFromLocal(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// DARK MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");

// Load theme on page load
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  // Also load tasks (was here before)
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((taskText) => {
    createTaskElement(taskText);
  });
};

themeToggle.onclick = function () {
  document.body.classList.toggle("dark");

  // Save theme preference
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};
