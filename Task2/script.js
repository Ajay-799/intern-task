// script.js

// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');

let cartItems = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productInfo = {
            name: product.querySelector('h3').innerText,
            price: parseFloat(button.getAttribute('data-price'))
        };
        cartItems.push(productInfo);
        updateCart();
    });
});

function updateCart() {
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });
    cartTotalPrice.innerText = totalPrice.toFixed(2);
}

// Checkout button
const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', () => {
    alert('Checkout - Total: $' + cartTotalPrice.innerText);
    // Optionally, you can clear the cart here
    cartItems = [];
    updateCart();
});
