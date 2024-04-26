// script.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json')
        .then(response => response.json())
        .then(data => {
            updateProductDetails(data);
        });
});

function updateProductDetails(product) {
    document.getElementById('mainImage').src = product.image;
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productVendor').textContent = product.vendor;
    document.getElementById('price').textContent = $${product.price};
    document.getElementById('compareAtPrice').textContent = $${product.compare_at_price};
    document.getElementById('discount').textContent = ${calculateDiscount(product.price, product.compare_at_price)}% off;
    document.getElementById('description').textContent = product.description;
    product.thumbnails.forEach(img => {
        let imgElem = document.createElement('img');
        imgElem.src = img;
        imgElem.onclick = () => document.getElementById('mainImage').src = img;
        document.getElementById('thumbnails').appendChild(imgElem);
    });
}

function calculateDiscount(price, compareAtPrice) {
    if (!compareAtPrice) return 0;
    return Math.round(100 * (compareAtPrice - price) / compareAtPrice);
}

function changeQuantity(change) {
    let quantity = parseInt(document.getElementById('quantity').value);
    quantity += change;
    if (quantity < 1) quantity = 1;
    document.getElementById('quantity').value = quantity;
}
