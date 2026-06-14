const studentsUrl = "http://localhost:3030/jsonstore/collections/students";

const resultsTableBody = document.querySelector("table#results > tbody");
const inputForm = document.querySelector("form#form");
const firstNameInput = inputForm.querySelector("input[name='firstName']");
const lastNameInput = inputForm.querySelector("input[name='lastName']");
const facultyNumberInput = inputForm.querySelector("input[name='facultyNumber' ]");
const gradeInput = inputForm.querySelector("input[name='grade']");

inputForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const firstName = firstNameInput.value;
    if (!firstName) {
        return;
    }

    const lastName = lastNameInput.value;
    if (!lastName) {
        return;
    }

    const facultyNumber = facultyNumberInput.value;
    if (!facultyNumber || !facultyNumberIsValid (facultyNumber)) {
        return;
    }

    const grade = Number(gradeInput.value);
    if (grade === 0 || Number.isNaN(grade)) {
        return;
    }

    const body = {
        firstName,
        lastName,
        facultyNumber,
        grade,
    };


    await fetch(studentsUrl, { method: "POST", body: JSON.stringify(body) });
    await loadStudents();

    firstNameInput.value = "";
    lastNameInput.value = "";
    facultyNumberInput.value = "";
    gradeInput.value = "";
});


loadStudents();


function facultyNumberIsValid(value) {
    
    for (let i = 0; i < value.length; i++) {

        if (value[i] < '0' || '9' < value[i]) {
             return false;
        }
    }

    return true;
}

async function loadStudents() {

    const getStudentsResponse = await fetch(studentsUrl);
    const students = await getStudentsResponse.json();

    resultsTableBody.replaceChildren();

    for (const student of Object.values(students)) {

        const firstName = document.createElement("td");
        firstName.textContent = student.firstName;

        const lastName = document.createElement("td");
        lastName.textContent = student.lastName;

        const facultyNumber = document.createElement("td");
        facultyNumber.textContent = student.facultyNumber;

        const grade = document.createElement("td");
        grade.textContent = student.grade;

        const tableRow = document.createElement("tr");
        tableRow.appendChild(firstName);
        tableRow.appendChild(lastName);
        tableRow.appendChild(facultyNumber);
        tableRow.appendChild(grade);

        resultsTableBody.appendChild(tableRow);
    }
}