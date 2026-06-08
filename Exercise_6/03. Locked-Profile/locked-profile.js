document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const profiles = Array.from(document.querySelectorAll("main > div.profile"));

    for (let i = 0; i < profiles.length; i++) {

        const unlockInput = profiles[i].querySelector(`div.radio-group > input#user${i + 1}Unlock`);
        const hiddenFieldsContainer = profiles[i].querySelector(`div#user${i + 1}HiddenFields`);
        const button = profiles[i].querySelector("button");

        let isExpanded = false;

        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (unlockInput.checked) {
                if (isExpanded) {
                    hiddenFieldsContainer.style.display = "";
                    button.textContent = "Show more";

                } else {
                    hiddenFieldsContainer.style.display = "block";
                    button.textContent = "Show less";
                }

                isExpanded = !isExpanded;
            }
        });
    }
}
