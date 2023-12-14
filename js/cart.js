let cart = [];

function addToCart(product) {
    cart.push(product);
}

function getCartCount() {
    return cart.length;
}

function getCartItems() {
    return cart;
}

function removeCartItem(event) {
    // Get the parent card element
    var card = event.target.closest('.card');

    // Check if a valid card element is found
    if (card) {
        // Remove the card from the DOM
        card.remove();
    }

    // Update the cart count (you may need to adjust this based on your actual implementation)
    updateCartCount();
}

// Function to update the cart count (replace this with your actual implementation)
function updateCartCount() {
    // Dummy implementation: just decrementing the count for demonstration purposes
    var cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        var currentCount = parseInt(cartCountElement.innerText, 10);
        if (!isNaN(currentCount) && currentCount > 0) {
            cartCountElement.innerText = (currentCount - 1).toString();
        }
    }
}

// Attach click event listeners to all "Remove" buttons
var removeButtons = document.querySelectorAll('.btn-danger');
removeButtons.forEach(function (button) {
    button.addEventListener('click', removeCartItem);
});



