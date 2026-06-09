document.addEventListener('DOMContentLoaded', solve);

function solve() {

    function encodeMessage(message, offset) {
        const resultMessage = [];

        for (let char of message) {
            resultMessage.push(String.fromCharCode(char.charCodeAt(0) + offset));
        }

        return resultMessage.join("");
    }

    const encodeForm = document.querySelector("form#encode");
    const encodeTextarea = encodeForm.querySelector("textarea");
    const encodeButton = encodeForm.querySelector("button");

    const decodeForm = document.querySelector("form#decode");
    const decodeTextarea = decodeForm.querySelector("textarea");
    const decodeButton = decodeForm.querySelector("button");


    encodeButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (encodeTextarea.value.length > 0) {
            decodeTextarea.value = encodeMessage(encodeTextarea.value, 1);
            encodeTextarea.value = "";
        }

    });

    decodeButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (decodeTextarea.value.length > 0) {
            decodeTextarea.value = encodeMessage(decodeTextarea.value, -1);
        }
    });
}