var products;

function submitProduct() {
    const checkedCheckbox = document.querySelector('#newProductMaterial input[type="checkbox"]:checked');
    const materialType = checkedCheckbox ? checkedCheckbox.value : '';

    const productDescription = document.getElementById('newProductDescription').value;

    fetch('json/products.json') // If the data was retrieved from a database, this would ensure that the response would be converted to match the .json object
        .then(response => response.json()
        ).then(data => {
            console.log(data.products);
            var newProduct = {
                id: data.products.length,
                name: document.getElementById('newProductTitle').value,
                type: materialType,
                description: productDescription,
                price: parseInt(document.getElementById('newProductPrice').value),
                amount: parseInt(document.getElementById('quantity').value),
                location: document.getElementById('newProductAddress').value,
                image: ""
            };
            console.log(data.products);
            var newProductArray = [newProduct];
            console.log(" New Product Array: " + newProductArray[0].toString());
            newProductArray = data.products.concat(newProductArray);
            console.log(newProductArray);
            newProductJSON = JSON.parse(newProductArray);
            //displayProducts(data.product);
        }).catch(error => console.error('Error fetching products:', error));

    //We know how to load the data, but do not have the backend to send it to.


}
//Form script


document.getElementById("quantity").addEventListener("input", function () {
    document.getElementById("quantityValue").innerText = "Quantity: " + this.value + " MT";
    document.getElementById("quantityInput").value = this.value;
});

document.getElementById("quantityInput").addEventListener("input", function () {
    document.getElementById("quantity").value = this.value;
    document.getElementById("quantityValue").innerText = "Quantity: " + this.value + " MT";
});

document.getElementById("price").addEventListener("input", function () {
    document.getElementById("priceValue").innerText = "Price: " + this.value + " DKK";
    document.getElementById("priceInput").value = this.value;
});

document.getElementById("priceInput").addEventListener("input", function () {
    document.getElementById("price").value = this.value;
    document.getElementById("priceValue").innerText = "Price: " + this.value + " DKK";
});

document.addEventListener("click", submitProduct());






