// function numbersFromM_To_N(bigNumber, smallNumber) {
     
//     for (let num = bigNumber; num >= smallNumber; num--) {
//         console.log(num);  
//     }
// }

function numbersFromM_To_N(bigNumber, smallNumber) {
    while (bigNumber >= smallNumber) {
        console.log(bigNumber);
        bigNumber--;
    }
}

numbersFromM_To_N(6, 2);
numbersFromM_To_N(4, 1);