// Step 1: Initialize the cart count
let cartCount = 0;

// Step 2: Get references to the button and the cart count display element
const addToCartButton = document.getElementById('add-to-cart-button');
const cartCountDisplay = document.getElementById('cart-count');

// Step 3: Add an event listener to the button
addToCartButton.addEventListener('click', function() {
    // Step 4: Increment the cart count
    cartCount++;

    // Step 5: Update the cart count display
    cartCountDisplay.textContent = cartCount;
});
