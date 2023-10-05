HTMLElement.prototype.css = function (style = {}) {
  Object.assign(this.style, style);
};

var content = document.querySelector(".content");
console.log(content);

content.css({
  color: "red",
  fontWeight: "bold",
  textDecoration: "underline",
  backgroundImage:
    "url(https://fastly.picsum.photos/id/85/150/150.jpg?hmac=4aHcQvgcRkJkSrD0W9CWPI8GVz1xXugbYm8yQhnoNqg)",
});

/*
Thư viện tab
doccument.querySelector('#tab-1').tab()
doccument.querySelector('#home-slider').carousel(
    {
        nav:true,
        dots:true,
        autoPlay:true
    }
)
*/
