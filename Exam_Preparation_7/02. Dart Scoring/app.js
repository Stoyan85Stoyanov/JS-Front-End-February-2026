window.addEventListener("load", solve);

function solve() {

  const playerInputElement = document.getElementById("player");
  const scoreInputElement = document.getElementById("score");
  const roundInputElement = document.getElementById("round");

  const addButtonElement = document.getElementById("add-btn");

  const sureListUlElement = document.getElementById("sure-list");
  const scoreboardListUlElement = document.getElementById("scoreboard-list");

  const clearButtonElement = document.querySelector(".btn.clear");


  addButtonElement.addEventListener("click", handleAdd);

  function handleAdd(event) {
    event.preventDefault();

    const player = playerInputElement.value.trim();
    const score = scoreInputElement.value.trim();
    const round = roundInputElement.value.trim();

    if (!player || !score || !round) {
      return;
    }

    const liElement = document.createElement("li");
    liElement.classList.add("dart-item");

    const articleElement = document.createElement("article");

    const playerPElement = document.createElement("p");
    playerPElement.textContent = `${player}`;

    const scorePElement = document.createElement("p");
    scorePElement.textContent = `Score: ${score}`;

    const roundPElement = document.createElement("p");
    roundPElement.textContent = `Round: ${round}`;

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("btn", "edit");
    editButtonElement.textContent = "edit";

    const okButtonElement = document.createElement("button");
    okButtonElement.classList.add("btn", "ok");
    okButtonElement.textContent = "ok";

    articleElement.appendChild(playerPElement);
    articleElement.appendChild(scorePElement);
    articleElement.appendChild(roundPElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(okButtonElement);

    sureListUlElement.appendChild(liElement);

    addButtonElement.disabled = true;

    playerInputElement.value = "";
    scoreInputElement.value = "";
    roundInputElement.value = "";

    editButtonElement.addEventListener("click", handleEdit);
    okButtonElement.addEventListener("click", handleOk)

        function handleEdit() {
      playerInputElement.value = playerPElement.textContent;
      scoreInputElement.value = scorePElement.textContent
        .replace("Score: ", "");
      roundInputElement.value = roundPElement.textContent
        .replace("Round: ", "");


      liElement.remove();
      addButtonElement.disabled = false;
    }

    function handleOk() {
      scoreboardListUlElement.appendChild(liElement);

      editButtonElement.remove();
      okButtonElement.remove();

      addButtonElement.disabled = false;
    }

    clearButtonElement.addEventListener("click", handleClear);

    function handleClear() {
      location.reload();
    }
  }
}
