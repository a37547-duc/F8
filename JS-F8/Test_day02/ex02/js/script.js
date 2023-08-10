/*
Vòng lặp do while, while
*/
var i = 1;
var s = 0;
while (i <= 10) {
  //   console.log(`Vòng lặp thứ ${i}`);
  s += i;
  i++;
}
console.log(s);

/*
Vòng lặp sẽ chạy nội trước => Sau đó kiểm tra
Nếu đúng => chạy tiếp
Nếu sa => vẫn chạy 1 lần và thoát
*/
var i = 10;
do {
  console.log(`Hiển thị lần ${i}`);
  i--;
} while (i >= 1);

/*
break, conninue;
*/
var begin = 3;
var end = 10;
var even;
for (var i = begin; i <= end; i++) {
  if (i % 2 === 0) {
    even = i;
    break;
  }
}
console.log(even);
