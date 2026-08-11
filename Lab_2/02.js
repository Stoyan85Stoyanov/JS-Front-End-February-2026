// function reverseAnArrayOfNumbers(n, numbers) {

//     let finalNumbers = numbers.slice(0, n).reverse();
//     console.log(finalNumbers.join(' '));
    
// }

function reverseAnArrayOfNumbers(number, numbers) {

    let result = [];

    for (let i = number - 1; i >= 0; i--) {
        result.push(numbers[i]);
    }

    console.log(result.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);