/*
    - Arrow Function => Hàm mũi tên

    // 1.Arrow function không có tham số

*/
// const getMessage = () => {
//   console.log("Hello");
// };
// getMessage();

// 2. Arrow function có 1 tham số
// const getMessage = (msg) => {
//   console.log(msg);
// };
// console.log("hello");

// 3. Arrow function có nhiều tham số
// const getMessage = (msg, type = "success") => {
//   console.log(msg, type);
// };
// getMessage("f8", "error");

// 4. Arrow function có return
// const getTotal = (a, b) => a + b;
// console.log(getTotal(10, 20));

// const getUser = () => ({
//   name: "Đức",
//   emial: "anhtupeo123@gmail.com",
// });
// console.log(getUser());

// 5. Lồng nhiều function trong Arrow Function
// const getTotal = (a) => (b) => a + b;
// const add = getTotal(10);
// console.log(add(20));

// const users = [
//   {
//     name: "FĐức",
//     email: "anhtupe123@gmail.com",
//   },
//   {
//     name: "FĐức 2",
//     email: "anhtupe123@gmail.com",
//   },
//   {
//     name: "FĐức 3",
//     email: "anhtupe123@gmail.com",
//   },
// ];
// const html = users
//   .map((user) => `<h3>${user.name}</h3> <h3>${user.email}</h3>`)
//   .join("");
// document.body.innerHTML = html;

/*
Nguyên tắc khi làm việc với arrow function
    - Arrow function không được sử dụng để thay thế function truyền thống
    - Không binding được this
    - Arrow function không biding được arguments
    - Arrow function thường không được sử dụng để tạo method cho object
    - Không có hoisting
    - Không được sử dụng để xây dựng Constructor
*/

var btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log(this);
});

/**
 * 1. Destructuring
 * 2. spread
 * 3. Enhance literal Object
 * 4. classes
 */
