const baseUrl = "http://localhost:3030/jsonstore/games";

const loadButton = document.getElementById("load-games");
const gameList = document.getElementById("games-list");
const addGameButton = document.getElementById("add-game");
const editGameButton = document.getElementById("edit-game");
const nameInput = document.getElementById("g-name");
const typeInput = document.getElementById("type");
const playersInput = document.getElementById("players");

let selectedGameId = null;

loadButton.addEventListener("click", loadButtonClickHandler);
addGameButton.addEventListener("click", addButtonClickHandler);
editGameButton.addEventListener("click", editButtonClickHandler);



async function loadButtonClickHandler(event) {
    const response = await getAllGames();
    const result = await response.json();
    const games = Object.values(result);

    const gameElements = games.map(createGameElement);

    clearGameList();
    appendGames(gameElements);
}

function getAllGames() {
    return fetch(baseUrl);
}

function clearGameList() {
    gameList.innerHTML = "";
}

function appendGames(gameElements) {
    gameList.append(...gameElements);
}


async function addButtonClickHandler(event) {

    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    const newGame = createNewGame(name, type, players);

    await postGame(newGame);

    loadButtonClickHandler();
    clearInputs();
}

function createNewGame(name, type, players) {
    return { name, type, players };
}

function postGame(newGame) {
    return fetch(baseUrl,
        {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newGame)
        });
}


async function editButtonClickHandler(event) {

    _id = selectedGameId;
    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    const modifiedGame = createModifiedGame(_id, name, type, players);

    await putGame(modifiedGame);

    loadButtonClickHandler();

    toggleButtons();

    clearInputs();

    selectedGameId = null;
}

function createModifiedGame(_id, name, type, players) {
    return { _id, name, type, players };
}

function putGame(modifiedGame) {
    return fetch(`${baseUrl}/${selectedGameId}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(modifiedGame)
    });
}

function toggleButtons() {
    editGameButton.setAttribute("disabled", "");
    addGameButton.removeAttribute("disabled");
}


function createGameElement(game) {
    const gameElement = document.createElement("div");
    gameElement.classList.add("board-game");

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    const pElementName = createParagraph(game.name);
    const pElementType = createParagraph(game.type);
    const pElementPlayers = createParagraph(game.players);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const changeButton = createChangeButton(game);
    const deleteButton = createDeleteButton(game);

    contentElement.appendChild(pElementName);
    contentElement.appendChild(pElementType);
    contentElement.appendChild(pElementPlayers);

    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);

    gameElement.appendChild(contentElement);
    gameElement.appendChild(buttonsContainer);

    return gameElement;
}

function createParagraph(text) {
    const pElement = document.createElement("p");
    pElement.textContent = text;
    return pElement;
}

function createChangeButton(game) {
    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";

    changeButton.addEventListener("click", () => {
        nameInput.value = game.name;
        typeInput.value = game.type;
        playersInput.value = game.players;

        editGameButton.removeAttribute("disabled");
        addGameButton.setAttribute("disabled", true);

        selectedGameId = game._id;
    });

    return changeButton;
}

function createDeleteButton(game) {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", async () => {
        await fetch(`${baseUrl}/${game._id}`, {
            method: "DELETE"
        });

        loadButtonClickHandler();
    });

    return deleteButton;
}


function clearInputs() {
    nameInput.value = "";
    typeInput.value = "";
    playersInput.value = "";
}