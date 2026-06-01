function numberModification(number) {

    function average(num) {

        let digits = String(num).split("");
        let sum = digits.map(Number).reduce((a, b) => a + b, 0);
        let averageResult = sum / digits.length;

        return averageResult;
    }

    while (average(number) <= 5) {  
        number += '9';      
    }

    console.log(number);
}

numberModification(101);
numberModification(5835);