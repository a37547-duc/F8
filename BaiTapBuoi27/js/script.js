var product_data = [
  {
    product_id: 1,
    product_name: "San pham 1",
    product_price: 1000,
  },
  {
    product_id: 2,
    product_name: "San pham 2",
    product_price: 2000,
  },
  {
    product_id: 3,
    product_name: "San pham 3",
    product_price: 3000,
  },
  {
    product_id: 4,
    product_name: "San pham 4",
    product_price: 4000,
  },
  {
    product_id: 5,
    product_name: "San pham 5",
    product_price: 5000,
  },
];

// import product data (item)
var count = 0;
product_data.forEach(function (item) {
  count++;
  var product_item = "";
  product_item += `<tr>`;
  product_item += `<td> ${count} </td>`;
  product_item += `<td> ${item.product_name}  </td>`;
  product_item += `<td> ${item.product_price.toLocaleString()}  </td>`;
  product_item += `
              <td>
              <input type="number" id="quantity_${item.product_id}" value="1">
              <button type="button" id="add_to_cart_${item.product_id}">Them</butotn>
              </td> `;
  product_item += `</tr>`;

  document.querySelector(".product-table").innerHTML += product_item;
});

var add_to_cart = document.querySelectorAll(".product-table button");
// console.log(add_to_cart);
if (add_to_cart.length > 0) {
  for (var i in add_to_cart) {
    add_to_cart[i].onclick = function () {
      var quantity_id = this.parentElement.querySelector("input").id;
      //   console.log(quantity_id, typeof quantity_id);
      var product_id = quantity_id.replace("quantity_", "");
      //   console.log(product_id, typeof product_id);

      product_id = parseInt(product_id);
      //   console.log(product_id, typeof product_id);

      var quantity_value = document.querySelector("#" + quantity_id).value;
      //   console.log(quantity_value, typeof quantity_value);
      if (quantity_value < 1) {
        quantity_value = 1;
      }

      var cart_data = sessionStorage.getItem("cart");
      cart_data = JSON.parse(cart_data);
      if (cart_data == null) {
        cart_data = [];
        var cart_object = {
          product_id: product_id,
          quantity: quantity_value,
        };

        cart_data.push(cart_object);
      } else {
        var check = false;
        cart_data.forEach(function (cart_item, cart_key) {
          if (product_id == cart_item.product_id) {
            var current_quantity = parseInt(cart_item.quantity);
            current_quantity += parseInt(quantity_value);
            cart_data[cart_key] = {
              product_id: product_id,
              quantity: current_quantity,
            };
            check = true;
          }
        });

        if (check == false) {
          var cart_object = {
            product_id: product_id,
            quantity: quantity_value,
          };
          cart_data.push(cart_object);
        }
      }

      //   var cart_json = JSON.stringify(cart_data);

      //   sessionStorage.setItem("cart", cart_json);

      //   renderCart();
    };
  }
}
