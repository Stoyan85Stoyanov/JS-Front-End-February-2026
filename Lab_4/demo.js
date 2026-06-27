// let cities = ['Blagoevgrad', 'Sofia', 'Varna'];

// Проблем при използване на масив
// Това е пример при който имаме множество променливи, които не се знае кой за какво се отнася
// Този пример ясно показва нуждата от използване на обекти 
// let person = ['Pencho', 'Minkov', 25, 56, true];

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

//                      Objects

// 1. -> Objects -> Възможност да имаме множество стойности в една структура, 
// но да ги свързваме с някаква характеристика,
//  за да става ясно какво преставляват тези стойности
// Тези стойности се достъпват чрез ключове


// String, числа и т.н -> properties 
// Цели функции които се вкарват в обекта се наричат МЕТОДИ (Methods)
// Ключ - name:  и стойност - 'Peter'

// let person = { name: 'Peter', age: 20, height: 183 };

// let person = {
//     firstName: 'Pencho',
//     lastName: 'Minkov',
//     age: 25,
//     // hasGraduated: true 
// };

// console.log(person.lastName);

// person.age = 30;
// person.hasGraduated = true;
// console.log(person);

//----------------------------------------------------------------------------

// 2. -> Methods

// let person = {
//     firstName: 'Pencho',
//     lastName: 'Minkov',
//     age: 25,
//     // hasGraduated: true 
//    sayHello: function (name) {
//       console.log(`Hi, ${name}`);  
//    }
// };    

// (person.sayHello('Stoyan'));


// Преобразуване на обекта в масив (има няколко варианта в зависимост от това какво ни е необходимо)

// Връща keys
// let keys = Object.keys(person);
// console.log(keys);

// Връща values
// let values = Object.values(person);
// console.log(values);

// Връща keys and values
// let entries = Object.entries(person);
// console.log(entries);

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

//                      JSON

// JSON stands for JavaScript Object Notation
// Това е конкретен формат който може да се използва за изпращане на данни от клиент към сървър


// Ако имаме обект и трябва да се преобразува в JSON
// let personJson = JSON.stringify(person);
// console.log(personJson);


// Ако имаме JSON и трябва да се преобразува в обект
// let finalPerson = JSON.parse(personJson);
// console.log(finalPerson);

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------


//                      Associative Arrays

// Наподобяват обикновенните масиви но вместо числови индекси имаме String индекси

// Пример за Associative Arrays
// let contactNumbers = {
//     Pencho: '0878787878',
//     Mincho: '0734282343',
//     Ginka: '2342342423'
// }

// Закачане на ключове динамично !!!
// function printPhoneNumber(name) {
//     console.log(contactNumbers[name]);
// }

// printPhoneNumber('Mincho');

//----------------------------------------------------------------------------

// Итериране (for-in) през Associative Arrays
// for-in -> преминава през ключовете на Associative Arrays

// for (let name in contactNumbers) {
//     console.log(name); // -> Key
//     console.log(contactNumbers[name]); //-> Values
//     console.log('--------------------------------');
// }


// let entries = Object.entries(contactNumbers);
// for (let entry of entries) {
//     console.log(entry);
// }


// let entries_ = Object.entries(contactNumbers);
// for (let [name, phoneNumber] of entries_) {
//     console.log(name);
//     console.log(phoneNumber);
// }

//----------------------------------------------------------------------------

// Sorting Associative Arrays

// Associative Arrays не могат директно да бъдат сортирани, НО масивите МОГАТ !!!! 

// let entries = Object.entries(contactNumbers).sort((a, b) => a[0].localeCompare(b[0]));
// console.log(entries_);

// for (let [name, phoneNumber] of entries) {
//     console.log(name);
//     console.log(phoneNumber);
//     console.log('--------------------------------');
// }

//----------------------------------------------------------------------------

// Array and Object Destructuring

// -> при масивите е с []
// -> при Associative Arrays (Object) е с {}

// let person = {
//     firstName: 'Pencho',
//     lastName: 'Minkov',
//     age: 25
// }; 

// let { firstName, lastName, age } = person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------


//                      Classes

// Templates for creating objects като се убеждаваме че имат правилна структура

// class Student {
//     constructor(name, grade) {
//         this.name = name;
//         this.grade = grade;
//     }
// }

//----------------------------------------------------------------------------

// Creating an instance of the class:

// let student = new Student('Peter', 5.50);

//----------------------------------------------------------------------------

// Functions in a Class

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${ this.name } says Woof!`);
//     }
// }

// let dog = new Dog('Sparky');
// dog.speak(); // Sparky says Woof!

//----------------------------------------------------------------------------

//                   Exercise Demo 


class Student {

    constructor(firstName, lastName, gpa) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gpa = gpa;
    }

    printInfo() {
        console.log(`${this.firstName} ${this.lastName} has a ${this.gpa.toFixed(2)} GPA`);

    }
}

// instance of the class
let studentFirst = new Student('Stoyan', 'Nikolov', 5.70);
let studentSecond = new Student('Nikola', 'Ivanov', 5.20);

// отпечатване на информацията за въпросният студент
studentFirst.printInfo();
studentSecond.printInfo();




