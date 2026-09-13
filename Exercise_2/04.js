// function sortingNumbers(array) {

// array.sort((a, b) => a - b); // сортиране в нарастващ ред
// array.sort((a, b) => b - a); // сортиране в намаляващ ред

// let result = [];

// while (array.length) {
//     // взима се най-малкото
//     result.push(array.shift());

//     // взима се най-голямото
//     if (array.length) {
//         result.push(array.pop());
//     }
// }

// return result;

//------------------------------------------------------

// array.sort((a, b) => a - b); // сортиране в нарастващ ред
// let result = [];

// // Two pointers
// let left = 0;
// let right = array.length - 1;

// for (let i = 0; i < array.length; i++) {

//     if (i % 2 === 0) {
//         result.push(array[left]);
//         left++;

//     } else {
//         result.push(array[right]);
//         right--;
//     }

// }
// console.log("[" + result.join(", ") + "]");

// return result;


//---------------------------------------------------

// array.sort((a, b) => a - b); // сортиране в нарастващ ред

// let rightStartingPoint = Math.ceil(array.length / 2);
// const result = Array.from({ length: array.length }, () => 0);

// for (let i = 0; i < array.length; i++) {

//     if (i < rightStartingPoint) {
//         result[i * 2] = array[i];

//     } else {
//         result[(array.length - i - 1) * 2 + 1] = array[i];
//     }
// }

// console.log("[" + result.join(", ") + "]");


// return result;
// }


// function sortingNumbers(arrayOfNumbers) {  NOOOOOO!!!!!

//     let result = arrayOfNumbers
//         .sort((a, b) => b - a)
//         .reduce((acc, number, index) => {

//             if (index < arrayOfNumbers.length / 2) {
//                 acc.push(arrayOfNumbers[arrayOfNumbers.length - 1 - index]);
//                 acc.push(number);
//             }

//             return acc;
//         }, []);

//     console.log("[" + result.join(", ") + "]");

//     return result;
// }



// function sortingNumbers(arrayOfNumbers) {

//    let length = arrayOfNumbers.length;

//     let result = arrayOfNumbers
//         .sort((a, b) => b - a)
//         .slice(0, Math.ceil(length / 2))
//         .reduce((acc, number, index) => {
//             acc.push(arrayOfNumbers.pop());

//             if (index < Math.floor(length / 2)) {
//                 acc.push(number);
//             }

//             return acc;
//         }, []);

//     return result;
// }




function sortingNumbers(arrayOfNumbers) {

    let length = arrayOfNumbers.length;

    let results = arrayOfNumbers
        .sort((a, b) => b - a)
        .slice(0, parseInt((length + 1) / 2))
        .reduce((acc, number, index) => {
            acc.push(arrayOfNumbers.pop());

            if (index < parseInt(length / 2)) {
                acc.push(number);
            }

            return acc;
        }, []);

    return results;
}


sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]);