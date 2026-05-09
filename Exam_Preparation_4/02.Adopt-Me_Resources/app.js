// window.addEventListener("load", solve);

// function solve() {

//   const typeInputElement = document.getElementById("type");
//   const ageInputElement = document.getElementById("age");
//   const genderSelectElement = document.getElementById("gender");

//   const adoptButtonElement = document.getElementById("adopt-btn");

//   const adoptionInfoUlElement = document.getElementById("adoption-info");
//   const adoptionListUlElement = document.getElementById("adopted-list");

//   adoptButtonElement.addEventListener("click", handleAdoptPet);

  
//   function handleAdoptPet(event) {
//     event.preventDefault();

//     const type = typeInputElement.value.trim();
//     const age = ageInputElement.value.trim();
//     const gender = genderSelectElement.value.trim();

//     if (!type || !age || !gender) {
//       return;
//     }

//     const liElement = document.createElement("li");
//     const articleElement = document.createElement("article");

//     const typePElement = document.createElement("p");
//     typePElement.textContent = `Pet:${type}`;

//     const genderPElement = document.createElement("p");
//     genderPElement.textContent = `Gender:${gender}`;

//     const agePElement = document.createElement("p");
//     agePElement.textContent = `Age:${age}`;

//     const buttonDivElement = document.createElement("div");
//     buttonDivElement.classList.add("buttons");

//     const editButtonElement = document.createElement("button");
//     editButtonElement.classList.add("edit-btn");
//     editButtonElement.textContent = "Edit";

//     const doneButtonElement = document.createElement("button");
//     doneButtonElement.classList.add("done-btn");
//     doneButtonElement.textContent = "Done";

//     articleElement.appendChild(typePElement);
//     articleElement.appendChild(genderPElement);
//     articleElement.appendChild(agePElement);

//     buttonDivElement.appendChild(editButtonElement);
//     buttonDivElement.appendChild(doneButtonElement);

//     liElement.appendChild(articleElement);
//     liElement.appendChild(buttonDivElement);

//     adoptionInfoUlElement.appendChild(liElement);

//     typeInputElement.value = "";
//     ageInputElement.value = "";
//     genderSelectElement.value = "";


//     editButtonElement.addEventListener("click", handleEditPet);
//     doneButtonElement.addEventListener("click", handleDonePet)


//     function handleEditPet() {
//       typeInputElement.value = type;
//       genderSelectElement.value = gender;
//       ageInputElement.value = age;

//       liElement.remove();
//     }


//     function handleDonePet() {
//       adoptionListUlElement.appendChild(liElement);

//       editButtonElement.remove();
//       doneButtonElement.remove();

//       const clearButtonElement = document.createElement("button");
//       clearButtonElement.classList.add("clear-btn");
//       clearButtonElement.textContent = "Clear";

//       liElement.appendChild(clearButtonElement);

//       clearButtonElement.addEventListener("click", handleClearPet);

//       function handleClearPet() {
//           liElement.remove();
//       }
//     }
//   }
// }




window.addEventListener("load", solve);

function solve() {

  const typeInputElement = document.getElementById("type");
  const ageInputElement = document.getElementById("age");
  const genderSelectElement = document.getElementById("gender");

  const adoptButtonElement = document.getElementById("adopt-btn");

  const adoptionInfoUlElement = document.getElementById("adoption-info");
  const adoptionListUlElement = document.getElementById("adopted-list");

  adoptButtonElement.addEventListener("click", handleAdoptPet);

  function handleAdoptPet(event) {
    event.preventDefault();

    const type = typeInputElement.value.trim();
    const age = ageInputElement.value.trim();
    const gender = genderSelectElement.value.trim();

    if (!type || !age || !gender) {
      return;
    }

    const liElement = document.createElement("li");
    const articleElement = document.createElement("article");

    const typePElement = document.createElement("p");
    typePElement.textContent = `Pet:${type}`;

    const genderPElement = document.createElement("p");
    genderPElement.textContent = `Gender:${gender}`;

    const agePElement = document.createElement("p");
    agePElement.textContent = `Age:${age}`;

    const buttonDivElement = document.createElement("div");
    buttonDivElement.classList.add("buttons");

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("edit-btn");
    editButtonElement.textContent = "Edit";

    const doneButtonElement = document.createElement("button");
    doneButtonElement.classList.add("done-btn");
    doneButtonElement.textContent = "Done";

    articleElement.appendChild(typePElement);
    articleElement.appendChild(genderPElement);
    articleElement.appendChild(agePElement);

    buttonDivElement.appendChild(editButtonElement);
    buttonDivElement.appendChild(doneButtonElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(buttonDivElement);

    adoptionInfoUlElement.appendChild(liElement);

    typeInputElement.value = "";
    ageInputElement.value = "";
    genderSelectElement.value = "";

    editButtonElement.addEventListener("click", () =>
      handleEditPet(type, gender, age, liElement)
    );

    doneButtonElement.addEventListener("click", () =>
      handleDonePet(liElement, editButtonElement, doneButtonElement)
    );
  }

  function handleEditPet(type, gender, age, liElement) {
    typeInputElement.value = type;
    genderSelectElement.value = gender;
    ageInputElement.value = age;

    liElement.remove();
  }

  function handleDonePet(liElement, editButtonElement, doneButtonElement) {
    adoptionListUlElement.appendChild(liElement);

    editButtonElement.remove();
    doneButtonElement.remove();

    const clearButtonElement = document.createElement("button");
    clearButtonElement.classList.add("clear-btn");
    clearButtonElement.textContent = "Clear";

    liElement.appendChild(clearButtonElement);

    clearButtonElement.addEventListener("click", () =>
      handleClearPet(liElement)
    );
  }

  function handleClearPet(liElement) {
    liElement.remove();
  }

}
