window.addEventListener("load", solve);

function solve() {

    const nameInputElement = document.getElementById("name");
    const locationSelectElement = document.getElementById("location");
    const genderInputElement = document.getElementById("gender");

    const createButtonElement = document.getElementById("create-btn");

    const preparingListUlElement = document.getElementById("preparing-list");
    const characterListUlElement = document.getElementById("character-list");

    let editMode = false;
    let editingItem = null;

    createButtonElement.addEventListener("click", handleCreate);

    function handleCreate(event) {
        event.preventDefault();

        const name = nameInputElement.value.trim();
        const location = locationSelectElement.value.trim();
        const gender = genderInputElement.value.trim();


        if (!name || !location || !gender) {
            return;
        }

        const liElement = document.createElement("li");
        liElement.classList.add("creating");

        const articleElement = document.createElement("article");

        const nameh4Element = document.createElement("h4");
        nameh4Element.textContent = `${name}`;

        const locationPElement = document.createElement("p");
        locationPElement.textContent = `${location}`;

        const genderPElement = document.createElement("p");
        genderPElement.textContent = `${gender}`;

        const editButtonElement = document.createElement("button");
        editButtonElement.classList.add("action-btn", "edit");
        editButtonElement.textContent = "Edit";
        editButtonElement.addEventListener("click", handleEdit);

        const doneButtonElement = document.createElement("button");
        doneButtonElement.classList.add("action-btn", "done");
        doneButtonElement.textContent = "Done";
        doneButtonElement.addEventListener("click", handleDone);

        articleElement.appendChild(nameh4Element);
        articleElement.appendChild(locationPElement);
        articleElement.appendChild(genderPElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(doneButtonElement);

        preparingListUlElement.appendChild(liElement);

      
        createButtonElement.disabled = true;
        nameInputElement.value = "";
        locationSelectElement.value = "";
        genderInputElement.value = "";
    }

    function handleEdit(event) {
        const liElement = event.target.closest("li");
        const name = liElement.querySelector("h4").textContent;
        const location = liElement.querySelector("p:first-of-type").textContent;
        const gender = liElement.querySelector("p:last-of-type").textContent;

        nameInputElement.value = name;
        locationSelectElement.value = location;
        genderInputElement.value = gender;

        editMode = true;
        editingItem = liElement;

        liElement.remove();

        createButtonElement.disabled = false;
    }


    function handleDone(event) {
        const liElement = event.target.closest("li");

        liElement.querySelector(".edit").remove();
        liElement.querySelector(".done").remove();

        characterListUlElement.appendChild(liElement);

        createButtonElement.disabled = false;
    }
}
