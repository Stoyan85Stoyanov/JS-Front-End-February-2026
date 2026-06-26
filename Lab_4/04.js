function convertToJSON(firstName, lastName, hairColor) {

    let persons = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    let personJson = JSON.stringify(persons);
    console.log(personJson);
}


convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');