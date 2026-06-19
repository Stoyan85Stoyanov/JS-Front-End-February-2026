function mathOperations(numberOne, numberTwo, operator) {

    // let result = 0;
    
    switch (operator) {
        case '+':
            result = numberOne + numberTwo;
            break;

        case '-':
            result = numberOne - numberTwo;
            break;

        case '*':
            result = numberOne * numberTwo;
            break;

        case '/':
            result = numberOne / numberTwo;
            break;

        case '%':
            result = numberOne % numberTwo;
            break;

        case '**':
            result = numberOne ** numberTwo;
            break;

    }
     console.log(result);   
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
mathOperations(10, 3, '%');
mathOperations(20, 3, '**');