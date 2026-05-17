window.addEventListener("load", solve);

function solve() {

  const studentNameInputElement = document.getElementById("student");
  const universityInputElement = document.getElementById("university");
  const scoreInputElement = document.getElementById("score");
  const buttonNextInputElement = document.getElementById("next-btn");
  const candidatesListULElement = document.getElementById("candidates-list");
  const previewListUlElement = document.getElementById("preview-list");


  buttonNextInputElement.addEventListener("click", (event) => {
    event.preventDefault();

    const student = studentNameInputElement.value;
    const university = universityInputElement.value;
    const score = scoreInputElement.value;

    if (!student || !university || !score) {
      return;
    }

    const previewLiElement = createApplyForScholarship(
      studentNameInputElement.value,
      universityInputElement.value,
      scoreInputElement.value
    );

    previewListUlElement.appendChild(previewLiElement);

    clearInputFields();

    buttonNextInputElement.disabled = true;

  });


  function createApplyForScholarship(student, university, score) {

    const liElement = document.createElement("li");
    liElement.classList.add("application");

    const articleElement = document.createElement("article");

    const studentElement = document.createElement("h4");
    studentElement.textContent = `${student}`;

    const universityElement = document.createElement("p");
    universityElement.textContent = `University: ${university}`;

    const scoreElement = document.createElement("p");
    scoreElement.textContent = `Score: ${score}`;

    const editButton = document.createElement("button");
    editButton.classList.add("action-btn", "edit");
    editButton.textContent = "edit";

    editButton.addEventListener("click", () => {
      const studentName = previewListUlElement.querySelector("h4").textContent;
      const pElements = previewListUlElement.querySelectorAll("article p");
      const [universityPElement, scorePElement] = Array.from(pElements);

      studentNameInputElement.value = studentName;
      universityInputElement.value = universityPElement.textContent.split(": ")[1];
      scoreInputElement.value = scorePElement.textContent.split(": ")[1];

      liElement.remove();

      buttonNextInputElement.disabled = false;
    });

    const applyButton = document.createElement("button");
    applyButton.classList.add("action-btn", "apply");
    applyButton.textContent = "apply";


    applyButton.addEventListener("click", () => {
      editButton.remove();
      applyButton.remove();

      candidatesListULElement.appendChild(liElement)
      buttonNextInputElement.disabled = false;
    });

    articleElement.appendChild(studentElement);
    articleElement.appendChild(universityElement);
    articleElement.appendChild(scoreElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editButton);
    liElement.appendChild(applyButton);

    return liElement;
  }

  function clearInputFields() {
    studentNameInputElement.value = "";
    universityInputElement.value = "";
    scoreInputElement.value = "";
  }
}
