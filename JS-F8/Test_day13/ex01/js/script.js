// OMContentLoaded => Cây DOM được hình thành
var img = document.querySelector("img");

window.addEventListener("DOMContentLoaded", function () {
  var img = this.document.querySelector("img");
  console.log(img);
  console.log(img.width);
  img.id = "img";
});

// load => Tất cả tài nguyên trên trang web được tải: css, js, img, video, audio,....
window.addEventListener("load", function () {
  var img = this.document.querySelector("img");
  console.log(img.width);
});
