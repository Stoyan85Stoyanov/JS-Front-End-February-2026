const API_URL = "http://localhost:3030/jsonstore/tasks";

const courseNameInputElement = document.getElementById("course-name");
const courseTypeInputElement = document.getElementById("course-type");
const descriptionInputElement = document.getElementById("description");
const teacherNameInputElement = document.getElementById("teacher-name");

const loadButtonElement = document.getElementById("load-course");
const addButtonElement = document.getElementById("add-course");
const editButtonElement = document.getElementById("edit-course");

const containerDivElement = document.getElementById("list");

loadButtonElement.addEventListener("click", handleLoadCourses);
addButtonElement.addEventListener("click", handleAddCourse);
editButtonElement.addEventListener("click", handleEditCourse);

let selectedCourseId = null;


async function handleLoadCourses() {
    const res = await fetch(API_URL);
    const data = await res.json();
    const courses = Object.values(data);

    containerDivElement.innerHTML = "";

    courses.forEach(courseObject => {

        const containerDiv = document.createElement("div");
        containerDiv.classList.add("container");

        const courseNameh2Element = document.createElement("h2");
        courseNameh2Element.textContent = courseObject.title;

        const teacherNameH3Element = document.createElement("h3");
        teacherNameH3Element.textContent = courseObject.teacher;

        const courseTypeH3Element = document.createElement("h3");
        courseTypeH3Element.textContent = courseObject.type;

        const descriptionH4Element = document.createElement("h4");
        descriptionH4Element.textContent = courseObject.description;

        const editButtonElementLocal = document.createElement("button");
        editButtonElementLocal.classList.add("edit-btn");
        editButtonElementLocal.textContent = "Edit Course";

        const finishButtonElement = document.createElement("button");
        finishButtonElement.classList.add("finish-btn");
        finishButtonElement.textContent = "Finish Course";

        
        editButtonElementLocal.addEventListener("click", () => {
            selectedCourseId = courseObject._id;

            courseNameInputElement.value = courseObject.title;
            courseTypeInputElement.value = courseObject.type;
            descriptionInputElement.value = courseObject.description;
            teacherNameInputElement.value = courseObject.teacher;

            addButtonElement.disabled = true;
            editButtonElement.disabled = false;

            containerDiv.remove();
        });

        
        finishButtonElement.addEventListener("click", async () => {
            await fetch(`${API_URL}/${courseObject._id}`, {
                method: "DELETE"
            });

           await handleLoadCourses();
        });

        
        containerDiv.appendChild(courseNameh2Element);
        containerDiv.appendChild(teacherNameH3Element);
        containerDiv.appendChild(courseTypeH3Element);
        containerDiv.appendChild(descriptionH4Element);
        containerDiv.appendChild(editButtonElementLocal);
        containerDiv.appendChild(finishButtonElement);

        containerDivElement.appendChild(containerDiv);
    });
}


async function handleAddCourse(event) {
    event.preventDefault();

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: courseNameInputElement.value,
            type: courseTypeInputElement.value,
            description: descriptionInputElement.value,
            teacher: teacherNameInputElement.value
        })
    });

    clearInputs();
    await handleLoadCourses();
}


async function handleEditCourse(event) {
    event.preventDefault();

    await fetch(`${API_URL}/${selectedCourseId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: courseNameInputElement.value,
            type: courseTypeInputElement.value,
            description: descriptionInputElement.value,
            teacher: teacherNameInputElement.value
        })
    });

    clearInputs();

    addButtonElement.disabled = false;
    editButtonElement.disabled = true;

    await handleLoadCourses();
}


function clearInputs() {
    courseNameInputElement.value = "";
    courseTypeInputElement.value = "";
    descriptionInputElement.value = "";
    teacherNameInputElement.value = "";
}

