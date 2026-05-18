const baseURL = "http://localhost:3030/jsonstore/tasks";

const loadVacationsButton = document.getElementById("load-vacations");
const vacationList = document.getElementById("list");

const formElement = document.querySelector("#form form");

const nameInputElement = document.getElementById("name");
const numDaysInputElement = document.getElementById("num-days");
const fromDateInputElement = document.getElementById("from-date");
const formAddButtonElement = document.getElementById("add-vacation");
const formEditButtonElement = document.getElementById("edit-vacation");

loadVacationsButton.addEventListener("click", loadVacations);

formAddButtonElement.addEventListener("click", async (e) => {
    e.preventDefault();

    const newVacation = {
        name: nameInputElement.value,
        days: numDaysInputElement.value,
        date: fromDateInputElement.value
    };

    await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newVacation)
    });

    clearInputForm();
    await loadVacations();
});

formEditButtonElement.addEventListener("click", async (e) => {
    e.preventDefault();

    const vacationId = formElement.dataset.vacation;

    const vacationData = {
        name: nameInputElement.value,
        days: numDaysInputElement.value,
        date: fromDateInputElement.value,
        _id: vacationId
    };

    await fetch(`${baseURL}/${vacationId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vacationData)
    });

    formAddButtonElement.disabled = false;
    formEditButtonElement.disabled = true;

    clearInputForm();
    delete formElement.dataset.vacation;

    await loadVacations();
});

async function loadVacations() {
    vacationList.innerHTML = "";

    formEditButtonElement.disabled = true;
    formAddButtonElement.disabled = false;

    const res = await fetch(baseURL);
    const data = await res.json();

    Object.values(data).forEach(renderVacation);
}

function renderVacation(vacation) {
    const container = document.createElement("div");
    container.classList.add("container");

    const nameEl = document.createElement("h2");
    nameEl.textContent = vacation.name;

    const dateEl = document.createElement("h3");
    dateEl.textContent = vacation.date;

    const daysEl = document.createElement("h3");
    daysEl.textContent = vacation.days;

    const changeBtn = document.createElement("button");
    changeBtn.classList.add("change-btn");
    changeBtn.textContent = "Change";

    changeBtn.addEventListener("click", () => {
        container.remove();

        nameInputElement.value = vacation.name;
        numDaysInputElement.value = vacation.days;
        fromDateInputElement.value = vacation.date;

        formAddButtonElement.disabled = true;
        formEditButtonElement.disabled = false;

        formElement.dataset.vacation = vacation._id;
    });

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("done-btn");
    doneBtn.textContent = "Done";

    doneBtn.addEventListener("click", async () => {
        await fetch(`${baseURL}/${vacation._id}`, {
            method: "DELETE"
        });

        await loadVacations();
    });

    container.appendChild(nameEl);
    container.appendChild(dateEl);
    container.appendChild(daysEl);
    container.appendChild(changeBtn);
    container.appendChild(doneBtn);

    vacationList.appendChild(container);
}

function clearInputForm() {
    nameInputElement.value = "";
    numDaysInputElement.value = "";
    fromDateInputElement.value = "";
}