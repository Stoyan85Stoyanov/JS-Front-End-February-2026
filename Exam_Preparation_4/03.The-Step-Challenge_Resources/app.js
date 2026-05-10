// const baseUrl = "http://localhost:3030/jsonstore/records";

// const loadButtonElement = document.getElementById("load-records");

// const listUlElement = document.getElementById("list");

// const nameInputElement = document.getElementById("p-name");
// const stepsInputElement = document.getElementById("steps");
// const caloriesInputElement = document.getElementById("calories");

// const addButtonElement = document.getElementById("add-record");
// const editButtonElement = document.getElementById("edit-record");

// loadButtonElement.addEventListener("click", handleLoadRecord);
// addButtonElement.addEventListener("click", handleAddRecord);
// editButtonElement.addEventListener("click", handleEditRecord);

// let selectedRecordId = null;


// async function handleLoadRecord() {
//     const recordResponse = await fetch(baseUrl);
//     const recordData = await recordResponse.json();
//     const recordArray = Object.values(recordData);

//     listUlElement.innerHTML = "";

//     recordArray.forEach(recordObject => {
//         const liElement = document.createElement("li");
//         liElement.classList.add("record");

//         const infoDivElement = document.createElement("div");
//         infoDivElement.classList.add("info");

//         const namePElement = document.createElement("p");
//         namePElement.textContent = recordObject.name;

//         const caloriesPElement = document.createElement("p");
//         caloriesPElement.textContent = recordObject.calories;

//         const stepsPElement = document.createElement("p");
//         stepsPElement.textContent = recordObject.steps;

//         const divButtonElement = document.createElement("div");
//         divButtonElement.classList.add("btn-wrapper");

//         const changeButtonElement = document.createElement("button");
//         changeButtonElement.classList.add("change-btn");
//         changeButtonElement.textContent = "Change";

//         const deleteButtonElement = document.createElement("button");
//         deleteButtonElement.classList.add("delete-btn");
//         deleteButtonElement.textContent = "Delete";

//         infoDivElement.appendChild(namePElement);
//         infoDivElement.appendChild(stepsPElement);
//         infoDivElement.appendChild(caloriesPElement);

//         divButtonElement.appendChild(changeButtonElement);
//         divButtonElement.appendChild(deleteButtonElement);

//         liElement.appendChild(infoDivElement);
//         liElement.appendChild(divButtonElement);

//         listUlElement.appendChild(liElement);


//         changeButtonElement.addEventListener("click", handleShowEdit);
//         deleteButtonElement.addEventListener("click", handleDeleteRecord);

//         function handleShowEdit() {
//             nameInputElement.value = recordObject.name;
//             stepsInputElement.value = recordObject.steps;
//             caloriesInputElement.value = recordObject.calories;

//             editButtonElement.disabled = false;
//             addButtonElement.disabled = true;

//             selectedRecordId = recordObject._id;
//         }

        // async function handleDeleteRecord() {

        //     selectedRecordId = recordObject._id;

        //     await fetch(`${baseUrl}/${selectedRecordId}`, {
        //         method: "DELETE"
        //     })

        //     await handleLoadRecord();
        // }
//     });
// }


// async function handleAddRecord() {
//     const name = nameInputElement.value.trim();
//     const steps = stepsInputElement.value.trim();
//     const calories = caloriesInputElement.value.trim();

//     await fetch(baseUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, steps, calories })
//     });

//     nameInputElement.value = "";
//     stepsInputElement.value = "";
//     caloriesInputElement.value = "";

//     await handleLoadRecord();
// }


// async function handleEditRecord() {
//     const name = nameInputElement.value.trim();
//     const steps = stepsInputElement.value.trim();
//     const calories = caloriesInputElement.value.trim();

//     await fetch(`${baseUrl}/${selectedRecordId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, steps, calories, _id: selectedRecordId })
//     });

//     nameInputElement.value = "";
//     stepsInputElement.value = "";
//     caloriesInputElement.value = "";

//     editButtonElement.disabled = true;
//     addButtonElement.disabled = false;

//     await handleLoadRecord();
// }


const baseUrl = "http://localhost:3030/jsonstore/records";

const loadButtonElement = document.getElementById("load-records");
const listUlElement = document.getElementById("list");

const nameInputElement = document.getElementById("p-name");
const stepsInputElement = document.getElementById("steps");
const caloriesInputElement = document.getElementById("calories");

const addButtonElement = document.getElementById("add-record");
const editButtonElement = document.getElementById("edit-record");

loadButtonElement.addEventListener("click", handleLoadRecord);
addButtonElement.addEventListener("click", handleAddRecord);
editButtonElement.addEventListener("click", handleEditRecord);

let selectedRecordId = null;

async function handleLoadRecord() {
    const res = await fetch(baseUrl);
    const data = await res.json();
    const records = Object.values(data);

    listUlElement.innerHTML = "";

    records.forEach(recordObject => {
        const liElement = document.createElement("li");
        liElement.className = "record";

        const infoDivElement = document.createElement("div");
        infoDivElement.className = "info";

        const namePElement = document.createElement("p");
        namePElement.textContent = recordObject.name;

        const stepsPElement = document.createElement("p");
        stepsPElement.textContent = recordObject.steps;

        const caloriesPElement = document.createElement("p");
        caloriesPElement.textContent = recordObject.calories;

        infoDivElement.append(namePElement, stepsPElement, caloriesPElement);

        const divButtonElement = document.createElement("div");
        divButtonElement.className = "btn-wrapper";

        const changeButtonElement = document.createElement("button");
        changeButtonElement.className = "change-btn";
        changeButtonElement.textContent = "Change";

        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.className = "delete-btn";
        deleteButtonElement.textContent = "Delete";

        divButtonElement.append(changeButtonElement, deleteButtonElement);
        liElement.append(infoDivElement, divButtonElement);

        listUlElement.appendChild(liElement);

        
        changeButtonElement.addEventListener("click", handleShowEdit);

        function handleShowEdit() {
            nameInputElement.value = recordObject.name;
            stepsInputElement.value = recordObject.steps;
            caloriesInputElement.value = recordObject.calories;

            selectedRecordId = recordObject._id;

            editButtonElement.disabled = false;
            addButtonElement.disabled = true;
        }

        deleteButtonElement.addEventListener("click", handleDeleteRecord);


        async function handleDeleteRecord() {
            selectedRecordId = recordObject._id;

            await fetch(`${baseUrl}/${selectedRecordId}`, {
                method: "DELETE"
            })

            await handleLoadRecord();
        }

        
    });
}

async function handleAddRecord() {
    const name = nameInputElement.value.trim();
    const steps = stepsInputElement.value.trim();
    const calories = caloriesInputElement.value.trim();

    await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, steps, calories })
    });

    clearInputs();
    await handleLoadRecord();
}


async function handleEditRecord() {
    const name = nameInputElement.value.trim();
    const steps = stepsInputElement.value.trim();
    const calories = caloriesInputElement.value.trim();

    await fetch(`${baseUrl}/${selectedRecordId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, steps, calories, _id: selectedRecordId })
    });

    clearInputs();

    editButtonElement.disabled = true;
    addButtonElement.disabled = false;

    await handleLoadRecord();
}


function clearInputs() {
    nameInputElement.value = "";
    stepsInputElement.value = "";
    caloriesInputElement.value = "";
}