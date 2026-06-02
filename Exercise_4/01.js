function employees(arrayOfStrings) {

    let employees = [];

    for (const name of arrayOfStrings) {
        const object = {
            name: name,
            personalnumber: name.length
        };

        employees.push(object);
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalnumber}`);

    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);


employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);
