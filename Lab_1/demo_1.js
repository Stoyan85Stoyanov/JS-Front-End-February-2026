// // Function Declaration -> извиква се веднъж
// function calculate(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }

// // Function Invocation -> може да се извиква повече от веднъж
// calculate(5, 5);
// calculate(10, 5);

// 10
// 15

//----------------------------------------


function calculate(firstNumber, secondNumber) {
    let sumResult = firstNumber + secondNumber;


    // console.log('The result is: ', result);
    // console.log('The result is: '+ result);

    // String Interpolation (Template String)
    console.log(`The result of ${firstNumber} and ${secondNumber} is equal to ${sumResult.toFixed(2)}!`);   // За извличане на информация Ctrl+Shift+Space
}

calculate(5, 5);
calculate(10, 5);

// The result is:  10
// The result is:  15


// Expression vs Statement
// Expresion -> returns value
// Statement -> makes action
let number = 5;

// Statement
if (number < 10) {
    console.log('Success!');
    
} else {
    console.log('Fail!');
}

// Expression
console.log(number < 10 ? 'Success!' : 'Fail!');

