window.addEventListener('load', solve);

function solve() {

    const genreInputElement = document.getElementById("genre");
    const nameSongInputElement = document.getElementById("name");
    const authorSongInputElement = document.getElementById("author");
    const dateCreationInputElement = document.getElementById("date");

    const addButtonElement = document.getElementById("add-btn");

    const sectionElement = document.getElementById("all-hits");
    const allHitsDivElement = document.querySelector(".all-hits-container");

    const saveSectionElement = document.getElementById("saved-hits");
    const saveHitsDivElement = document.querySelector(".saved-container");

    const totalLikesElement = document.querySelector("#total-likes p");


    addButtonElement.addEventListener("click", handleAdd);

    function handleAdd(event) {
        event.preventDefault();

        const genre = genreInputElement.value.trim();
        const name = nameSongInputElement.value.trim();
        const author = authorSongInputElement.value.trim();
        const date = dateCreationInputElement.value.trim();

        if (!genre || !name || !author || !date) {
            return;
        }

        const infoHitsDivElement = document.createElement("div");
        infoHitsDivElement.classList.add("hits-info");

        const imgElement = document.createElement("img");
        imgElement.src = "./static/img/img.png";

        const genreElement = document.createElement("h2");
        genreElement.textContent = `Genre: ${genre}`;

        const nameElement = document.createElement("h2");
        nameElement.textContent = `Name: ${name}`;

        const authorElement = document.createElement("h2");
        authorElement.textContent = `Author: ${author}`;

        const dateElement = document.createElement("h3");
        dateElement.textContent = `Date: ${date}`;

        const saveButton = document.createElement("button");
        saveButton.classList.add("save-btn");
        saveButton.textContent = "Save song";

        saveButton.addEventListener("click", handleSave);

        function handleSave() {

            saveHitsDivElement.appendChild(infoHitsDivElement);

            saveButton.remove();
            likeButton.remove();
        }

        const likeButton = document.createElement("button");
        likeButton.classList.add("like-btn");
        likeButton.textContent = "Like song";

        likeButton.addEventListener("click", () => {

            let currentLikes = Number(totalLikesElement.textContent.split(": ")[1]);
            currentLikes++;

            totalLikesElement.textContent = `Total Likes: ${currentLikes}`;
            likeButton.disabled = true;
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";

          deleteButton.addEventListener("click", () => {
            infoHitsDivElement.remove();
        });

        infoHitsDivElement.appendChild(imgElement);
        infoHitsDivElement.appendChild(genreElement);
        infoHitsDivElement.appendChild(nameElement);
        infoHitsDivElement.appendChild(authorElement);
        infoHitsDivElement.appendChild(dateElement);
        infoHitsDivElement.appendChild(saveButton);
        infoHitsDivElement.appendChild(likeButton);
        infoHitsDivElement.appendChild(deleteButton);

        allHitsDivElement.appendChild(infoHitsDivElement);


        genreInputElement.value = "";
        nameSongInputElement.value = "";
        authorSongInputElement.value = "";
        dateCreationInputElement.value = "";

    }
}