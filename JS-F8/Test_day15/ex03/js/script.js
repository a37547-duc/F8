// Trigger Event
/*
click()
submit()

-> Tự kích hoạt 1 event mà không cần tác dụng người dùng 
*/

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log("click me");
// });

// setInterval(function () {
//   btn.click();
// }, 1000);

var quantityInput = document.querySelector(".quantity input");

var minusBtn = quantityInput.previousElementSibling;

var pushBtn = quantityInput.nextElementSibling;

var changeEvent = new Event("change");

quantityInput.addEventListener("change", function () {
  console.log(this.value);
  //   minusBtn.classList.add("remove");
  //   pushBtn.classList.add("newlisst");
});

minusBtn.addEventListener("click", function () {
  quantityInput.value--;
  if (quantityInput.value < 1) {
    quantityInput.value = 1;
  }
  quantityInput.dispatchEvent(changeEvent);
});
pushBtn.addEventListener("click", function () {
  quantityInput.value++;
  quantityInput.dispatchEvent(changeEvent);
});

///////////

var selectChangeEvent = new Event("change");

var provide = document.querySelector(".provide");
provide.addEventListener("change", function () {
  var provideId = this.value;
  console.log(provideId);
});
provide.dispatchEvent(selectChangeEvent);
