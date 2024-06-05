function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, null, ' ');
    }
}

document.getElementById('releases').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('#section-1');
});

document.getElementById('news').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('#section-3');
});

document.getElementById('fake-store').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('#section-4');
});

function fetchProducts() {
    fetch('https://fakestoreapi.com/products?limit=4')
    .then(response => response.json())
    .then(products => {
        document.getElementById('products').innerHTML = '';

        products.forEach(product => {
            const originalPrice = parseFloat(product.price);
            const discount = originalPrice * 0.15;
            const discountedPrice = originalPrice - discount;

            const formattedPrice = originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            const formattedDiscountedPrice = discountedPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="img-responsive product-img-api">
                <div class="product-title">${product.title}</div>
                <div class="product-price"><strong>Preço:</strong> ${formattedPrice}
                    <span class="product-price-discount"><span class="line-word"></span>${formattedDiscountedPrice}</span></br>
                    <span class="price-installment">Em até 3x sem juros no cartão</span>
                </div>`;

            document.getElementById('products').appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
}
window.onload = fetchProducts;
