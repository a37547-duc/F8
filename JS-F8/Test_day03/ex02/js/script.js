// /*
// Chuỗi trong javascript có 1 hàm tạo có tên là String để định nghĩa
// các thuộc tính và phương thức xử lỹ
// */
// // console.log(String);
// console.log(String.prototype);

// var fullName = "  ĐỖ MINH ĐỨC";
// console.log(fullName.length);

// // Các phương thưc xử lý chuỗi

// // 1.length => lấy độ dài của chuỗi
// console.log(fullName.length);

// // 2.charAt(index) => Lấy ký tự của chuỗi theo index (index bắt đầu từ 0)
// console.log(fullName.charAt(0));

// // 3. charCodeAt(index)=> Lấy mã ASCII của ký tự theo index
// console.log(fullName.charCodeAt(0));

// // 4. concat(chuoi , chuoi,..); => Nỗi chuỗi
// console.log(fullName.concat("a", "B", "c"));

// // 5. indexOf(sub) => Tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha
// // và trả về index, nếu không tìm thấy trả về -1
// console.log(fullName.indexOf("MINH"));

// //6, lastIndexOf(sub) => Tìm vị trí cuối
// console.log(fullName.lastIndexOf("Minh đức"));

// // 7. includes(sub) => Tìm chuỗi con trong chuỗi cha, trả về true/false
// console.log(fullName.includes("Minh đức"));

// //8. slice(start, end) => Cắt chuỗi từ chuỗi cha từ start đến end
// console.log(fullName.slice(1, 3));

// // 9. repalce(search, width) => Thay thế chuỗi
// console.log(fullName.replace("ĐỖ", "Trung"));
// // Lưu ý: Hàm này hỗ trợ thay thế bằng biểu thức chính quy (Regex)
// // ví dụ: thay thế
// // Kiểm tra số điện thoại và email

// // 10. replaceAll(search, width) => Tìm kiếm tất cả

// console.log(fullName.replaceAll("ĐỖ"), "TUNG");

// // 11. split(char) => Tách chuỗi thành mảng
// console.log(fullName.split(" "));

// // 12.trim() => Xóa khoảng trắng đầu và cuối chuỗi
// console.log(fullName.trim());
// // 13.trimStart() => Loại bỏ đầu
// // 14.trimEnd() => Loại bot cuôi

// // 15. match() => Cắt chuỗi dựa vào Regex

// // 16. toLowerCase()
// // 17. toUpperCase()

// ////////////////////////////////////////////////////
// var email = "hoangan.web@gmail.com";
// var username = email.slice(0, email.indexOf("@"));
// console.log(username);
// // Lấy ra username
// //////////////////////////////////////////

// // Bài 2 Kiểm tra 1 chuỗi có được viết hoa hết hay không

// var fullName = "TẠ HOÀNG AN";
// var checkName = fullName.toLowerCase();
// if (fullName !== checkName) {
//   console.log("Không được viết hoa");
// }

// console.log(checkName);
// ///////////////////////////////

// // Bài 3 var fullname= 'tạ hoang an';
// // chuyển họ tên thành dạng tên chuẩn: Tạ Hoàng An
// var fullName = "trung hoàng an văn";
// fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
// for (var i = 0; i < fullName.length; i++) {
//   var char = fullName.charAt(i);
//   var charNext = fullName.charAt(i + 1);
//   if (char == " " && charNext !== " ") {
//     var index = i + 1;
//     fullName =
//       fullName.slice(0, index) +
//       charNext.toUpperCase() +
//       fullName.slice(index + 1);
//   }
// }
// console.log(fullName);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Chuỗi trong javascript có 1 hàm tạo tên là String
 để đinhj nghĩa các thuộc tính
và các phương thức xử lý
*/

// Kỹ thuật so khớp(matching)
// Học Regular-expression

console.log(String, typeof String);
console.log(String.prototype);

