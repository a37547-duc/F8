/*
    TÌM HIỂU VỀ ES6 MODULE
    Import các tài nguyên từ các file khác
*/

// import getUser, { getProduct, posts } from "./module/home.js";
// import { getProduct, posts } from "./module/home.js";
// const { getUser, getProduct } = home;

import * as home from "./module/home.js";
console.log(home);
// console.log(getUser());
// console.log(getProduct());
// console.log(posts);
