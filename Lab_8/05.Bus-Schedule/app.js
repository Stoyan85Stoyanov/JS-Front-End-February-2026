function solve() {

    const stopNameSpanElement = document.querySelector('.info');
    const departButtonElement = document.querySelector('#depart');
    const arriveButtonElement = document.querySelector('#arrive');

    let stopId = 'depot';
    let stopName = '';

    async function depart() {

        try {
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`);
            const data = await response.json();
            stopId = data.next;
            stopName = data.name;

            stopNameSpanElement.textContent = `Next stop ${stopName}`;
            departButtonElement.disabled = true; // не активен бутон (деактивиране)
            arriveButtonElement.disabled = false; // активен бутон (активиране)

        } catch (error) {

            stopNameSpanElement.textContent = 'Error';
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = true;
        }

    }

    function arrive() {
        stopNameSpanElement.textContent = `Arriving at ${stopName}`;
        departButtonElement.disabled = false;
        arriveButtonElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();