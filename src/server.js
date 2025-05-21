        const products = [
            {
                id: 1,
                name: "Wireless Bluetooth Headphones",
                category: "electronics",
                price: 79.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 2,
                name: "Smart Watch Series 5",
                category: "electronics",
                price: 149.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 3,
                name: "Premium Cotton T-Shirt",
                category: "clothing",
                price: 24.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 4,
                name: "Slim Fit Jeans",
                category: "clothing",
                price: 49.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 5,
                name: "Leather Wallet",
                category: "accessories",
                price: 34.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 6,
                name: "Stainless Steel Water Bottle",
                category: "accessories",
                price: 19.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 7,
                name: "Scented Candle Set",
                category: "home",
                price: 29.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 8,
                name: "Decorative Throw Pillows",
                category: "home",
                price: 39.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 9,
                name: "Smartphone Power Bank",
                category: "electronics",
                price: 44.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 10,
                name: "Hooded Sweatshirt",
                category: "clothing",
                price: 54.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 11,
                name: "Sunglasses",
                category: "accessories",
                price: 69.99,
                image: "/api/placeholder/400/320"
            },
            {
                id: 12,
                name: "Ceramic Coffee Mug Set",
                category: "home",
                price: 24.99,
                image: "/api/placeholder/400/320"
            }
        ];

        const productsContainer = document.getElementById('products');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const cartIcon = document.getElementById('cartIcon');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const overlay = document.getElementById('overlay');
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const checkoutModal = document.getElementById('checkoutModal');