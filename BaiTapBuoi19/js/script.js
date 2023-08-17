//Bài 1
function findMinMax(arr) {
  if (arr.length === 0) {
    return "Mảng rỗng.";
  }

  let max = arr[0];
  let min = arr[0];
  let maxIndex = 0;
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  return {
    max: max,
    min: min,
    viTriMax: maxIndex,
    viTriMin: minIndex,
  };
}

const numbers = [12, 5, 7, 42, 18, 3];
const result = findMinMax(numbers);

console.log("Số lớn nhất:", result.max);
console.log("Vị trí số lớn nhất:", result.viTriMax);
console.log("Số nhỏ nhất:", result.min);
console.log("Vị trí số nhỏ nhất:", result.viTriMin);

///////////////////////////// Bài 2

console.log("/////////////////BÀI 2");
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function averagePrime(arr) {
  let sum = 0;
  let count = 0;

  for (let num of arr) {
    if (isPrime(num)) {
      sum += num;
      count++;
    }
  }

  if (count === 0) {
    return "Không có số nguyên tố";
  }

  return sum / count;
}

const numbers_2 = [7, 10, 23, 4, 17, 8, 31];
const avgPrime = averagePrime(numbers);

if (typeof avgPrime === "string") {
  console.log(avgPrime);
} else {
  console.log("Trung bình các số nguyên tố:", avgPrime);
}

///////////////////////////// Bài 3
console.log("/////////////////BÀI 3");
function filterDuplicates(arr) {
  const uniqueArray = [];
  const encountered = {};

  for (let num of arr) {
    if (!encountered[num]) {
      uniqueArray.push(num);
      encountered[num] = true;
    }
  }

  return uniqueArray;
}

const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7];
const filteredArray = filterDuplicates(inputArray);

console.log("Mảng sau khi loại bỏ trùng:", filteredArray);
