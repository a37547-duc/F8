// // DOM HTML: Thao tác với nội dung và thuộc tính HTMT

// // var content = document.querySelector(".content");

// // // 1. Lấy nội dung trong thẻ html: innerHTML (Lấy tất cả)
// // console.log(content.innerHTML);

// // // 2. Lấy nội dung trong thẻ html: innerText (Chỉ lấy text)
// // console.log(content.innerText);

// // // 3. Lấy nội dung trong thẻ html: textContent (Chỉ lấy text nhưng giữ nguyên khoảng trắng)
// // console.log(content.textContent);

// // // 4. Lấy nội dung bao gồm element đang tác động: outerHTML
// // console.log(content.outerHTML);

// // 5. Cập nhật nội dung HTML
// // content.innerHTML = `<h1>Javascript không khó</h1>`;
// // // cách 2
// // content.innerText = `<h1>Javascript không khó</h1>`;
// // // cách 3
// // content.outerHTML = `<h1>Javascript không khó</h1>`;
// // // cách 4
// // content.outerText = `<h1>Javascript không khó</h1>`;

// // cách xóa nội dung thẻ html
// // content.innerText = "";

// // Tạo element
// var number = document.querySelector(".number");
// var push = document.querySelector(".up");
// var down = document.querySelector(".down");
// var countNumber = document.querySelector(".count");
// var countNumber_1 = document.querySelector(".count_1");

// var pushClick = function () {
//   var count = number.innerText;
//   var countPush = countNumber_1.innerText;
//   count++;
//   countPush++;

//   number.innerText = count;
//   countNumber_1.innerText = countPush;
// };
// push.addEventListener("click", pushClick);
// ///////////////////////////////////////////
// var downClick = function () {
//   var count = number.innerText;
//   var countPush = countNumber.innerText;
//   count--;
//   countPush++;

//   number.innerText = count;
//   countNumber.innerText = countPush;
// };
// down.addEventListener("click", downClick);

//////////////////////////.///////////////////////////////////

// DOM HTML: Thao tác với nội dung, thuộc tính HTML
var content = document.querySelector(".content");

// 1. LẤY NỘI DUNG TRONG THẺ HTML (LẤY TẤT CẢ): innerHTML
console.log(content.innerHTML);

// 2. LẤY NỘI DUNG TRONG THẺ HTML (CHỈ LẤY TEXT): innerText
console.log(content.innerText);
// LƯU Ý: Nếu ẩn đi bằng css thì ko loại bỏ được khoảng trắng

// 3. LẤY NỘI DUNG TRONG THẺ HTML (CHỈ LẤY TEXT NHƯNG GIỮ NGUYÊN KHOẢNG TRẮNG): textContent
console.log(content.textContent);

// 4. LẤY NỘI DUNG BAO GỒM ELEMENT ĐANG TÁC ĐỘNG: outerHTML
console.log(content.outerHTML);

// CẬP NHẬT NỘI DUNG HTML

// content.innerHTML = `<h1>Javascript không khó</h1>`;

// content.innerText = `<h1>Javascript không khó</h1>`; // tự động chuyển về html entity(Không biên dịch)

// content.outerHTML = `<h1>Javascript không khó</h1>`; // lại thẻ

// content.outerText = `<h1>Javascript không khó</h1>`; // được sử dụng trong tình huống nếu bn muốn thay thể nó
// nhưng chỉ là text thôi

// CÁCH XÓA NỘI DUNG
content.innerText = "";

// BAI TẬP THỰC HÀNH
var number = document.querySelector(".number");
var down = document.querySelector(".down");
var up = document.querySelector(".up");
var count = 0;
down.addEventListener("click", function () {
  count--;
  number.innerHTML = count;
});
up.addEventListener("click", function () {
  count++;
  number.innerHTML = count;
});
