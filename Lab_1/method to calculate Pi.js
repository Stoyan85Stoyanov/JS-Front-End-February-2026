// 1 method  => 3.141592653589793

let valuePI = calculatePi(100);
console.log(valuePI);


function calculatePi(n) {

    let sum = 0;

    for (let k = 0; k < n; k++) {
        sum += calcExpression(k);
    }

    return sum;
}

function calcExpression(k) {

    let v1 = 1 / Math.pow(16, k);
    let v2 = 4 / (8 * k + 1);
    let v3 = 2 / (8 * k + 4);
    let v4 = 1 / (8 * k + 5);
    let v5 = 1 / (8 * k + 6)

    return v1 * (v2 - v3 - v4 - v5);
}

// const result = Math.PI;
// console.log(result);