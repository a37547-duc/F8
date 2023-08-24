// /*
// Vòng lặp reduce, có 2 tham số
// - callback
// + prevValue
// + currentValue
// + index
// - initialValue => Gía trị khởi tạo

// Gía trị trả về của reduce là kết quả của lần return cuối cùng trong callback

// */
// var numbers = [1, 2, 3, 4, 5, 6];
// var result = numbers.reduce(function (prev, curent) {
//   console.log(prev, curent);
//   return curent;
// });
// console.log(result);

// // Tìm max trong mảng
// // dùng reduce
// var numbers = [5, 1, 2, 9, 3];
// var findMax = numbers.reduce(function (max, numbers) {
//   return max < numbers ? numbers : max;
// });
// console.log(findMax);

// /*
// var arr1=[5,2,1,9,8]

// var arr2=[3,2,9,8]

// Tìm phần tử có trong mảng 1 nhưng không có trong mảng 2 và trả về 1 mảng mới

// Kết quả: [5,1]
// lưu ý dùng reduce
// */
// var arr1 = [5, 2, 1, 9, 8];

// var arr2 = [3, 2, 9, 8];

// var diff = arr1.reduce(function (prev, curent) {
//   if (!arr2.includes(curent)) {
//     prev.push(curent);
//   }
//   return prev;
// }, []);
// console.log(diff);

///////////////////////////////////////////////////////////////////////////////

/*
  Vòng lặp reduce, có 2 tham số
  - callback
    + prevValue
    + currentValue
    + index
  - initialValue => Gía trị khởi tạo
  - Gía trị trả về reduce là kết quả của lần return cuối cùng trong callback
 */
// pre của lần này là return của lần trc
var numbers = [5, 10, 15, 20, 25, 30];
var result = numbers.reduce(function (prev, curent) {
  console.log(prev, curent);
  return curent;
});
console.log(result);

var result = numbers.reduce(function (prev, curent) {
  console.log(prev, curent);
  return prev + curent;
});
console.log(result);

// Tìm max trong mảng
// dung reduce

var numbers = [5, 1, 2, 9, 3, 10];
var max_num = 0;
var findMax = numbers.reduce(function (prev, curent) {
  if (prev > curent) {
    max_num = prev;
  } else {
    max_num = curent;
  }
  return max_num;
});
console.log(findMax);

/*
var arr1=[5,2,1,9,8]

var arr2=[3,2,9,8]

Tìm phần tử có trong mảng 1 nhưng không có trong mảng 2 và trả về 1 mảng mới

Kết quả: [5,1]
lưu ý dùng reduce
*/
var arr1 = [5, 2, 1, 9, 8];
var newArray;
var arr2 = [3, 2, 9, 8];
var check = arr1.reduce(function (prev, curent) {
  if (!arr2.includes(curent)) {
    prev.push(curent);
  }
  return prev;
}, []);
console.log(check);
