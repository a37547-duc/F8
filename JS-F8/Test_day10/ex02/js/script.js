// Next tới 1 element mới
//nextElementSibling và nextsibling

// lastElementChild
// Prev về 1 element trước
var products = document.querySelector(".products");

// Khai báo kiểu mới
var productFist;
var productActive = (productFist = products.querySelector(".active"));

console.log(productActive);
console.log(productActive.nextElementSibling.previousElementSibling);

var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var productLast = products.lastElementChild;

var handleNext = function () {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = productFist;
  }
  nextElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextElement;
};
next.addEventListener("click", handleNext);

var handlePrev = function () {
  var prevElement = productActive.previousElementSibling;
  if (prevElement === null) {
    prevElement = productLast;
  }
  prevElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = prevElement;
};
prev.addEventListener("click", handlePrev);

document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    handleNext();
  }
  if (e.key === "ArrowLeft") {
    handlePrev();
  }
  // còn trường hợp giữ
});
