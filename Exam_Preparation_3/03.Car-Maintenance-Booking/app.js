const BASE_URL = 'http://localhost:3030/jsonstore/appointments';

const modelInput = document.getElementById("car-model");
const serviceInput = document.getElementById("car-service");
const dateInput = document.getElementById("date");
const list = document.getElementById('appointments-list');

const addBtn = document.getElementById("add-appointment");
const editBtn = document.getElementById("edit-appointment");
const loadBtn = document.getElementById("load-appointments");

let selectedId = null;

loadBtn.addEventListener('click', loadAppointments);
addBtn.addEventListener('click', createAppointment);
editBtn.addEventListener('click', editAppointment);

async function loadAppointments() {
    list.innerHTML = '';
    const res = await fetch(BASE_URL);
    const data = await res.json();

    Object.values(data).forEach(appointment => {
        const li = document.createElement('li');
        li.className = 'appointment';

        const h2Model = document.createElement('h2');
        h2Model.textContent = appointment.model;

        const h3Service = document.createElement('h3');
        h3Service.textContent = appointment.service;

        const h3Date = document.createElement('h3');
        h3Date.textContent = appointment.date;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons-appointment';

        const changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', () => startEdit(appointment));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteAppointment(appointment._id));

        buttonsDiv.appendChild(changeBtn);
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(h2Model);
        li.appendChild(h3Date);
        li.appendChild(h3Service);
        li.appendChild(buttonsDiv);

        list.appendChild(li);
    });

    enableAdd();
}

async function createAppointment(event) {
    event.preventDefault();

    if (!modelInput.value || !serviceInput.value || !dateInput.value) {
        return;
    }

    await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: modelInput.value,
            service: serviceInput.value,
            date: dateInput.value
        })
    });

    clearInputs();
    await loadAppointments(); 
}

function startEdit(appointment) {
    modelInput.value = appointment.model;
    serviceInput.value = appointment.service;
    dateInput.value = appointment.date;
    selectedId = appointment._id;

    addBtn.disabled = true;
    editBtn.disabled = false;
}

async function editAppointment(event) {
    event.preventDefault();
    if (!selectedId) return;

    await fetch(`${BASE_URL}/${selectedId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: modelInput.value,
            service: serviceInput.value,
            date: dateInput.value
        })
    });

    clearInputs();
    selectedId = null;
    enableAdd();
    await loadAppointments(); 
}

async function deleteAppointment(id) {
    await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    await loadAppointments(); 
}

function clearInputs() {
    modelInput.value = '';
    serviceInput.value = '';
    dateInput.value = '';
}

function enableAdd() {
    addBtn.disabled = false;
    editBtn.disabled = true;
}