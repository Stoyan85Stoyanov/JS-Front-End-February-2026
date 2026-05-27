function sameNumbers(number) {

    let totalSum = 0;
    let allDigitsAreEquals = true;

    const targetDigit = number % 10;

    while (number !== 0) {
        const lastDigit = number % 10;
        totalSum += lastDigit;
        
        if(lastDigit !== targetDigit) {
            allDigitsAreEquals = false;
        }
     
        number = (number - lastDigit) / 10;    
    }

    console.log(allDigitsAreEquals);
    console.log(totalSum);
    
}

sameNumbers(2222222);
sameNumbers(1234);