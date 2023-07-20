import getdata from '../module/getData.js';

const testCheckBoxValue = (description, newStatus) => {
  const todos = getdata();
  todos.forEach((todo) => {
    if (todo.description === description) {
      todo.completed = newStatus;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(todos));
};
export default testCheckBoxValue;
