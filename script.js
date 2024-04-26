// script.js

document.addEventListener('DOMContentLoaded', function() {
  const colorSelector = document.getElementById('colorSelector');
  const sizeSelector = document.getElementById('sizeSelector');
  const quantitySelector = document.getElementById('quantitySelector');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const addToCartMessage = document.getElementById('addToCartMessage');
  const discountPercentage = document.getElementById('discountPercentage');

  // Function to calculate discount percentage
  function calculateDiscount() {
    const price = parseFloat(document.querySelector('.price').textContent.replace('$', ''));
    const comparePrice = parseFloat(document.querySelector('.compare-price').textContent.replace('Compare at price: $', ''));
    const discount = ((comparePrice - price) / comparePrice) * 100;
    discountPercentage.textContent = discount.toFixed(2) + '%';
  }

  // Event listener for color selector change
  colorSelector.addEventListener('change', calculateDiscount);

  // Event listener for size selector change
  sizeSelector.addEventListener('change', calculateDiscount);

  // Event listener for add to cart button click
  addToCartBtn.addEventListener('click', function() {
    const vendor = document.querySelector('.vendor').textContent;
    const title = document.querySelector('.title').textContent;
    const price = document.querySelector('.price').textContent;
    const color = colorSelector.value;
    const size = sizeSelector.value;
    const quantity = quantitySelector.value;

    // Update add to cart message
    addToCartMessage.textContent = Added ${quantity} ${title} (${color}, Size: ${size}) to cart. Price: ${price};
  });
});
