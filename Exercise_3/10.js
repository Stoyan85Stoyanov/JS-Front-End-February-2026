// function factorialDivision(numberOne, numberTwo) {

//     function factorialNumber(number) {

//         if (number === 0 || number === 1) {
//             return 1;

//         }

//         let resultNumber = number * factorialNumber(number - 1);
//         return resultNumber;
//     }

//     let result = factorialNumber(numberOne) / factorialNumber(numberTwo);
//     console.log(result.toFixed(2));

// }


function factorialDivision(numberOne, numberTwo) {

    let result = factorialNumber(numberOne) / factorialNumber(numberTwo);
    console.log(result.toFixed(2));


    function factorialNumber(number) {

        let factorial = 1;

        for (let factorNumber = 2; factorNumber <= number; factorNumber++) {
            factorial *= factorNumber;
            
        }

        return factorial;
    }

}



factorialDivision(5, 2);
factorialDivision(6, 2);