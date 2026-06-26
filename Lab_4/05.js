function phoneBook(arrayOfStrings) {

    let phoneNumberPerson = {};

    for (let contactPhoneNumber of arrayOfStrings) {

        let [name, phoneNumber] = contactPhoneNumber.split(' ');
        phoneNumberPerson[name] = phoneNumber;
    }

    let entries = Object.entries(phoneNumberPerson);

    for (let [name, phoneNumber] of entries) {
        console.log(`${name} -> ${phoneNumber}`);
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);