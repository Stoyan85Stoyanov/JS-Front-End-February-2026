function cookingByNumbers(number, operations1, operations2, operations3, operations4, operations5) {

    let result = Number(number);
    let operations = [operations1, operations2, operations3, operations4, operations5];


    for (const op of operations) {


        if (op === "chop") {
            result /= 2;

        } else if (op === "dice") {
            result = Math.sqrt(result);

        } else if (op === "spice") {
            result += 1;

        } else if (op === "bake") {
            result *= 3;

        } else if (op === "fillet") {
            result *= 0.8;

        }

        console.log(Number(result.toFixed(1)));
    }
}


cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');