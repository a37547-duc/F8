//JSON

/*
- Là chuỗi tạo từ object của js
- Mô tả dữ liệu 1 cách chính xác
- Dùng để giao tiếp dữ liệu giữa các nền tảng với nhau
- JSON hỗ trợ hầu hết các ngôn ngữ lập trình 
Vấn đề:
Web F8(JS)

-> Chuyển về 1 kiểu dữ liệu chung (Chuỗi) mà các nền tảng đều đọc được(Đảm bảo tính toàn vẹn của dữ liệu)
-> xml, json

App F8(Java)

Trong JS có 2 hàm thường dùng để xử lý JSON
1. Chuyển từ dữ liệu trong js thành JSON
JSON.stringify()

2. Chuyển từ JSON về kiểu dữ liệu tương ứng JSON.parse()
*/

var users = [
  {
    id: 1,
    name: "Hoàng an",
  },
  {
    id: 2,
    name: "Dương Nguyễn",
  },
];
console.log(users);
var json = JSON.stringify(users);

var users = JSON.parse(json);
console.log(users);
