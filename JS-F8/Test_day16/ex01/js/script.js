/*
    SHADOW DOM

*/
// var host = document.querySelector(".content");
// var root = host.attachShadow({
//   mode: "open",
// });
// console.log(root);

// root.innerHTML = `<h1>Học lập trình để đi làm</h1>`;
// var style = document.createElement("style");
// style.textContent = `
// h1{
//     color:red
// }`;
// root.prepend(style);

///////////////////////////////
component.create("todo-item", function () {
  var doName = this.innerText;
  var templateHtml = `<div class="todo"><input type="checkbox" /> <span>${doName}</span></div> `;
  var template = document.createElement("template");
  template.innerHTML = templateHtml;

  var templateNode = template.content.cloneNode(true);
  templateNode.children[0].children[0].addEventListener("click", function () {
    console.log("sui");
  });

  var shadow = this.attachShadow({
    mode: "open",
  });
  shadow.append(templateNode);
  //   shadow.innerHTML = `<div class="todo">
  //   <input type="checkbox" /> <span>${doName}</span> </div>`;
  var style = document.createElement("style");
  style.textContent = `
  .todo{
    border:1px solid black;
    margin:5px 0;
    padding:5px;
  }
  `;
  shadow.prepend(style);
});
