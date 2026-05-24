const API_URL = "http://localhost:3030/jsonstore/grocery";

const productInputElement = document.getElementById("product");
const countInputElement = document.getElementById("count");
const priceInputElement = document.getElementById("price");

const addButton = document.getElementById("add-product");
const updateButton = document.getElementById("update-product");
const loadButton = document.getElementById("load-product");

const bodyElement = document.querySelector("#tbody");


let productToEdit = null;

loadButton.addEventListener("click", loadProducts);


async function loadProducts(event) {

    if (event) {
        event.preventDefault();
    }

    bodyElement.innerHTML = "";

    const response = await fetch(API_URL);
    const data = await response.json();

    Object.values(data).forEach(product => {
        bodyElement.appendChild(createProductElement(product));
    });
}


async function deleteProduct(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    await loadProducts();
}


addButton.addEventListener("click", addProduct);

async function addProduct(event) {
    event.preventDefault();

    const product = productInputElement.value;
    const count = countInputElement.value;
    const price = priceInputElement.value;

    if (!product || !count || !price) {
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, count, price })
    });

    clearInputs();
    await loadProducts();
}


function startEdit(product) {
    productInputElement.value = product.product;
    countInputElement.value = product.count;
    priceInputElement.value = product.price;

    productToEdit = product._id;

    updateButton.disabled = false;
    addButton.disabled = true;
}


updateButton.addEventListener("click", updateProduct);

async function updateProduct(event) {
    event.preventDefault();

    if (!productToEdit) {
        return;
    }

    const product = productInputElement.value;
    const count = countInputElement.value;
    const price = priceInputElement.value;

    await fetch(`${API_URL}/${productToEdit}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, count, price })
    });

    clearInputs();
    productToEdit = null;

    updateButton.disabled = true;
    addButton.disabled = false;

    await loadProducts();
}


function createProductElement(product) {

    const trElement = document.createElement("tr");

    const nameTdElement = document.createElement("td");
    nameTdElement.classList.add("name");
    nameTdElement.textContent = product.product;

    const countProductTdElement = document.createElement("td");
    countProductTdElement.classList.add("count-product");
    countProductTdElement.textContent = product.count;

    const productPriceTdElement = document.createElement("td");
    productPriceTdElement.classList.add("product-price");
    productPriceTdElement.textContent = product.price;

    const buttonTdElement = document.createElement("td");
    buttonTdElement.classList.add("btn");

    const updateButton = document.createElement("button");
    updateButton.classList.add("update");
    updateButton.textContent = "Update";

    updateButton.addEventListener("click", () => startEdit(product));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => deleteProduct(product._id));

    buttonTdElement.appendChild(updateButton);
    buttonTdElement.appendChild(deleteButton);

    trElement.appendChild(nameTdElement);
    trElement.appendChild(countProductTdElement);
    trElement.appendChild(productPriceTdElement);
    trElement.appendChild(buttonTdElement);

    return trElement;
}


function clearInputs() {
    productInputElement.value = "";
    countInputElement.value = "";
    priceInputElement.value = "";
}