// Data Type

// -> primitive -> Boolean, null, undefined, Number, String, Symbol, BigInt
// -> Objects (including Functions and Array)

// -> let -> Can be reassigned after initial assignment
// -> const -> Cannot be reassigned after initial assignment, remains constant

//--------------------------------------------------------

// Conditional Statements - Условни конструкции

// Arithmetic operators 
// -> % (модулно делене) Пример: 5 % 2 = 1;
// -> / Пример: 5 / 2 = 2,5;
// -> ** (повдигане на степен)

//--------------------------------------------------------

// Comparison Operators

// Equal value              == 
// Equal value and type     ===
// Not equal value          !=
// Not equal value/type     !==
// Останалите:   >, >=, <, <=

//--------------------------------------------------------

// Truthy and Falsy Values
// Truthy -> са тези които съдържат нещо 
// Falsy -> са тези които не съдържат нищо ( false, null, undefined, NaN, 0, 0n and "")

//--------------------------------------------------------

// Null and Undefined

// Undefined -> не е дефинирано (на някоя променлива не и е зададено стойност)
// typeof - типа на undefined също е undefined !!!!

// Null -> е нищо (когато търсим обект, който не съществува)
// typeof - типа на null също е object !!!!

//--------------------------------------------------------

// Debugging Techniques

// 1. Strict Mode

// 'use strict'; // File-level
// mistypeVariable = 17; // ReferenceError

// function strict() {
// 'use strict';   // Function-Level
// mistypeVariable = 17;
// }

// 2. Debugger in Visual Studio Code

// ▪ Start without Debugger: [Ctrl+F5]
// ▪ Start with Debugger: [F5]
// ▪ Toggle a breakpoint: [F9]
// ▪ Trace step by step: [F10]
// ▪ Force step into: [F11]


//--------------------------------------------------------

// {
//     let city = 'Sofia';
//     let name = 'Stoyan';
//     let age = '40';
//     let money = '3000';
//     let currency = 'euro';
//     console.log(city, name, age, money, currency);
// }

// 1.Initialization
// 2.Condition/check
// 3.Step//Update

// for (let number = 1; number <= 12; number++) {
//     console.log(number);
// }



// let number = 1;

// while (number <= 12) {
//     console.log(number);
//     number++;
// }


// let car = 'Mazda';

// switch (car) {
//     case 'VW Golf':
//         console.log(car);
//         break;

//     case 'BMW':
//         console.log(car);
//         break;

//     default:
//         console.log('Unknown car');
// }

// console.log('Welcome');


// function calculate(firstNum, secondNum) {
//     let sum = firstNum * secondNum;

//      console.log('The result is: ' + sum);
//      console.log(`The result of ${firstNum} and ${secondNum} is equal to ${sum.toFixed(2)}`);

// }

// calculate(5, 10)
