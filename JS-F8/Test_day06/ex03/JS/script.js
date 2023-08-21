var a = {
  name: "Hoàng an f8",
  email: "anhtupeo@gmail.com",
};
var b = {
  teacher: "Hoàng An",
  salary: 50000,
};

// Nối object b vào object a
// Yêu cầu: Không sử dụng hàm có sẵn, es6 trở lên

for (var key in b) {
  //   console.log(key);
  a[key] = b[key];
}
console.log(a);

Object.keys(b).forEach(function (key) {
  a[key] = b[key];
});
console.log(a);

// BÀI TẬP 2
var query = {
  name: "Hoàng An",
  keyword: "Fullstack",
  category: 1,
};
// Chuyển đổi object trên thành dạng query string
// name=Hoàng+An&keyword=Fullstack&category=1

// sử dụng thêm hàm object.entries()
console.log();

var queryString = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);

/////////// Object.assign(target, source)
var a = {
  name: "Hoàng an f8",
  email: "anhtupeo@gmail.com",
};
var b = {
  teacher: "Hoàng An",
  salary: 50000,
};

var result = Object.assign(a, b);
console.log(a);
console.log(result);

////////// Object create(null) => Tạo object không có prototype
var a = Object.create(null);
console.log(a);

// VÍ DỤ
var a = {
  name: "Hoàng an f8",
  email: "anhtupeo@gmail.com",
};

// var b = a;
var b = Object.assign({}, a);
b.name = "Hoàng An f8";
console.log(a);
console.log(b);
// assign chỉ được cấp ngoài

var a = ["Hoàng An", "anhtupeo123@gmail.com"];
var b = a.map(function (item) {
  return item;
});

// Optional channing(? .) với thuộc tính
var a = undefined;
console.log(a?.name);
var fullname = ["An"];
if (fullname?.length) {
  console.log("ok");
}
// Optional channing với phương thức
var a = {};
console.log(a.getName?.());
