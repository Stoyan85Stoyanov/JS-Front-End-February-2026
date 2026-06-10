document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const metrics = {

        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    const inputDistanceElement = document.querySelector("input#inputDistance");
    const outputDistanceElement = document.querySelector("input#outputDistance");

    const inputUnitSelect = document.querySelector("select#inputUnits");
    const outputUnitSelect = document.querySelector("select#outputUnits");

    document.querySelector("input#convert[type='button']").addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const finalResult = Number(inputDistanceElement.value)
         * metrics[inputUnitSelect.value] / metrics[outputUnitSelect.value];

        outputDistanceElement.value = finalResult.toFixed(2);
    });
}