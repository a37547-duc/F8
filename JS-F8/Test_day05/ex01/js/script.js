// console.log(Array.prototype);

// // 1. fill() => Cập nhật tất cả các phần tử của mảng thành 1 giá trị
// var users = ["An", "Thành", "Tâm", "Nguyễn"];
// // users.fill("f8");
// console.log(users);

// // 2. forEach(callback) =>Duyệt qua từng phần tử và trả về element, index trong callback
// users.forEach(function (users, index) {
//   console.log(users, index);
// });

// // 3. map(callback)
// /*
//     Duyệt qua từng phân tử trong mảng, trả về element, index trong callback
//     - Trả về 1 mảng mới chính là return của callback
//     - Số lượng phần tử của mảng mới bằng số lượng phần tử của mảng ban đầu
// */
// var newArr = users.map(function (user, index) {
//   console.log(user, index);
//   return `<h3>${index}-${user}</h3>`;
// });
// console.log(newArr);

// // 4. some(callback)
// /*
// - Gía trị trả về là true/false
// - Trả về true nếu: Có ít nhất 1 lần lặp return true
// - Trả về false nếu: Tất cả các lần lặp không phải return true
// - Vòng lặp sẽ chạy tới khi nào có return true sẽ dừng
// */
// var number = [1, 2, 3, 5, 7, 9];
// var check = number.some(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

// // 5. Vòng lặp every(callback)
// /*
// - Trả về true/false
// - Trả về true nếu, tất cả các lần lặp return true
// - trả về false nếu, có ít nhất 1 lần lặp không return true
// */
// var number = [`2`, 4, 6, 8, 10];
// // => Kiểm tra mảng trên có phải là mảng chứa số chẵn không
// var check = number.every(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

// // 6. filter(callback)
// /*
// - Trả về 1 mảng mới
// - Mảng mới chính là phần tử của mảng cũ mà được return true
// - Nếu return không phải là true/false => Aps dụng truthy và falsy
// */
// var newArr = users.filter(function (user) {
//   if (user == "An" || user === "Hùng") {
//     return true;
//   }
// });
// console.log(newArr);

// var customers = [
//   "Nguyễn Dương",
//   "Trần Xuân Bách",
//   "Dương Đức Hiệp",
//   "Nguyễn Văn Khoa",
//   "Tạ Hoàng An",
//   "Nguyễn Hoàng Anh",
// ];
// var keyword = "an";
// // Tìm trong mảng trên có tên khách hàng nào chứa từ khóa thì sẽ trả về 1 mảng

// var customersName = customers.filter(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(customersName);

// // 7. find(callback)
// /*
// - Cách hoạt động giống filter nhưng chỉ trả về 1 phần tử đầu tiên

// */
// var customersName = customers.find(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(customersName);

// // 8. findLast()
// var customers = [
//   "Nguyễn Dương",
//   "Trần Xuân Bách",
//   "Dương Đức Hiệp",
//   "Nguyễn Văn Khoa",
//   "Tạ Hoàng An",
//   "Nguyễn Hoàng Anh",
// ];
// var keyword = "an";
// var customersName = customers.findLast(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(customersName);

// // 9. findIndex(callback)
// /*
// Trả về index đầu tiên
//  */
// var customers = [
//   "Nguyễn Dương",
//   "Trần Xuân Bách",
//   "Dương Đức Hiệp",
//   "Nguyễn Văn Khoa",
//   "Tạ Hoàng An",
//   "Nguyễn Hoàng Anh",
// ];
// var keyword = "an";
// var customersName = customers.findIndex(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(customersName);

// // 10. findLastIndex(callback) // trả về index cuối cùng

// var customers = [
//   "Nguyễn Dương",
//   "Trần Xuân Bách",
//   "Dương Đức Hiệp",
//   "Nguyễn Văn Khoa",
//   "Tạ Hoàng An",
//   "Nguyễn Hoàng Anh",
// ];
// var keyword = "an";
// var customersName = customers.findLastIndex(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(customersName);

// /////////////////// Ví dụ

// var users = [
//   ["Hoàng An", "hoangan.web@gmail.com", 31],
//   ["Nguyễn Dương", "duong@gmail.com", 19],
//   ["Trần Xuân Bâck", "back@gmail.com", 25],
// ];
// // Yêu cầu: Tăng thêm 2 tuổi cho user có email là duong@gmail.com

// var gmails = users.map(function (user) {
//   if (user[1] === "duong@gmail.com") {
//     user[2] += 2;
//   }
//   return user;
// });
// console.log(gmails);

//////////////////////////////////////////////////////////////////////////

console.log(Array.prototype);

// 1. fill() => Cập nhật tất cả các phần tử của mảng thành 1 giá trị
// thường được dùng để reset dữ liệu
var users = ["An", "Thành", "Tâm", "Nguyễn"];
// users.fill("F8");
console.log(users);

// 2. forEach(callback) => Duyệt qua từng phần tử và trả về element, index trong callback
users.forEach(function (user, index) {
  console.log(user, index);
});

