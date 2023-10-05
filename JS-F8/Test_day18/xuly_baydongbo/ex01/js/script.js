// Javascript là ngôn ngữ lập trình bất đồng bộ
/*
    Gỉa sử mỗi hàm mất 1s để xử lý
    a()->b()->c() => Bất đồng bộ => Tổng thời gian thực thi 3 hàm là 1s

     a()->b()->c() => Đồng bộ => Tổng thời gian thực thi 3 hàm là 3s


    Có 3 cách xử lý bất đồng bộ
    - Callback - ES5
    - Promise - ES6
    - Async Await function - ES7
*/

const downloadImage = (callback, ...args) => {
  setTimeout(() => {
    console.log("Tải ảnh thành công");
    if (typeof callback === "function") {
      callback(...args);
    }
  }, 1000);
};

const showImage = (size) => {
  console.log("Hiển thị hình ảnh " + size);
};

// downloadImage(() => {
//   showImage("big");
// });

downloadImage(showImage, "Big");

// CÁCH SỬ DỤNG PROMISE
/*
    - Là 1 object đặc biệt được sử dụng để xử lý các tác vụ bất đồng nộ
Promise State
 - pending -> Chờ xử lý
 - fullfield -> Xử lý thành công
 - reject -> Xử lý thất bại
*/

const getUser = () => {
  const users = ["User 1", "User 2", "User 3"];
  return new Promise((resolve, reject) => {
    // resolve và reject là function
    setTimeout(() => {
      // Logic lấy dữ liệu từ Serve
      // Nếu thành công => gọi resolve()
      // Nếu thất bại => Gọi reject()
      resolve(users);
      reject("Lỗi mạng");
      //   const result = resolve(users); // Giair quyết
    }, 5000);
  });
};
const showMessage = () => {
  console.log("Lấy dữ liệu thành công");
};

getUser()
  .then((user) => {
    // console.log(user);
    showMessage();
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log("Hoàn thành");
  });

// Promise Chainning

////////////////////////////////////////////////////////

// const getA = () => {
//   const user = getB;
//   console.log(getB);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Get A");
//       resolve(user);
//       reject("Sai");
//     }, 1000);
//   });
// };

const getA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Get A");
      reject("Sai");
    }, 1000);
  });
};
const getB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Get B");
      reject("Sai");
    }, 500);
  });
};
const getC = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Get C");
      reject("Sai");
    }, 2000);
  });
};

getA()
  .then((data) => {
    console.log(data);
    return getB();
  })
  .then((data) => {
    console.log(data);
    return getC();
  })
  .then((data) => {
    console.log(data);
  });
