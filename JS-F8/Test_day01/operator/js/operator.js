/*
Toán tử -  Biểu thức

Biểu thức= toán hạng + toán tử

var s = a + b

1. Toán tử số học

+, -, *, / %(chia lấy dư), **(Lũy thừa)

++, -- => phép tăng, phép giảm
*/

var a = "10"; // chuỗi số
var b = 20;
var c = a + b;
// Các dữ liệu này trên thực là do người dùng nhập vào thì mặc định nó là chuỗi
console.log(c);

// ép kiểu: parseInt(), parseFloat()
var c = parseInt(a) + parseInt(b);
console.log(c);
// cách 2 ép kiểu
var c = +a + +b;
console.log(c);

var a = 10;
var b = 3;
var c = a ** b; // a^b;
console.log(c);

var count = 1;
count++; // count=count+1 trả về trước khi nó tăng
++count; // count=count+1 trả về sau
console.log(count);

var count = 1;
var toal = count++ + ++count;
console.log(toal);

/*
2. Toán tử logic
>,<  >=, <=, ==, === ,!=, !==

=> trả về kiểu boolean (true, false)
// Khi so sánh == nó chỉ so sánh giá trị, không quan tâm kiểu dữ liệu là gì
// === so sánh kiểu dữ liệu
!= so sánh giá trị
!== so sánh kiểu dữ liệu
*/
var a = 10;
var b = 10;
var c = a == b;
// Khi so sánh == nó chỉ so sánh giá trị, không quan tâm kiểu dữ liệu là gì
// === so sánh kiểu dữ liệu
console.log(c);

/*

3. Toán tử gán (=)

*/

var a = 10;
//a = a+5
a += 5;
a -= 5;
a *= 5;
a /= 5;
a %= 5;
console.log(a);

var str = "f8";
str += "f88";
console.log(str);

/*
4. Toán tử lý luận ( Kết hợp )

&& -> và
|| => Hoặc
! => phủ định

*/
var a = 10;
var b = a >= 5 && a <= 10;
var b = a < 0 || a >= 5;
var b = !(a < 0 || a >= 5);
// b = !b;
console.log(b);

/*

5. Toán tử 3 ngôi

bieuthuc ? giatridung : giatrisai

// Khi sử dụng toán tử 3 ngôi phải đầy đủ cú phảp
*/
var a = 12;
var b = a >= 10 ? "f8" : undefined;
document.write(`${a >= 10 ? "f8" : "fullstack"}`);
console.log(b);
// document.write(b);
document.write(`${a >= 10 ? "f8" : "fullstack"}`);

var a = 10;
var b = 1 + 2 + 3 + a >= 5 ? 10 : 20 + 4 + 5;

/*
6. Toán tử nullish()
Nếu a khác null và undefined thì kết quả của a ?? b là a.
Ngược lạị, nếu a bằng null hoặc undefined thì kết quả của a ?? b là b.
*/

var a = null;
var b = a ?? "f8"; // Check !==null && !==undefined
console.log(b);

var a = 10;
var b = a !== null && a !== undefined ? a : "";
console.log(b);

var a = "";
var b = a ? "f8" : "Hoang an";
console.log(b);

/*
- Tự động chuyển về boolean trong trường hợp phải dùng để so sánh

Nếu tự động chuyển về false => Falsy
    0, "", false, undefined, null, NaN

Nếu tuej động chuyển về true => truthy
*/

/*

7. Toán tử &&
// nếu a là true thì nó hiển thị kết quả sau 2 dấu &&
// nếu ko thì nó lấy kết quả chính nó
*/
var a = false;
var b = a && "f8";
console.log(b);

/**
 8. Toán tử ||

 */

var a = "Hoang an";
var b = a || "f8";
console.log(b);
