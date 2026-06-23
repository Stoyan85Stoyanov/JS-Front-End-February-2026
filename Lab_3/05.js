function simpleCalculator(numberOne, numberTwo, operator) {

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;


    if (operator === 'multiply') {
        console.log(multiply(numberOne, numberTwo));


    }else if (operator === 'divide') {
        console.log(divide(numberOne, numberTwo));
     

    } else if (operator === 'add') {
        console.log(add(numberOne, numberTwo));
       

    } else if (operator === 'subtract'){
        console.log(subtract(numberOne, numberTwo));
      
    }
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');