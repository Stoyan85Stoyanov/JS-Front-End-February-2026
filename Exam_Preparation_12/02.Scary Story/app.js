window.addEventListener("load", solve);

function solve() {

  const firstNameInputElement = document.getElementById("first-name");
  const lastNameInputElement = document.getElementById("last-name");
  const ageInputElement = document.getElementById("age");
  const storyTitleInputElement = document.getElementById("story-title");
  const genreInputElement = document.getElementById("genre");
  const storyTextareaElement = document.getElementById("story");

  const previewListUlElement = document.getElementById("preview-list");
  const mainDivElement = document.getElementById("main");

  const publishButtonElement = document.getElementById("form-btn");

  publishButtonElement.addEventListener("click", handlePublish);

  function handlePublish(event) {
    event.preventDefault();

    const firstName = firstNameInputElement.value.trim();
    const lastName = lastNameInputElement.value.trim();
    const age = ageInputElement.value.trim();
    const storyTitle = storyTitleInputElement.value.trim();
    const genre = genreInputElement.value;
    const story = storyTextareaElement.value.trim();

    if (!firstName || !lastName || !age || !storyTitle || !genre || !story) {
      return;
    }


    const storyInfoLiElement = document.createElement("li");
    storyInfoLiElement.classList.add("story-info");

    const articleElement = document.createElement("article");

    const nameH4Element = document.createElement("h4");
    nameH4Element.textContent = `Name: ${firstName} ${lastName}`;

    const ageP_Element = document.createElement("p");
    ageP_Element.textContent = `Age: ${age}`;

    const titleP_Element = document.createElement("p");
    titleP_Element.textContent = `Title: ${storyTitle}`;

    const genreP_Element = document.createElement("p");
    genreP_Element.textContent = `Genre: ${genre}`;

    const storyP_Element = document.createElement("p");
    storyP_Element.textContent = `${story}`;

    const saveButtonElement = document.createElement("button");
    saveButtonElement.classList.add("save-btn");
    saveButtonElement.textContent = "Save Story";

    saveButtonElement.addEventListener("click", handleSave);

    function handleSave() {
       mainDivElement.innerHTML = "";

       const h1Element = document.createElement("h1");
       h1Element.textContent = "Your scary story is saved!";

       mainDivElement.appendChild(h1Element);

    }

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("edit-btn");
    editButtonElement.textContent = "Edit Story";

    editButtonElement.addEventListener("click", handleEdit);

    function handleEdit() {
      firstNameInputElement.value = firstName;
      lastNameInputElement.value = lastName;
      ageInputElement.value = age;
      storyTitleInputElement.value = storyTitle;
      genreInputElement.value = genre;
      storyTextareaElement.value = story;

      storyInfoLiElement.remove();
      publishButtonElement.disabled = false;
    }

    
    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.classList.add("delete-btn");
    deleteButtonElement.textContent = "Delete Story";

    deleteButtonElement.addEventListener("click", handleDelete);

    function handleDelete() {
       storyInfoLiElement.remove();
       publishButtonElement.disabled = false;
    }

    articleElement.appendChild(nameH4Element);
    articleElement.appendChild(ageP_Element);
    articleElement.appendChild(titleP_Element);
    articleElement.appendChild(genreP_Element);
    articleElement.appendChild(storyP_Element);

    storyInfoLiElement.appendChild(articleElement);
    storyInfoLiElement.appendChild(saveButtonElement);
    storyInfoLiElement.appendChild(editButtonElement);
    storyInfoLiElement.appendChild(deleteButtonElement);

    previewListUlElement.appendChild(storyInfoLiElement);

    publishButtonElement.disabled = true;

    firstNameInputElement.value = "";
    lastNameInputElement.value = "";
    ageInputElement.value = "";
    storyTitleInputElement.value = "";
    genreInputElement.value = "";
    storyTextareaElement.value = "";
  }

}


