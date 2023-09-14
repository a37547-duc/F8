var todo = document.querySelector(".todo");
var todoList = todo.querySelector(".todo-list");
var todoForm = todo.querySelector("form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputEl = this.children[0];
  var inputValue = inputEl.value;

  //   todoList.innerHTML += `<p>${inputValue} <span>Xóa</span></p>`;
  //   inputEl.value = "";

  var p = document.createElement("p");
  p.innerText = inputValue;
  var span = document.createElement("span");
  span.innerText = "Xóa";
  p.append(span);
  todoList.append(p);
  inputEl.value = "";
});

var content = document.querySelector(".content");
console.log(content.children);
console.log(content.childNodes);

/*
querySelectorAll()
childNodes
parentNode
*/
