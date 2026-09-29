// function employees(arrayOfStrings) {

//     let employees = [];

//     for (const name of arrayOfStrings) {
//         const object = {
//             name: name,
//             personalNumber: name.length
//         };

//         employees.push(object);
//     }

//     for (const employee of employees) {
//         console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);

//     }

// }


function employees(arrayOfStrings) {

    arrayOfStrings.map(infoEmployee).forEach(printListEmployees);


    function infoEmployee(name) {
        const information = {
            name: name,
            personalNumber: name.length
        }

        return information;
    }

    function printListEmployees(infoEmployee) {
        console.log(`Name: ${infoEmployee.name} -- Personal Number: ${infoEmployee.personalNumber}`);
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
