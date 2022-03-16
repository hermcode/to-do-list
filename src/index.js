// Form
const form = document.querySelector("#form");
const inputTask = document.querySelector("#inputTask");
const orderBtn = document.querySelector("#orderBtn");

// Date
const dateNumber = document.querySelector("#dateNumber");
const dateMonth = document.querySelector("#dateMonth");
const dateYear = document.querySelector("#dateYear");
const dateText = document.querySelector("#dateText");

// TaskContainer
const tasksContainer = document.querySelector("#tasksContainer");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
};

const addNewTask = (event) => {
  event.preventDefault();
  const value = inputTask.value;

  if (!value) return;

  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);
  task.textContent = value;
  tasksContainer.prepend(task);
  event.target.reset();
};

const changeTaskState = (event) => {
  event.target.classList.toggle("done");
};

const order = () => {
  const done = [];
  const toDo = [];

  tasksContainer.childNodes.forEach((el) => {
    el.classList.contains("done") ? done.push(el) : toDo.push(el);
  });

  return [...toDo, ...done];
};

const renderOrderedTasks = () => {
  order().forEach((el) => tasksContainer.appendChild(el));
};

form.addEventListener("submit", addNewTask);
orderBtn.addEventListener("click", renderOrderedTasks);
setDate();
