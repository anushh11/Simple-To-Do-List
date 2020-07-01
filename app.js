//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();

  //Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Check Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="far fa-check-square"></i>';
  completedButton.classList.add('completed-button');
  todoDiv.appendChild(completedButton);

  //Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="far fa-window-close"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);

  //Append Todo to TodoList
  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //delete to do 
  if (item.classList[0] === 'trash-button') {
    const todo = item.parentElement;

    //animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function () {
      todo.remove();
    })
  }

  //check mark
  if (item.classList[0] === 'completed-button') {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}