function evenAndOddSubtraction(numbers) {

    let evenSum = 0;
    let oddSum = 0;

    for (let num of numbers) {

        if (num % 2 === 0) {
            evenSum += num;

        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);
    
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);