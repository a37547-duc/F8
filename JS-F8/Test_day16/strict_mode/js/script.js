"use strict"; // Bật chế độ nhgieem ngặt cho cả file
// a = 10;
// console.log(a);

function getMsg(msg) {
  console.log(msg);
}
getMsg();

// Javascript Hoisting

/*
    - Cơ chế mặc địng cua javascript
    - Tự động đẩy khai báo biến và hàm lên trước đoạn code thực thi
    - Chỉ đẩy khai báo không đẩy giá trị
    - Với function: chỉ áp dụng với function declaration (Không áp dụng với function expression)
    - Không áp dụng với từ khóa const, let
*/
// a = 10;
// console.log(a);
// var a;
// console.log(a);
// var a = 10;
getMesssage();

function getMesssage() {
  console.log("he");
}
