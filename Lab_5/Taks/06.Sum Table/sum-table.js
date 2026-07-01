function sumTable() {

    const priceElements = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    const sumElements = priceElements.pop();

    let sum = 0;

    for (let elements of priceElements) {

        const price = Number(elements.textContent);
        sum += price;
    }

    sumElements.textContent = sum;
}