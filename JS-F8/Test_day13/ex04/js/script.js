/*
    Scroll Event

 1. Lấy vị trí scroll so với top, left
*/

var topBtn = document.querySelector(".top");
window.addEventListener("scroll", function () {
  //   console.log("Kéo thanh cuộn");
  var y = this.window.scrollY;
  // var x = this.window.scrollX;
  // console.log(x, y);
  // var btn = document.querySelector(".top");
  // console.log(btn);
  console.log(y);
  if (y >= 50) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", function () {
  window.scroll(0, 0);
});
window.addEventListener("load", function () {
  // var bodytHeight = document.body.clientHeight;
  // this.window.scroll(0, bodytHeight);
});
