function sortingNumbers(array) {

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
}



sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);