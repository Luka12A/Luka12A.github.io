const products = document.querySelector('.products');

const urls = [
    {
        "img": "/chanel n19.jpg",
        "brand": "Chanel",
        "name": "No. 19 EDP",
        "size": "1ml",
        "price": 3.00
    },
    {
        "img": "/angler muse.jpg",
        "brand": "Mugler",
        "name": "Angel Muse (EDP)",
        "size": "1ml",
        "price": 3.00
    },
    { 
        "img": "/guerlainn.png",
        "brand": "Guerlain",
        "name": "Rose Barbare (2005)",
        "size": "1ml",
        "price": 8.00
    },
    { 
        "img": "/narciso.avif",
        "brand": "Narciso Rodriguez",
        "name": "Narciso (EDP)",
        "size": "1ml",
        "price": 3.50
    }
];

urls.forEach(product => {
    const productContainer = document.createElement('div');
    productContainer.style.marginBottom = '20px';
    productContainer.style.padding = '10px';
    productContainer.style.borderRadius = '5px';

    const img = document.createElement('img');
    img.src = product.img;
    img.style.width = '115px'; 
    img.style.display = 'block';
    img.style.marginBottom = '10px';
    productContainer.appendChild(img);

    const details = document.createElement('div');
    details.innerHTML = `
        <strong>${product.name}</strong><br>
        Brand: ${product.brand}<br>
        Size: ${product.size}<br>
        Price: ${product.price.toFixed(2)} ₾
    `;
    productContainer.appendChild(details);

    products.appendChild(productContainer);
});




