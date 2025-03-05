let totalCartPrice = 0; 

function updateTotalPrice() {
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = `Total: $${totalCartPrice.toFixed(2)}`;
}



function addToCart(name, price) {
    
    const cartItemsContainer = document.getElementById("cart-items");


    const emptyCartMessage = document.querySelector(".empty-cart");
    if (emptyCartMessage) {
        emptyCartMessage.remove();
    }

    
    const item = document.createElement("div");
    item.classList.add("cart-item");

    
    let quantity = 1;
    let totalPrice = price;

    totalCartPrice += totalPrice;
    updateTotalPrice();

    
    item.innerHTML = `
        <span class="item-name">${name}</span>
        <button class="quantity-btn minus">-</button>
        <span class="item-quantity">${quantity}</span>
        <button class="quantity-btn plus">+</button>
        <span class="item-price">$${totalPrice.toFixed(2)}</span>
        <button class="remove-btn">Remove</button>
    `;

    
    cartItemsContainer.appendChild(item);

    // console.log(cartItemsContainer);

    
    const quantitySpan = item.querySelector(".item-quantity");
    const priceSpan = item.querySelector(".item-price");
    const plusButton = item.querySelector(".plus");
    const minusButton = item.querySelector(".minus");
    const removeButton = item.querySelector(".remove-btn");

    
    function updatePrice() {
        totalCartPrice -= totalPrice; 
        totalPrice = quantity * price; 
        totalCartPrice += totalPrice; 
        priceSpan.textContent = `$${totalPrice.toFixed(2)}`;
        updateTotalPrice();
    }

    
    plusButton.addEventListener("click", () => {
        quantity++;
        quantitySpan.textContent = quantity;
        updatePrice();
    });

    
    minusButton.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
            updatePrice();
        }
    });

    
    removeButton.addEventListener("click", () => {
        totalCartPrice -= totalPrice; 
        updateTotalPrice();
        item.remove();
        
        if (cartItemsContainer.children.length === 0) {
            cartItemsContainer.innerHTML = `<div class="empty-cart">Cart is empty</div>`;
            totalCartPrice = 0; 
            updateTotalPrice();
        }
    });
}

