function calculator(number, operator, anotherNumber) {

    switch (operator) {
        case '+':
            console.log((number + anotherNumber).toFixed(2));
            break;

        case '-':
            console.log((number - anotherNumber).toFixed(2));
            break;

        case '/':
            console.log((number / anotherNumber).toFixed(2));
            break;

        case '*':
            console.log((number * anotherNumber).toFixed(2));
            break;
    }

}

calculator(5, '+', 10);
calculator(25.5, '-', 3);