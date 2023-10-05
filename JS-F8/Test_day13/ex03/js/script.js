// Event: beforeunload

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   e.returnValue = "f8";
// });
var handleBeforeUnload = function (e) {
  e.preventDefault();
};

var loginForm = document.querySelector(".login-form");
loginForm.addEventListener("input", function (e) {
  if (e.target.defaultValue !== e.target.value) {
    window.addEventListener("beforeunload", handleBeforeUnload);
  } else {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  }
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  window.removeEventListener("beforeunload", handleBeforeUnload);
  this.submit();
});
