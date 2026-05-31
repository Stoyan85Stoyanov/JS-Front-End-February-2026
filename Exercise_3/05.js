function palindromeIntegers(numbers) {

    function getDigits(numbers) {

        let result = [];

        do {
            let digit = numbers % 10;
            result.push(digit);

            numbers = (numbers - digit) / 10;

        } while (numbers !== 0);
            result.reverse();

        return result;
    }

    function palindrome(numbers) {

        let digits = getDigits(numbers);

        for (let i = 0; i < digits.length / 2; i++) {

            if (digits[i] !== digits[digits.length - (i + 1)]) {
                return false;
            }

           return true;
        } 
    }

        for (const element of numbers) {
        console.log(palindrome(element));
    } 

}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);