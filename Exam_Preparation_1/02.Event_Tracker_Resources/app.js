window.addEventListener("load", solve);

function solve() {

    document.getElementById("save").addEventListener("click", onSubmit);
    const editInputRef = document.getElementById("event");
    const noteInputRef = document.getElementById("note");
    const dateInputRef = document.getElementById("date");
    const upcomingUl = document.getElementById("upcoming-list");
    const eventListRef = document.getElementById("events-list");

    document.querySelector("#events button").addEventListener("click", onDelete);


    function onSubmit(event) {

        let edit = editInputRef.value;
        let note = noteInputRef.value;
        let date = dateInputRef.value;

        if (!edit || !note || !date) {
            return;
        }

        const li = createLiTemp(edit, note, date);

        let buttons = li.querySelectorAll(".buttons button");
        buttons[0].addEventListener("click", onEdit);
        buttons[1].addEventListener("click", onDone);

        upcomingUl.appendChild(li);

        editInputRef.value = "";
        noteInputRef.value = "";
        dateInputRef.value = "";
    }

  
    function createLiTemp(edit, note, date) {

        const li = document.createElement('li');
        li.classList.add('event-item');

        const container = document.createElement('div');
        container.classList.add('event-container');

        const article = document.createElement('article');

        const nameP = document.createElement('p');
        nameP.textContent = `Name: ${edit}`;

        const noteP = document.createElement('p');
        noteP.textContent = `Note: ${note}`;

        const dateP = document.createElement('p');
        dateP.textContent = `Date: ${date}`;

        article.appendChild(nameP);
        article.appendChild(noteP);
        article.appendChild(dateP);


        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'edit');
        editBtn.textContent = 'Edit';

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('btn', 'done');
        doneBtn.textContent = 'Done';

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(doneBtn);


        container.appendChild(article);
        container.appendChild(buttonsDiv);
        li.appendChild(container);

        return li;
    }

    function onEdit(event) {
        const buttonContainer = event.target.parentElement;
        const eventContainer = buttonContainer.parentElement;
        const pElements = eventContainer.querySelectorAll("article p");
        const li = eventContainer.parentElement;

        const edit = pElements[0].textContent.split(": ")[1];
        const note = pElements[1].textContent.split(": ")[1];
        const date = pElements[2].textContent.split(": ")[1];

        editInputRef.value = edit;
        noteInputRef.value = note;
        dateInputRef.value = date;

        li.remove();
    }

    function onDone(event) {
        const buttonContainer = event.target.parentElement;
        const eventContainer = buttonContainer.parentElement;
        const li = eventContainer.parentElement;
        const pElements = li.querySelectorAll("article p");
        let newLi = createDoneLiTemp(pElements[0].textContent, pElements[1].textContent, pElements[2].textContent);

        li.remove();
        eventListRef.appendChild(newLi);
    }

    function createDoneLiTemp(edit, note, date) {
        const li = document.createElement('li');
        li.classList.add('event-item');

        const article = document.createElement('article');

        const name = document.createElement('p');
        name.textContent = `Name: ${edit}`;
        article.appendChild(name);

        const noteP = document.createElement('p');
        noteP.textContent = `Note: ${note}`;
        article.appendChild(noteP);

        const dateP = document.createElement('p');
        dateP.textContent = `Date: ${date}`;
        article.appendChild(dateP);

        li.appendChild(article);
        eventListRef.appendChild(li);  

        return li;
    }

    function onDelete(event) {
        eventListRef.innerHTML = "";   
    }
}