// 3. map(callback) =>
// Thường được sử dụng để thay đổi mảng ban đầu
// LƯU Ý
/*
  Duyệt qua từng phần tử trong mảng, trả về element, index trong callback
  - Trả về 1 mảng mới chính là return của callback
  - Số lượng phần tử của mảng mới bằng số lượng phần tử của mảng ban đàu
*/
var newArr = users.map(function (user, index) {
  console.log(user, index);
  return `<h3>${index}- ${user}</h3>`;
});
console.log(newArr);

// 4. some(callback)=>
/*
  Gía trị của hàm some là true/false
  - Trả về true nếu: có ít nhất 1 lần lặp return true
  - Trả về false nếu: Tất cả các lần lặp không phải là return true
  - Vòng lặp sẽ chạy tới khi nào có return true thì sẽ dừng
*/
var numbers = [1, 2, 3, 5, 7, 9];
// Kiểm trả trong mảng có số chắn không
var check = numbers.some(function (number) {
  if (number % 2 === 0) {
    return true;
  }
});
console.log(check);

// 5. every(callback)
/*
- Trả về true/false
- Trả về true nếu tất cả các lần lặp return true
- Trả về false nếu: có ít nhất 1 lần lặp không return true
*/
var numbers = ["2 ", 4, 6, 8, 10];
// Kiểm tra mảng trên có phải tất cả là số chẵn không?

var check = numbers.every(function (number) {
  if (number % 2 === 0) {
    return true;
  }
});
console.log(check);

// 6. filter(callback)
/*
  - Trả về 1 mảng mới
  - Mảng mới chính là phần tử của mảng cũ mà được return true
  - Nếu return không phải là true/false => áp dụng truthy và falsy
*/
// chính là bài toán tìm kiếm
var newArr = users.filter(function (user) {
  if (user == "An" || user === "Tâm") {
    return true;
  }
});
console.log(newArr);

// 7. find(callback)
/*
  Cách hoạt động giống như filter nhưng chỉ trả về 1 phần tử đầu tiên
*/

var customer = [
  "Nguyễn Dương",
  "Trần xuân bách",
  "Nguyễn Hoàng an",
  "Dương Đức Hiệp",
  "Đỗ Văn Khoa",
  "Tạ Hoàng An",
];
var keyword = "an";
// Tìm trong mảng trên có tên khách hàng nào chứa từ khóa trả về 1 mảng
var checkName = customer.find(function (user) {
  if (user.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  }
});
console.log(checkName);

// 8. findLast(callback)
// Cách hoạt động giống như filter nhưng chỉ trả về 1 phần tử cuối cùng
var customer = [
  "Nguyễn Dương",
  "Trần xuân bách",
  "Nguyễn Hoàng an",
  "Dương Đức Hiệp",
  "Đỗ Văn Khoa",
  "Tạ Hoàng An",
];
var keyword = "an";
// Tìm trong mảng trên có tên khách hàng nào chứa từ khóa trả về 1 mảng
var checkName = customer.findLast(function (user) {
  if (user.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  }
});
console.log(checkName);

// 9. findIndex(callback)
// Trả về index đầu tiên
var customer = [
  "Nguyễn Dương",
  "Trần xuân bách",
  "Nguyễn Hoàng an",
  "Dương Đức Hiệp",
  "Đỗ Văn Khoa",
  "Tạ Hoàng An",
];
var keyword = "an";
// Tìm trong mảng trên có tên khách hàng nào chứa từ khóa trả về 1 mảng
var checkName = customer.findIndex(function (user) {
  if (user.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  }
});
console.log(checkName);

// . findLastIndex(callback)
// Trả về index cuối cùng
var customer = [
  "Nguyễn Dương",
  "Trần xuân bách",
  "Nguyễn Hoàng an",
  "Dương Đức Hiệp",
  "Đỗ Văn Khoa",
  "Tạ Hoàng An",
];
var keyword = "an";
// Tìm trong mảng trên có tên khách hàng nào chứa từ khóa trả về 1 mảng
var checkName = customer.findLastIndex(function (user) {
  if (user.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  }
});
console.log(checkName);

////////////////////////////////////////////////////////////// BÀI TẬP
var customer = [
  "Nguyễn Dương",
  "Trần xuân bách",
  "Nguyễn Hoàng an",
  "Dương Đức Hiệp",
  "Đỗ Văn Khoa",
  "Tạ Hoàng An",
];
var keyword = "an";
// Tìm trong mảng trên có tên khách hàng nào chứa từ khóa trả về 1 mảng
var checkName = customer.filter(function (user) {
  if (user.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  }
});
console.log(checkName);

// VD 2
var users = [
  ["Hoàng An", "hoangan.web@gmail.com", 31],
  ["Nguyễn Dương", "duong@gmail.com", 19],
  ["Trần Xuân Bâck", "back@gmail.com", 25],
];
// Yêu cầu: Tăng thêm 2 tuổi cho user có email là duong@gmail.com

var newArr = users.map(function (user, index) {
  if (user[1] === "duong@gmail.com") {
    user[2] += 2;
  }
  return user;
});
console.log(newArr);
