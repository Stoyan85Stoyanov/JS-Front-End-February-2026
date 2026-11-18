// function convertToJSON(firstName, lastName, hairColor) {

//     let persons = {
//         name: firstName,
//         lastName: lastName,
//         hairColor: hairColor
//     };

//     let personJson = JSON.stringify(persons);
//     console.log(personJson);
// }


function convertToJSON(firstName, lastName, hairColor) {

    let persons = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    console.log(JSON.stringify(persons));
}


convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');