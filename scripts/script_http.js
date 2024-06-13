const taskForm = document.querySelector(".task_form");
const taskTitleInput = document.querySelector(".task_description");
const taskDate = document.querySelector(".task_date");
const taskContainer = document.querySelector(".task_list");

function renderTask() {
  console.log(taskTitleInput.value);
  console.log(taskDate.value);

  const liContainer = document.createElement("li");
  const checkbox = document.createElement("input");
  const taskTitle = document.createElement("h3");
  const taskData = document.createElement("p");

  taskTitle.textContent = taskTitleInput.value;
  taskData.textContent = taskDate.value;

  checkbox.setAttribute("type", "checkbox");

  liContainer.append(checkbox, taskTitle, taskData);
  taskContainer.append(liContainer);
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (taskTitleInput.value === "" || taskDate.value === "") {
    console.log("empty");
  } else {
    renderTask();
    taskTitleInput.value = "";
  }
});
