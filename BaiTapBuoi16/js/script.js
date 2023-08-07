console.log("Bài 1");

var a = 3;
var b = 2;
console.log(`Gía trị của a trước khi đổi: ${a}`);
console.log(`Gía trị của b trước khi đổi: ${b}`);
a = a * b;

b = a / b;
a = a / b;

console.log(`Gía trị sau khi đổi của a: ${a}`);
console.log(`Gía trị sau khi đổi của b: ${b}`);
//////////////////////////////////////

console.log("Bài tập 2");

var sum = (10 + 20 + 5 ** 10) / 2;
console.log(`Tổng số là: ${sum}`);
/////////////////////////////////////

console.log("Bài tập 3 Tìm số lớn nhất");

let x = 10;
let y = 20;
let z = 30;
let array = [x, y, z];
let max = array[0];
for (var i = 1; i <= array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
}
console.log(`Số lớn nhất trong 3 số ${x}, ${y}, ${z} là: ${max}`);
/////////////////////////////////////
console.log("Bài 4: kiểm tra số cùng dấu");
var a = -10;
var b = 20;
console.log(`Cho 2 số a = ${a}, b = ${b}`);
if (a >= 0 && b >= 0) {
  console.log("Cùng dấu");
} else if (a < 0 || b < 0) {
  console.log("Khác dấu");
}
/////////////////////////////////////
console.log("Bài 5: Sắp xếp 3 số");
var a = 10;
var b = 5;
var c = 20;
var array_2 = [a, b, c];
console.log(`Cho 3 số: ${a},${b},${c}`);
for (var i = 0; i < array_2.length; i++) {
  for (var j = i + 1; j < array_2.length; j++) {
    if (array_2[i] > array_2[j]) {
      var temp = array[i];
      array_2[i] = array_2[j];
      array_2[j] = temp;
    }
  }
}
console.log(`Sau khi được sắp xếp tăng dần: ${array_2}`);
