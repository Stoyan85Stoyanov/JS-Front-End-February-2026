const baseURL = "http://localhost:3030/jsonstore/orders/";

let __id = null;

document.getElementById("load-orders").addEventListener("click", onLoadAllOrders);

const orderBtnRef = document.getElementById("order-btn")
orderBtnRef.addEventListener("click", onCreateOrders);

const editBtnRef = document.getElementById("edit-order")
editBtnRef.addEventListener("click", onEditOrders);


document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());

const orderListRef = document.getElementById("list");
const nameRef = document.getElementById("name");
const quantityRef = document.getElementById("quantity");
const dateRef = document.getElementById("date");


async function requester(method, url, inputData) {
    const option = {
        method: method,
        headers: {}
    }

    if (inputData) {
        option.headers["Content-Type"] = "application/json";
        option.body = JSON.stringify(inputData);
    }

    const response = await fetch(url, option);

    if (!response.ok) {
        throw new Error("request error")
    }

    return response.json();
}



async function onLoadAllOrders(event) {
    const inputData = await requester("GET", baseURL);
    orderListRef.innerHTML = "";

    Object.values(inputData).forEach(item => {
        const div = createOrderTemp(item);

        const btns = div.querySelectorAll("button");
        btns[0].addEventListener("click", onChange);
        btns[1].addEventListener("click", onDone);

        orderListRef.appendChild(div);
    });
}


function createOrderTemp(inputData) {

    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h2');
    title.textContent = `${inputData.name}`;
    container.appendChild(title);

    const date = document.createElement('h3');
    date.textContent = `${inputData.date}`;
    container.appendChild(date);

    const price = document.createElement('h3');
    price.textContent = `${inputData.quantity}`;
    container.appendChild(price);

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    changeButton.dataset.id = inputData._id;
    container.appendChild(changeButton);

    const doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.textContent = 'Done';
    doneButton.dataset.id = inputData._id;
    doneButton.addEventListener('click', onDone);
    container.appendChild(doneButton);

    return container;
}

async function onCreateOrders(event) {
    const name = nameRef.value;
    const quantity = quantityRef.value;
    const date = dateRef.value;

    clearInputs();
    await requester("POST", baseURL, { name, quantity, date });
    onLoadAllOrders();
}

//     function onChange(event) {
//     const element = event.target.parentElement;
//     const id = event.target.dataset.id;
//     __id = id;
//     editBtnRef.disabled = false;
//     orderBtnRef.disabled = true;
//     const item =  requester("GET", baseURL + id);

//     nameRef.value = item.name;
//     quantityRef.value = item.quantity;
//     dateRef.value = item.date;
//     element.remove();
// }

function onChange(event) {
    const element = event.target.parentElement;
    const id = event.target.dataset.id;
    __id = id;

    editBtnRef.disabled = false;
    orderBtnRef.disabled = true;

    const name = element.querySelector("h2").textContent;
    const [dateEl, quantityEl] = element.querySelectorAll("h3");

    nameRef.value = name;
    quantityRef.value = quantityEl.textContent;
    dateRef.value = dateEl.textContent;

    element.remove();
}


async function onEditOrders(event) {
    const name = nameRef.value;
    const quantity = quantityRef.value;
    const date = dateRef.value;

    await requester("PUT", baseURL + __id, { name, quantity, date, _id: __id });
    __id = null;
    editBtnRef.disabled = true;
    orderBtnRef.disabled = false;
    clearInputs();
    onLoadAllOrders();
}

async function onDone(event) {
    const id = event.target.dataset.id;
    await requester("DELETE", baseURL + id);
    onLoadAllOrders();
}

function clearInputs() {
    nameRef.value = "";
    quantityRef.value = "";
    dateRef.value = "";
}
