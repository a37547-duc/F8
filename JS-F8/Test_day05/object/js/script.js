/*
OBJECT
- Object Literal (Đối tượng nguyên bản)
- Function Constructor (HÀM tạo)

Thành phần của đối tượng

- Thuộc tính: Đặc điểm, tính chất (Biến)
- Phương thức: Hành động (Hàm)

*/

var user = {
  // key: value
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 31,
  getName: function () {
    return "Hoàng An f8";
  },
}; // Object Literal
console.log(user);

// Thêm key mới cho object
user.country = "Việt Nam";
user["address"] = "Cầu giấy - HN";
console.log(user);

// Sửa giá trị của key trong object
user.email = `anhtupeo123@gmail.com`;

// Xóa key trong object
delete user.age;
console.log(user);

// Truy cập key trong Object
console.log(user.name);
console.log(user["email"]);
console.log(user);

// Lấy danh sách key trong object
for (var key in user) {
  console.log(key);
}

Object.keys(user).forEach(function (key) {
  console.log(user[key]);
});

// Kiểm tra 1 biến có phải object hay không
var a = {};
if (typeof a === "object" && !Array.isArray(a) && a !== null) {
  console.log("Là Object");
} else {
  console.log("Không phải là 1 Object");
}
/////////////////////////////////////////////////////////////////

var customer = {
  name: "Hoàng an",
  email: "hoangan@gmail.com",
  getName: function () {
    return this.name;
  },
  getEmail: function () {
    return this.email;
  },
  getInfo: function () {
    return `
    - Name: ${this.getName()}
    -Email: ${this.getEmail()}`;
  },
};
console.log(customer.getInfo());

/////////////////////////////////////////////////////////////////

var user = {
  name: "Hoàng an",
  email: "hoangan.name@gmail.com",
  jobs: {
    name: "Giangr Viên",
    salary: 500000,
    currency: "vnđ",
    per: "Tháng",
    students: [
      { id: 1, name: "HV1" },
      { id: 2, name: "HV2" },
      { id: 3, name: "HV3" },
    ],
  },
};
console.log(user.name);
console.log(user.jobs.students[0].name);
