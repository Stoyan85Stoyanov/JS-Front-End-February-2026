function convertToObject(input) {

    let personJson = JSON.parse(input);

    let entries = Object.entries(personJson);

    for (let [key, values] of entries) {
        console.log(`${key}: ${values}`);
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');