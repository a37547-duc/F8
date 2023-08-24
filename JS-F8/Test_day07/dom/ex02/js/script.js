/*
 DOM Event
    - Mỗi thẻ HTML có các event nhất định(Có sẵn)
    - Có event xuất hiện trong tất cả các thẻ
    - Có event chỉ xuất hiện trong 1 số thẻ

VD:
- click
- dbclick
- mouseover
- mouseout
- mousemove

=> Thẻ HTML nào cũng có

- submit => Chỉ có trong thẻ form
- keyup, keydown => Thường xuất hiện trong có ô nhập liệu
- play, pause, timeupdate => Xuất trong thẻ audo, video
*/

// Bước 1: Tạo element
var btn = document.querySelector(".btn");
console.log(btn);
console.log([btn]);

// Bước 2: Gán sự kiện
btn.onclick = function () {
  console.log("Đăng ký thành công");
};
