function largestNumber(numberOne, numberTwo, numberThree) {

    let largestNum = numberOne;
    
    if (numberTwo > largestNum) {
        largestNum = numberTwo;   
    }
    
    if (numberThree > largestNum) {
        largestNum = numberThree  
    }

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);