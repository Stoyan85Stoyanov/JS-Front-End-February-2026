function solve() {

    
    const selectColumns = [];
    document.querySelector("table > thead > tr")
        .querySelectorAll("th > input")
        .forEach((checkBox, index) => {

            if (checkBox.checked) {
                selectColumns.push({ index, propertyName: checkBox.attributes["name"].value });
            }
        });

    const index = [];

    document.querySelectorAll("table > tbody > tr")
        .forEach((row) => {
            const cells = row.children;

            const object = {};

            for (const column of selectColumns) {
                object[column.propertyName] = cells[column.index].innerText;
            }

            index.push(object);
        });

    const outputElement = document.querySelector("textarea#output");
    outputElement.innerText = JSON.stringify(index);
}