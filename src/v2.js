const myTasks = [];

const form = document.querySelector("#form");
const inputTask = document.querySelector("#inputTask");
const tasksContainer = document.querySelector("#tasksContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputTask.value !== "") {
    myTasks.push(inputTask.value);
    inputTask.value = "";

    tasksHTML();
  }
});

function tasksHTML() {
  cleanTasks();
  myTasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onClick=${myFunction} />
      ${task}
    `;
    tasksContainer.appendChild(li);
  });
}

function cleanTasks() {
  while (tasksContainer.firstChild) {
    tasksContainer.removeChild(tasksContainer.firstChild);
  }
}

function myFunction() {
  console.log("click");
}
