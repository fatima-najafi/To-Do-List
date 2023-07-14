import moreImage from '../assets/images/icons/more.png';
import binImage from '../assets/images/icons/bin.png';

const todoListElement = document.querySelector('#todo-list');
const todoStorageName = 'todolist';
let todoList = [];

function saveData() {
  localStorage.setItem(todoStorageName, JSON.stringify(todoList));
}

function getTodoList() {
  return todoList;
}

function clearCompleted() {
  for (let index = todoList.length - 1; index >= 0; index -= 1) {
    if (todoList[index].completed) {
      todoListElement.childNodes[index].remove();
    }
  }
  todoList = todoList.filter((_todo) => !_todo.completed);
  saveData();
}

function renumberIndex() {
  for (let index = todoList.length - 1; index >= 0; index -= 1) {
    todoList[index].index = index + 1;
  }
}

function stopEdits() {
  todoListElement.childNodes.forEach((n) => {
    if (n.classList.contains('bg-brown')) {
      n.classList.toggle('bg-brown');
      n.childNodes[0].childNodes[1].classList.toggle('hidden');
      n.childNodes[0].childNodes[2].classList.toggle('hidden');
      n.childNodes[1].childNodes[0].classList.toggle('hidden');
      n.childNodes[1].childNodes[1].classList.toggle('hidden');
    }
  });
}

function updateTodo(todo) {
  const index = todoList.indexOf(todo);
  const item = todoList[index];
  item.description = todo.description;
  item.completed = todo.completed;
  saveData();
}

function removeTodo(todo) {
  const index = todoList.indexOf(todo);
  todoList = todoList.filter((_todo) => _todo.index !== todo.index);
  renumberIndex();
  saveData();
  todoListElement.removeChild(todoListElement.childNodes[index]);
}

function addTodo(todo, addToList = false) {
  if (addToList) todoList.push(todo);
  const divTodo = document.createElement('div');
  divTodo.className = 'todo bg';

  const divContainer1 = document.createElement('div');
  const divContainer2 = document.createElement('div');
  divContainer1.className = 'w-auto';
  divContainer2.className = 'w-auto';

  const elCompleted = document.createElement('input');
  const elDescription = document.createElement('label');
  const elDescriptionEditor = document.createElement('input');
  const img = document.createElement('img');

  elCompleted.type = 'checkbox';
  elDescriptionEditor.type = 'text';

  elCompleted.checked = todo.completed;
  elDescription.textContent = todo.description;
  elDescriptionEditor.value = todo.description;
  elDescriptionEditor.className = 'hidden borderless';
  elDescription.className = `${todo.completed ? 'cancelled' : ''}`;
  img.src = moreImage;

  const removeBtn = document.createElement('img');
  removeBtn.src = binImage;
  removeBtn.className = 'hidden';

  const startEdit = () => {
    divTodo.classList.toggle('bg-brown');
    elDescription.classList.toggle('hidden');
    elDescriptionEditor.classList.toggle('hidden');
    img.classList.toggle('hidden');
    removeBtn.classList.toggle('hidden');
    elDescriptionEditor.focus();
  };

  img.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    startEdit();
  });
  elDescription.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    startEdit();
  });

  removeBtn.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    removeTodo(todo);
  });
  elDescriptionEditor.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
  });
  elDescriptionEditor.addEventListener('keypress', (event) => {
    if (event.key === 'Esc') {
      stopEdits();
    } else if (event.key === 'Enter') {
      divTodo.classList.toggle('bg-brown');
      elDescription.textContent = elDescriptionEditor.value;
      todo.description = elDescriptionEditor.value;
      updateTodo(todo);
      elDescription.classList.toggle('hidden');
      elDescriptionEditor.classList.toggle('hidden');
      img.classList.toggle('hidden');
      removeBtn.classList.toggle('hidden');
    }
  });
  elCompleted.addEventListener('change', (event) => {
    const completed = event.target.checked;
    todo.completed = completed;
    updateTodo(todo);
    elDescription.classList.toggle('cancelled');
  });
  divContainer1.appendChild(elCompleted);
  divContainer1.appendChild(elDescription);
  divContainer1.appendChild(elDescriptionEditor);
  divContainer2.appendChild(img);
  divContainer2.appendChild(removeBtn);
  divTodo.appendChild(divContainer1);
  divTodo.appendChild(divContainer2);
  todoListElement.appendChild(divTodo);
}

function renderTodoList() {
  const storedvalue = localStorage.getItem(todoStorageName);
  todoListElement.textContent = '';
  todoList = [];
  if (storedvalue !== null) {
    todoList = JSON.parse(storedvalue);
  }
  todoList.forEach((todo) => {
    addTodo(todo);
  });
}

export {
    clearCompleted, stopEdits, addTodo, renderTodoList, saveData,
    getTodoList,
};