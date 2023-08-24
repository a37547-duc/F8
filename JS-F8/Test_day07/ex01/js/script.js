// // Number: Kiểu dữ liệu nguyên thủy
// console.log([Number]);

// var a = 10.5;
// console.log(a, typeof a);

// // Kiểm tra 1 biến có phải là số hay không ?
// if (typeof a === "number") {
//   console.log("đây là số");
//   // Kiểm tra số nguyên
//   if (Number.isInteger(a)) {
//     console.log("Đây là số nguyên");
//   } else {
//     console.log("Đây không phải là số nguyên");
//   }
// } else {
//   console.log("đây không phải là số");
// }

// // Số NaN(Not A Number)
// /*
//     - Ép kiểu thất bại
//     - Tính toán các biểu thức số học mà có 1 toán hạng mang giá trị NaN hoặc do quá trình tự động
//     ép kiểu khi thực hiện phép toán
// */
// var a = NaN;
// console.log(a, typeof a);

// var a = "f8";
// a = +a;
// console.log(a);

// var a = "F8";
// var b = 10;
// var c = a - b; // -. *, /, %, ++, --
// console.log(c);

// // Kiểm tra có phải NaN
// if (!Number.isNaN(c)) {
//   console.log(c);
// } else {
//   console.log("Không tính toán được");
// }

// ////////// Số infinity
// console.log(10 / 0);
// // Kiểm tra số Infinity
// if (a === Infinity) {
//   console.log("Đây là số Infinity");
// }
// var a = 15;
// if (typeof a === "number" && !Number.isNaN(a) && a !== Infinity) {
//   console.log("Đây là số");
// } else {
//   console.log("Đây không phải là số");
// }

// // Ép kiểu
// var a = "10a123";
// // => Ép sang kiểu số nguyên
// a = Number.parseInt(a);
// console.log(a);

// // Ép sang kiểu số thực
// var a = "10e12";
// var a = Number.parseFloat(a);
// console.log(a);

// // Ép kiểu số(Số nguyên, số thực)
// // Nếu gặp 1 chuỗi thì trả về NaN
// var a = "10a";
// a = Number(a);
// console.log(a);

// ////////////////////// BÀI TẬP

// // Tính tổng các số chắn của mảng sau
// var numbers = ["10", 2, 1, 9, 8, 4, true, false, undefined, -Infinity];
// var total = function (number) {
//   var sum = 0;
//   for (var i = 0; i < number.length; i++) {
//     if (
//       typeof number[i] === "number" &&
//       !Number.isNaN(number[i]) &&
//       number[i] !== Infinity
//     ) {
//       if (number[i] % 2 === 0) {
//         sum += number[i];
//       }
//     }
//   }
//   return sum;
// };
// console.log(total(numbers));
// /////////////////////////////////

// // toFixed => Lấy chữ số phần thập phân
// var a = 10.67;
// console.log(a);
// a = a.toFixed(0);
// console.log(a);

// // toString() => Chuyển số thành chuỗi
// var a = 123;
// a = a.toString();
// console.log(a);

// // Định dạng số
// var price = 12990800;
// price = price.toLocaleString("vi");
// console.log(price);

// var price = 12990800;
// var price = price.toLocaleString("vi", {
//   style: "currency",
//   currency: "USD",
// });
// console.log(price);

// console.log(Math);
