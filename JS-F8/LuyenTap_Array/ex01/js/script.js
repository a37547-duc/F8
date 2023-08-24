const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// 1. fill() => Thay đổi tất cả các phần tử trong khoảng chỉ số của 1 mảng thành 1 giá trị cố định, Trả về mảng sau khi được thay đổi
// fill(value)
// fill(value, start)
// fill(value, start, end)

var array1 = [1, 2, 3, 4];
// Thay đổi phần tử với 0 từ vị trí số 1 -> 3
console.log(array1.fill(0, 1, 3));

// 2.forEach(callback)
/*
    - Duyệt qua từng phần tử trong mảng và trả về element và index trong callback
    - Gía trị trả về la undefined
    - callbackFn chỉ được gọi cho các chỉ số mảng mà đã có giá trị gán. Nó không được gọi cho các vị trí trống trong các mảng rải rác (sparse arrays).
*/
var array1 = ["a", "b", "c"];

array1.forEach((element, index) => console.log(element, index));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// 3.map(callback) =>
/*
    - Duyệt qua từng phần tử trong mảng, trả về element, index trong callback
    - Trả về 1 mảng mới chính là return của callback
    - Số lượng phần tử của mảng mới chính là số lượng của phần tử mảng ban đầu

*/
///////////////////////////////////////////// BÀI TẬP MAP()
var input = [1, 2, 3, 4, 5];
var arraySquared = input.map(function (element) {
  return Math.pow(element, 2);
});
console.log(arraySquared);

// 4. some(callback)
/*
    - Gía trị trả về là true/false
    - Trả về true: Nếu có ít nhất 1 lần lặp trả về true
    - Trả về false: Nếu tất cả các vòng lặp không trả về false
    - Vòng lặp sẽ chạy tới khi nào có return true thì dừng
 */
///////////////////////////////////////////// BÀI TẬP SOME()
var numbers = [1, 2, 3, 4, 5];
var check = numbers.some(function (number) {
  return number > 4;
});
console.log(check);

// 5. every(callback)
/*
    -Trả về true/false
    - Trả về true nếu tất cả các lần lặp đều return true
    - Trả về false nếu tất cả tồn tại 1 lần lặp không return true
*/
console.log("BÀI TẬP EVERY");
// var numbers = [1, 2, 3, 4, 5];
// var check = numbers.every(function (number) {
//   return number > 4;
// });
// console.log(check);
var input = [1, -4, 12, 0, -3, 29, -150];

const sumPositive = input
  .filter(function (num) {
    return num > 0;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

console.log(sumPositive);
