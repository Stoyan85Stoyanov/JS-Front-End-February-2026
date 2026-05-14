// const baseURL = "http://localhost:3030/jsonstore/tasks";

// const loadMealsButton = document.getElementById("load-meals");
// const addMealButton = document.getElementById("add-meal");
// const editMealButton = document.getElementById("edit-meal");
// const mealDivElement = document.getElementById("list");

// const foodInputElement = document.getElementById("food");
// const timeInputElement = document.getElementById("time");
// const caloriesInputElement = document.getElementById("calories");

// let mealId = null;

// const loadMeals = async () => {
//     mealId = null;
//     editMealButton.disabled = true;
//     addMealButton.disabled = false;

//     const response = await fetch(baseURL);

//     if (!response.ok) {
//        return;  
//     }  

//     const inputData = await response.json();

//     mealDivElement.innerHTML = "";

//     for (const meal of Object.values(inputData)) {
//         const changeButton = document.createElement("button");
//         changeButton.classList.add("change-meal");
//         changeButton.textContent = "Change";

//         const deleteButton = document.createElement("button");
//         deleteButton.classList.add("delete-meal");
//         deleteButton.textContent = "Delete";

//         const mealButtonsDivElement = document.createElement("div");
//         mealButtonsDivElement.id = "meal-buttons";
//         mealButtonsDivElement.appendChild(changeButton);
//         mealButtonsDivElement.appendChild(deleteButton);

//         const h2FoodInputElement = document.createElement("h2");
//         h2FoodInputElement.textContent = meal.food;

//         const h3TimeInputElement = document.createElement("h3");
//         h3TimeInputElement.textContent = meal.time;

//         const h3CaloriesInputElement = document.createElement("h3");
//         h3CaloriesInputElement.textContent = meal.calories;

//         const mealElement = document.createElement("div");
//         mealElement.classList.add("meal");
//         mealElement.appendChild(h2FoodInputElement);
//         mealElement.appendChild(h3TimeInputElement);
//         mealElement.appendChild(h3CaloriesInputElement);
//         mealElement.appendChild(mealButtonsDivElement);

//         mealDivElement.appendChild(mealElement);

//         changeButton.addEventListener("click", () => {
//             mealId = meal._id;
//             foodInputElement.value = meal.food;
//             timeInputElement.value = meal.time;
//             caloriesInputElement.value = meal.calories;

//             editMealButton.disabled = false;
//             addMealButton.disabled = true;

//             mealElement.remove();
//         });

//         deleteButton.addEventListener("click", async () => {
//             const response = await fetch(`${baseURL}/${meal._id}`, { method: "DELETE" });

//             if (!response.ok) {
//                 return;  
//             }
            
//             await loadMeals();
//         });
//     }
// };

// loadMealsButton.addEventListener("click", (e) => {
//     e.preventDefault();  
//     loadMeals();
// });

// editMealButton.addEventListener("click", async (e) => {
//     e.preventDefault();

//     if (!mealId) {
//         return;
//     } 
    
//     const { food, time, calories } = getInputData();

//     const response = await fetch(`${baseURL}/${mealId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ food, time, calories }) 
//     });

//     if (!response.ok) {
//         return;  
//     } 

//     mealId = null;
//     clearInput();
//     editMealButton.disabled = true;
//     addMealButton.disabled = false;

//     await loadMeals();
// });

// addMealButton.addEventListener("click", async (e) => {
//     e.preventDefault();

//     const { food, time, calories } = getInputData();

//     if (!food || !time || !calories) {
//         return;
//     }

//     const response = await fetch(baseURL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ food, time, calories })
//     });

//     if (!response.ok) {
//         return;
//     }

//     clearInput();
//     await loadMeals();
// });


// function getInputData() {
//     return {
//         food: foodInputElement.value,
//         time: timeInputElement.value,
//         calories: caloriesInputElement.value
//     };
// }

// function clearInput() {
//     foodInputElement.value = "";
//     timeInputElement.value = "";
//     caloriesInputElement.value = "";
// }


const baseURL = "http://localhost:3030/jsonstore/tasks";

const loadMealsButton = document.getElementById("load-meals");
const addMealButton = document.getElementById("add-meal");
const editMealButton = document.getElementById("edit-meal");
const mealDivElement = document.getElementById("list");

const foodInputElement = document.getElementById("food");
const timeInputElement = document.getElementById("time");
const caloriesInputElement = document.getElementById("calories");

let mealId = null;


const loadMeals = async () => {
    mealId = null;
    editMealButton.disabled = true;
    addMealButton.disabled = false;

    const response = await fetch(baseURL);

    if (!response.ok) {
       return; 
    }
    const data = await response.json();

    mealDivElement.innerHTML = "";

    Object.values(data).forEach(meal => {
        const mealElement = document.createElement("div");
        mealElement.classList.add("meal");

        const h2Food = document.createElement("h2");
        h2Food.textContent = meal.food;

        const h3Time = document.createElement("h3");
        h3Time.textContent = meal.time;

        const h3Calories = document.createElement("h3");
        h3Calories.textContent = meal.calories;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.id = "meal-buttons";

        const changeBtn = document.createElement("button");
        changeBtn.textContent = "Change";
        changeBtn.classList.add("change-meal");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-meal");

        buttonsDiv.appendChild(changeBtn);
        buttonsDiv.appendChild(deleteBtn);

        mealElement.appendChild(h2Food);
        mealElement.appendChild(h3Time);
        mealElement.appendChild(h3Calories);
        mealElement.appendChild(buttonsDiv);

        mealDivElement.appendChild(mealElement);

       
        changeBtn.addEventListener("click", () => {

            mealId = meal._id;

            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            caloriesInputElement.value = meal.calories;

            editMealButton.disabled = false;
            addMealButton.disabled = true;

            mealElement.remove();
        });

       
        deleteBtn.addEventListener("click", async () => {
            const delResp = await fetch(`${baseURL}/${meal._id}`, { method: "DELETE" });
            if (!delResp.ok) {
                return;
            }

            await loadMeals();
        });
    });
};


addMealButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const { food, time, calories } = getInputData();
    if (!food || !time || !calories) {
       return; 
    } 

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ food, time, calories })
    });

    if (!response.ok) {
        return;

    } 
    clearInput();
    await loadMeals();
});


editMealButton.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!mealId) {
        return;
    }

    const { food, time, calories } = getInputData();

    if (!food || !time || !calories) {
       return; 
    } 

    const response = await fetch(`${baseURL}/${mealId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ food, time, calories })
    });

    if (!response.ok) {
        return;
    }

    mealId = null;
    clearInput();
    editMealButton.disabled = true;
    addMealButton.disabled = false;

    await loadMeals();
});


function getInputData() {
    return {
        food: foodInputElement.value,
        time: timeInputElement.value,
        calories: caloriesInputElement.value
    };
}

function clearInput() {
    foodInputElement.value = "";
    timeInputElement.value = "";
    caloriesInputElement.value = "";
}


loadMealsButton.addEventListener("click", (e) => {
    e.preventDefault();
    loadMeals();
});