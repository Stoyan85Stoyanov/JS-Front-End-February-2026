// window.addEventListener("load", solve);

// function solve() {

//   const nameInput = document.getElementById("name");
//   const phoneInput = document.getElementById("phone");
//   const categoryInput = document.getElementById("category");
//   const addButton = document.getElementById("add-btn");

//   const checkListElement = document.getElementById("check-list");
//   const contactListElement = document.getElementById("contact-list");

//   addButton.addEventListener("click", addButtonClickHandler);

//   function addButtonClickHandler() {
//     const name = nameInput.value.trim();
//     const phone = phoneInput.value.trim();
//     const category = categoryInput.value;

  
//     if (!name || !phone || !category) {
//       return;
//     }

//     const liElement = document.createElement("li");

//     const articleElement = document.createElement("article");

//     const nameP = document.createElement("p");
//     nameP.textContent = `name:${name}`;

//     const phoneP = document.createElement("p");
//     phoneP.textContent = `phone:${phone}`;

//     const categoryP = document.createElement("p");
//     categoryP.textContent = `category:${category}`;

//     articleElement.appendChild(nameP);
//     articleElement.appendChild(phoneP);
//     articleElement.appendChild(categoryP);

//     const buttonsDiv = document.createElement("div");
//     buttonsDiv.classList.add("buttons");

//     const editButton = document.createElement("button");
//     editButton.classList.add("edit-btn");

//     const saveButton = document.createElement("button");
//     saveButton.classList.add("save-btn");

 
//     editButton.addEventListener("click", () => {
//       nameInput.value = name;
//       phoneInput.value = phone;
//       categoryInput.value = category;

//       liElement.remove();
//     });

   
//     saveButton.addEventListener("click", () => {

//       contactListElement.appendChild(liElement);
//       buttonsDiv.remove();

//       const deleteButton = document.createElement("button");
//       deleteButton.classList.add("del-btn");

//       deleteButton.addEventListener("click", () => {
//         liElement.remove();
//       });

//       liElement.appendChild(deleteButton);
//     });


//     buttonsDiv.appendChild(editButton);
//     buttonsDiv.appendChild(saveButton);

//     liElement.appendChild(articleElement);
//     liElement.appendChild(buttonsDiv);

//     checkListElement.appendChild(liElement);

  
//     nameInput.value = "";
//     phoneInput.value = "";
//     categoryInput.value = "";
//   }
// }

window.addEventListener("load", solve);

function solve() {

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const categoryInput = document.getElementById("category");
  const addButton = document.getElementById("add-btn");

  const checkList = document.getElementById("check-list");
  const contactList = document.getElementById("contact-list");

  addButton.addEventListener("click", onAdd);

  function onAdd() {
    const name = nameInput.value;
    const phone = phoneInput.value;
    const category = categoryInput.value;

    
    if (!name || !phone || !category) {
      return;
    } 


    const li = createListItem(name, phone, category);
    checkList.appendChild(li);

    clearInputs();
  }

  function createListItem(name, phone, category) {
    const li = document.createElement("li");

    const article = createArticle(name, phone, category);
    const buttons = createButtons(name, phone, category, li);

    li.appendChild(article);
    li.appendChild(buttons);

    return li;
  }

  function createArticle(name, phone, category) {
    const article = document.createElement("article");

    article.appendChild(createParagraph(`name:${name}`));
    article.appendChild(createParagraph(`phone:${phone}`));
    article.appendChild(createParagraph(`category:${category}`));

    return article;
  }

  function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
  }

  function createButtons(name, phone, category, li) {
    const div = document.createElement("div");
    div.classList.add("buttons");

    const editBtn = createButton("edit-btn", () =>
      onEdit(name, phone, category, li)
    );

    const saveBtn = createButton("save-btn", () =>
      onSave(li, div)
    );

    div.appendChild(editBtn);
    div.appendChild(saveBtn);

    return div;
  }

  function createButton(className, handler) {
    const btn = document.createElement("button");
    btn.classList.add(className);
    btn.addEventListener("click", handler);
    return btn;
  }

  function onEdit(name, phone, category, li) {
    nameInput.value = name;
    phoneInput.value = phone;
    categoryInput.value = category;
    li.remove();
  }

  function onSave(li, buttonsDiv) {
    contactList.appendChild(li);
    buttonsDiv.remove();

    const deleteBtn = createButton("del-btn", () => li.remove());
    li.appendChild(deleteBtn);
  }

  function clearInputs() {
    nameInput.value = "";
    phoneInput.value = "";
    categoryInput.value = "";
  }
}