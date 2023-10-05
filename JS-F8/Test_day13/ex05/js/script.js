var header = document.querySelector(".header");
var headerInner = header.querySelector(".header-inner");
var menu = header.querySelector(".menu");
var body = document.body;
var menuHeight = headerInner.clientHeight;

window.addEventListener("scroll", function () {
  var y = this.window.scrollY;
  if (y >= headerInner.clientHeight) {
    menu.classList.add("fixed");
    body.style.paddingTop = `${menuHeight}px`;
  } else {
    menu.classList.remove("fixed");
    body.style.paddingTop = 0;
  }
});

window.addEventListener("load", function () {});
