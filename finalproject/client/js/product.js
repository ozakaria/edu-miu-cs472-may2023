/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 22 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 * Description: WAP-CS472 - May2023 - Final Project
 */

const emptyCartDom = document.getElementById("empty-cart");
const filledCartDom = document.getElementById("filled-cart");
const cartItemsList = document.getElementById("cart-items");
let username;
let userCart;
let products;

window.onload = function () {
  // Checking authentication
  if (!sessionStorage.getItem("accessToken")) {
    location.href = 'index.html';
    return;
  }

  document.getElementById("welcome-message").innerText = `Welcome, ${sessionStorage.getItem("accessToken").split('-')[1]}`;

  username = sessionStorage.getItem("accessToken").split('-')[1];
  userCart = sessionStorage[`${username}-cart`] ? JSON.parse(sessionStorage[`${username}-cart`]) : [];

  getProducts();
};

async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/products", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
      }
    });
    const jsonData = await response.json();
    products = jsonData
    // cartValidation();
    renderCart();
    for (const item of jsonData) {
      if (item.stock == 0) continue;
      addNewProductRowToTable(item.id, item.title, item.image, item.price, item.stock);
    }
  } catch (error) {
    console.log(`Error while fetching products: ${error.message}`);
  }
}

function addNewProductRowToTable(id, title, imgbase64, price, stock) {
  const row = document.createElement('tr');
  let cell = document.createElement('td');

  cell.appendChild(document.createTextNode(id));
  cell.classList.add("product-id")
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.appendChild(document.createTextNode(title));
  cell.classList.add("product-title")
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.appendChild(document.createTextNode(price));
  cell.classList.add("product-price")
  row.appendChild(cell);

  cell = document.createElement('td');
  image = document.createElement('img');
  // console.log(typeof imgbase64);
  image.src = imgbase64;
  image.alt = title;
  image.width = 40;
  cell.appendChild(image);
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.appendChild(document.createTextNode(stock));
  cell.classList.add("product-stock");
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.innerHTML = `
    <td class="text-center">
      <a href="#" class="text-decoration-none text-dark">
        <i class="fa fa-cart-plus cart"></i> 
      </a>
    </td>`;
  row.appendChild(cell);

  document.getElementById('tbodyProductList').appendChild(row);
}

document.getElementById("logout-user").addEventListener("click", function () {
  sessionStorage.setItem("accessToken", "");
  location.href = 'index.html';
});

//  Shopping cart coding

document.getElementById("product-list").addEventListener("click", function (event) {
  // console.log();
  if (event.target.classList.contains('cart')) {
    const selectedRow = event.target.closest("tr");
    // console.log(selectedRow);

    let id = selectedRow.querySelector(".product-id").textContent;

    addToCart(id);

  }
})


function addToCart(productId) {

  let product = products.filter(product => product.id == productId)[0];
  console.log(product);

  if (!product) {
    // If the product isn't found, return without doing anything
    return;
  }

  if (product.stock == 0) {
    alert("Stock is not available");
    return;
  }

  // Check if the cart already contains the product
  const cartItemIndex = userCart.findIndex((item) => item.id === product.id);

  if (cartItemIndex !== -1) {
    // If the product is already in the cart, increment the quantity and add the total

    if (product.stock - userCart[cartItemIndex].quantity <= 0) {
      alert("No more stock available");
      return;
    }

    userCart[cartItemIndex].quantity++;
    userCart[cartItemIndex].total += product.price;
  } else {
    // If the product isn't in the cart, add it
    userCart.push({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      total: product.price
    });
  }


  renderCart();

}

function removeFromCart(productId) {

  console.log(event.target);
  let product = products.filter(product => product.id == productId)[0];
  console.log(product);

  if (!product) {
    // If the product isn't found, return without doing anything
    return;
  }

  // find index in userCart
  const cartItemIndex = userCart.findIndex((item) => item.id === product.id);

  userCart[cartItemIndex].quantity--;
  userCart[cartItemIndex].total -= product.price;

  if (userCart[cartItemIndex].quantity == 0) {
    userCart = userCart.filter(product => product.id != productId)
  }

  renderCart();

}

function renderCart() {

  let cartLengthBeforeStockCheck = userCart.length;

  userCart = userCart.filter(cartProduct => {
    let product = products.filter(item => item.id == cartProduct.id)[0];

    return product.stock >= cartProduct.quantity
  })

  let cartLengthAfterStockCheck = userCart.length;

  if (cartLengthAfterStockCheck != cartLengthBeforeStockCheck) alert("Some items have been removed from cart due to out of stock, please add them again later!")

  // console.log(products);

  cartItemsList.innerHTML = "";

  if (userCart.length <= 0) {
    filledCartDom.classList.add("d-none");
    emptyCartDom.classList.remove("d-none");
  } else {
    filledCartDom.classList.remove("d-none");
    emptyCartDom.classList.add("d-none");

    userCart.forEach(product => {

      // console.log(products);

      const row = document.createElement('tr');

      let cell = document.createElement('td');
      cell.appendChild(document.createTextNode(product.id));
      cell.classList.add("product-id")
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.appendChild(document.createTextNode(product.name));
      cell.classList.add("product-name")
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.appendChild(document.createTextNode(product.price));
      cell.classList.add("product-price")
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.appendChild(document.createTextNode(product.total.toFixed(2)));
      cell.classList.add("product-total")
      row.appendChild(cell);


      cell = document.createElement('td');
      cell.innerHTML = `<td>
      <button type="button" class="decrement-btn btn btn-danger" onClick="removeFromCart(${product.id})">-</button>
      <span class="value ml-1 mr-1">${product.quantity}</span>
      <button type="button" class="increment-btn btn btn-success" onClick="addToCart(${product.id})">+</button>
      </td>`;
      // cell.classList.add("product-quantity")
      row.appendChild(cell);

      cartItemsList.appendChild(row);

      document.getElementById("total-cart-price").innerText = [...cartItemsList.querySelectorAll(".product-total")].map(td => {
        return td.innerText * 1
      }).reduce((a, b) => a + b).toFixed(2);

      sessionStorage.setItem(`${username}-cart`, JSON.stringify(userCart))

      // console.log(product);

    });
  }

}

document.querySelector("#order-now").addEventListener('click', async function () {
  let setting = {
    method: 'POST',
    body: JSON.stringify(userCart),
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    }
  };

  console.log(setting);
  const response = await fetch("http://localhost:3000/order/placeOrder", setting);
  const jsonData = await response.json();

  if (response.ok) {
    userCart = [];
    sessionStorage.setItem(`${username}-cart`, JSON.stringify(userCart))
    alert("Order has been placed successfully!");
    location.reload();
    renderCart();
  } else {
    alert("Error occured, please try again later");
  }
  return jsonData;
})