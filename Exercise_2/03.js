// function listOfNames(array) {

//     array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
//     .forEach((element, i) => console.log(`${i + 1}.${element}`));

// }


// function listOfNames(names) {
//     names
//         .sort((a, b) => a.localeCompare(b))
//         .forEach((name, index) => console.log(`${index + 1}.${name}`));
// }

function listOfNames(arrayOfNames) {

    arrayOfNames.sort();

    for (let i = 0; i < arrayOfNames.length; i++) {
        console.log((i + 1) + "." + arrayOfNames[i]);
    }
}


listOfNames(["John", "Bob", "Christina", "Ema"]);






