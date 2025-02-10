
const products = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality over-ear headphones with noise cancellation.",
      "price": 79.99,
      "currency": "USD",
      "stock": 25,
      "category": "Electronics",
      "rating": 4.5,
      "reviews": 120,
      "images": [
        "https://example.com/images/headphones1.jpg",
        "https://example.com/images/headphones2.jpg"
      ],
      "brand": "AudioTech",
      "discount": 10
    },
    {
      "id": 2,
      "name": "Smartphone X12",
      "description": "Latest generation smartphone with 128GB storage and a 48MP camera.",
      "price": 699.99,
      "currency": "USD",
      "stock": 10,
      "category": "Mobiles",
      "rating": 4.8,
      "reviews": 320,
      "images": [
        "https://example.com/images/smartphone1.jpg",
        "https://example.com/images/smartphone2.jpg"
      ],
      "brand": "TechBrand",
      "discount": 5
    },
    {
      "id": 3,
      "name": "Gaming Laptop Pro",
      "description": "High-performance gaming laptop with RTX 3070 and 16GB RAM.",
      "price": 1499.99,
      "currency": "USD",
      "stock": 5,
      "category": "Computers",
      "rating": 4.7,
      "reviews": 210,
      "images": [
        "https://example.com/images/laptop1.jpg",
        "https://example.com/images/laptop2.jpg"
      ],
      "brand": "GameMax",
      "discount": 15
    }
  ]

const newProductArray = JSON.parse(JSON.stringify(products))

const cartTotal = products.reduce((acc,product)=>acc+product.price,0)

console.log(Math.round(cartTotal));

