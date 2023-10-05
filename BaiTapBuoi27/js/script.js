var products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 2000,
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 3000,
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    price: 4000,
  },
];
var carts = [];

var getProduct = function (id) {
  return products.find(function (product) {
    return +product.id === +id;
  });
};

var deleteCartItem = function (id) {
  if (confirm("Bạn có chắc không"))
    carts = carts.filter(function (cartItem) {
      return +cartItem.productId !== +id;
    });
  renderCart();
};

var handleUpdateCart = function () {
  var cartEl = document.querySelector(".carts");
  var quantityInputList = cartEl.querySelectorAll(".quantity");
  var indexDelete;
  quantityInputList.forEach(function (quantityInput, index) {
    if (quantityInput.value > 0) {
      carts[index].quantity = quantityInput.value;
    } else {
      indexDelete = index;
    }
  });
  if (indexDelete !== undefined) {
    carts.splice(indexDelete, 1);
  }

  renderCart();
};

var deleteCart = function () {
  if (confirm("Bạn chắc chắn muốn xóa?")) {
    carts = [];
    renderCart();
  }
};

var renderCart = function () {
  var cartEl = document.querySelector(".carts");
  if (carts.length) {
    var table = `<table cellpadding="0" cellspacing="0" width="100%" border="1">
  <thead>
    <tr>
      <th width="5%">STT</th>
      <th>Tên sản phẩm</th>
      <th width="20%">Giá</th>
      <th width="20%">Số lượng</th>
      <th width="20%">Thành tiền</th>
      <th width="5%">Xoá</th>
    </tr>
  </thead>
  <tbody></tbody>
  </table>`;
    cartEl.innerHTML = table;

    // Tạo ra cac tbodyvar tbody = cartEl.querySelector("tbody");

    var tbody = cartEl.querySelector("tbody");
    var totalAmount = 0;
    var totalQuantity = 0;
    carts.forEach(function (cartItem, index) {
      var product = getProduct(cartItem.productId);

      var tr = document.createElement("tr");
      var tdNo = document.createElement("td");

      tdNo.innerText = index + 1;
      tr.append(tdNo);

      var tdName = document.createElement("td");
      tdName.innerText = product.name;
      tr.append(tdName);

      var tdPrice = document.createElement("td");
      tdPrice.innerText = product.price.toLocaleString();
      tr.append(tdPrice);

      var tdQuantity = document.createElement("td");
      var quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.value = cartItem.quantity;
      quantityInput.classList.add("quantity");

      tdQuantity.append(quantityInput);
      tr.append(tdQuantity);

      var tdAmount = document.createElement("td");
      tdAmount.innerText = (product.price * cartItem.quantity).toLocaleString();
      tr.append(tdAmount);

      var tdRemove = document.createElement("td");
      var removeBtn = document.createElement("button");
      removeBtn.innerText = `Xóa`;
      removeBtn.addEventListener("click", function () {
        deleteCartItem(cartItem.productId);
      });
      tdRemove.append(removeBtn);

      tr.append(tdRemove);
      tbody.append(tr);

      totalAmount += product.price * cartItem.quantity;
      totalQuantity += +cartItem.quantity;
    });

    //Thêm phần thống kê
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.setAttribute("colspan", 3);
    td.innerText = "Tổng";

    tr.append(td);

    var td = document.createElement("td");
    td.innerText = totalQuantity.toLocaleString();
    tr.append(td);

    var td = document.createElement("td");
    td.setAttribute("colspan", 2);
    td.innerText = totalAmount.toLocaleString();
    tr.append(td);

    tbody.append(tr);

    // Xử lý khi mà click vào 1 sản phẩm thì cần thêm nó vào 1 Object rồi sau đó mới hiển thị nó ra
    // Thêm các nút
    var updateCartBtn = document.createElement("button");
    updateCartBtn.innerText = "Cập nhật giở hàng";
    updateCartBtn.addEventListener("click", handleUpdateCart);
    cartEl.append(updateCartBtn);

    var deleteCartBtn = document.createElement("button");
    deleteCartBtn.innerText = "Xóa giỏ hàng";
    deleteCartBtn.addEventListener("click", deleteCart);
    cartEl.append(deleteCartBtn);
    return;
  }
  cartEl.innerText = "LKhong có sản phẩm trong giỏ hàng";
};

var addCart = function (cartItem) {
  // đối số nhận vào là 1 objectcart
  var index = carts.findIndex(function (item) {
    return +item.productId === +cartItem.productId;
  });

  if (index === -1) {
    carts.push(cartItem);
  } else {
    carts[index].quantity += cartItem.quantity;
  }
};

var handleAddCart = function (product, quantity) {
  // Xử lý số lượng sản phẩm thêm vào giở >=1
  if (quantity < 0 || Number.isNaN(quantity)) {
    quantity = 1;
  }
  // Lấy được quantity rồi phải update vào 1 mảng
  var productId = product.id;

  addCart({ productId, quantity });

  // Xử lý giao diện hiện thêm giỏ hàng\
  // Render ra table
  renderCart();
};

var tableProducts = document.querySelector(".products tbody");

// Khởi tạo từng cái tr
// . Đưa vào trong vòng lặp

products.forEach(function (product, index) {
  var tr = document.createElement("tr");
  var tdNo = document.createElement("td");
  tdNo.innerText = index + 1;
  tr.append(tdNo);

  var tdName = document.createElement("td");
  tdName.innerText = product.name;
  tr.append(tdName);

  var tdPrice = document.createElement("td");
  tdPrice.innerText = product.price.toLocaleString();
  tr.append(tdPrice);

  var tdAction = document.createElement("td");
  var quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = 1;
  quantityInput.style = `width: 90%; display: block; margin: 0 auto`;

  tdAction.append(quantityInput);

  var button = document.createElement("button");
  button.innerText = `Thêm vào giỏ`;
  button.style = `width: 100%`;
  button.addEventListener("click", function () {
    var quantity = quantityInput.value;
    handleAddCart(product, +quantity); // Lấy được thông tin sản phẩm // quantity để lấy số lượng ta nhập vào
  });

  tdAction.append(button);
  tr.append(tdAction);

  tableProducts.append(tr);
});

renderCart();
