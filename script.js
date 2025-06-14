function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = () => li.style.textDecoration = "line-through";

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
