function groceryList(commands) {

    const items = commands.shift().split("!");
    let index = 0;

    while (commands[index] !== "Go Shopping!") {

        const line = commands[index];
        const parts = line.split(" ");

        const action = parts[0];
        const item = parts[1];

        switch (action) {

            case "Urgent":
                
                if (!items.includes(item)) {
                    items.unshift(item);
                }
                break;

            case "Unnecessary":
                const removeIndex = items.indexOf(item);

                if (removeIndex !== -1) {
                    items.splice(removeIndex, 1);
                }
                break;

            case "Correct":
                const newItem = parts[2];
                const correctIndex = items.indexOf(item);

                if (correctIndex !== -1) {
                    items[correctIndex] = newItem;
                }
                break;

            case "Rearrange":
                const moveIndex = items.indexOf(item);

                if (moveIndex !== -1) {
                    items.splice(moveIndex, 1);
                    items.push(item);
                }
                break;
        }

        index++;
    }

    console.log(items.join(", "));
}

// groceryList(
//     (["Tomatoes!Potatoes!Bread",
//         "Unnecessary Milk",
//         "Urgent Tomatoes",
//         "Go Shopping!"])
// );

groceryList(
    (["Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"])
);