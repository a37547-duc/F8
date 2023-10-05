// Classes
/**
 * -> Dùng để định nghĩa 1 object
 */
class Person {
  // Phương thức khởi tạo
  // chạy đầu tiên khi object được khởi tạo
  constructor(name, email, age) {
    console.log("constructir class cha");
    this.name = name;
    this.email = email;
    this.age = age;
  }

  // Định nghĩa các phương thức
  getName() {
    console.log(this); // đẩy vào prototype
    return this.name;
  }
  getEmail = function () {
    // đẩy vào class
    return this.email;
  };
  getAge = () => {
    return this.age; // đẩy vào class
  };
}

class Girl extends Person {
  constructor(name, email, age, address) {
    console.log("Cocstructoo của class con");
    super(name, email, age); // gọi constructor của class cha
    this.address = address;
  }
  getInfo() {
    return `
        -Name: ${this.getName()}
        -Email:${this.getEmail()}
        -Age:${this.getAge()}
        -Address:${this.address}`;
  }
}
const girl = new Girl("Hoangan", "anhtupeo1234  ", 31, "Hà Nội");
console.log(girl.getInfo());

// TẠO OBJECT
const person = new Person("Đức", "anhtupeo123", 22);
console.log(person);

// Aps dụng vào việc customElements
customElements.define(
  "hello-word",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerText = "Hello F8";
    }
  }
);

// Thuộc tính và phương thức tĩnh (static)

/*
  Ví dụ: Array.isArray(), Math.PI
*/

class User {
  constructor() {
    //Thuộc tính non-static
    this.name = "Đức";
    this.email = "anhtupeo123@gmail.com";
  }

  //Phương thức non-static
  getName() {
    return this.name;
  }

  // Thuộc tính static
  static age = 3;
  //Thuộc tính static
  static isUser() {
    console.log(new this().getName());
    return "Toi là user";
  }
}
console.log(User.isUser());
console.log(User.age);

const user = new User();
console.log(user);
