// import getdata from '../module/getData.js';

// function testCheckBoxValue(event) {
//   const data = getdata();
//   data.forEach((task) => {
//     if (task.completed !== event) {
//       task.completed = event;
//     }
//   });
//   localStorage.setItem('tasks', JSON.stringify(data));
// }

// export default testCheckBoxValue;
 function testCheckBoxValue(description, newCompletedStatus) {
  const todos = JSON.parse(localStorage.getItem('todos'));
  const todoToUpdate = todos.find((todo) => todo.description === description);
  todoToUpdate.completed = newCompletedStatus;
  localStorage.setItem('todos', JSON.stringify(todos));
  // fireEvent.click(document.querySelector(`input[value='${description}']`));
} export default testCheckBoxValue;