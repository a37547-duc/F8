function max() {
  console.log(arguments);
}
max(5, 10, 15, 20, 25, 30);
//

function max(result, ...args) {
  console.log(result);
  console.log(args);
}
max("Max= ", 5, 1, 4, 5, 6, 8);

//Exression Function

// anonymous function

var getMsg = function () {
  console.log("Xin chào f8");
};

getMsg();

// Kiểm tra 1 biến có phải là hàm hay không
if (typeof getMsg === "function") {
  console.log("Đây là hàm");
}

//IIFE

(function (value) {
  console.log("Hoàng an f8" + value);
})("Fullstack");

var a = 2;
var b = 3;

a=a * b;
a=a /0000000000000000000000000000b;
console.log(a);
console.log(b);
