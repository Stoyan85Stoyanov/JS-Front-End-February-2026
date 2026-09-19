// function smallestOfThreeNumbers(numberOne, numberTwo, numberThree) {

//     //  console.log(Math.min(numberOne, numberTwo, numberThree));


//     function findMin(array) {
//         let min = Number.MAX_VALUE;

//         for (const element of array) {

//             if (element < min) {
//                 min = element;
//             }
 
//         }
//         return min;
//     }

//     let minNumber = [numberOne, numberTwo, numberThree];
//     console.log(findMin(minNumber));  
// }



function smallestOfThreeNumbers(numberOne, numberTwo, numberThree) {


    function findMinNumber(array) {
        let smallestNumber = Number.MAX_SAFE_INTEGER;

        for (const element of array) {

            if (element < smallestNumber) {
                smallestNumber = element;
            }
 
        }
        return smallestNumber;
    }

    let minNumber = [numberOne, numberTwo, numberThree];
    console.log(findMinNumber(minNumber));  
}




smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);
