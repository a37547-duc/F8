// Check All / Uncheck All
// change và this.checked
var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");

checkAll.addEventListener("change", function () {
  var checkAllStatus = this.checked;

  checkItems.forEach(function (checkItem) {
    checkItem.checked = checkAllStatus;
  });
});

checkItems.forEach(function (checkItem) {
  checkItem.addEventListener("change", function () {
    // Kiểm tra xem tất cả checkbox có được check hay không?
    // checkItems.every(function (item) {
    //   return item.checked;
    // });

    // Tối ưu vòng lặp
    if (!this.checked) {
      checkAll.checked = false;
      return;
    }
    var status = Array.from(checkItems).every(function (item) {
      return item.checked;
    });
    //tạo một bản sao mới của danh sách checkItems,
    //và sau đó bạn kiểm tra tất cả các mục trong danh sách này.
    //Điều này làm cho mọi thứ hoạt động bình thường vì bạn đã tạo một mảng mới với các mục đã được chọn.
    checkAll.checked = status;
  });
});
