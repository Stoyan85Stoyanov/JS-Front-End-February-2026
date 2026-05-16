const BASE_URL = "http://localhost:3030/jsonstore/tasks";

const locationInput = document.getElementById("location");
const temperatureInput = document.getElementById("temperature");
const dateInput = document.getElementById("date");

const listDiv = document.getElementById("list");

const addButton = document.getElementById("add-weather");
const editButton = document.getElementById("edit-weather");
const loadButton = document.getElementById("load-history");

let selectedId = null;


loadButton.addEventListener("click", loadHistory);
addButton.addEventListener("click", createWeather);
editButton.addEventListener("click", editWeather);


async function loadHistory() {
    listDiv.innerHTML = "";

    const response = await fetch(BASE_URL);
    const data = await response.json();

    Object.values(data).forEach(weather => {
        const divElement = document.createElement("div");
        divElement.classList.add("container");

        const h2Location = document.createElement("h2");
        h2Location.textContent = weather.location;

        const h3Date = document.createElement("h3");
        h3Date.textContent = weather.date;

        const h3Temperature = document.createElement("h3");
        h3Temperature.id = "celsius";
        h3Temperature.textContent = weather.temperature;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons-container");

        const changeBtn = document.createElement("button");
        changeBtn.classList.add("change-btn");
        changeBtn.textContent = "Change";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";


        changeBtn.addEventListener("click", () => {
            locationInput.value = weather.location;
            temperatureInput.value = weather.temperature;
            dateInput.value = weather.date;

            selectedId = weather._id;

            divElement.remove();

            addButton.disabled = true;
            editButton.disabled = false;
        });


        deleteBtn.addEventListener("click", async () => {
            await fetch(`${BASE_URL}/${weather._id}`, {
                method: "DELETE"
            });

            await loadHistory();
        });

        buttonsDiv.appendChild(changeBtn);
        buttonsDiv.appendChild(deleteBtn);

        divElement.appendChild(h2Location);
        divElement.appendChild(h3Date);
        divElement.appendChild(h3Temperature);
        divElement.appendChild(buttonsDiv);

        listDiv.appendChild(divElement);
    });

    editButton.disabled = true;
}


async function createWeather() {
    const weather = {
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value
    };

    await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(weather)
    });

    clearInput();
    await loadHistory();
}


async function editWeather() {
    const updatedWeather = {
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value,
        _id: selectedId
    };

    await fetch(`${BASE_URL}/${selectedId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedWeather)
    });

    selectedId = null;

    clearInput();

    addButton.disabled = false;
    editButton.disabled = true;

    await loadHistory();
}


function clearInput() {
    locationInput.value = "";
    temperatureInput.value = "";
    dateInput.value = "";
}