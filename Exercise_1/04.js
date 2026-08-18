// function printAndSum(start, end) {

//     let tolalSum = 0;
//     let output = '';

//     for (let n = start; n <= end; n++) {
//         tolalSum += n;
//         output += n + ' ';
//     }

//     console.log(output);
//     console.log(`Sum: ${tolalSum}`);

// }


// function printAndSum(start, end) {

//     let tolalSum = 0;
//     let output = '';

//     for (let j = end; j >= start; j--) {
//         tolalSum += j;
//         output += j + ' ';
//     }

//     console.log(output.trim());
//     console.log(`Sum: ${tolalSum}`);

// }


function printAndSum(start, end) {

    let tolalSum = 0;
    let output = '';

    for (let j = start; j <= end; j++) {
        tolalSum += j;
        output += j + ' ';
    }

    console.log(output.trim());
    console.log(`Sum: ${tolalSum}`);

}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);