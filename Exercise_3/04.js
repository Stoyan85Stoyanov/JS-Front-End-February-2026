function oddAndEvenSum(singleNumber) {

    function getDigits(singleNumber) {

        let result = [];

        do {
            let digit = singleNumber % 10;
            result.push(digit);

            singleNumber = (singleNumber - digit) / 10;

        } while (singleNumber !== 0);
            result.reverse();

        return result;
    }

    let digits = getDigits(singleNumber);

    let evenSum = 0;
    let oddSum = 0;

    for (const element of digits) {

        if (element % 2 === 0) {
            evenSum += element;

        } else {
            oddSum += element;
        }

    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);