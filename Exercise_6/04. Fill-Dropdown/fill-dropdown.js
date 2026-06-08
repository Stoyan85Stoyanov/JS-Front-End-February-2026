document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const formElement = document.querySelector("form");
    const textInput = formElement.querySelector("input#newItemText");
    const valueInput = formElement.querySelector("input#newItemValue");
    const menuElement = document.querySelector("select#menu");

    formElement.addEventListener("submit", (event) => {

        event.preventDefault();
        event.stopPropagation();

        const option = document.createElement("option");
        option.setAttribute("value", valueInput.value);
        option.textContent = textInput.value;

        menuElement.appendChild(option);

        valueInput.value = "";
        textInput.value = "";

    });
}