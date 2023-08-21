// // var users = ["An", "Tâm", "Dũng", "Hùng"];
// // console.log(users);

// // var users=[];// mảng rỗng

// var users = new Array("An", "Tâm", "Dũng", "Hùng");
// console.log(users);
// console.log(Array.prototype);
// console.log([Array]);
// //Những phương thức, thuộc tính build trực tiếp từ hàm tạo => Array.tenPhuongThuc()

// if (Array.isArray(users)) {
//   console.log("Đây là mảng");
// } else {
//   console.log("Đây không phải là mảng");
// }

// //Lấy số lượng phần tử của mảng
// console.log(users.length);

// // 1. Thêm phần tử mới vào mảng
// users[users.length] = "Đức";
// console.log(users);

// // 2. Truy cập vào 1 phần tử
// console.log(users[1]);

// // 3 Sửa 1 phần tử
// users[1] = "Trung";
// console.log(users[1]);

// // 4. Duyệt mảng

// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (var index in users) {
//   console.log(users);
// }

// for (var user of users) {
//   console.log(user);
// }

// // 5. Xóa mảng

// var indexDel = 1;
// var result = [];
// for (var index in users) {
//   if (+indexDel === +index) {
//     continue;
//   }
//   result[result.length] = users[index];
// }
// console.log(users);
// console.log(result);

// // Thêm 1 phần tử vào đầu mảng
// // var value = "Qúy";
// // console.log(users);

// // for (var i = users.length; i >= 0; i--) {
// //   // users[i] = value;
// //   users[i + 1] = users[i];
// // }
// // console.log(users);

// // 6. at() => Truy cập 1 phần tử theo index
// console.log(users.at(1));

// // 7. concat(arr1, arr2,...) nối mảng

// console.log(users.concat([1, 2, 3], [1, 2, 3]));
// // 8. indexOf(value) => Tìm vị trí xuất hiện đầu tiên của phần tử trong mảng

// console.log(users.indexOf("An"));

// // 8. lastIndexOf(value) => Tìm vị trí xuất hiện cuối cùng của phần tử trong mảng
// console.log(users.lastIndexOf("Trubg"));

// // 9. includes(value) => Tìm phần tử trong mảng và trả về true/false
// console.log(user.includes("Tâm"));

// // 10. slice(start, end) => cắt mảng từ vị trí start đến end và trả về 1 mảng

// console.log(users.slice(0, 3));

// // 11. join() => Nối mảng thành chuỗi
// console.log(users.join(" "));

// // 12. push() => Thêm phần tử vào cuối mảng và thay đổi mảng ban đầu, trả
// // về số lượng phần tử sau khi thêm
// var count = users.push("Hà");
// console.log(users);
// console.log(count);

// // 13. unshift() => Thêm phần tử vào đầu mảng
// var count = users.unshift("Dương", "Dương 1");
// console.log(users);

// // 14. pop() => Xóa phần tử cuỗi mảng và trả về giá trị phần tử vừa xóa
// var value = users.pop();
// console.log(users);

// // 15. shift() => Xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa

// // 16. splice(index, count) => Xóa count phần tử từ index
// users.splice(0, 3, users.pop());
// console.log(users);

// // 17. reverse();
// users.reverse();
// console.log(users);

// // 18. sort() => Sắp xếp mảng theo thứ tự tăng dần
// // Lưu ý không áp dụng với số

// users.sort().reverse();
// console.log(users);

// // cách áp dụng với số
// var numbers = [5, 10, 1, 2, 3, 6];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

// // Bài 1: Lấy tên của họ và tên
// var fullname = "Tạ Hoàng An";
// fullname = fullname.split(" ").slice(-1).join();
// console.log(fullname);

// // Bài 2: Sắp xếp khách hàng tăng dần theo tên

// var customers = [
//   "Nguyễn Dương",
//   "Trần Xuân Bách",
//   "Dương Đức Hiệp",
//   "Nguyễn Văn Khoa",
//   "Tạ Hoàng An",
// ];

// var getFirstName = function (fullName) {
//   return fullname.split(" ").slice(-1).join();
// };
// customers.sort(function (a, b) {
//   if (getFirstName(a) < getFirstName(b)) {
//     return -1;
//   }
// });
// console.log(customers);
/////////////////////////////////////////////////////////////////////////////////

// Khai báo
var users = ["Đức", "Trung", "Tâm", "An"];
console.log(users);

// Cách khai báo t2
// var users=new Array("Đức", "Trung", "Tâm", "An");
// console.log(users);

var mang_rong = []; // Khai báo mảng rỗng
console.log(Array.prototype);
console.log(Array); // ra cái native code
console.log([Array]);
// Những phương thức, thuộc tính build trực tiếp hàm tạo => Array.tenPhuongThuv()

// KIỂM TRA 1 BIẾN CÓ PHẢI LÀ MẢNG HAY KHÔNG
if (Array.isArray(users)) {
  // Sử dụng isArray để kiểm tra có phải mảng hay không
  console.log("Đây là mảng");
} else {
  console.log("Không phải là mảng");
}

// LẤY SỐ LƯỢNG PHẦN TỬ CỦA MẢNG
console.log(users.length);

// CÁCH THAO TÁC VỚI MẢNG

// 1. THÊM PHẦN TỬ MỚI VÀO MẢNG
users[4] = "Mai";
users[users.length] = "Toàn";
console.log(users);

// 2. TRUY CẬP VÀO 1 PHẦN TỬ
console.log(users[0]);
// lưu ý: nếu truy cập vào 1 cái không tồn tại thì undefined

// 3. SỬA 1 PHẦN TỬ
users[0] = "Huy";
console.log(users);

// 4. DUYỆT MẢNG
for (var i = 0; i < users.length; i++) {
  console.log(users[i]);
}
// cách 2
for (var index in users) {
  console.log(users[index]);
}
// cách 3
for (var user of users) {
  console.log(user);
}

// 5. XÓA MẢNG
var indexDel = 1;
var result = [];
for (var index in users) {
  if (+indexDel === +index) {
    continue;
  }
  result[result.length] = users[index];
}
console.log(result);
console.log(users);

// BÀI TẬP: Thêm 1 phần tử vào đầu mảng
var value = "Qúy";
console.log(users);

var newArr = [];
newArr[newArr.length] = value;
for (var index in users) {
  newArr[newArr.length];
}
// Cách 2 sử dụng concat để nối chuỗi với mảng
const originalArray = [2, 3, 4];
const newItem = 1;

const newArray = [].concat(newItem, originalArray);
console.log(newArray); // Output: [1, 2, 3, 4]
