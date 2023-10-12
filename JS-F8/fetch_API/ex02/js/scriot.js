// Tách phần fetch Api thành => Object client
// Dễ bảo trì
// -> Giair quyết các bài toán phức tạp liên quan đến API trong dự án

import { config } from "../../config.js/js.js";
import { client } from "../../client/client.js";
const { SERVER_API } = config;

// const getUsers = async () => {
//   const { data } = await client.get(`/users`);
//   console.log(data);
// };

// getUsers();

// const getUser = async (id) => {
//   const { data } = await client.get(`/users/${id}`);
//   console.log(data);
// };
// getUser(32);

const render = (posts) => {
  const stripHtml = (html) => {
    // const div = document.createElement("div");
    // div.innerHTML = html;
    // return div.innerText;

    return html.replace(/(<([^>]+)>)/gi, "");
  };
  const postsEl = document.querySelector(".posts");
  let postHtml = ``;
  posts.forEach(({ title, excerpt }) => {
    postHtml += ` <div class="col-6 col-lg-4">
    <div class="post-item border p-3">
    <h3>
    <a href="#" class="text-decoration-none">${stripHtml(title)}</a>
  </h3>
  <p>${excerpt}</p>
  </div>
  </div>`;
  });

  postsEl.innerHTML = `<div class="row g-3">
  ${postHtml}</div>`;
};

const getPosts = async (query) => {
  const queryString = new URLSearchParams(query).toString();
  // Chuyển từ Object -> query string
  const { data: posts } = await client.get("/posts?" + queryString);
  render(posts);
};

let order = "desc";
let sort = "id";
let keyword = "";
getPosts({
  _sort: sort,
  _order: order,
});

// Xây dựng chức năng tìm kiếm

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywordEl = e.target.querySelector(".keyword");
  const keyword = keywordEl.value;
  //   console.log(e.target);
  //   console.log(keywordEl);
  //   console.log(keyword);
  getPosts({
    q: keyword,
  });
  keywordEl.value = "";
  console.log(e);
});

// Xây dựng chức năng sắp xếp
const sortByEl = document.querySelector(".sort-by");
sortByEl.addEventListener("change", (e) => {
  const type = e.target.value;
  console.log(type);
  getPosts({
    _sort: "id",
    _order: type,
  });
});
