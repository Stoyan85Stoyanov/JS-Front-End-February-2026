function personInfo(firstName, lastName, age) {

    let persons = {
        // Когато съвпаднат и ключа  и стойността (firstName: firstName)
        // може да се изпише само така firstName
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return persons;
}

console.log(personInfo("Peter", "Pan","20"));
console.log(personInfo("George", "Smith","18"));