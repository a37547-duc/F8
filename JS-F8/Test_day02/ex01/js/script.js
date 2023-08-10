/*
Câu lệnh rẽ nhánh switch case
*/

var action = "add";
switch (action) {
  case "add":
  case "create":
  case "insert":
    console.log("Thêm");
    break;

  case "edit":
    console.log("sửa");
    break;

  case "delete":
    console.log("Xóa");
    break;

  default:
    console.log("Danh sách");
    break;
}
// Chuyển đoạn code bên trên thành if else

if (action === "add" || action === "create" || action === "insert") {
  console.log("Thêm");
} else if (action === "edit" || action === "update") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Danh sách");
} else {
  console.log("Danh sách");
}

/*
Hiển thị số ngày của 1 tháng

var month =11;
=> tháng 11 có 30 ngày
-31 ngày: 1,3,5,7,8,10,12
-30 ngày: 4,6,9,11
- 29 ngày: 2

Yêu cầu rằng buộc:
- tháng phải là số nguyên
- tháng từ 1 đến 12
- không được sử dụng hàm để kiểm tra

*/

var month = "1";

month = parseInt(month);
if (month % 1 === 0 && month >= 1 && month <= 12) {
  // xử lý ngày
  switch (+month) {
    case 2:
      days = 29;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;

    default:
      days = 31;
      break;
  }
} else {
  console.log("Không phải số");
}
console.log(`Tháng ${month} có ${days} ngày`);
