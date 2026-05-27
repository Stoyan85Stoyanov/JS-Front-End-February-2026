function printAndSum(start, end) {

    let tolalSum = 0;
    let output = '';

    for (let n = start; n <= end; n++) {
        tolalSum += n;
        output += n + ' ';
    }

    console.log(output);
    console.log(`Sum: ${tolalSum}`);

}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);