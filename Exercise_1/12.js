// function cookingByNumbers(number, operations1, operations2, operations3, operations4, operations5) {

//     let result = Number(number);
//     let operations = [operations1, operations2, operations3, operations4, operations5];


//     for (const op of operations) {


//         if (op === "chop") {
//             result /= 2;

//         } else if (op === "dice") {
//             result = Math.sqrt(result);

//         } else if (op === "spice") {
//             result += 1;

//         } else if (op === "bake") {
//             result *= 3;

//         } else if (op === "fillet") {
//             result *= 0.8;

//         }

//         console.log(Number(result.toFixed(1)));
//     }
// }


function cookingByNumbers(number, ...operations) {

    let result = Number(number);

    for (let i = 0; i < operations.length; i++) {
        const action = operations[i];

        switch (action) {

            case 'chop':
                result /= 2;
                break;

            case 'dice':
                result = Math.sqrt(result);
                break;

            case 'spice':
                result += 1;
                break;

            case 'bake':
                result *= 3;
                break;
                
            case 'fillet':
                result -= result * 0.2;
                break;
        }

        console.log(result);
    }
}


cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('----------------------------------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');