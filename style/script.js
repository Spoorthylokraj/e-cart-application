let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cartList');
  const totalSpan = document.getElementById('total');
  const emptyMsg = document.getElementById('emptyMsg');

  cartList.innerHTML = '';
  if (cart.length === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
  }

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.product} - ₹${item.price} 
      <button onclick="removeItem(${index})" style="margin-left: 10px; background-color: red;">Remove</button>`;
    cartList.appendChild(li);
  });

  totalSpan.textContent = total;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}