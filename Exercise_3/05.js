// function palindromeIntegers(numbers) {

//     function getDigits(numbers) {

//         let result = [];

//         do {
//             let digit = numbers % 10;
//             result.push(digit);

//             numbers = (numbers - digit) / 10;

//         } while (numbers !== 0);
//             result.reverse();

//         return result;
//     }

//     function palindrome(numbers) {

//         let digits = getDigits(numbers);

//         for (let i = 0; i < digits.length / 2; i++) {

//             if (digits[i] !== digits[digits.length - (i + 1)]) {
//                 return false;
//             }

//            return true;
//         } 
//     }

//         for (const element of numbers) {
//         console.log(palindrome(element));
//     } 

// }



// function palindromeIntegers(numbers) {

//     for (const positiveIntegers of numbers) {
//         const palindrome = checkPalindrome(positiveIntegers);

//         console.log(palindrome);
//     }


//     function checkPalindrome(number) {

//         const digits = `${number}`;

//         for (let i = 0; i < digits.length / 2; i++) {

//             if (digits[i] === digits[digits.length - (i + 1)]) {
//                 return true;
//             }

//             return false;
//         }
//     }
// }



function palindromeIntegers(numbers) {

    for (const positiveIntegers of numbers) {
        const palindrome = checkPalindrome(positiveIntegers);

        console.log(palindrome);
    }


    function checkPalindrome(positiveIntegers) {

        // const number = positiveIntegers.toString();

        const number = `${positiveIntegers}`;

        const reversePositiveIntegers = number
            .split('')
            .reverse()
            .join('');

        if (number !== reversePositiveIntegers) {
            return false;
        }

        return true;
    }

}

palindromeIntegers([123, 323, 421, 121]);
console.log();
palindromeIntegers([32, 2, 232, 1010]);


