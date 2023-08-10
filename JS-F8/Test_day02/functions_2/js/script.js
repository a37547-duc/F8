// Tìm hiểu arguments

function max(a, b) {
  console.log(arguments);
  // từ khóa arguments

  console.log(a, b);
}
max(5, 10, 15, 20, 30);

//////////////////////////////////////////////////////

// rest parameter
function max(result, ...args) {
  console.log(result);
  // console.log(arguments);
  console.log(args);
}
max("Max", 1, 2, 3, 4, 5, 6);

//////////////////////////////////////////////////////

// Function expression

// anonymous function

// function(){
// Hàm ẩn danh, không gọi nó được
// }

var getMsg = function () {
  // lúc này nó đang là 1 biến nhưng nó lại là 1 hàm
  // Hàm được coi là 1 kiểu dữ liệu bên trong javascript
  console.log("Xin chao f8");
};

getMsg();

// Kiểm tra 1 biến có phải là 1 hàm hay không ?
// typeof
if (typeof getMsg === "function") {
  console.log("Đây là 1 hàm");
}

//////////////////////////////////////////////////////
// IIFE

(function (value) {
  console.log("IIFE " + value);
})("Fullstack");

//////////////////////////////////////////////////////

// callback
var getA = function (fn) {
  console.log("getA");
  if (typeof fn === "function") {
    fn();
  }
};

var getB = function (name) {
  console.log("getB " + name);
};
// getA(handelerGetB);

// getA();// mất 2s
// getB(); // mất 1s

// tenham() => Lời gọi hàm chủ động tường mình

var handelerGetB = function () {
  // dùng 1 hàm không tham số gọi hàm có tham số
  getB("f8");
};
getA(handelerGetB);

//////////////////////////////////////////// Bài 1

var totalPrice = function (n) {
  var km1 = 15000;
  var km2 = 13500;
  var km3 = 11000;
  if (n <= 1) {
    console.log("Tổng số tiền cần thu: " + km1);
  } else if (n > 1 && n <= 5) {
    console.log("Tổng số tiền cần thu: " + n * km2);
  } else if (n > 5) {
    console.log("Tổng số tiền cần thu: " + n * km3);
  } else if (n > 120) {
    console.log("Tổng số tiền cần thu: " + n * km3 * 0.1);
  }
};
totalPrice(320);

//////////////////////////////////////////// Bài 2
var electricPrice = function (kwh) {
  var price_1 = 1.678;
  var price_2 = 1.734;
  var price_3 = 2.014;
  var price_4 = 2.536;
  var price_5 = 2.834;
  var price_6 = 2.927;
  var totalElectric = 0;
  if (kwh > 0 && kwh <= 51) {
    return (totalElectric = price_1 * kwh);
  } else if (kwh >= 51 && kwh <= 100) {
    return (totalElectric = price_2 * kwh);
  } else if (kwh >= 101 && kwh <= 200) {
    return (totalElectric = price_3 * kwh);
  } else if (kwh >= 201 && kwh <= 300) {
    totalElectric = price_4 * kwh;
  } else if (kwh >= 301 && kwh <= 400) {
    return (totalElectric = price_5 * kwh);
  }
  if (kwh >= 401) {
    return (totalElectric = price_6 * kwh);
  }
};
console.log("Tổng là tiền điện = " + electricPrice(10));

//////////////////////////////////////////// bài 3
var total = function (n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    var sum = sum + i * (i + 1);
  }
  return sum;
};
console.log(total(2));
//////////////////////////////////////////// bài 4

var number = 2;
var primeNumber = function (number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
if (primeNumber(number) === true) {
  console.log(number + " Là số nguyên tố");
} else {
  console.log(number + " Không là số nguyên tố");
}

//////////////////////////////////////////// bài 5

var triagle = function (n) {
  var number = 1;
  var row = "";
  for (var i = 0; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      row += number + " ";
      number++;
    }
    console.log(row);
  }
};
triagle(5);

//////////////////////////////////////////// bài 6

var chest = function () {
  for (var i = 0; i < 8; i++) {
    var row = "";
    for (var j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        row += "X";
      } else {
        row += "0";
      }
    }
    console.log(row);
  }
};
chest();
//////////////////////////////////////////// bài 7
var table = function () {
  for (var i = 1; i <= 10; i++) {
    var row = "";
    for (var j = 1; j <= 10; j++) {
      //   console.log(i + "x" + j + "=" + i * j);
      row += i + "x" + j + "=" + i * j + "  ";
    }
    console.log(row);
  }
};
table();
//////////////////////////////////////////// bài 8

var N = 10;
function calculate(n) {
  if (n === 1) {
    return 1;
  } else {
    return 1 / n + calculate(n - 1);
  }
}
var sum = calculate(N);
console.log(sum);
