// function convertToObject(input) {

//     let personJson = JSON.parse(input);

//     let entries = Object.entries(personJson);

//     for (let [key, values] of entries) {
//         console.log(`${key}: ${values}`);
//     }

// }



function convertToObject(input) {

    const personJson = JSON.parse(input);

    const entrie = Object.keys(personJson);

    for (const key of entrie) {
        console.log(`${key}: ${personJson[key]}`);
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');