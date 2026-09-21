// function oddAndEvenSum(singleNumber) {

//     function getDigits(singleNumber) {

//         let result = [];

//         do {
//             let digit = singleNumber % 10;
//             result.push(digit);

//             singleNumber = (singleNumber - digit) / 10;

//         } while (singleNumber !== 0);
//             result.reverse();

//         return result;
//     }

//     let digits = getDigits(singleNumber);

//     let evenSum = 0;
//     let oddSum = 0;

//     for (const element of digits) {

//         if (element % 2 === 0) {
//             evenSum += element;

//         } else {
//             oddSum += element;
//         }

//     }
//     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
// }



function oddAndEvenSum(singleNumber) {

    const digits = getDigits(singleNumber);

    const evenDigits = filterEvenNumbers(digits);
    const oddDigits = filterOddNumbers(digits);

    const evenSum = sumNumbers(evenDigits);
    const oddSum = sumNumbers(oddDigits);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


    function getDigits(number) {
        
        const result = number
            .toString()
            .split('')
            .map(Number);

        return result;
    }


    function filterEvenNumbers(numbers) {
        const result = [];

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                result.push(numbers[i]);
            }
        }

        return result;
    }


    function filterOddNumbers(numbers) {
        const result = [];

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 !== 0) {
                result.push(numbers[i]);
            }
        }

        return result;
    }


    function sumNumbers(numbers) {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i];
        }

        return sum;
    }

}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);