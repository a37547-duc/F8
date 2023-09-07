// // var btn = document.querySelector(".btn");
// // btn.addEventListener("click", function (e) {
// //   console.log("clicked");
// //   console.log(this);
// //   console.log(e);
// // });

// var nameEl = document.querySelector(".name");
// nameEl.addEventListener("keyup", function (e) {
//   //   console.log(e);
//   if (e.key === "Enter") {
//     console.log(this.value);
//   }
// });
// document.addEventListener("keyup", function (e) {
//   console.log(e);
//   // Giuwx Ctrl+ enter => Chuyển cả trang thành màu đỏ
//   // Enter => Khôi phục lại như ban đầu
//   if (e.ctrlKey && e.key === "Enter") {
//     document.body.style.background = "red";
//   } else if (e.key === "Enter") {
//     document.body.style.background = "initial";
//   }
// });

///////////////////////////////////////////////////////////////////////

// Event Object

// this trả về element mà bạn đã gán sự kiện lên
var btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  // e = event object => Trả về thông tin sự kiện
  // Mỗi sự kiện lại có thông tin khác nhau
  // Nó nằm trong nhóm pointerEvent
  if (e.altKey === true) {
    console.log("Xin chào");
  }
  console.log(this);
  console.log(e);
  if (e.which === 1) {
    this.style.background = "red";
  }
});
// function này được gọi là listener và luôn tồn tại 1 tham số thường đặt là e

// clientX, clientY, offsetX, offsetY, pageX,Y

var nameEl = document.querySelector(".name");
nameEl.addEventListener("keyup", function (e) {
  // console.log(e);
  // if (e.key === "Enter") {
  //   console.log(this.value);
  // }
});

document.addEventListener("keyup", function (e) {
  // giữ crl+enter => Chuyển cả trang thành màu đỏ
  // Nếu enter => Khôi phục lại ban đầu
  if (e.ctrlKey && e.key === "Enter") {
    document.body.style.background = "red";
  } else if (e.key === "Enter") {
    document.body.style.background = "initial";
  }
});

mousedown;
