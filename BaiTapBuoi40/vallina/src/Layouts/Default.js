// import "..Assets/Style.scss";
export const DefaultLayout = () => {
  return `
  <header class="mb-3">
    <div>
        <h1><a href="/" data-route>HEADER</a></h1>
    </div>
  </header>
  <main> 
    <div class="container"> 
      <div class=""col-3>
        <h2>Menu</h2>
        <ul>
          <li><a href="/" data-route></a>Trang chủ </li>
          <li><a href="/gioi-thieu" data-route></a>Gioiws thiệu</li>
          <li><a href="/san-pham" data-route></a>Sản phẩm</li>
        </ul>
      </div>
      <div class="col-9"> 
        {body}
      </div>
    </div>
  </main>

  <footer class="mt-3">
    <div class="container">
      <h1>FOOTER</h1>
    </div>
  </footer>
  `;
};
