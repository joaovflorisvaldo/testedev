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
                <div class="block-img">
                    <img src="${product.image}" alt="${product.title}" class="img-responsive product-img-api">
                    <div class="card-product">
                        <div class="size">
                            <div class="btn-size size-pp">PP</div>
                            <div class="btn-size size-p">P</div>
                            <div class="btn-size size-m">M</div>
                            <div class="btn-size size-g">G</div>
                            <div class="btn-size size-gg">GG</div>
                            <div class="btn-size size-xgg">XGG</div>
                        </div>
                        <button class="btn-buy">COMPRAR</button>
                    </div>
                </div>
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

document.addEventListener('DOMContentLoaded', function () {
    const socialMediaImages = document.querySelectorAll('.social-media img');
    socialMediaImages.forEach(function (img) {
        const originalSrc = img.src;
        function addVariantToSrc(src) {
            const parts = src.split('.');
            return parts.slice(0, -1).join('.') + '-variant.' + parts[parts.length - 1];
        }
        const newSrc = addVariantToSrc(originalSrc);
        img.addEventListener('mouseover', function () {
            img.src = newSrc;
        });
        img.addEventListener('mouseout', function () {
            img.src = originalSrc;
        });
    });
});

var link = "https://api.whatsapp.com/send/?phone=5511939574524&text&type=phone_number&app_absent=0";
var btnWhatsApp = document.createElement('a');
btnWhatsApp.href = link;
btnWhatsApp.target = '_blank';
btnWhatsApp.className = 'btn-whatsapp';
var img = document.createElement('img');
img.src = './image/btn-whatsapp.svg?v=1';
btnWhatsApp.appendChild(img);
document.body.appendChild(btnWhatsApp);

document.addEventListener('DOMContentLoaded', function () {
    const socialMediaImages = document.querySelectorAll('.btn-whatsapp img');
    socialMediaImages.forEach(function (img) {
        const originalSrc = img.src;
        function addVariantToSrc(src) {
            const parts = src.split('.');
            return parts.slice(0, -1).join('.') + '-variant.' + parts[parts.length - 1];
        }
        const newSrc = addVariantToSrc(originalSrc);
        img.addEventListener('mouseover', function () {
            img.src = newSrc;
        });
        img.addEventListener('mouseout', function () {
            img.src = originalSrc;
        });
    });
});

function whatsappFlutter(){
    document.querySelectorAll('.btn-size').forEach(function(button) {
        button.addEventListener('click', function() {
            document.querySelectorAll('.btn-size').forEach(function(btn) {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var menuContent = document.getElementById('menu-content');

    hamburgerMenu.addEventListener('click', function() {
        menuContent.classList.toggle('active');
    });
});

function adjustIframeHeight() {
    const iframe = document.getElementById("iframe");
    const width = iframe.clientWidth;
    const height = width * 9 / 16;
    iframe.style.height = `${height}px`;
}

whatsappFlutter()
window.addEventListener('resize', adjustIframeHeight);
document.addEventListener('DOMContentLoaded', adjustIframeHeight);