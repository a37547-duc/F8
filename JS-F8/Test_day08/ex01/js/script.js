// var handelClick = function () {
//   console.log("Đăng ký khóa học thành công");
// };
// var handelInput = function () {
//   console.log("Bạn đang gõ");
// };
// /*
//     - Gán sự kiện thông quá DOM
//     - Gán dựa vào thuộc tín HTML
//     => Event Handler
// Nhược điểm:
//  - Trong 1 element => Không gán được 2 sự kiện giống nhau
// */

// var btn = document.querySelector(".btn");

// // Event Listener
// var handleClick = function () {
//   console.log("Hành động 1");
// };
// btn.addEventListener("click", handelClick);

// btn.addEventListener("click", function () {
//   console.log("Hành động 2");
// });

// // 2. removeEventListener(type, listener)
// // => Loại bỏ listener khỏi element
// var finishBtn = document.querySelector(".finish");
// finishBtn.addEventListener("click", function () {
//   console.log("Đã hoàn thành");
//   btn.removeEventListener("click", handelClick());
// });

///////////////////////////////////////////////////////////////////

var handelClick = function () {
  console.log("Đăng ký khóa học thành công");
};

var handelInput = function () {
  console.log("Bạn đang gõ");
};
/*
- Gán sự kiện thông qua DOM
- Gán dựa vào thuộc tính HTML
=> Event Handler

Nhược điểm:
- Trong 1 element => Khong gán đucợ 2 sự kiện giống nhau
*/

var btn = document.querySelector(".btn");
// btn.onclick = function () {
//   console.log("Hành động 1");
// };

// btn.onclick = function () {
//   console.log("Hành động 2  ");}; // chỉ nhận hành động 2, bởi vì onclick được coi là 1 key, đọc từ trên xuống dưới

// Làm sao để gán được 1 sự kiện giống nhau nhưng thực hiện 2 hành động
// 1. TÌM HIỂU Event Listener

// btn.addEventListener("click", function () {
//   console.log("Hành động 1");
// });
// btn.addEventListener("click", function () {
//   console.log("Hành động 2");
// });

// Trong 1 số tính huống là listener mà sử dụng ở nhiều nơi - thì nên tách ra thành 1 hàm
// vd:
var handelClick = function () {
  console.log("Hành động 1");
};
btn.addEventListener("click", handelClick);

// 2. TÌM HIỂU removeEventListener()
// => Loại bỏ listener ra khỏi element
var finishBtn = document.querySelector(".finish");
finishBtn.addEventListener("click", function () {
  console.log("Đã hoàn thành");
  btn.removeEventListener("click", handelClick);
});
