let cart = [];

// Render supplier products
function renderSupplierProducts() {
    const container = document.getElementById("supplierProducts");
    if (!container) return;

    container.innerHTML = "";

    products.forEach((product, index) => {
        container.innerHTML += `
            <div class="product-box">
                <h4>${product.name}</h4>
                <p>Current Stock: ${product.stock}</p>
                <input type="number" id="qty-${index}" placeholder="Quantity">
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(index) {
    const qtyInput = document.getElementById(`qty-${index}`);
    const quantity = parseInt(qtyInput.value);

    if (!quantity || quantity <= 0) {
        alert("Enter valid quantity");
        return;
    }

    cart.push({
        name: products[index].name,
        quantity: quantity
    });

    renderCart();
    qtyInput.value = "";
}

function renderCart() {
    const container = document.getElementById("cartItems");
    if (!container) return;

    container.innerHTML = "";

    cart.forEach((item, i) => {
        container.innerHTML += `
            <p>${item.name} - ${item.quantity}
            <button onclick="removeFromCart(${i})">X</button></p>
        `;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function sendRequest() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    document.getElementById("requestMessage").innerHTML =
        "✅ Request Sent Successfully!";

    cart = [];
    renderCart();
}

renderSupplierProducts();
