


const toggleBtn = document.querySelector('.toggle_btn');
        const toggleMenu = document.querySelector('.toggle');
        const toggleIcon = toggleBtn.querySelector('i');

        toggleBtn.addEventListener('click', () => {
            if (toggleMenu.style.display === 'block') {
                toggleMenu.style.display = 'none';
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            } else {
                toggleMenu.style.display = 'block';
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-times');
            }
        });


        document.addEventListener('DOMContentLoaded', () => {
            const loginBtn = document.querySelector('#user');
            const form = document.querySelector('.login');
            const cross = document.querySelector('#mark');
        
            // Initially hide the form and cross button
            form.style.display = 'none';
            cross.style.display = 'none';
        
            loginBtn.addEventListener('click', () => {
                if (form.style.display === 'block') {
                    form.style.display = 'none';
                    cross.style.display = 'none';
                } else {
                    form.style.display = 'block';
                    cross.style.display = 'block';
                }
            });
        
            // Optional: Add cross button functionality to hide form
            cross.addEventListener('click', () => {
                form.style.display = 'none';
                cross.style.display = 'none';
            });
        });
        



const shop = document.querySelector('.shop');
const card = document.querySelector('#shopping');
const shopList = document.querySelector('.shop .product-list');
const crossButton = document.querySelector('.cross-btn');

// Initially hide the shop and cross button
shop.style.display = 'none';
crossButton.style.display = 'none';

// Toggle shop visibility
card.addEventListener('click', () => {
    if (shop.style.display === 'block') {
        shop.style.display = 'none';
        crossButton.style.display = 'none';
    } else {
        shop.style.display = 'block';
        crossButton.style.display = 'block';
    }
});

// Close shop when cross button is clicked
crossButton.addEventListener('click', () => {
    shop.style.display = 'none';
    crossButton.style.display = 'none'; // Hide the cross button when shop is closed
});

// Cart to hold the products
let cart = [];

// Function to add products to the cart
function addToCart(name, image, description) {
    const product = { name, image, description };
    cart.push(product); // Add the product to the cart array
    loadProducts(); // Reload products in the shop div
}

// Function to load products in the shop div
function loadProducts() {
    // Clear the existing products
    shopList.innerHTML = '';

    // Loop through the cart and create product elements
    cart.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" height="200px">
            <h3>${product.name}</h3>
            <strong>${product.description}</strong>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        shopList.appendChild(productDiv);
    });

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            deleteProduct(index);
        });
    });
}

// Function to delete product from the cart
function deleteProduct(index) {
    cart.splice(index, 1); // Remove the product from the cart
    loadProducts(); // Re-load the products after deletion
}

// Sample data for testing
// You can replace these with real products from your product section
const sampleProducts = [
    {
        name: "Taste Temptations",
        image: "/images/pro1.webp",
        description: "Infused with delightful flavors like vanilla, hazelnut, or caramel."
    },
    {
        name: "Nature's Brew",
        image: "/images/pro1.webp",
        description: "100% organic beans grown without pesticides or chemicals."
    },
    {
        name: "Bright & Bold",
        image: "/images/pro1.webp",
        description: "Lightly roasted for a bright flavor and higher acidity."
    }
];

// Add products to the cart for testing
sampleProducts.forEach(product => {
    addToCart(product.name, product.image, product.description);
});
