function addressBook(arrayOfStrings) {

    let addressPeople = {};

    for (let address_ of arrayOfStrings) {

        let [name, address] = address_.split(':');
        addressPeople[name] = address;
    }

    let entries = Object.entries(addressPeople)
        .sort((x, y) => x[0].localeCompare(y[0]));


    for (let [name, address] of entries) {
        console.log(`${name} -> ${address}`);
    }

}


addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);


addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);