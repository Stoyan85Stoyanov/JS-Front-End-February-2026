// function N_x_N_Matrix(number) {

//     function getRowAndColumn() {
//         let result = [];

//         for (let i = 0; i < number; i++) {
//             result.push(number);
//         }

//         return result;
//     }


//     for (let i = 0; i < number; i++) {
//         console.log(getRowAndColumn().join(" "));
//     }

// }

function N_x_N_Matrix(number) {

    for (let row = 1; row <= number; row++) {
        printNxN_Matrix();

    }

    function printNxN_Matrix() {
        // console.log(`${number} `.repeat(number));
        const result = (number + ' ').repeat(number).trim();
        console.log(result);
    }
}


N_x_N_Matrix(3);
N_x_N_Matrix(7);
N_x_N_Matrix(2);