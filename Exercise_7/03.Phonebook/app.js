function attachEvents() {

    const phoneBookUrl = "http://localhost:3030/jsonstore/phonebook";
    const phoneBookEntriesList = document.getElementById("phonebook");
    const loadButton = document.getElementById("btnLoad");
    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    const createButton = document.getElementById("btnCreate");

    async function loadPhoneBook() {

        const getPhoneBookResponse = await fetch(phoneBookUrl);
        const phoneBook = await getPhoneBookResponse.json();

        phoneBookEntriesList.replaceChildren();

        for (const entry of Object.values(phoneBook)) {
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            const listItem = document.createElement("li");

            //    listItem.id = entry._id;
            listItem.textContent = `${entry.person}: ${entry.phone}`;
            listItem.appendChild(deleteButton);

            deleteButton.addEventListener("click", async () => {
                await fetch(`${phoneBookUrl}/${entry._id}`, { method: "DELETE" });
                listItem.remove();
            });


            phoneBookEntriesList.appendChild(listItem);
        }

    }

    loadButton.addEventListener("click", loadPhoneBook);

    createButton.addEventListener("click", async () => {
         const body = {person: personInput.value, phone: phoneInput.value};

         if (!body.person || !body.phone) {
               return;
         }

         await fetch(phoneBookUrl, {method: "POST", body: JSON.stringify(body)});

         personInput.value = "";
         phoneInput.value = "";

         await loadPhoneBook();
    });

}

attachEvents();