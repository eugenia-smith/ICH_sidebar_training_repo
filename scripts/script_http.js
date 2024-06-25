const taskForm = document.querySelector(".task_form");
const taskTitle = document.querySelector(".task_description");
const taskDate = document.querySelector(".task_date");
const taskContainer = document.querySelector(".task_list");
const task = document.querySelector(".task_option");

function renderTask(taskElement) {
  console.log(taskTitle.value);
  console.log(taskDate.value);

  // const liContainer = document.createElement("li");
  // const checkbox = document.createElement("input");
  // const taskTitle = document.createElement("h3");
  // const taskData = document.createElement("p");

  taskElement.title = taskTitle.textContent;
  taskElement.date = taskDate.textContent;

  // checkbox.setAttribute("type", "checkbox");
  taskContainer.append(task.cloneNode(true));
  // liContainer.append(checkbox, taskTitle, taskData);
  // taskContainer.append(liContainer);

  return taskElement;
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
const checkbox = document.querySelector(".task_checker");
taskTitle; //какой-то заголовок задачи
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

//реализация логики поиска

// const searchInput = document.querySelector(".search_input");

// function searchTasks(tasksArray, value) {
//   taskContainer.textContent = "";

//   const result = tasksArray.filter((task) => {
//     return task.title.includes(value);
//   });

//   result.forEach(() => {
//     renderTask(task);
//   });
// }

// searchInput.addEventListener("focus", () => {
//   // можно обращаться через event.target.value (необходимо передать event в коллбек)
//   const userInputValue = searchInput.value;
// });
