/*
Chuỗi trong javascript có 1 hàm tạo có tên là String để định nghĩa 
các thuộc tính và phương thức xử lỹ
*/
// console.log(String);
console.log(String.prototype);

var fullName = "  ĐỖ MINH ĐỨC";
console.log(fullName.length);

// Các phương thưc xử lý chuỗi

// 1.length => lấy độ dài của chuỗi
console.log(fullName.length);

// 2.charAt(index) => Lấy ký tự của chuỗi theo index (index bắt đầu từ 0)
console.log(fullName.charAt(0));

// 3. charCodeAt(index)=> Lấy mã ASCII của ký tự theo index
console.log(fullName.charCodeAt(0));

// 4. concat(chuoi , chuoi,..); => Nỗi chuỗi
console.log(fullName.concat("a", "B", "c"));

// 5. indexOf(sub) => Tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha
// và trả về index, nếu không tìm thấy trả về -1
console.log(fullName.indexOf("MINH"));

//6, lastIndexOf(sub) => Tìm vị trí cuối
console.log(fullName.lastIndexOf("Minh đức"));

// 7. includes(sub) => Tìm chuỗi con trong chuỗi cha, trả về true/false
console.log(fullName.includes("Minh đức"));

//8. slice(start, end) => Cắt chuỗi từ chuỗi cha từ start đến end
console.log(fullName.slice(1, 3));

// 9. repalce(search, width) => Thay thế chuỗi
console.log(fullName.replace("ĐỖ", "Trung"));
// Lưu ý: Hàm này hỗ trợ thay thế bằng biểu thức chính quy (Regex)
// ví dụ: thay thế
// Kiểm tra số điện thoại và email

// 10. replaceAll(search, width) => Tìm kiếm tất cả

console.log(fullName.replaceAll("ĐỖ"), "TUNG");

// 11. split(char) => Tách chuỗi thành mảng
console.log(fullName.split(" "));

// 12.trim() => Xóa khoảng trắng đầu và cuối chuỗi
console.log(fullName.trim());
// 13.trimStart() => Loại bỏ đầu
// 14.trimEnd() => Loại bot cuôi

// 15. match() => Cắt chuỗi dựa vào Regex

// 16. toLowerCase()
// 17. toUpperCase()

////////////////////////////////////////////////////
var email = "hoangan.web@gmail.com";
var username = email.slice(0, email.indexOf("@"));
console.log(username);
// Lấy ra username
//////////////////////////////////////////

// Bài 2 Kiểm tra 1 chuỗi có được viết hoa hết hay không

var fullName = "TẠ HOÀNG AN";
var checkName = fullName.toLowerCase();
if (fullName !== checkName) {
  console.log("Không được viết hoa");
}

console.log(checkName);
///////////////////////////////

// Bài 3 var fullname= 'tạ hoang an';
// chuyển họ tên thành dạng tên chuẩn: Tạ Hoàng An
var fullName = "trung hoàng an văn";
fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
for (var i = 0; i < fullName.length; i++) {
  var char = fullName.charAt(i);
  var charNext = fullName.charAt(i + 1);
  if (char == " " && charNext !== " ") {
    var index = i + 1;
    fullName =
      fullName.slice(0, index) +
      charNext.toUpperCase() +
      fullName.slice(index + 1);
  }
}
console.log(fullName);
