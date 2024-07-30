const products = document.querySelector('.all-product');

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
    },
    {
        "img": "/1.webp",
        "brand": "Agent Provocateur",
        "name": "EDP",
        "size": "1ml",
        "price": 2.00
      },
      {
        "img": "/2.webp",
        "brand": "Agent Provocateur",
        "name": "Cosmic",
        "size": "1ml",
        "price": 2.00
      },
      {
        "img": "/3.avif",
        "brand": "Agent Provocateur",
        "name": "L Agent",
        "size": "1ml",
        "price": 3.00
      },
      {
        "img": "/4.jpg",
        "brand": "Bois 1920",
        "name": "Le Voluttuose La Vaniglia",
        "size": "1ml",
        "price": 3.00
      },
      {
        "img": "/5.jpg",
        "brand": "Bois 1920",
        "name": "Real Patchouly",
        "size": "1ml",
        "price": 3.00
      },
    //   {
    //     "img": "/assets/7.jpg",
    //     "brand": "Bvlgari",
    //     "name": "Black",
    //     "size": "1ml",
    //     "price": 3.00
    //   },
      {
        "img": "/7.jpg",
        "brand": "By Kilian",
        "name": "Fun Things Always Happen After Sunset",
        "size": "1ml",
        "price": 6.00
      },
      {
        "img": "/8.webp",
        "brand": "Cacharel",
        "name": "Scarlett",
        "size": "1ml",
        "price": 3.00
      },
      {
        "img": "/9.jpeg",
        "brand": "Carthusia",
        "name": "1681",
        "size": "1ml",
        "price": 2.00
      },
    //   {
    //     "img": "/assets/11.jpeg",
    //     "brand": "Elie Saab",
    //     "name": "Essence No. 1 Rose",
    //     "size": "1ml",
    //     "price": 2.00
    //   },
    //   {
    //     "img": "/assets/12.jpeg",
    //     "brand": "Estee Lauder",
    //     "name": "White Linen",
    //     "size": "1ml",
    //     "price": 2.00
    //   },
    //   {
    //     "img": "/assets/13.jpeg",
    //     "brand": "Ghost",
    //     "name": "Ghost",
    //     "size": "1ml",
    //     "price": 2.00
    //   },
    //   {
    //     "img": "/assets/14.jpeg",
    //     "brand": "Givenchy",
    //     "name": "Mythical Perfumes - Emerald Extravagance (2007)",
    //     "size": "1ml",
    //     "price": 5.00
    //   },
    //   {
    //     "img": "/assets/15.jpeg",
    //     "brand": "Guerlain",
    //     "name": "La Petite Robe Noire (EDP)",
    //     "size": "1ml",
    //     "price": 3.00
    //   },
    //   {
    //     "img": "/assets/16.jpeg",
    //     "brand": "Guerlain",
    //     "name": "Rose Barbare (2005)",
    //     "size": "1ml",
    //     "price": 8.00
    //   },
    //   {
    //     "img": "/assets/17.jpeg",
    //     "brand": "Hermes",
    //     "name": "Jour d'Hermes",
    //     "size": "1ml",
    //     "price": 3.00
    //   },
      {
        "img": "/18.webp",
        "brand": "Jovoy Paris",
        "name": "Ambre Premiere",
        "size": "1ml",
        "price": 5.50
      },
      {
        "img": "/19.jpeg",
        "brand": "Jul and Mad Paris",
        "name": "Aqua Sextius",
        "size": "1ml",
        "price": 10.00
      },
      {
        "img": "/20.jpg",
        "brand": "Olfattive Lab",
        "name": "MyLO",
        "size": "1ml",
        "price": 2.50
      },
      {
        "img": "/21.jpeg",
        "brand": "Lalique",
        "name": "Amethyst",
        "size": "1ml",
        "price": 2.00
      },
      {
        "img": "/23.jpg",
        "brand": "Lancome",
        "name": "Oud Bouquet EDP (2014)",
        "size": "1ml",
        "price": 8.00
      },
      {
        "img": "/24.jpg",
        "brand": "L'Artisan Perfume",
        "name": "Al Oudh",
        "size": "1ml",
        "price": 3.50
      },
      {
        "img": "/25.jpg",
        "brand": "L'Artisan Perfume",
        "name": "Mure et Musc Extreme",
        "size": "1ml",
        "price": 3.00
      },
      {
        "img": "/26.webp",
        "brand": "L'Artisan Perfume",
        "name": "Voleur de Roses",
        "size": "1ml",
        "price": 3.50
      },
      {
        "img": "/28.jpg",
        "brand": "Michael Kors",
        "name": "Midnight Shimmer",
        "size": "1ml",
        "price": 3.00
      },
      {
        "img": "/29.jpg",
        "brand": "Montale",
        "name": "Honey Aoud",
        "size": "1ml",
        "price": 3.00
      },
      {
        "img": "/30.png",
        "brand": "Montale",
        "name": "Orange Flowers",
        "size": "1ml",
        "price": 3.00
      },
    //   {
    //     "img": "/assets/33.jpeg",
    //     "brand": "Noble 1942",
    //     "name": "La Danza delle Libellule",
    //     "size": "1ml",
    //     "price": 4.00
    //   },
    //   {
    //     "img": "/assets/34.jpeg",
    //     "brand": "Olivier Durbano",
    //     "name": "Cristal de Roche (Rock Crystal)",
    //     "size": "1ml",
    //     "price": 5.00
    //   },
      {
        "img": "/35.webp",
        "brand": "Parle Moi de Parfum",
        "name": "Milky Musk 39",
        "size": "1ml",
        "price": 3.50
      },
      {
        "img": "/36.jpg",
        "brand": "Ramon Bejar",
        "name": "Elvish Musk",
        "size": "1ml",
        "price": 10.00
      },
      {
        "img": "/37.jpg",
        "brand": "The Beautiful Mind Series",
        "name": "Volume I Intelligence & Fantasy - EDP",
        "size": "1ml",
        "price": 4.50
      },
      {
        "img": "/38.jpeg",
        "brand": "V Canto",
        "name": "Ricina",
        "size": "1ml",
        "price": 6.00
      },
      {
        "img": "/39.jpeg",
        "brand": "Van Cleef & Arpels",
        "name": "First (EDP)",
        "size": "1ml",
        "price": 2.00
      },
      {
        "img": "/40.jpg",
        "brand": "Yves Saint Laurent",
        "name": "Opium EDP 2009",
        "size": "1ml",
        "price": 3.50
      },
      {
        "img": "/41.jpg",
        "brand": "Frapin",
        "name": "IF be R.K.",
        "size": "1ml",
        "price": 5.50
      },
      {
        "img": "/42.jpg",
        "brand": "Map Of The Heart",
        "name": "Pink Heart V 6",
        "size": "1ml",
        "price": 3.50
      },
      {
        "img": "/10.jpeg",
        "brand": "Chopard",
        "name": "Love Chopard",
        "size": "1ml",
        "price": 2.50
      },
      {
        "img": "/22.jpeg",
        "brand": "Lancome",
        "name": "Magie Noire",
        "size": "1ml",
        "price": 4.00
      },
      {
        "img": "/31.jpeg",
        "brand": "Montale",
        "name": "Wild Pears",
        "size": "1ml",
        "price": 3.00
      },
      {
        "img": "/27.webp",
        "brand": "Mark Buxton",
        "name": "Sexual Healing",
        "size": "1ml",
        "price": 4.00
      },
    ]

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

