const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const AddTodo = prompt("Add Todo");

  Todo = NewTodo(AddTodo);

  render(Todo, list);

  countitemTodo(itemCountSpan);

  countuncheckedTodo(uncheckedCountSpan);

  const checkbox = Todo.lastElementChild

  checkbox.addEventListener("click", function (event) {
    if (event.target.checked) {
      countcheckedTodo(uncheckedCountSpan)

    } else {
      countuncheckedTodo(uncheckedCountSpan)
    }
  })

}

function NewTodo(AddTodo) {
  const li = document.createElement("li")

  const span = document.createElement("span")

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox")

  span.textContent = AddTodo;

  render(span, li)

  render(checkbox, li)

  return li;
}

function render(element, destination) {
  destination.appendChild(element)
}
function countitemTodo(element) {
  count(element)
}

function countuncheckedTodo(element) {
  count(element)
}

function count(element) {
  let count = Number(element.innerHTML)
  count++
  element.innerHTML = count.toString();
}

function countcheckedTodo(element) {
  let count = Number(element.innerHTML)
  count--
  element.innerHTML = count.toString();
}