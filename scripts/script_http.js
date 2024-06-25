// переменные формы ввода

const taskForm = document.querySelector(".task_form");
const taskTitle = document.querySelector(".task_description");
const taskDate = document.querySelector(".task_date");

// элементы ноды таски
const taskContainer = document.querySelector(".task_list");
// const task = document.querySelector(".task_option");
const taskTime = document.querySelector(".task_time");
const taskHeading = document.querySelector(".task_heading");

function addTask() {
  const taskOption = document.createElement("li");
  taskOption.classList.add("task_option");
  taskOption.innerHTML = `
  <input class="task_checker" type="checkbox" name="task_info" />
  <div class="task_info">
  <p class="task_time">${taskDate.value}</p>
  <p class="task_heading">${taskTitle.value}</p>
  </div>`;
  taskContainer.append(taskOption);

  return taskOption;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (taskTitle.value === "" || taskDate.value === "") {
    console.log("empty");
  } else {
    addTask();
    taskTitle.value = "";
    taskDate.value = "";
  }
});

//логика реализации зачеркивания
// const checkbox = document.querySelector(".task_checker");
// taskTitle; //какой-то заголовок задачи
// checkbox.addEventListener("change", (event) => {
//   if (event.target.checked === true) {
//     taskTitle.style.textDecoration = "line-through";
//   } else {
//     taskTitle.style.textDecoration = "none";
//   }
// });

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
