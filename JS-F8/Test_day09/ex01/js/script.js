// // DOM CSS
// /*
//     - Can thiệp css vào các element thông qua thuộc tính style
// */
// var content = document.querySelector(".content");
// // content.style = "color:red; font-weight:bold";

// // console.log(content.style);
// // content.style.color = "red";
// // content.style.textDecoration = "line-through";

// var css = {
//   color: "red",
//   fontweight: "bold",
//   textDecoration: "line-through",
// };

// // Object.assign(content.style, css);

// // Bài tập: Thêm các thuộc tính sau
// /*
// background-image
// transition: all 0.4s ease
// transform: translate(20px)
// */
// // var cssValue = {
// //   backgroundImage: `url("")`,
// //   transiton: `all 0.4s ease`,
// //   tranform: `translate(20px)`,
// //   color: `red`,
// // };
// // Object.assign(content.style, cssValue);

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   if (!content.style.display) {
//     content.style.display = "none";
//     btn.innerText = "Hiện";
//   } else {
//     content.style.display = "";
//     btn.innerText = "Ân";
//   }
// });

///////////////////////////////////////////////////////////////////////////////////

// DOM CSS: Can thiệp vào các element thông qua các thuộc tính style

var content = document.querySelector(".content");
// content.style = "color:red";

// console.log(content.style);
// content.style.fontWeight = "bold";
// content.style.textDecoration = "line-through";

// var css = {
//   color: "red",
//   fontWeight: "bold",
//   textDecoration: "line-through",
//   fontStyle: "italic",
// };
// Object.assign(content.style, css);

// Bài tập: Thêm các thuộc tính sau

/*
    background-image:url
    transiton: all 0.4s ease
    transform: translateX(20px)
*/
// var cssStyle = {
//   backgroundImage: `url("https://picsum.photos/200/300")`,
//   transition: "all 0.4s ease",
//   transform: "translateX(80px)",
//   color: `red`,
// };
// Object.assign(content.style, cssStyle);

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log(content.computedStyleMap.display);
  if (!content.style.display) {
    content.style.display = "none";
    btn.innerText = "Hiện";
  } else {
    content.style.display = "";
    btn.innerText = "Ân";
  }
});
