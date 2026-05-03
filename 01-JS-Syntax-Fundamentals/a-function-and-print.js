// Function Declaration
function calculate(firstNum, secondNum) {
    let sum = firstNum + secondNum;

    // console.log('The result is: ', result);
    // console.log('The result is: ' + result);
    // console.log("The result is: " + result);
    // console.log('The result of ' + firstNum + ' and ' + secondNum + ' is equal to: ' + sum);
    console.log(`The result of ${firstNum} and ${secondNum} is equal to ${sum.toFixed(2)}!`) // String Interpolation (Template String)
}

// Function Invocation
calculate(5, 5);
calculate(10, 10);
calculate(2.7, 3.14);

// String Literals
'Pesho';
"Pesho";
`Pesho`; // Template Literal
