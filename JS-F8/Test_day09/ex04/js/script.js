// // Event Object
// // event.target

// // var btn = document.querySelector(".btn");
// // var content = document.querySelector(".content");
// // btn.addEventListener("click", function (e) {
// //   //   console.log(this);
// //   //   console.log(e.target);
// //   //   content.innerHTML = `<button class="remove>Xóa</button>`;
// //   //   var removeBtn = content.querySelector(".remove");
// //   //   removeBtn.addEventListener("click", function () {
// //   //     this.remove();
// //   //   });
// // });

// // content.addEventListener("click", function (e) {
// //   if (e.target.classList.contains("remove")) {
// //     e.target.remove();
// //   }
// // });

// // 2. event.preventDefault()
// /*
//     - Ngăn hành động mặc định của thẻ html
// */
// var link = document.querySelector(".link");
// var menu = document.querySelector(`.context-menu`);
// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(this.href);
// });

// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
//   menu.style.display = "block";
//   menu.style.top = `${e.clientY}px`;
//   menu.style.left = `${e.clientX}px`;
// });

//////////////////////////////////////////////////

// Event Object

// 1. Event.target
// bạn tác động vào đâu thì nó lấy ở đó, nó giống với this khi bên trong không ko element nào
var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click", function (e) {
  // console.log(e.target);
  content.innerHTML = `<button class="remove">Xóa</button>`;
});

content.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    e.target.remove();
  }
});

// 2. event.preventDefault()
/*
  Ngăn hành động mặc định của thẻ html
*/
var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  // console.log(this.href);
  e.preventDefault();
});

var menu = document.querySelector(".context-menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  menu.style.display = "block";
  menu.style.top = `${e.clientY - 10}px`;
  menu.style.left = `${e.clientX - 10}px`;
});

// 3. event.stopPropagation()
// Ngăn hành động nổi bọt của thẻ html con
document.addEventListener("click", function () {
  menu.style.display = "none";
});
menu.addEventListener("click", function (e) {
  e.stopPropagation();
});
