// Async Await

/*
    - Async Functioc luôn trả về 1 promise
*/
const getUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hoàng An");
    }, 4500);
  });
};

getUsers().then((data) => {
  console.log(data);
});

// Async Funciton kết hợp với await

const showUser = async () => {
  const data = await getUsers();
  console.log(data);
};

showUser();

// IIFE
async () => {
  const data = await getUsers();
  console.log(data);
};
