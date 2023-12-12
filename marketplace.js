var products = [];

document.addEventListener('DOMContentLoaded', function () {

    function fetchProducts() {
        fetch('json/products.json') // If the data was retrieved from a database, this would ensure that the response would be converted to match the .json object
            .then(response => response.json()
            ).then(data => {
                this.products = data.product;
                displayProducts(data.product);
            }).catch(error => console.error('Error fetching products:', error));
    }


    fetchProducts();

    // Displaying products in the #items container, connecting to html file
    function displayProducts(products) {
        const itemContainer = document.getElementById('items');
        itemContainer.innerHTML = ''; // Clear existing content just in case
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'item';

            productElement.innerHTML = `
                <div class="item-img">
                    <img class="itemImg" src="images/${product.image}" height="100px" alt="${product.name} Image">
                </div>
                <div class="item-content">
                    <span class="productType">${product.type}</span>
                    <h4 class="productTitle">${product.name}</h4>
                    <p class="price">Price: DKK ${product.price}</p>
                    <p class="amount">Amount: ${product.amount}</p>
                    <p class="location">${product.location}</p>
                    <a class="cartButton" href="#">Add to cart</a>
                </div>
            `;

            itemContainer.appendChild(productElement);
        });
    }

    function filterProductsByType(selectedTypes) {
        const products = this.products;

        // Filter products based on the selected types
        const filteredProducts = selectedTypes.length > 0
            ? products.filter(product => selectedTypes.includes(product.type))
            : products;
        displayProducts(filteredProducts)
    }


    const checkboxes = document.querySelectorAll('#types input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', updateFilteredProducts);
    });

    // Keep track of the previously selected types
    let previousSelectedTypes = [];

    // Function to update the filtered products based on selected checkboxes
    function updateFilteredProducts() {
        const selectedTypes = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        // Compare the selected types with the previous ones
        const typesChanged = !arraysEqual(selectedTypes, previousSelectedTypes);

        if (typesChanged) {
            previousSelectedTypes = selectedTypes.slice(); // Update the previous selected types
            filterProductsByType(selectedTypes);
        }
    }

    // Helper function to check if two arrays are equal
    function arraysEqual(arr1, arr2) {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    }

    const sortOptions = document.getElementById('sortingOptions');
    sortOptions.addEventListener('change', handleSort);

    function handleSort(event) {
        const selectedSortOption = event.target.value;
        // Perform sorting based on the selected option
        sortProducts(selectedSortOption);
    }

    function sortProducts(selectedValue) {
        var sortedProducts = this.products;
        switch (selectedValue) {
            case 'PriceDesc':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'PriceAsc':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'DateNew':
                sortedProducts.sort((a, b) => new Date(b.date) - new Date(b.date));
                break;
            case 'DateOld':
                sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'AmountDesc':
                sortedProducts.sort((a, b) => b.amount - a.amount);
                break;
            case 'AmountAsc':
                sortedProducts.sort((a, b) => a.amount - b.amount);
                break;

        }
        displayProducts(sortedProducts);
    }

});


// JavaScript to enable the Bootstrap navbar toggler
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
});


function searchProduct() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('item');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
};









