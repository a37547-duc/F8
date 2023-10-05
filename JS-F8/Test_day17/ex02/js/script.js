// Spread Operator

const oldObbj = {
  name: "Đức",
  email: "anhtupeo123@gmail.com",
};
const newObj = { course: "Fullstack", ...oldObbj };
console.log(newObj);

const oldArr = ["Hoàng An", "anhtupie123@gmail.com"];
const newArr = ["Fullstack", ...oldArr];
console.log(newArr);

const getTotal = (a, b, ...c) => {
  console.log(a, b, c);
};
const values = [
  10,
  20,
  {
    name: "Đức",
    email: "anhtupeo123@gmail.com",
  },
];
getTotal(...values);

// Enhance Object Literal

// const name = "Đức";
// const email = "anhtupeo123";
// const age = undefined;
// const user = {
//   name,
//   email,
//   age,
// };
// console.log(user);

const user = {
  sum(a, b) {
    return a + b;
  },
  div(a, b) {
    return a / b;
  },
};
console.log(user);
