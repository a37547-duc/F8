var root = document.getElementById("root");
var h2 = document.createElement("h2");
var btn = document.createElement("button");
var check = false;

h2.innerText = `Count: `;
btn.innerText = `+`;

root.append(h2);
root.append(btn);

var number = document.createTextNode(0);
h2.append(number);

var incement = function () {
  number.data++;
  if (check) {
    setTimeout(function () {
      incement();
    }, 1);
  }
};

btn.addEventListener("mousedown", function () {
  check = true;
  incement();
});

btn.addEventListener("mouseup", function () {
  check = false;
  incement();
});
