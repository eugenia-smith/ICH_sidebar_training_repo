const taskForm = document.querySelector(".task_form");
const taskTitleInput = document.querySelector(".task_description");
const taskDate = document.querySelector(".task_date");
const taskContainer = document.querySelector(".task_list");

function renderTask(taskElement) {
  console.log(taskTitleInput.value);
  console.log(taskDate.value);

  const liContainer = document.createElement("li");
  const checkbox = document.createElement("input");
  const taskTitle = document.createElement("h3");
  const taskData = document.createElement("p");

  taskTitle.textContent = taskElement.title;
  taskData.textContent = taskElement.date;

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

//логика реализации зачеркивания
const checkbox = document.querySelector(".taskCheckbox");
const taskTitle = //какой-то заголовок задачи
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked === true) {
      taskTitle.style.textDecoration = "line-through";
    } else {
      taskTitle.style.textDecoration = "none";
    }
  });

//логика взаимодействия с задачами в localStorage
// данные хранятся в виде массива объектов, где каждая задача -- объект
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (tasks.length !== 0) {
  tasks.forEach((task) => {
    renderTask(task);
  });
}

if (tasks.length !== 0) {
  tasks.forEach((task) => {
    const liContainer = document.createElement("li");
    const dateText = document.createElement("p");
    const heading = document.createElement("h3");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    liContainer.append(checkbox, heading, dateText);

    dateText.textContent = task.date;
    heading.textContent = task.title;

    taskContainer.append(liContainer);
  });
}

// или воспользоваться функцией, написанной ранее

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTask = {
    id: Math.random(),
    title: taskTitleInput.value,
    date: taskDate.value,
    completed: false,
  };

  renderTask(newTask);

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
});
