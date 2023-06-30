const form = document.querySelector('#add-task');
const taskList = document.querySelector('#todo-list');
const input = document.querySelector('task')

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

//remove button
taskList.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
  else if (e.target.tagName === 'LI') {
    e.target.classList.toggle('btask')
  }
});
//end remove botton
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const newListInput = document.querySelector("#task");
  const removeButton = document.createElement("button");
  const newLi = document.createElement("li");
  removeButton.innerText = "Remove";
  newLi.innerText = newListInput.value;
  inputvalue='';
  newLi.appendChild(removeButton);
  taskList.appendChild(newLi);
});

//cross line
taskList.addEventListener("click", function(e) {
  const targetTagToLowerCase = e.target.tagName.toLowerCase();
  if (targetTagToLowerCase === "li") {
    e.target.style.textDecoration = "line-through red";
  } else if (targetTagToLowerCase === "button") {
    e.target.parentNode.remove();
  }
});
//end cross line