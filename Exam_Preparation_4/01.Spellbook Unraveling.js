// function solve(array) {

//     let spell = array.shift();
//     let command = array.shift();

//     while (command != "End") {

//         const tokens = command.split("!");
//         const action = tokens.shift();

//         if (action === "RemoveEven") {
//             let newSpell = "";

//             // за четни индекси
//             for (let i = 0; i < spell.length; i += 2) {

//                 let char = spell[i];
//                 newSpell += char;
//             }

//             spell = newSpell;
//             console.log(spell);



//         } else if (action === "TakePart") {
//             const fromIndex = Number(tokens.shift());
//             const toIndex = Number(tokens.shift());

//             const newSpell = spell.substring(fromIndex, toIndex);
//             spell = newSpell;
//             console.log(spell);

//         } else if (action === "Reverse") {
//             const substring = tokens.shift();

//             if (spell.includes(substring)) {
//                 spell = spell.replace(substring, "");

//                 const reverseSubstring = substring.split("").reverse().join("");
//                 spell += reverseSubstring;
//                 console.log(spell);

//             } else {
//                 console.log("Error");
//             }
//         }

//         command = array.shift();
//     }

//     console.log(`The concealed spell is: ${spell}`);
// }


function solve(input) {

    let spell = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== "End") {
        let [command, ...params] = currentCommand.split("!");

        switch (command) {
            case "RemoveEven":
                spell = removeEvenIndices(spell);
                console.log(spell);
                break;

            case "TakePart":
                let startIndex = Number(params[0]);
                let endIndex = Number(params[1]);
                spell = spell.substring(startIndex, endIndex);
                console.log(spell);
                break;

            case "Reverse":
                let part = params[0];

                if (spell.includes(part)) {
                    spell = spell.replace(part, "");
                    let reversed = reverseString(part);
                    spell += reversed;
                    console.log(spell);
                } else {
                    console.log("Error");
                }
                break;
        }

        currentCommand = input.shift();
    }

    console.log(`The concealed spell is: ${spell}`);

   
    function removeEvenIndices(text) {
        let result = "";

        for (let i = 0; i < text.length; i += 2) {
            result += text[i];
        }

        return result;
    }

    function reverseString(text) {
        return text.split("").reverse().join("");
    }
}


solve((["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])
);

// solve((["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
//     "TakePart!31!42",
//     "RemoveEven",
//     "Reverse!anim",
//     "Reverse!sad",
//     "End"])
// );