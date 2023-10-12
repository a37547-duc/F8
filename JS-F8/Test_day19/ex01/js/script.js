const getUser = (id) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 500000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 500000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 500000,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id: _id }) => id === _id);
      resolve(user);
    }, 1000);
  });
};

getUser(1).then((user) => {
  console.log(user);
});

const list = [1, 2, 3];

// Tính tổng thu nhập của tất cả các users trong mảng list
let salary = 0;
// list.forEach(async (id) => {
//   const user = await getUser(id);
//   salary += user.salary;
//   console.log(salary);
// });

// const getSalary = async () => {
//   for (let id of list) {
//     const user = await getUser(id);
//     salary += user.salary;
//   }
//   console.log(salary);
// };
// getSalary();

// Promise.all() => Nhận 1 mảng chứa tất cả các Promise
const requests = list.map((id) => getUser(id));
console.log(requests);

Promise.all(requests).then((users) => {
  const salary = users.reduce((total, { salary }) => total + salary, 0);
  console.log(salary);
});

const promise = Promise.resolve("F8");
promise.then((data) => {
  console.log(data);
});
