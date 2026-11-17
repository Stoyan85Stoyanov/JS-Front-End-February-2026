function phoneBook(arrayOfStrings) {

    let phoneNumberPerson = {};

    for (let contactPhoneNumber of arrayOfStrings) {

        let [name, phoneNumber] = contactPhoneNumber.split(' ');
        phoneNumberPerson[name] = phoneNumber;
    }

    const entries = Object.keys(phoneNumberPerson);

    for (const key of entries) {
        console.log(`${key} -> ${phoneNumberPerson[key]}`);
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