import Navigo from "navigo";

export const render = (component, params) => {
  const router = new Navigo("/", { linksSelector: "a", hash: true }); // Khai báo để ko load lại trang
  const app = document.getElementById("#app");

  router.on("/", function () {
    render("<h1>Home page</h1><p>Welcome to the home page.</p>");
  });

  router.on("/gioi-thieu", function () {
    render("<h1>Home page</h1><p>Welcome to the home page.</p>");
  });

  router.on("/san-pham", function () {
    render("<h1>Home page</h1><p>Welcome to the home page.</p>");
  });
};
