/*
Hàm (Function): Thher 1 chức năng (Động từ)

1. Hàm không tham số
function tenHam(){
    Nội dung hàm
}

2.Hàm có tham số
function tenHam(Thamso1, thamso2,...)
{ 
    Nội dung hàm
}

Tên hàm:
- Động từ: get, set, make, build,...
- Dùng camelCase

3. Hàm có giá trị trả về và không có giá trị trả về

- Hàm có giá trị trả về: có từ khóa return
- Ham return

- Hàm không có giá trị trả về: không có giá trị trả về
=> Hàm void
*/

//Định nghĩa hàm
function getMessage() {
  console.log("Hoàng an f8");
}

//Gọi hàm không tham số
getMessage();

function getMessage(name, msg) {
  console.log(msg, name);
}
//Gọi hàm có tham số
getMessage("F8", "fullstack");

function sum(a, b) {
  var total = a + b;
  console.log(total);
  return total;
  // Khi return được gọi=> Tất cả đoạn code bên dưới không hoạt động

  console.log("Hi");
}
console.log(sum(20, 30));

var result = sum(10, 20) + 50;
///////////////////////////////////////////////////////

function division(a, b) {
  if (b !== 0) {
    var result_1 = a / b;

    return result_1; // Biến cục bộ
  }
  return "Không hợp lệ";
}
console.log(division(10, 0));

///////////////////////////////////////////////////////

// Biên toàn cục
var msg = "Hoàng an f8";
function getMessage() {
  return msg;
}
