import {
  addTodo, clearCompleted, renderTodoList, saveData, stopEdits,
  getTodoList,
} from './modules/todolist.js';
import './style.css';
import enterImage from './assets/images/icons/enter.png';
import reloadImage from './assets/images/icons/reload.png';

const form = document.querySelector('form');
const clearCompletedbtn = document.querySelector('#clear');
document.querySelector('#reloadBtn').src = reloadImage;
document.querySelector('#enterBtn').src = enterImage;

renderTodoList();
const body = document.getElementsByTagName('body')[0];
body.addEventListener('click', () => {
  stopEdits();
});

clearCompletedbtn.addEventListener('click', () => {
  clearCompleted();
});

//  add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const desc = document.querySelector('#description').value.trim();
  if (desc !== '') {
    const todo = {
      description: desc,
      completed: false,
      index: getTodoList().length + 1,
    };
    addTodo(todo, true);
    saveData();
    document.querySelector('#description').value = '';
  }
});