var fullName = "Tạ Hoàng Nam";
// Tạo ra 1 đối tượng tạm thời để có thể truy cập xử lý
console.log(fullName.length);

////////////////////////////////////

// CÁC PHƯƠNG THỨC XỬ LÝ CHUỖI

// 1. length => Lấy độ dài của chuỗi
var str = "Xin chào f8";
console.log(str.length);

// 2. charAt(index) => Lấy kí tự của chuỗi theo index(Bắt đầu từ 0)
console.log(str.charAt(0)); // lấy được chữ X

// 3. charCodeAt(index) => Lấy mã ASCII của kí tự theo index
console.log(str.charCodeAt(0));

// 4. concat(chuoi1,chuoi2,..) => Nối chuỗi
console.log(str.concat("A", "B"));

// 5. indexOf(sub) => Tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha
// và trả về index nếu không tìm thấy trả về -1
console.log(str.indexOf("n"));

// 6. lastIndexOf(sub) => Tìm vị trí cuối và trả về index
console.log(str.lastIndexOf("Xin"));

// 7. includes(sub) => Tìm chuỗi con trong chuỗi cha, trả về true/false
console.log(str.includes(" "));

// 8. slice(start, end) => Cắt từ chuỗi cha từ start đến end nhận giá trị index
// console.log(str.slice(str.indexOf("X"), str.lastIndexOf("AB")));

// LƯU Ý: THAM SỐ THỨ 2 KHÔNG TRUYỀN VÀO THÌ NÓ CẮT HẾT CHUỖI
// console.log(str.slice(0));

// LƯU Ý: THAM SỐ THỨ 1 MÀ LÀ ÂM THÌ NÓ CẮT TỪ ĐUÔI
console.log(str);
console.log(str.slice(-2));

// 9. replace(search) => Thay thế chuỗi
console.log(str.replace("f8", "f88"));
// LƯU Ý: HÀM NÀY HỖ TRỢ THAY THẾ BẰNG BIỂU THỨC CHÍNH QUY (Regex)

// Ví dụ: Thay thế chữ số sau chữ f thành dấu *
// ĐỐI XÉN CHUỖI
var pattern = /f\d+/g;
console.log(str.replace(pattern), "f*");

// 10. replaceAll(search,width) => Thay thế tất cả
console.log(str.replaceAll("f8", "f88"));

// 11. split(char) => Tách chuỗi thành mảng
console.log(str.split(" "));

// 12. trim() => Xóa Khoảng trắng đầu và cuối chuỗi
console.log("   Hoàng an F8 ".trim());

// 13. trimStart() => Loại bỏ đầu chuỗi
// 14. trimEnd() => Loại bỏ cuối chuỗi

// 15. match() => Cắt chuỗi dựa vào Regex

// 16. toString() =>chuyển đổi một đối tượng thành một chuỗi biểu diễn dưới dạng chuỗi ký tự
var content = `Lorem Ipsum is 0563535506 simply dummy text of the printing
 and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s, when an unknown printer took a galley of 
type and scrambled it to make a type specimen book. It has sur
vived not only five centuries, but also the leap into electronic typeset
ting, remaining essentially unchanged. It was popularised in the 1960s with the 
release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus
 PageMaker including versions of Lorem Ipsum.`;

var pattern = /0\d{9}/g;
var phone = content.match(pattern);
console.log(phone);

// 16. toLowerCase()
// 17. toUpperCase()
// console.log("đỗ minh đức".toUpperCase());

function capitalizeWords(inputString) {
  return inputString.replace(/\b\w/g, (char) => char.toUpperCase());
}

const fullName_1 = "đỗ minh đức";
const words = fullName_1.split(" ");
const capitalizedWords = words.map((word) => capitalizeWords(word));
const capitalizedFullName = capitalizedWords.join(" ");

console.log(capitalizedFullName); // Kết quả: "Đỗ Minh Đức"
