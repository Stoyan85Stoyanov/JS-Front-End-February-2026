window.addEventListener("load", solve);

function solve() {

  const laptopModelInputElement = document.getElementById("laptop-model");
  const storageInputElement = document.getElementById("storage");
  const priceInputElement = document.getElementById("price");

  const addButtonElement = document.getElementById("add-btn");

  const checkListUlElement = document.getElementById("check-list");
  const laptopsListUlElement = document.getElementById("laptops-list");

  const clearButtonElement = document.querySelector(".btn.clear");

  addButtonElement.addEventListener("click", handleNewLaptop);
  

  function handleNewLaptop(event) {
    event.preventDefault();

    const laptop = laptopModelInputElement.value.trim();
    const storage = storageInputElement.value.trim();
    const price = priceInputElement.value.trim();

    if (!laptop || !storage || !price) {
      return;
    }

    const liElement = document.createElement("li");
    liElement.classList.add("laptop-item");

    const articleElement = document.createElement("article");

    const laptopPElement = document.createElement("p");
    laptopPElement.textContent = `${laptop}`;

    const storagePElement = document.createElement("p");
    storagePElement.textContent = `Memory: ${storage} TB`;

    const pricePElement = document.createElement("p");
    pricePElement.textContent = `Price: ${price}$`;

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("btn", "edit");
    editButtonElement.textContent = "edit";

    const okButtonElement = document.createElement("button");
    okButtonElement.classList.add("btn", "ok");
    okButtonElement.textContent = "ok";

    articleElement.appendChild(laptopPElement);
    articleElement.appendChild(storagePElement);
    articleElement.appendChild(pricePElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(okButtonElement);

    checkListUlElement.appendChild(liElement);

    addButtonElement.disabled = true;

    laptopModelInputElement.value = "";
    storageInputElement.value = "";
    priceInputElement.value = "";

    editButtonElement.addEventListener("click", handleEdit);
    okButtonElement.addEventListener("click", handleOk)

    function handleEdit() {
      laptopModelInputElement.value = laptopPElement.textContent;
      storageInputElement.value = storagePElement.textContent
        .replace("Memory: ", "")
        .replace(" TB", "");
      priceInputElement.value = pricePElement.textContent
        .replace("Price: ", "")
        .replace("$", "");


      liElement.remove();
      addButtonElement.disabled = false;
    }

    function handleOk() {
      laptopsListUlElement.appendChild(liElement);

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
