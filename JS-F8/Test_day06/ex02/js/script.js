var user = {
  name: "HoNGF AN",
  email: "anhtupeo@gmail.com",
  getName: function () {
    return this.name;
  },
};

var customer = {
  name: "Nguyễn dương",
  email: "duong@gmail.com",
  getName: function () {
    return this.name;
  },
};

/*
    => Tạo ra 1 bản thiết kế cho object
    Trong js => function constructor(Hàm tạo)
    Tên hàm tạo viết theo cú pháp PascalCase
*/
var Person = function (name, email) {
  this.name = name;
  this.email = email;
  this.getName = function () {
    return this.name;
  };
};
Person.prototype.message = "F8 - Fullstack";

// Tạo đối tượng từ hàm tạo
var person = new Person("Hoàng an", "dominhduc@gmail.com");
console.log(person);

var user = new Person("Nguyễn Dương", "dominhduc@gmail.com");
console.log(user);

console.log(Person.prototype);

////////////////////////////

Array.prototype.first = function () {
  return this[0];
};
var a = ["An dương vương"];
console.log(a.first());

String.prototype.end = function () {
  return this.slice(-1);
};
var b = "Đỗ Minh Đức";
console.log(b.end());

// KIỂM TRA OBJECT THUỘC HÀM TẠO NÀO?

console.log(person.constructor.name);
var a = 0;
console.log(a.constructor.name);

if (a === 0 || (a && a.constructor.name === "Number")) {
  console.log("Number");
}

// Xây dựng 1 hàm nội bộ từ hàm tạo
var getMsg = function () {
  console.log("Xin chao f8");
};
getMsg();

///////////
Person.isPerson = function (variable) {
  return variable && variable.constructor.name === "Person";
};

if (Person.isPerson(person)) {
  console.log("Đây là person");
} else {
  console.log("Đây không phải là person");
}
