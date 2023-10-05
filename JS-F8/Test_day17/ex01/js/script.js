// rest parameter

const sum = (msg, ...args) => {
  console.log(msg);
  console.log(args);
};
sum("Sum = ", 5, 10, 25, 30);

// default parameter
const division = (a, b = 1) => {
  console.log(a, b);
};
division(10);

//Destructuring

// -> Phá vỡ cấu trúc của array, object để truy cập vào
// các phần tử và gán thành các biến riêng biệt

// const user = {
//   name: "Đức",
//   email: "anhtupeo123@gmail.com",
//   getInfo: function () {
//     return {
//       name: "Hoàng an f8",
//     };
//   },
//   "shipping-address": "Hồ Chí Minh",
//   address: "Hà Nội",
// };

// const key = "address";
// const {
//   name,
//   email,
//   age = 29,
//   getInfo,
//   "shipping-address": shippingAddress,
//   [key]: address,
// } = user;
// console.log(name, email, getInfo(), shippingAddress, address);

// const { name: username, email, ...rest } = user;
// console.log(username, email);
// console.log(rest);

// Destructuring Array
// const user = [
//   "Đức",
//   "Hoangfan.@gmail.com",
//   31,
//   "Hà Nội",
//   {
//     age: 21,
//     address: "Hà Nội",
//   },
// ];

// const user = [
//   {
//     id: "1",
//   },
//   {
//     id: "2",
//   },
//   {
//     id: "3",
//   },
//   {
//     id: "4",
//   },
// ];
// user.forEach(function (user) {});
// const [username, email, , address] = user;
// console.log(username, email, address);

// const [username, email, { age, address }] = user;
// console.log(username, email, address);
// console.log(age, address);

// let a = "Đức";
// let b = "Dyongw";
// [a, b] = [b, a];
// console.log(a, b);

const user = [
  {
    id: 1,
    name: "Đức",
  },
  {
    id: 2,
    name: "Trung",
  },
  {
    id: 3,
    name: "Tài",
  },
  {
    id: 4,
    name: "Trung",
  },
];

// const getUser = (value) => {
//   return user.find(({ name }) => name === value);
// };
// console.log(getUser("Trung"));

const html = user.map(({ id, name }) => `<h2>${id} - ${name}</h2>`).join("");
document.body.innerHTML = html;

const getResult = () => [1, 2];
const [value1, value2] = getResult();
console.log(value1, value2);
