/*
2 loại vòng lặp

1. Vòng lặp với số lần xác định trước
for
for(bienchay; dieukiendung; buocnhay)


2. Vòng lặp với số lặp không xác định trước
while, do while

*/
for (var i = 1; i <= 10; i++) {
  console.log("Vòng lặp thứ" + i);
}

for (var i = 10; i >= 1; i--) {
  console.log("Vòng lặp thứ" + i);
}

var n = 10;
var total = 0;
for (var i = 1; i <= 10; i++) {
  total += i;
}
console.log(total);

// Bài 2: Tính giá trị biểu thức
// Total = 1 + 1*2 + 1*2*3 +...+ 1*2*3...*n
var n = 5;
var total = 0;
var temp = 1;
for (var i = 1; i <= n; i++) {
  temp *= i;
  total += temp;
}

// Bài tập 3: vẽ tam giác *

var n = 5;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
