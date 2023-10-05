// Custom Event
// Có thể thêm thông tin cho 1 event Object

// Định nghĩa 1 sự kiện có tên: finish
var finishEvent = new Event("finish"); // Là 1 Object
console.log(finishEvent);
var slider = document.querySelector(".slider");
slider.addEventListener("input", function (e) {
  if (this.value === "100") {
    // console.log("đã xong");
    slider.dispatchEvent(finishEvent);
    finishEvent.abc = false;
  }
});

slider.addEventListener("mousemove", function (e) {
  finishEvent.offsetX = e.offsetX;
});

// listener Event
slider.addEventListener("finish", function (e) {
  console.log("đã xong");
  console.log(e);
});
