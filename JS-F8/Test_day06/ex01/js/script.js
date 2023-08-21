// Thêm phương thức vào Prototype
Object.prototype.combine = function (...args) {
  var current = this;

  if (args.length) {
    return args.map(function (key) {
      return current[key];
    });
  }
};

// Thêm thuộc tính vào Prototype
Object.prototype.message = "f8";

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
var result = user.combine("name", "email");
//////////////////////////////////////

var customer = {
  name: "Nguyễn Dương",
  age: 19,
};
// Mong muốn kế thừa:
var result1 = user.combine("name", "email");
var result2 = customer.combine("name", "age");
console.log(result);
console.log(customer);
