function sumDigits(number) {

    let input = number;
    let totalSum = 0;

    while (input > 0) {
        let remainer = input % 10;

        totalSum += remainer;
        
        input = Math.trunc(input / 10);
    }

    console.log(totalSum);
    
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
