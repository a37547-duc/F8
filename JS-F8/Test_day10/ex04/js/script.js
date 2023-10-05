// Tạo các element
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");

var carouselDots = carousel.querySelector(".carousel-dots");

var renderDots = function (indexDot = 0) {
  var dotHtml = "";
  carouselItems.forEach((item, _index) => {
    dotHtml += `<span data-index="${_index}" ${
      +_index === +indexDot ? 'class="active"' : ""
    }></span>`;
  });
  carouselDots.innerHTML = dotHtml;

  carouselDots.addEventListener("click", function (e) {
    if (e.target.nodeName == "SPAN") {
      var indexClick = e.target.dataset.index;
      index = indexClick;
      goSlide();
    }
  });
};

var goSlide = function () {
  position = 0 - index * itemWidth;
  carouselInner.style.translate = `${position}px`;
  renderDots(index);
};

var carouselItems = carouselInner.querySelectorAll(".item");
if (carouselItems.length) {
  // Lấy kích thước của 1 i item
  // thuộc tính clienWidth: Lấy kích thước chiều rộng của 1 element
  var itemWidth = carouselInner.clientWidth;
  console.log(itemWidth);
  // Lấy tất cả item
  var items = carouselInner.children;

  // Tính tổng kích thước của các items
  var totalWidth = items.length * itemWidth;

  // Cập nhật CSS cho carousel inner
  carouselInner.style.width = `${totalWidth}px`;
  renderDots();
  // Render

  // Muốn cập nhật tự động sử dụng sự kiện resize khi thay đổi kích thước màn hình
  // window.resize

  var position = 0;
  var index = 0;
  nextBtn.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      position -= itemWidth;
      index++;
      carouselInner.style.translate = `${position}px`;
      renderDots(index);
    }
  });

  prevBtn.addEventListener("click", function () {
    if (Math.abs(position) > 0) {
      position += itemWidth;
      index--;
      carouselInner.style.translate = `${position}px`;
      renderDots(index);
    }
  });
}

// slick
// user select
// Vuốt chuyển slider

var isDrag = false;
var initialOffsetX = 0;
carouselInner.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDrag = true;
    initialOffsetX = e.offsetX;
  }
});
carouselInner.addEventListener("mouseup", function () {
  isDrag = false;
});

carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    console.log(initialOffsetX, e.offsetX);
  }
});
