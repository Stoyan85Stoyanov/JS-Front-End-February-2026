window.addEventListener('load', solve);

// function solve() {

//     const tasks = {};

//     const inputSelectors = {
//         title: document.querySelector("#title"),
//         description: document.querySelector("#description"),
//         label: document.querySelector("#label"),
//         points: document.querySelector("#points"),
//         assignee: document.querySelector("#assignee")
//     };


//     const selectors = {
//         createButton: document.querySelector("#create-task-btn"),
//         tasksSection: document.querySelector("#tasks-section"),
//         totalPoints: document.querySelector("#total-sprint-points"),
//         deleteButton: document.querySelector("#delete-task-btn"),
//         hiddenTaskId: document.querySelector("#task-id")
//     };


//     const icons = {
//         "Feature": "&#8865",
//         "Low Priority Bug": "&#9737",
//         "High Priority Bug": "&#9888"
//     };

//     const labelClasses = {
//         "Feature": "feature",
//         "Low Priority Bug": "low-priority",
//         "High Priority Bug": "high-priority"
//     };


//     selectors.createButton.addEventListener("click", createTask);
//     selectors.deleteButton.addEventListener("click", deleteTask);

//     function createTask(event) {
//         if (Object.values(inputSelectors).some((selector) => selector.value === "")) {
//             return;
//         }

//         const task = {
//             id: `task-${Object.values(tasks).length + 1}`,
//             title: inputSelectors.title.value,
//             description: inputSelectors.description.value,
//             label: inputSelectors.label.value,
//             points: Number(inputSelectors.points.value),
//             assignee: inputSelectors.assignee.value
//         };

//         tasks[task.id] = task;

//         const article = createElement("article", null, ["task-card"], task.id);
//         createElement("div", `${task.label} ${icons[task.label]}`, ["task-card-label", labelClasses[task.label]], null, article, true);
//         createElement("h3", task.title, ["task-card-title"], null, article);
//         createElement("p", task.description, ["task-card-description"], null, article);
//         createElement("div", `Estimated at ${task.points} pts`, ["task-card-points"], null, article);
//         createElement("div", `Assigned to: ${task.assignee}`, ["task-card-assignee"], null, article);

//         const taskActions = createElement("div", null, ["task-card-actions"], null, article);

//         const button = createElement("button", "Delete", [], null, taskActions);
//         button.addEventListener("click", loadDeleteConfirn);

//         selectors.tasksSection.appendChild(article);

//         const totalPoints = Object.values(tasks).reduce((acc, curr) => acc + curr.points, 0);
//         selectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;

//         Object.values(inputSelectors).forEach((selector) => (selector.value = ""));
//     }



//     function createElement(type, textContent, classes, id, parent, innerHTML) {

//         const element = document.createElement(type);

//         if (innerHTML && textContent) {
//             element.innerHTML = textContent;

//         } else if (textContent) {
//             element.textContent = textContent;
//         }

//         if (classes && classes.length > 0) {
//             element.classList.add(...classes);
//         }

//         if (id) {
//             element.setAttribute("id", id);
//         }

//         if (parent) {
//             parent.appendChild(element);
//         }

//         return element;
//     }


//     function loadDeleteConfirn(event) {
//         const taskId = event.currentTarget.parentElement.parentElement.getAttribute("id");



//         Object.keys(inputSelectors).forEach((key) => {
//             const selector = inputSelectors[key];
//             selector.value = tasks[taskId][key];
//             selector.disabled = true;
//         });



//         selectors.hiddenTaskId.value = taskId;
//         selectors.createButton.disabled = true;
//         selectors.deleteButton.disabled = false;
//     }

//     function deleteTask() {

//         const taskId = selectors.hiddenTaskId.value;
//         const taskElement = document.querySelector(`#${taskId}`);
//         taskElement.remove();
//         delete tasks[taskId];

//         Object.values(inputSelectors).forEach((selector) => {
//             selector.value = "";
//             selector.disabled = false;
//         });

//         selectors.createButton.disabled = false;
//         selectors.deleteButton.disabled = true;


//         const totalPoints = Object.values(tasks).reduce((acc, curr) => acc + curr.points, 0);
//         selectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;
//     }
// }



