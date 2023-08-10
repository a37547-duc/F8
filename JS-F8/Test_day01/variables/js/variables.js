// Nếu khai báo 1 biến mà không gán giá trị thì nó sẽ là undefined
var customes;
var customerName;
var customerShippingAddress;

var user, userName;
var course = "Fullstack",
  price = 500;

console.log(customes);
console.log(course);

// Muốn hiển thi nội dung trên giao diện này
document.write(course);

// Nó có thẻ gán cẩ 1 chuỗi html
var welcome = "<h2>Xin chao f8</h2>";
console.log(welcome);
document.write(welcome);

////////////////////////////////////////////////////////////////////////

// Nối biến
var courseName = " fullstack ";
var welcome = "Chào mừng bạn đến với khóa học tại" + courseName + "f8";
// Nếu tạo chuỗi bằng cái này thì không thể xuống dòng
console.log(welcome);

// Dấu backtick (`) dùng để xuống dòng
// khi sử dụng backtick thì có thể sử dụng cú pháp nội suy
var welcome = `Chào mừng bạn đến với khóa học tại ${courseName}  f8`;
console.log(welcome);

// ưu điểm: không phải đóng dấu ngoáy kép, không phải xuống dòng
// Có tên gọi là tenplate string

// Ký hiệu escape: \ được dùng để xử lý lỗi backtick
var welcome = `Chào mừng bạn đến với khóa học tại ${courseName}  \`f8\``;
console.log(welcome);
