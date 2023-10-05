/*
-- Mảng cũng là 1 object

Object = Đối tượng
- Object Literal (Đối tượng nguyên bản)
- Function Constructor (Hàm tạo)

Thành phần của 1 đối tượng

- Thuộc tính: Đặc điểm, tính chất (Biến)
- Phương thức: Hành động (Hàm)
 */

var user = {
  // key:value - thuộc tính
  name: "Hoàng An",
  email: "hoangan@gmail.com",
  age: 31,

  // Ta có thể xây dựng nó là 1 hàm
  getName: function () {
    // Phương thức

    return "Đỗ Minh Đức";
  },
}; // Object Literal

// THÊM KEY MỚI CHO OBJECT
user.country = "Việt Nam";
user["address"] = "Cầu Giaays, Hà Nội";

// SỬA GIÁ TRỊ CỦA KEY TRONG OBJECT
user.email = "anhtupeo123@gmail.com";

// XÓA KEY TRONG OBJECT
delete user.age;

// TRUY CẬP KEY TRONG OBJECT
// console.log(user.name);
// console.log(user["email"]);

// LẤY DANH SÁCH KEY TRONG OBJECT
// for (var key in user) {
//   console.log(key);
// }
console.log(Object.keys(user)); // Cách 2
Object.keys(user).forEach(function (key) {
  console.log(user[key]);
});

// KIỂM TRA 1 BIẾN CÓ PHẢI OBJECT HAY KHÔNG?
var a = {};
console.log(typeof {}); // Đều cho ra là object
console.log(typeof []);
console.log(typeof null);

if (typeof a === "object" && !Array.isArray(a) && a !== null) {
  console.log(" là obect");
} else {
  console.log("Không phải là object");
}

// Cách 2 sử dụng từ khóa new Object
// var user = new Object(); // ít khi sử dụng
// console.log(user);

console.log("----------Ví dụ mới---------");
var customer = {
  name: "Đức",
  email: "anhtupeo123@gamil.com",
  getName: function () {
    return this.name; // this được gọi là context-ngữ cảnh, this sẽ lấy ra object hiện tại
  },
  getEmail: function () {
    return this.email;
  },
  getInfo: function () {
    return `
    -Name: ${this.getName()}
    -Email:${this.getEmail()}`;
  },
};
console.log(customer.getInfo());

console.log("----------Ví dụ mới---------");
var user = {
  name: "Đức",
  email: "anhtupeo123",
  jobs: {
    name: "Giangr viên",
    salary: 50000,
    currency: "vnd",
    per: "Tháng",
    students: [
      {
        id: 1,
        name: "HV 1",
      },
      {
        id: 2,
        name: "HV 2",
      },
      {
        id: 3,
        name: "HV 3",
      },
    ],
  },
};
console.log(user.jobs.students[0].name);

console.log("----------Ví dụ mới---------");

var user = {
  name: "Đức",
  email: "anhtupeo123",
  getInfo: function () {
    return {
      name: "Hoàng an f8",
    };
  },
};

console.log(user.getInfo().name);
