console.log(Array.prototype);
var users = ["Đức", "Trung", "Tâm", "An"];

///////////////////////////// CÁCH PHƯƠNG THỨC CỦA ARRAYS

// 1. at() => TRUY CẬP 1 PHẦN TỬ THEO INDEX
console.log(users.at(1));

// 2. concat(arr1,arr2) => Nối mảng
console.log(users.concat("Yêu em")); // Nó còn được dùng để thêm 1 phần tử mới

// 3. indexOf(value) => Tìm vị trí xuất hiện của phần tử trong mảng
console.log(users.indexOf("Đức"));

// 4. lastIndexOf(value) => Tìm vị trí xuất hiện cuỗi cùng của phần tử trong mảng
console.log(users.lastIndexOf("An"));

// 5. includes(value) => Tìm phần tử trong mảng và trả về true/false
console.log(users.includes("Đức"));

// 6. slice(start,end) => Tiến hành cắt mảng từ start đến end và trả về 1 mảng
console.log(users.slice(0));
// console.log(users.slice(1)); // cắt từ vị trí truyền vào đến hết
// console.log(users.slice(-1));// cắt từ đuôi

// 7. join() => Nối các phần tử thành chuỗi
console.log(users.join("\n")); // dùng để xuống dòng
console.log(users.join(" "));

//////////////////////// TẤT CẢ CÁC PHƯƠNG THỨC TRÊN KHÔNG LÀM THAY ĐỔI MẢNG BAN ĐẦU/////////////

/*
    8. push() => Thêm phần tử vào cuối mảng, thay đổi mảng ban đầu,
    trả về số lượng phần tử sau khi thêm
*/
var count = users.push("Dương"); // trả về số lượng sau khi thêm
console.log(count);
console.log(users);

/*
     9. unshift() => Thêm phần tử vào đầu mảng, thay đổi mảng ban đầu,
    trả về số lượng phần tử sau khi thêm
*/
var count = users.unshift("Dương"); // trả về số lượng sau khi thêm
console.log(count);
console.log(users);

// 10. pop() => Xóa phần tử cuối mảng và trả về giá trị của phần tử vừa xóa
var value = users.pop();
console.log(users, value);

// 11. shift() => Xóa phần tử đầu mảng và trả về giá trị của phân tử vừa xóa
var value = users.shift();
console.log(users, value);

// 12. splice(index, count) => Xóa count phần tử từ index và trả về 1 mảng chứa các phần tử được xóa
// Ta cũng có thể thêm được giá trị vào vị trí vừa xóa
// console.log(users);
// console.log(users.splice(1, 2));

// 13. reverse() => Đảo ngược mảng
users.reverse();
console.log(users);

// 14. sort() => Sắp xép mảng theo thứ tự tăng dần
// LƯU Ý: KHÔNG ÁP DỤNG VỚI SỐ
users.sort().reverse();
console.log(users);

// CÁCH ĐỂ ÁP DỤNG VỚI SỐ
// a là số sau, b là số trước
var numbers = [5, 100, 1, 10, 2];
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);

//// BÀI 1 LẤY TÊN CỦA HỌ VÀ TÊN
var fullName = "Tạ Hoàng An";
var check = fullName.split(" ");
console.log(check);
console.log(check.splice(-1).join());

// BÀI 2 Sắp xếp danh sách khách hàng theo tên
var customers = [
  "Nguyễn Dương",
  "Trần Xuân Bách",
  "Dương Đức Hiệp",
  "Nguyễn Văn Khoa",
  "Tạ Hoàng An",
];

var sortName = function (name) {
  return name.split(" ").splice(-1).join();
};
customers.sort(function (a, b) {
  if (sortName(a) < sortName(b)) {
    return -1;
  }
});
console.log(customers);

var customers_1 = [
  "Nguyễn Dương",
  "Trần Xuân Bách",
  "Dương Đức Hiệp",
  "Nguyễn Văn Khoa",
  "Tạ Hoàng An",
];
console.log(customers_1);
console.log(customers_1.splice(1, 2));
var customers_2 = [1, 2, 3, 4, 5];
console.log(customers_2);
var deleteNum = customers_2.splice(2);
console.log(deleteNum);
console.log(customers_2);
