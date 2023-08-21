console.log("Bài 1");
var arrA = [1, 4, 3, 2];
var arrB = [4, 3, 6, 7, 1];
var intersection = [];

for (var i = 0; i < arrA.length; i++) {
  if (arrB.includes(arrA[i])) {
    intersection.push(arrA[i]);
  }
}
console.log(intersection);
console.log("Bài 2");
function flattenArray(arr) {
  var flattened = [];
  var stack = [...arr];

  while (stack.length) {
    var next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      flattened.unshift(next);
    }
  }

  return flattened;
}

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var flattened = flattenArray(arr);
console.log(flattened); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
