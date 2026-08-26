// function calculator(number, operator, anotherNumber) {

//     switch (operator) {
//         case '+':
//             console.log((number + anotherNumber).toFixed(2));
//             break;

//         case '-':
//             console.log((number - anotherNumber).toFixed(2));
//             break;

//         case '/':
//             console.log((number / anotherNumber).toFixed(2));
//             break;

//         case '*':
//             console.log((number * anotherNumber).toFixed(2));
//             break;
//     }

// }


function calculator(number, operator, anotherNumber) {

    if (operator === '+') {
        let result1 = (number + anotherNumber).toFixed(2);
        console.log(result1);

    } else if (operator === '-') {
        let result2 = (number - anotherNumber).toFixed(2); 
        console.log(result2);

    } else if (operator === '*') {
        let result3 = (number * anotherNumber).toFixed(2); 
        console.log(result3);
        
    } else if (operator === '/') {
        let result4 = (number / anotherNumber).toFixed(2); 
        console.log(result4);
        
    }
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);