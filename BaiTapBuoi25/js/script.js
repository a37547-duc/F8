// tạo các elemant
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");
var imgs = carouselInner.querySelectorAll("img");
var carouselDots = carousel.querySelector(".carousel-dots");
var itemWidth = carouselInner.clientWidth;
var items = carouselInner.children;
var position = 0;
var totalWidth = items.length * itemWidth;
carouselInner.style.width = `${totalWidth}px`;

let quantity = 0;
while (quantity < imgs.length) {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  carouselDots.appendChild(dot);
  quantity++;
}

var dots = carouselDots.querySelectorAll(".dot");
dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    position = -index * itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;

    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });

    dot.classList.add("active");
  });
});

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;

    carouselInner.style.transform = `translateX(${position}px)`;

    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });
    var currentDotIndex = Math.abs(position) / itemWidth;
    dots[currentDotIndex].classList.add("active");
  }
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
  }

  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });
  var currentDotIndex = Math.abs(position) / itemWidth;
  dots[currentDotIndex].classList.add("active");
});
