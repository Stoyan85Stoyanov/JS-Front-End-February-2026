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

    let results = Number(number);

    for (let i = 0; i < operations.length; i++) {
        const action = operations[i];

        switch (action) {

            case 'chop':
                results /= 2;
                break;

            case 'dice':
                results = Math.sqrt(results);
                break;

            case 'spice':
                results += 1;
                break;

            case 'bake':
                results *= 3;
                break;
                
            case 'fillet':
                results -= results * 0.2;
                break;
        }

        console.log(results);
    }
}


cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');