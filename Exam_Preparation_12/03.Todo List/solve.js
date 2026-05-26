// const baseUrl = 'http://localhost:3030/jsonstore/tasks';

// const addButton = document.querySelector("#add-button");
// const loadButton = document.getElementById('load-button');
// const todoList = document.querySelector("#todo-list");
// const titleInput = document.querySelector("#title");

// function attachEvents() {
//   loadButton.addEventListener('click', loadTasks);
//   addButton.addEventListener('click', addTask);
// }

// function loadTasks(event) {
//   event?.preventDefault();

//   todoList.innerHTML = '';

//   fetch(baseUrl)
//     .then(response => response.json())
//     .then(tasks => Object.values(tasks).forEach(renderTask));
// }

// function renderTask(task) {
//   const li = document.createElement('li');

//   const span = document.createElement('span');
//   span.textContent = task.name || '';

//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = 'Remove';

//   const editBtn = document.createElement('button');
//   editBtn.textContent = 'Edit';

//   deleteBtn.addEventListener('click', () => {
//     fetch(`${baseUrl}/${task._id}`, { method: 'DELETE' })
//       .then(loadTasks);
//   });

//   editBtn.addEventListener('click', () => {
//     const input = document.createElement('input');
//     input.value = task.name;

//     const submitBtn = document.createElement('button');
//     submitBtn.textContent = 'Submit';

//     li.innerHTML = '';

//     li.append(input, deleteBtn, submitBtn);

//     submitBtn.addEventListener('click', () => {
//       const updatedName = input.value.trim();
//       if (!updatedName) return;

//       fetch(`${baseUrl}/${task._id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: updatedName })
//       }).then(loadTasks);
//     });
//   });

//   li.append(span, deleteBtn, editBtn);
//   todoList.appendChild(li);
// }

// function addTask(event) {
//   event.preventDefault();

//   const taskName = titleInput.value.trim();

//   if (taskName.length <= 3) return;

//   fetch(baseUrl, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: taskName })
//   }).then(loadTasks);

//   titleInput.value = '';
// }

// attachEvents();





const BASE_URL = 'http://localhost:3030/jsonstore/tasks';
const addButton = document.querySelector("#add-button");
const loadButton = document.getElementById('load-button');
const ulElement = document.querySelector("#todo-list");
const inputElement = document.querySelector("#title");

function attachEvents() {
    loadButton.addEventListener('click', loadTasksHandler);
    addButton.addEventListener('click', addTodo);
}

function loadTasksHandler(event) {
    if (event) {
        event.preventDefault();
    }

    ulElement.innerHTML = '';

    fetch(BASE_URL)
        .then(res => res.json())
        .then(list => {
            Object.values(list).forEach(({ name, _id }) => {

                const liItem = createElement('li', '', ulElement);

                createElement('span', name, liItem);

                const removeBtn = createElement('button', 'Remove', liItem);
                removeBtn.id = _id;
                removeBtn.addEventListener('click', removeTaskHandler);

                const editBtn = createElement('button', 'Edit', liItem);
                editBtn.id = _id;
                editBtn.addEventListener('click', createEditInput);
            });
        });
}

function addTodo(event) {
    event.preventDefault();

    const value = inputElement.value.trim();

    if (typeof value !== "string" || value.length <= 3) {
        return;
    }

    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: value })
    })
        .then(() => loadTasksHandler());

    inputElement.value = "";
}

function createEditInput(event) {
    const parentElement = event.target.parentElement;

    const currentValue = parentElement.querySelector("span").textContent;

    
    parentElement.innerHTML = "";

    const input = document.createElement("input");
    input.value = currentValue;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.id = event.target.id;

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.id = event.target.id;

    parentElement.appendChild(input);
    parentElement.appendChild(removeBtn);
    parentElement.appendChild(submitBtn);

    removeBtn.addEventListener('click', removeTaskHandler);
    submitBtn.addEventListener('click', editTaskHandler);
}

function removeTaskHandler(event) {
    const id = event.target.id;

    fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(() => loadTasksHandler());
}

function editTaskHandler(event) {
    const parent = event.target.parentElement;
    const inputVal = parent.querySelector('input').value.trim();

    if (!inputVal) {
       return; 
    } 

    fetch(`${BASE_URL}/${event.target.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: inputVal })
    })
        .then(() => loadTasksHandler());
}

function createElement(elementTag, value, parent) {

    const newElement = document.createElement(elementTag);
    newElement.textContent = value;

    if (parent) {
        parent.appendChild(newElement);
    }

    return newElement;
}

attachEvents();