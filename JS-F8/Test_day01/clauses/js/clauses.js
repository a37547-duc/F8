var a = 10;
console.log(`Xin chào f8`);
console.log(`Xin chào f8`);
console.log(`Xin chào f8`);

if (a >= 911) {
  console.log(`Xin chào f8`);
  console.log(`Xin chào f8`);
  console.log(`Xin chào f8`);
  console.log(`Xin chào f8`);
}

/*
1. if else
2.1. Câu lệnh if thiếu
if(dieukien)
{ 
    noidung
}

2.2. Câu lệnh if đủ

if(dieukien)
{ 
    noidung dung
}
else{
    nội dung sai
}

2.3 Câu lệnh if nhiều nhánh
*/

var total = 15;

if (total < 5) {
  total = total - total * 0.03;
} else if (total >= 5 && total <= 15) {
  total = total - total * 0.05;
} else if (total > 15) {
  total = total - total * 0.1;
}
console.log(total);
