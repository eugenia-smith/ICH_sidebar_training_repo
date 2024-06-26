// переменные формы ввода

const taskForm = document.querySelector(".task_form");
const taskTitle = document.querySelector(".task_description");
const taskDate = document.querySelector(".task_date");

// элементы ноды таски
const taskContainer = document.querySelector(".task_list");
// const task = document.querySelector(".task_option");
const taskTime = document.querySelector(".task_time");
const taskHeading = document.querySelector(".task_heading");

const searchInput = document.querySelector(".search_field");
const searchButton = document.querySelector(".search_button");

function renderOneTask(task) {
  const taskOption = document.createElement("li");
  taskOption.classList.add("task_option");
  if (task.done) {
    taskOption.innerHTML = `
    <input id="${task.id}" class="task_checker" type="checkbox" name="task_info" checked/>
    <div class="task_info">
    <p class="task_date task_date_completed">${task.date}</p>
    <p class="task_heading task_heading_completed">${task.description}</p>
    </div>`;
  } else {
    taskOption.innerHTML = `
    <input id="${task.id}" class="task_checker" type="checkbox" name="task_info" />
    <div class="task_info">
    <p class="task_time">${task.date}</p>
    <p class="task_heading">${task.description}</p>
    </div>`;
  }
  taskContainer.append(taskOption);

  const checkbox = document.getElementById(task.id);

  checkbox.addEventListener("change", (event) => {
    const taskId = event.target.id;
    const taskStatus = event.target.checked;
    let tasksArray = JSON.parse(localStorage.getItem("tasksArray")) || [];
    const taskIndex = tasksArray.findIndex((elem) => {
      return elem.id === taskId;
    });

    tasksArray[taskIndex].done = taskStatus;
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
    // console.log(`Changed task ${taskId} status to ${taskStatus}`);
    renderTasks();
  });
}

function renderTasks() {
  const tasksArray = JSON.parse(localStorage.getItem("tasksArray")) || [];
  const searchFilter = searchInput.value;
  let result;
  if (searchFilter) {
    console.log(`Rendering with filter ${searchFilter}`);
    result = tasksArray.filter((task) => {
      return task.description.includes(searchFilter);
    });
  } else {
    result = tasksArray;
  }
  taskContainer.textContent = "";
  result.forEach((task) => {
    renderOneTask(task);
  });
}

//логика взаимодействия с задачами в localStorage
// данные хранятся в виде массива объектов, где каждая задача -- объект
function getTasks() {
  const localStorageTasks =
    JSON.parse(localStorage.getItem("tasksArray")) || [];

  return localStorageTasks;
}

// создание объекта таски

function createTaskObject() {
  const currentTaskList = getTasks();

  const newTask = {
    id: "task_" + Math.random().toString(16).slice(2),
    date: taskDate.value,
    description: taskTitle.value,
    done: false,
  };

  currentTaskList.push(newTask);
  // console.log(`Added task: ${newTask}`);
  localStorage.setItem("tasksArray", JSON.stringify(currentTaskList));

  return newTask;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (taskTitle.value === "" || taskDate.value === "") {
    console.log("empty");
  } else {
    createTaskObject();
    renderTasks();
    taskTitle.value = "";
    taskDate.value = "";
  }
});

searchButton.addEventListener("click", () => {
  renderTasks();
});

searchInput.addEventListener("input", () => {
  renderTasks();
});

function deleteTask(taskId) {
  let tasksArray = JSON.parse(localStorage.getItem("tasksArray")) || [];
  const taskIndex = tasksArray.findIndex((elem) => {
    return elem.id === taskId;
  });
  tasksArray.splice(taskIndex, 1);
  localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
  console.log(`Deleted task ${taskId}`);
  renderTasks();
}

document.addEventListener("DOMContentLoaded", renderTasks);
