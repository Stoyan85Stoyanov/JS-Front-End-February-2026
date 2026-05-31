function smallestOfThreeNumbers(numberOne, numberTwo, numberThree) {

    //  console.log(Math.min(numberOne, numberTwo, numberThree));


    /** 
     *  @param {Array} array
     */

    function findMin(array) {
        let min = Number.MAX_VALUE;

        for (const element of array) {

            if (element < min) {
                min = element;
            }
 
        }
        return min;
    }

    let minNumber = [numberOne, numberTwo, numberThree];
    console.log(findMin(minNumber));  
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);
