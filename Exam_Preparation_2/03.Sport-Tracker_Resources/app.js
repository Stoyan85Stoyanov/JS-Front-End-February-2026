// const url = "http://localhost:3030/jsonstore/workout";

// const loadButton = document.getElementById("load-workout");
// const createButton = document.getElementById("add-workout");
// const editButton = document.getElementById("edit-workout");
// const workoutsList = document.getElementById("list");

// const formContainer = document.querySelector("div#form");
// const workoutInput = formContainer.querySelector("input#workout");
// const locationInput = formContainer.querySelector("input#location");
// const dateInput = formContainer.querySelector("input#date");

// loadButton.addEventListener("click", reloadWorkouts);

// createButton.addEventListener("click", async () => {
//     const body = createWorkoutInstance();
//     if (!body) return;

//     await fetch(url, { method: "POST", body: JSON.stringify(body) });

//     clearInputs();
//     await reloadWorkouts();
// });

// let workoutToEdit = null;
// editButton.addEventListener("click", async () => {
//     if (!workoutToEdit) return;

//     const body = createWorkoutInstance();
//     if (!body) return;

//     await fetch(`${url}/${workoutToEdit._id}`, { method: "PUT", body: JSON.stringify(body) });

//     clearInputs();
//     createButton.disabled = false;
//     editButton.disabled = true;
//     workoutToEdit = null;
//     await reloadWorkouts();
// });

// function createWorkoutInstance() {
//     if (!workoutInput.value || !locationInput.value || !dateInput.value) return null;
//     return { workout: workoutInput.value, location: locationInput.value, date: dateInput.value };
// }

// function clearInputs() {
//     workoutInput.value = "";
//     locationInput.value = "";
//     dateInput.value = "";
// }

// async function reloadWorkouts() {
//     const getWorkoutsResponse = await fetch(url);
//     const workouts = await getWorkoutsResponse.json();

//     workoutsList.replaceChildren(...Object.values(workouts).map(createWorkoutElement));
// }

// function createWorkoutElement(workout) {
//     const nameHeader = document.createElement("h2");
//     nameHeader.textContent = workout.workout;

//     const dateHeader = document.createElement("h3");
//     dateHeader.textContent = workout.date;

//     const locationHeader = document.createElement("h3");
//     locationHeader.id = "location";
//     locationHeader.textContent = workout.location;

//     const changeButton = document.createElement("button");
//     changeButton.className = "change-btn";
//     changeButton.textContent = "Change";

//     const deleteButton = document.createElement("button");
//     deleteButton.className = "delete-btn";
//     deleteButton.textContent = "Done";

//     const buttonsContainer = document.createElement("div");
//     buttonsContainer.id = "buttons-container";
//     buttonsContainer.appendChild(changeButton);
//     buttonsContainer.appendChild(deleteButton);

//     const workoutContainer = document.createElement("div");
//     workoutContainer.className = "container";
//     workoutContainer.appendChild(nameHeader);
//     workoutContainer.appendChild(dateHeader);
//     workoutContainer.appendChild(locationHeader);
//     workoutContainer.appendChild(buttonsContainer);

//     changeButton.addEventListener("click", () => {
//         workoutContainer.remove();

//         workoutInput.value = workout.workout;
//         locationInput.value = workout.location;
//         dateInput.value = workout.date;

//         createButton.disabled = true;
//         editButton.disabled = false;

//         workoutToEdit = workout;
//     });

//     deleteButton.addEventListener("click", async () => {
//         await fetch(`${url}/${workout._id}`, { method: "DELETE" });
//         await reloadWorkouts();
//     });

//     return workoutContainer;
// }


const API_URL = "http://localhost:3030/jsonstore/workout";

const loadBtn = document.getElementById("load-workout");
const createBtn = document.getElementById("add-workout");
const editBtn = document.getElementById("edit-workout");
const workoutsList = document.getElementById("list");

const workoutInput = document.querySelector("#form input#workout");
const locationInput = document.querySelector("#form input#location");
const dateInput = document.querySelector("#form input#date");

let workoutToEdit = null;

loadBtn.addEventListener("click", loadWorkouts);
createBtn.addEventListener("click", createWorkout);
editBtn.addEventListener("click", editWorkout);


async function loadWorkouts() {
    const res = await fetch(API_URL);
    const data = await res.json();

    workoutsList.innerHTML = ""; 
    Object.values(data).forEach(w => workoutsList.appendChild(createWorkoutCard(w)));
}


function createWorkoutCard(workout) {
    const card = document.createElement("div");
    card.className = "container";

    const title = document.createElement("h2");
    title.textContent = workout.workout;

    const date = document.createElement("h3");
    date.textContent = workout.date;

    const location = document.createElement("h3");
    location.id = "location";
    location.textContent = workout.location;

    const changeBtn = document.createElement("button");
    changeBtn.textContent = "Change";
    changeBtn.className = "change-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Done";
    deleteBtn.className = "delete-btn";

    const buttons = document.createElement("div");
    buttons.id = "buttons-container";
    buttons.append(changeBtn, deleteBtn);

    card.append(title, date, location, buttons);

 
    changeBtn.addEventListener("click", () => {
        workoutInput.value = workout.workout;
        locationInput.value = workout.location;
        dateInput.value = workout.date;

        createBtn.disabled = true;
        editBtn.disabled = false;

        workoutToEdit = workout;
        card.remove();
    });

   
    deleteBtn.addEventListener("click", async () => {
        await fetch(`${API_URL}/${workout._id}`, { method: "DELETE" });
        loadWorkouts();
    });

    return card;
}


async function createWorkout() {
    const data = getInputData();
    if (!data) return;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    clearInputs();
    loadWorkouts();
}


async function editWorkout() {
    if (!workoutToEdit) return;

    const data = getInputData();
    if (!data) return;

    await fetch(`${API_URL}/${workoutToEdit._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    clearInputs();
    createBtn.disabled = false;
    editBtn.disabled = true;
    workoutToEdit = null;

    loadWorkouts();
}


function getInputData() {
    const workout = workoutInput.value.trim();
    const location = locationInput.value.trim();
    const date = dateInput.value.trim();

    if (!workout || !location || !date) return null;

    return { workout, location, date };
}


function clearInputs() {
    workoutInput.value = "";
    locationInput.value = "";
    dateInput.value = "";
}