function solve() {

  const tasksById = {};

  const titleInputElement = document.getElementById("title");
  const descriptionInputElement = document.getElementById("description");
  const labelInputElement = document.getElementById("label");
  const pointsInputElement = document.getElementById("points");
  const assigneeInputElement = document.getElementById("assignee");

  const createTaskButtonElement = document.getElementById("create-task-btn");
  const deleteTaskButtonElement = document.getElementById("delete-task-btn");
  const tasksSectionElement = document.getElementById("tasks-section");
  const totalPointsElement = document.getElementById("total-sprint-points");
  const hiddenTaskIdInputElement = document.getElementById("task-id");

  deleteTaskButtonElement.disabled = true;

  const labelIcons = {
    "Feature": "&#8865",          
    "Low Priority Bug": "&#9737", 
    "High Priority Bug": "&#9888" 
  };

  const labelClassNames = {
    "Feature": "feature",
    "Low Priority Bug": "low-priority",
    "High Priority Bug": "high-priority"
  };

  createTaskButtonElement.addEventListener("click", onCreateTask);
  deleteTaskButtonElement.addEventListener("click", onDeleteTask);

  function onCreateTask(event) {
    event.preventDefault();

    if (!titleInputElement.value ||
        !descriptionInputElement.value ||
        !labelInputElement.value ||
        !pointsInputElement.value ||
        !assigneeInputElement.value) {
      return;
    }

    
    const taskId = `task-${Object.values(tasksById).length + 1}`;

    const taskData = {
      id: taskId,
      title: titleInputElement.value,
      description: descriptionInputElement.value,
      label: labelInputElement.value,
      points: Number(pointsInputElement.value),
      assignee: assigneeInputElement.value
    };

    tasksById[taskId] = taskData;

    const articleElement = document.createElement("article");
    articleElement.classList.add("task-card");
    articleElement.id = taskId;

    const labelDivElement = document.createElement("div");
    labelDivElement.classList.add("task-card-label", labelClassNames[taskData.label]);
    labelDivElement.innerHTML = `${taskData.label} ${labelIcons[taskData.label]}`;

    const titleElement = document.createElement("h3");
    titleElement.classList.add("task-card-title");
    titleElement.textContent = taskData.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("task-card-description");
    descriptionElement.textContent = taskData.description;

    const pointsElement = document.createElement("div");
    pointsElement.classList.add("task-card-points");
    pointsElement.textContent = `Estimated at ${taskData.points} pts`;

    const assigneeElement = document.createElement("div");
    assigneeElement.classList.add("task-card-assignee");
    assigneeElement.textContent = `Assigned to: ${taskData.assignee}`;

    const actionsDivElement = document.createElement("div");
    actionsDivElement.classList.add("task-card-actions");

    const deleteButtonInsideCard = document.createElement("button");
    deleteButtonInsideCard.textContent = "Delete";

    
    deleteButtonInsideCard.addEventListener("click", onLoadDeleteConfirmation);

    actionsDivElement.appendChild(deleteButtonInsideCard);

    articleElement.appendChild(labelDivElement);
    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(pointsElement);
    articleElement.appendChild(assigneeElement);
    articleElement.appendChild(actionsDivElement);

    tasksSectionElement.appendChild(articleElement);

    updateTotalPoints();
    clearInputFields();
  }

  function onLoadDeleteConfirmation(event) {

    
    const taskId = event.currentTarget.parentElement.parentElement.getAttribute("id");

    const taskData = tasksById[taskId];

    titleInputElement.value = taskData.title;
    descriptionInputElement.value = taskData.description;
    labelInputElement.value = taskData.label;
    pointsInputElement.value = taskData.points;
    assigneeInputElement.value = taskData.assignee;

    titleInputElement.disabled = true;
    descriptionInputElement.disabled = true;
    labelInputElement.disabled = true;
    pointsInputElement.disabled = true;
    assigneeInputElement.disabled = true;

    hiddenTaskIdInputElement.value = taskId;

    createTaskButtonElement.disabled = true;
    deleteTaskButtonElement.disabled = false;
  }

  function onDeleteTask() {
    const taskId = hiddenTaskIdInputElement.value;

    const taskElement = document.getElementById(taskId);
    taskElement.remove();

    delete tasksById[taskId];

    clearInputFields();
    enableInputFields();

    createTaskButtonElement.disabled = false;
    deleteTaskButtonElement.disabled = true;

    updateTotalPoints();
  }

  function updateTotalPoints() {
    const totalPoints = Object.values(tasksById).reduce((sum, task) => sum + task.points, 0);
      
    totalPointsElement.textContent = `Total Points ${totalPoints}pts`;
  }

  function clearInputFields() {
    titleInputElement.value = "";
    descriptionInputElement.value = "";
    labelInputElement.value = "";
    pointsInputElement.value = "";
    assigneeInputElement.value = "";
  }

  function enableInputFields() {
    titleInputElement.disabled = false;
    descriptionInputElement.disabled = false;
    labelInputElement.disabled = false;
    pointsInputElement.disabled = false;
    assigneeInputElement.disabled = false;
  }
}