// Trước khi thao tác với các thẻ HTML: Tạo được element

// DOM Element: Tạo Element (Object) từ các thẻ HTML có sẵn
// console.log(document);

/*
    1. document.getElementById(id)
    - Truy xuất vào các thẻ HTML: thông qua id
    - Chỉ truy xuất đucợ thẻ đầu tiên

    2. docment.getElementsByClassName(class)
    - Truy xuất vào thẻ HTML: thông qua class
    - Trả về 1 danh sách (HTML Collection)
    - Muốn tương tác => Cần lặp để truy cập tới từng element

    3. document.getElementByTagName(tag)
    - Truy xuất tới thẻ HTML: thông qua tên thẻ HTML
    - Muốn tương tác => Cần lặp để truy xuất tới từng element

    4. document.querySelector(selector)
    - Truy xuất tới 1 thẻ html thông qua css selector
    - Chỉ truy xuất tới được thẻ đầu tiên

    5. document.querySelectorAll(selector)
    - Truy xuất tới tất cả thẻ HTML có cùng selector đã khai báo
    - Trả về 1 danh sách (NodeList)
    - Muốn tương tác => Cần lặp tới từng element
*/

//getElementById()
var title = document.getElementById("title");
console.log(title);
console.log([title]);

//getElementByClassName()
// var titleList = document.getElementsByClassName("title");
// console.log(titleList);
// for (var i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }

// document.getElementByTagName(tag)
// var titleList = document.getElementsByTagName("h1");
// console.log(titleList);
// for (var i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }

//document.querySelector(selector)
// var title = document.querySelector(".title");
// console.log(title);

//document.querySelectorAll(selector)
var titleList = document.querySelectorAll(".title");
// console.log(titleList);
// for (var i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }
titleList.forEach(function (title) {
  console.log(title);
});

///////////////////////////////
// var contentHeading = document.querySelector(".content .heading");
// console.log(contentHeading);
// var elementtHeading = document.querySelector(".element .heading");
// console.log(elementtHeading);

var content = document.querySelector(".content");
var heading = content.querySelector(".heading");
var text = content.querySelector(".text");
console.log(text);
