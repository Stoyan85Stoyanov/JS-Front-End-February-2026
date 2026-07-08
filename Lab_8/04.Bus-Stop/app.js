async function getInfo() {

    const stopIdInputElement = document.getElementById('stopId');
    const stopNameDivElement = document.getElementById('stopName');
    const busesUlElement = document.getElementById('buses');

    const stopId = stopIdInputElement.value.trim();

    try {

        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);

        const data = await response.json();
        const busEntries = Object.entries(data.buses);

        for (const [busNo, arrivalTime] of busEntries) {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${busNo} arrives in ${arrivalTime} minutes`;
            busesUlElement.appendChild(liElement);
        }

        stopNameDivElement.textContent = data.name;


    } catch (error) {
        
        stopNameDivElement.textContent = 'Error';
    }  
}