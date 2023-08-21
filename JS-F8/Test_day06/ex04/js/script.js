Array.prototype.map2 = function (callback) {
  var array = this;
  for (var i = 0; i < this.length; i++) {
    array.push;
  }
  console.log(array);
};
var users = ["Item 1", "Item 2", "Item 3", "Item 4"];
var result = users.map2(function (user) {
  return `<h3>${user}</h3>`;
});
console.log(result);
// Yêu cầu/; Viết phương thức map2 có tác dụng giống map

// Array.prototype.map2 = function (callback) {
//   var newArray = [];
//   for (var i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   return newArray;
// };

// var users = ["Item 1", "Item 2", "Item 3", "Item 4"];
// var result = users.map2(function (user) {
//   return `<h3>${user}</h3>`;
// });

// console.log(result);
