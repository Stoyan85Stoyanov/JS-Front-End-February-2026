window.addEventListener("load", solve);

function solve() {

    const addButtonElement = document.getElementById("add-btn");
    const expenseTypeInputElement = document.getElementById("expense");
    const amountInputElement = document.getElementById("amount");
    const dateInputElement = document.getElementById("date");

    const previewListUlElement = document.getElementById("preview-list");
    const expensesListUlElement = document.getElementById("expenses-list");

    const deleteButtonElement = document.querySelector(".btn.delete");


    addButtonElement.addEventListener("click", () => {
        const expense = expenseTypeInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        if (!expense || !amount || !date) {
            return;
        }

        const expenseLiElement = createArticleElement(expense, amount, date);
        previewListUlElement.appendChild(expenseLiElement);

        addButtonElement.disabled = true;

        expenseTypeInputElement.value = "";
        amountInputElement.value = "";
        dateInputElement.value = "";

        const editButtonElement = expenseLiElement.querySelector(".btn.edit");
        const okButtonElement = expenseLiElement.querySelector(".btn.ok");


        editButtonElement.addEventListener("click", () => {

            const pPreviewElements = expenseLiElement.querySelectorAll("article p");
            const pElements = Array.from(pPreviewElements);

            const expenseType = pElements[0].textContent.substring(6);
            const expenseAmount = pElements[1].textContent.substring(8, pElements[1].textContent.length - 1);
            const expenseDate = pElements[2].textContent.substring(6);


            expenseTypeInputElement.value = expenseType;
            amountInputElement.value = expenseAmount;
            dateInputElement.value = expenseDate;

            expenseLiElement.remove();
            addButtonElement.disabled = false;

        });


        okButtonElement.addEventListener("click", () => {

            const expenseButtonsElement = expenseLiElement.querySelector(".buttons");
            expenseButtonsElement.remove();

            expensesListUlElement.appendChild(expenseLiElement);

            addButtonElement.disabled = false;
        });

    });

    function createArticleElement(expense, amount, date) {
        const pTypeElement = document.createElement("p");
        pTypeElement.textContent = `Type: ${expense}`;

        const pAmountElement = document.createElement("p");
        pAmountElement.textContent = `Amount: ${amount}$`;

        const pDateElement = document.createElement("p");
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement("article");
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        const editButton = document.createElement("button");
        editButton.classList.add("btn", "edit");
        editButton.textContent = "edit";

        const okButton = document.createElement("button");
        okButton.classList.add("btn", "ok");
        okButton.textContent = "ok";

        const buttonsDivElement = document.createElement("div");
        buttonsDivElement.classList.add("buttons");
        buttonsDivElement.appendChild(editButton);
        buttonsDivElement.appendChild(okButton);

        const liElement = document.createElement("li");
        liElement.classList.add("expense-item");
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsDivElement);

        return liElement;
    }

    deleteButtonElement.addEventListener("click", handleDelete);

    function handleDelete() {
        location.reload();
    }
}