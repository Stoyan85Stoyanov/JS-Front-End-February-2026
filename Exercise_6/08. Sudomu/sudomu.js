document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const sizeSelect = document.querySelector("select#size");
    const solutionForm = document.querySelector("form#solutionCheck");
    const sudokuTable = solutionForm.querySelector("table");
    const sudokuContainer = sudokuTable.querySelector("tbody");
    const resultContainer = document.querySelector("p#check");


    sizeSelect.addEventListener("change", (event) => {

        event.preventDefault();
        event.stopPropagation();

        const size = Number(sizeSelect.value);
        sudokuContainer.replaceChildren();

        for (let i = 0; i < size; i++) {
            const row = document.createElement("tr");

            for (let j = 0; j < size; j++) {
                const input = document.createElement("input")
                input.step = 1;
                input.min = 1;
                input.max = size;
                input.type = "number";
                input.required = true;

                const cell = document.createElement("td");
                cell.appendChild(input);

                row.appendChild(cell);
            }

            sudokuContainer.appendChild(row);
        }
    });

    solutionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (checkTrueOrFalse()) {
            resultContainer.textContent = "Success!";
            sudokuTable.style.border = "2px solid green";

        } else {
            resultContainer.textContent = "Keep trying...";
            sudokuTable.style.border = "2px solid red";
        }
    });


    solutionForm.addEventListener("reset", () => {
        resultContainer.textContent = "";
        sudokuTable.style.border = "";
    });


    function checkTrueOrFalse() {
        // columnIndex: { [number]: true }
        const verticalChecker = {};

        const rows = Array.from(sudokuContainer.querySelectorAll("tr"));

        for (let i = 0; i < rows.length; i++) {
            const values = Array.from(rows[i].querySelectorAll("td > input"))
                .map(x => x.value);

            // { [number]: true }
            const horizontalChecker = {};

            for (let j = 0; j < values.length; j++) {

                if (horizontalChecker.hasOwnProperty(values[j])) {
                    return false;
                }

                if (!verticalChecker.hasOwnProperty(j)) {
                    verticalChecker[j] = {};
                }

                if (verticalChecker[j].hasOwnProperty(values[j])) {
                    return false;
                }

                horizontalChecker[values[j]] = true;
                verticalChecker[j][values[j]] = true;

            }
        }

        return true;
    }
}