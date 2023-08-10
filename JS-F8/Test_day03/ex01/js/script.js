// var welcome = 20;
// var getMessage = function (msg) {
//   console.log(`getMessage`);

//   var a = 10; // biến cục bộ hàm cha
//   // Định nghĩa hàm con
//   var display = function () {
//     console.log(msg);
//     console.log(a);
//     console.log(`${welcome}`);
//     var fake = 20;
//   };
//   // Gọi hàm con
//   display();
// };

// getMessage("F8");

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};
/*
Cần thực hiện 3 phép tính
10+5
10+20
10+30
*/
var add = sum(10); // return function
console.log(add(5));
console.log(add(20));
// closure

//setTimeout
// setTimeout(
//     function(name,email){
//         console.log(`Xin chao f8`, name, email);
//     }, 2000, "Hoàng an f8"
// )

//setInterval => Lặp đi lặp lại sau 1 khoảng thời gian

// var count = 0;
// var id = setInterval(function () {
//   console.log(++count);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

// Đệ quy
// var showNumber = function (n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

// Tính tổng s=1+2+3+4
var sum = function (n) {
  if (n === 1) {
    return 1;
  }
  //   return 1 / sum(n - 1) + 1 / sum(n - 2);
};
console.log(sum(2));

var fibonaci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
};
console.log(fibonaci(20));
