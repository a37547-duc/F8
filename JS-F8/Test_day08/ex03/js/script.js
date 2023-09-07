// var link = document.querySelector(".link");
// console.log(link);

// // THUỘC TÍNH
// /*
//  1. Thuộc tính có sẵn của thẻ HTML

//  2. Thuộc tính tự tạo (Data Attribute)
// */

// // Thuộc tính có sẵn
// // Lấy giá trị thuộc tính: element.tenthuoctinh
// console.log(link.href);
// console.log(link.id);
// console.log(link.target);
// console.log(link.title);

// // Riêng thuộc tính class: element.className
// console.log(link.className);

// // Cập nhật giá trị thuộc tính
// // element.tenthuoctinh= giá trị
// link.href =
//   "https://www.bing.com/search?pglt=43&q=increase+number+javascript+function&cvid=b27c38a46abf410da15f78ba48c3a8f8&aqs=edge.2.69i57j0l4j69i64.8428j0j1&FORM=ANAB01&PC=DCTS";

// // Gía trị mặc định của 1 thuộc tính sẽ là Chuỗi rỗng
// console.log(link.rel);

// // Thuộc tính tự tạo (Data Attribute)
// // Lấy data attribute
// console.log(link.getAttribute("data-count"));
// console.log(link.dataset.count); // data-count
// console.log(link.dataset);

// // Thêm data attribute
// link.setAttribute("data-count", 10); // tên thuộc tính và giá trị trị gán
// link.dataset.count = 100;
// link.dataset.indexNumber = 2000;
// link.dataset.animationDuration = "2s";

// var content = document.querySelector(".content");
// console.log(content.classList);

// // Thêm class Mới
// content.classList.add("abc", "b2");

// // Xóa class
// content.classList.remove("abc");

// // Kiểm trả class Tồn tại
// console.log(content.classList.contains("b2"));

// // class toggle => Thêm class nếu không tồn tại và xóa class nếu tồn tại
// content.classList.toggle("element");

// // Xóa element
// content.remove();
// // Xóa thuộc tính
// link.removeAttribute("title");

////////////////////////////////////////////////////////////////
var link = document.querySelector(".link");
// Thuộc tính

/*
  - Khi làm việc với JS => sẽ có 2 loại thuộc tính:
1. Thuộc tính có sẵn của thẻ html

2. Thuộc tính tự tạo (Data Attribute)
*/

// Thuộc tính có sẵn
// 1. Lấy giá trị thuộc tính: element.tenthuoctinh
console.log(link.href);

// Riêng thuộc tính class: element.className
console.log(link.className);

// 2. Cập nhật giá trị thuộc tính: element.tenthuoctinh=giatri
link.href = "https://www.youtube.com/";
link.title = "Trang chủ Youtube";
// Có thể tự động thêm mà chưa khai báo bên html

// Gía trị mặc định của 1 thuộc tính sẽ là 1 chuỗi rỗng
console.log(link.rel);

// THUỘC TÍNH TỰ TẠO

// 1. Lấy data attribute
console.log(link.getAttribute("data-count"));
console.log(link.dataset.count);
console.log(link.dataset.indexNumber);

// 2. Thêm data attribute
link.setAttribute("data-count", 10);

// 3. Cập nhật data attrubute
link.dataset.count = 20;
link.dataset.indexNumber = "hehee";

// CÂU HỎI: DATASET DÙNG ĐỂ LÀM GÌ
