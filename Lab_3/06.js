function signCheck(numberOne, numberTwo, numberThree) {

    let negativeCount = (numberOne < 0) + (numberTwo < 0) + (numberThree < 0);
    console.log(negativeCount % 2 === 0 ? 'Positive' : 'Negative');

}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);


// let negativeCount = 0;

// if (numberOne < 0) {
//     negativeCount++;
// }

// if (numberTwo < 0) {
//     negativeCount++;
// }

// if (numberThree < 0) {
//     negativeCount++;
// }

// if (negativeCount % 2 === 0) {
//     console.log('Positive');

// }else{
//     console.log('Negative');
// }


// ------------------------------------------------------------------

// let result = 1;

// if (numberOne < 0) result *= -1;
// if (numberTwo < 0) result *= -1;
// if (numberThree < 0) result *= -1;

// if (result > 0) {
//     console.log('Positive');
// } else {
//     console.log('Negative');
// }

