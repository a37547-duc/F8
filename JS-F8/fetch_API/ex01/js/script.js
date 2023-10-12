/*
   - Client <=> Lấy được dữ liệu từ Server để trả về Client (Render lên giao diện)
   - Đẩy dữ liệu từ Client lên Server

 HTTP Requets => Server => HTTP Response

 API = Application Programming Interface
 Giao diện lập trình ứng dụng
    - Giao tiếp giữa Client với Server
    - Giao tiếp giữa Server với Server
    - Giao tiếp giữa phần mềm với hệ điều hành
    - Giao tiếp giữa chương trình với các hàm trong thư viện / framework

 WEB API => Chuẩn thiết kế API => RESTFul API

 Những quy tắc phổ biến của chuẩn RESTFUL

- URL: Base Server + resource (resource sẽ có quy tắc đặt tên)
=> vd: https://api.fullstack.edu.vn/users 


- HTTP METHOD:
+ GET
+ POST
+ PUT 
+ PATCH
+ DELETE
- HTTP Method + resource => Endpoint

GET /users => Lấy danh sách user
POST /users=> Thêm mới user
GET /users{id} => Lấy thông tin 1 user
PUT /users{id}=> Sửa thông tin 1 user

- Response Code
- Response Body => Kiểu Json

Làm thế nào để có Server API
- Tự viết
- Sử dụng các dịch vụ Mockup API (Fake API)
- Sử dụng thư viện Mockup API

Làm thế nào để gọi API

- XMLHttpRequest => Không trả về promise
- fetch => Trả về promise
- Thư viện: axios, jquery ajax
*/
const serverApi = `http://localhost:3000`;
// fetch(`${serverApi}/users`)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     const body = document.body;
//     body.innerHTML = data
//       .map(({ name }) => {
//         `<h2>${name}</h2>`;
//       })
//       .join("");
//   });

const getUsers = async () => {
  const response = await fetch(`${serverApi}/users`);
  const users = await response.json();
  console.log(users);
};
getUsers();

const getUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`);
  const users = await response.json();
  console.log(users);
};
getUser(2);

/*
POST => Thêm mới
PUT => Update, ghi đè
PATCH => Update, không ghi đè
DELETE => Xóa
*/

const posUsers = async (data) => {
  // data là Object
  /*
      - URL
      - METHOD = POST
      - Headers: Content-Type
      - Body
   */
  const dataEncoded = new URLSearchParams(data).toString();
  // => Chuyển về dạng key=value1&key2=value2
  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    //  body: JSON.stringify(data),
    //  body: `name=User6&email=anhtupeo123@gmail.com`,
    body: dataEncoded,
  });
  console.log(response);
};

posUsers({
  name: "User 4",
  email: "anhtupeo123@gmail",
});

//
const updateUser = async (data, id) => {
  const response = await fetch(`${serverApi}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

updateUser(
  {
    name: "User 11",
  },
  14
);

const deleteUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`, {
    method: "DELETE",
  });
  console.log(response);
};
deleteUser(11);
