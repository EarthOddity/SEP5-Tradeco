let cart = [];

function addToCart(product) {
    cart.push(product);
}

function getCartCount() {
    return cart.length;
}


// Function to update the cart count 
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






