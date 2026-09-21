// function addAndSubtract(numberOne, numberTwo, numberThree) {

//     function sum(numberOne, numberTwo) {
//         return numberOne + numberTwo;
//     }

//     function subtract(sum, numberThree) {
//         return sum - numberThree;
//     }

//     // let sumResult = sum(numberOne, numberTwo);
//     // let finalResult = subtract(sumResult, numberThree);

//     let finalResult = subtract(sum(numberOne, numberTwo), numberThree);

//     console.log(finalResult);

// }



function addAndSubtract(firstNumber, secondNumber, thirdNumber) {


    function sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function subtract(sumResultFunction, thirdNumber) {
        return sumResultFunction - thirdNumber;
    }

    const sumResult = sum(firstNumber, secondNumber);
    const subtractResult = subtract(sumResult, thirdNumber);

    console.log(subtractResult);

}


addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);