// // Để tạo được 1 component(Thành phần web)

// /*
// - Có 1 hàm tạo hoặc class kế thừa từ HTMLElement
// - Sử dụng 1 Object: customElements
// */
// // Tạo 1 1 thẻ html có tên: hello-world

// function HelloWorld() {
//   return Reflect.construct(HTMLElement, [], HelloWorld);
// }

// HelloWorld.prototype = Object.create(HTMLElement.prototype);

// // vÒNG ĐỜI component
// HelloWorld.prototype.constructor = HelloWorld;

// HelloWorld.prototype.connectedCallback = function () {
//   console.log("Nội dung component");
//   this.innerText = "Xin chào F8";
//   var name = this.getAttribute("name");
//   console.log(name);
// };

// HelloWorld.prototype.disconnectedCallback = function () {
//   console.log("Element bị xóa");
// };
// customElements.define("hello-world", HelloWorld);

component.create("hello-world", function () {
  this.innerText = "Xin chào";
});
