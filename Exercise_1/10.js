// function sameNumbers(number) {

//     let totalSum = 0;
//     let allDigitsAreEquals = true;

//     const targetDigit = number % 10;

//     while (number !== 0) {
//         const lastDigit = number % 10;
//         totalSum += lastDigit;
        
//         if(lastDigit !== targetDigit) {
//             allDigitsAreEquals = false;
//         }
     
//         number = (number - lastDigit) / 10;    
//     }

//     console.log(allDigitsAreEquals);
//     console.log(totalSum);
    
// }



function sameNumbers(number) {

    const inputNumber = number.toString();
    const lastCharacter = inputNumber.length - 1;

    let equal = true;
    let totalSumNumber = 0;

    for (let i = 0; i < inputNumber.length; i++) {
        
        if (inputNumber[lastCharacter] != inputNumber[i]) {
            equal = false;
        }

        totalSumNumber += Number(inputNumber[i]);
   
    }

    console.log(equal);
    console.log(totalSumNumber);
}


sameNumbers(2222222);
sameNumbers(1234);