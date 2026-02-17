let products = [
    { name: "Product A", stock: 120 },
    { name: "Product B", stock: 35 },
    { name: "Product C", stock: 3 },
    { name: "Product D", stock: 0 },
    { name: "Product E", stock: 1 },
    { name: "Product F", stock: 7}
	
];
const LOW_STOCK_LIMIT = 20;
function toggleDetails() {
    const panel = document.getElementById("detailPanel");
    const overlay = document.getElementById("overlay");

    panel.classList.toggle("show");
    overlay.classList.toggle("show");
}


function renderProducts() {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";

    products.forEach(product => {
        let statusClass = "";
        let statusText = "";

        if (product.stock === 0) {
            statusClass = "out";
            statusText = "Out of Stock";
        } else if (product.stock < LOW_STOCK_LIMIT) {
            statusClass = "low";
            statusText = "Low Stock";
        } else {
            statusClass = "normal";
            statusText = "Normal";
        }

        container.innerHTML += `
            <div class="card ${statusClass}">
                <h3>${product.name}</h3>
                <p>Stock: ${product.stock}</p>
                <span>Status: ${statusText}</span>
            </div>
        `;
    });
}

function addProduct() {
    let name = document.getElementById("productName").value;
    let stock = parseInt(document.getElementById("productStock").value);

    if (name && !isNaN(stock)) {
        products.push({ name, stock });
        renderProducts();
        alert("Product Added!");
    }
}

function renderAlerts() {
    const container = document.getElementById("alertContainer");
    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {
        if (product.stock === 0 || product.stock < LOW_STOCK_LIMIT) {
            let alertClass = product.stock === 0 ? "red" : "yellow";
            let message = product.stock === 0 ? "Out of Stock!" : "Low Stock!";

            container.innerHTML += `
                <div class="card ${alertClass}">
                    <h3>${product.name}</h3>
                    <p>Stock: ${product.stock}</p>
                    <span>${message}</span>
                </div>
            `;
        }
    });
}


function generateReport() {
    const summary = document.getElementById("reportSummary");
    const table = document.getElementById("reportTable");

    if (!summary || !table) return;

    let totalProducts = products.length;
    let totalStock = 0;
    let lowStockCount = 0;
    let outStockCount = 0;
    let normalStockCount = 0;

    let highestStock = products[0];
    let lowestStock = products[0];

    table.innerHTML = "";

    products.forEach(product => {
        totalStock += product.stock;

        let status = "";
        
        if (product.stock === 0) {
            status = "Out of Stock";
            outStockCount++;
        } 
        else if (product.stock < LOW_STOCK_LIMIT) {
            status = "Low Stock";
            lowStockCount++;
        } 
        else {
            status = "Normal";
            normalStockCount++;
        }

        if (product.stock > highestStock.stock) {
            highestStock = product;
        }

        if (product.stock < lowestStock.stock) {
            lowestStock = product;
        }

        table.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.stock}</td>
                <td>${status}</td>
            </tr>
        `;
    });

    let criticalPercentage = ((lowStockCount + outStockCount) / totalProducts * 100).toFixed(2);

    summary.innerHTML = `
        <p><b>Total Products:</b> ${totalProducts}</p>
        <p><b>Total Stock Units:</b> ${totalStock}</p>
	<div class="divider"></div>
        <p style="color:orange;"><b>Low Stock Items:</b> ${lowStockCount}</p>
        <p style="color:red;"><b>Out of Stock Items:</b> ${outStockCount}</p>
        <p style="color:green;"><b>Normal Stock Items:</b> ${normalStockCount}</p>
	<div class="divider"></div>
        <p><b>Critical Inventory Percentage:</b> ${criticalPercentage}%</p>
        <p><b>Highest Stock Product:</b> ${highestStock.name} (${highestStock.stock})</p>
        <p><b>Lowest Stock Product:</b> ${lowestStock.name} (${lowestStock.stock})</p>
    `;
    if (outStockCount > 0) {
        summary.innerHTML += `<p style="color:red;"><b>⚠ URGENT:</b> Some products are out of stock!</p>`;
    }

    if (criticalPercentage > 40) {
        summary.innerHTML += `<p style="color:darkred;"><b>⚠ CRITICAL ALERT:</b> Inventory health is poor!</p>`;
    }
}



generateReport();

renderAlerts();
renderProducts();



