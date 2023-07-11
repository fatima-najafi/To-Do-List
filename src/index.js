import "./style.css";
import images from "./assets/more.png";

const moreIcon = images;

const tasks = [
  {
    description: "Task 1",
    completed: false,
    index: 1,
  },
  {
    description: "Task 2",
    completed: false,
    index: 2,
  },
  {
    description: "Task 3",
    completed: false,
    index: 3,
  },
];
const renderTasks = () => {
  const todoList = document.querySelector("#TODO-List");

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const listItem = document.createElement("div");
    listItem.className = "list-item";
    listItem.innerHTML = ` 
    <input class="check-box" type="checkbox">
       <span> ${task.description} </span>
      <span><img src="${moreIcon}"></span>
    `;

    if (task.completed) {
      listItem.classList.add("completed");
    }

    todoList.appendChild(listItem);

    const hr = document.createElement("hr");
    todoList.appendChild(hr);
  });
};

document.addEventListener("DOMContentLoaded", renderTasks);
