document.addEventListener('DOMContentLoaded', function () {

    function getProductIdFromUrl() {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams.get('id');
    }

    // Function to fetch product details based on the product ID
    function fetchProductDetails(productId) {
        fetch('json/products.json')
            .then(response => response.json())
            .then(data => {
                const product = data.product.find(product => product.id === parseInt(productId));
                if (product) {
                    displayProductDetails(product);
                } else {
                    console.error('Product not found');
                }
            })
            .catch(error => console.error('Error fetching product details:', error));
    }

    const productDetailsContainer = document.getElementById('detailsContainer');
    const imageContainer = document.getElementById('imageContainer');

    // function displayProductDetails(product) {
    //     productImg.innerHTML = `<img src="images/${product.image}" />`;

    //     detailsContainer.innerHTML = `
    //         <p>Home / Menu / ${product.type} / ${product.name}</p>
    //         <h1>${product.name}</h1>
    //         <h2>${product.type}</h2>
    //         <h4>DKK ${product.price.toFixed(2)}</h4>
    //         <h4>Amount: ${product.amount}</h4>
    //         <h4>Location: ${product.location}</h4>
    //         <input type="number" value="1">
    //         <a href="#" class="purchaseButton">Add to cart</a>
    //         <h3>Product Details</h3>
    //         <p>${product.description}</p>
    //         <h5>Product ID: ${product.id}</h5>
    //     `;
    // };

    function displayProductDetails(product) {
        imageContainer.innerHTML = `<img src="images/${product.image}" />`;

        var productName = productDetailsContainer.querySelector('#productName');
        var productType = productDetailsContainer.querySelector('#productType');
        var productPath = productDetailsContainer.querySelector('#productPath');
        var productPrice = productDetailsContainer.querySelector('#productPrice');
        var productAmount = productDetailsContainer.querySelector('#productAmount');
        var productLocation = productDetailsContainer.querySelector('#productLocation');
        var productDescription = productDetailsContainer.querySelector('#productDescription');
        var productId = productDetailsContainer.querySelector('#productId');

        productName.textContent = product.name;
        productType.textContent = `Product type: ${product.type}`;
        productPath.textContent = `Home / Menu / ${product.type} / ${product.name}`;
        productPrice.textContent = `Price: DKK ${product.price}`;
        productAmount.textContent = `Amount: ${product.amount}`;
        productLocation.textContent = `Location: ${product.location}`;
        productDescription.textContent = `${product.description}`;
        productDetails.textContent = 'Some detailed info about material, source, provider...';
        productId.textContent = `Product ID: ${product.id}`;

    };

    function openProductDetails() {
        const productId = getProductIdFromUrl();
        if (productId) {
            fetchProductDetails(productId);
        } else {
            console.error('Product ID not found in the URL');
        }
    };

    openProductDetails();


});


