const API_URL = "http://localhost:3030/jsonstore/movies";

const loadBtn = document.getElementById("load-movies");
const createBtn = document.getElementById("add-movie");
const editBtn = document.getElementById("edit-movie");
const movieList = document.getElementById("movie-list");

const movieTitleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const releaseYearInput = document.querySelector("#year");

let movieToEdit = null;

loadBtn.addEventListener("click", loadMovies);
createBtn.addEventListener("click", createMovie);
editBtn.addEventListener("click", editMovie);


async function loadMovies() {
    const res = await fetch(API_URL);
    const data = await res.json();

    movieList.innerHTML = "";

    Object.values(data).forEach(movie => {
        movieList.appendChild(createMovieElement(movie));
    });
}


function createMovieElement(movie) {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    const titleP = document.createElement("p");
    titleP.textContent = movie.title;

    const directorP = document.createElement("p");
    directorP.textContent = movie.director;

    const yearP = document.createElement("p");
    yearP.textContent = movie.year;


    contentDiv.appendChild(titleP);
    contentDiv.appendChild(directorP);
    contentDiv.appendChild(yearP);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-container");

    const changeBtn = document.createElement("button");
    changeBtn.classList.add("change-btn");
    changeBtn.textContent = "Change";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    buttonsDiv.appendChild(changeBtn);
    buttonsDiv.appendChild(deleteBtn);

    movieDiv.appendChild(contentDiv);
    movieDiv.appendChild(buttonsDiv);

  
    changeBtn.addEventListener("click", () => {
        movieTitleInput.value = movie.title;
        directorInput.value = movie.director;
        releaseYearInput.value = movie.year;

        createBtn.disabled = true;
        editBtn.disabled = false;

        movieToEdit = movie;

        movieDiv.remove();
    });


    deleteBtn.addEventListener("click", async () => {
        await fetch(`${API_URL}/${movie._id}`, {
            method: "DELETE"
        });

        loadMovies();
    });

    return movieDiv;
}


async function createMovie() {
    const movie = getInputData();

    if (!movie) {
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie)
    });

    clearInputs();
    loadMovies();
}


async function editMovie() {
    if (!movieToEdit) {
        return;
    } 

    const updatedMovie = getInputData();

    if (!updatedMovie) {
        return;
    }

    await fetch(`${API_URL}/${movieToEdit._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedMovie)
    });

    clearInputs();

    createBtn.disabled = false;
    editBtn.disabled = true;
    movieToEdit = null;

    loadMovies();
}


function getInputData() {
    const title = movieTitleInput.value.trim();
    const director = directorInput.value.trim();
    const year = releaseYearInput.value.trim();

    if (!title || !director || !year) {
        return null;
    } 

    return { title, director, year };
}

function clearInputs() {
    movieTitleInput.value = "";
    directorInput.value = "";
    releaseYearInput.value = "";
}