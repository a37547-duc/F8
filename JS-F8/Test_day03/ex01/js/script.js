//Thứ tự tìm hiểu anonymous functions, scope and closures
// thunk javascript
// kỹ thuật debounce
// // event handel

// // Biến toàn cục
// var welcome = "Hoàng an f8";

// var getMesage = function (msg) {
//   console.log(`getMessage ${msg}`);

//   var a = 10; // Biến toàn cục của hàm cha

//   // định nghĩa hàm còn
//   var display = function () {
//     console.log(`Xin chào ${msg}`);
//     console.log(`a=${a}`);
//     console.log(`welcome=${welcome}`);
//     // gọi hàm còn
//     display();
//   };
// };
// getMesage("F8");

//////////////////////////////////////////////////

// Kỹ thuật Closure
var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

/*
Cần thực hiện 3 phép toán:
10+ 5
10+ 20
10 + 30
*/
var add = sum(10); // return function
console.log(add(5));
console.log(add(20));
console.log(add(30));

//////////////////////////////////////////////////

//setTimeout
// setTimeout(
//   function (name) {
//     console.log(`Xin chao f8`, name);
//   },
//   2000,
//   "Hoảng an f8"
// );

//setInterval
// Thường áp dụng để xây dụng bộ đếm
// var count = 0;
// var id = setInterval(function () {
//   console.log(++count);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

//////////////////////////////////////////////////

// Đệ Quy
var showNumbers = function (n) {
  console.log(n);
  if (n > 1) {
    showNumbers(n - 1);
  }
};
showNumbers(10);

// Tính tổng S=1+2+3+...n
var Total = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + Total(n - 1);
};
console.log(Total(10));

// fibonaci

var fibonaci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
};
console.log(fibonaci(10));
