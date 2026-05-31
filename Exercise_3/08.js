function perfectNumber(number) {

    function divisors() {
        let result = [];
        let sqrtNumber = Math.sqrt(number);

        for (let i = 1; i < sqrtNumber; i++) {

            if (number % i === 0) {
                result.push(i);
                result.push(number / i);
            }
        }

        // Ако корен квадратен е цяло число !!!
        if (sqrtNumber === Math.trunc(sqrtNumber)) {
            result.push(sqrtNumber);
        }

        return result;
    }


    function sum(array) {
        let sum = 0;

        for (const element of array) {
            sum += element;
        }

        return sum;
    }


    function numberPerfect() {
        let perfect = 2 * number === sum(divisors());
        return perfect;
    }


    console.log(numberPerfect() ? "We have a perfect number!" : "It's not so perfect.");
}

perfectNumber(81);
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);