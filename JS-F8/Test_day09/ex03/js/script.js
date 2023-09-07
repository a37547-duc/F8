// // Xác định được hành động giữ và kéo chuột
// var btn = document.querySelector(".btn");

// var handleDrag = function (e) {
//   var left = e.clientX;
//   var top = e.clientY;
//   var css = {
//     postision: "relative",
//     top: `${top}px`,
//     left: `${left}px`,
//   };
//   Object.assign(btn.style, css);
// };
// var isDrag = false;
// btn.addEventListener("mousedown", function (e) {
//   if (e.which === 1) {
//     isDrag = true;
//   }
// });

// document.addEventListener("mouseup", function () {
//   isDrag = false;
// });
// document.addEventListener("mousemove", function (e) {
//   if (isDrag) {
//     handleDrag(e);
//   }
// });

// ////////////////////////////////////
// Xây dựng chức năng kéo thả

// Xác định được hành động giữ và kéo chuột
var btn = document.querySelector(".btn");
var handleDrag = function (e) {
  // console.log(e.clientX, e.clientY);
  var left = e.clientX;
  var top = e.clientY;
  var css = {
    position: "relative",
    top: `${top - offsetY - 10}px`,
    left: `${left - offsetX - 10}px`,
  };
  Object.assign(btn.style, css);
};
var isDrag = false;
var offsetX, offsetY;
btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDrag = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  }
});

document.addEventListener("mouseup", function () {
  isDrag = false;
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    handleDrag(e);
    // document.querySelector("html").style.cursor = "move";
  }
});

// Khi 1 element nào mà cho phép kéo thì chúng ta phải thay đổi con trỏ chuột
// để user họ biết là cái này kéo được hoặc dùng css
btn.addEventListener("mouseover", function () {
  btn.style.cursor = "move";
});
