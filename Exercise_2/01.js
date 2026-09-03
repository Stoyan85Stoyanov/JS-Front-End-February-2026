// function arrayRotation(array, numberOfRotations) {

//     numberOfRotations %= array.length; // за по-бързо изпълнение при по-голям брой ротации

//     for(let i = 0; i < numberOfRotations; i++) {
//         array.push(array.shift());
//     }
//     console.log(array.join(" "));  


//     // let result = [];

//     // for (let i = 0; i < array.length; i++) {
//     //     result.push(array[(numberOfRotations + i) % array.length]);
//     // }

//     //   console.log(result.join(" "));
// }



// function arrayRotation(array, numberOfRotations) {

//     for (let i = 0; i < numberOfRotations; i++) {
//         array.push(array.shift());
//     }

//     console.log(array.join(" "));
// }


// function arrayRotation(array, numberOfRotations) {

//     const n = array.length;
//     numberOfRotations %= n;

//     let result = array.slice(numberOfRotations).concat(array.slice(0, numberOfRotations));

//     console.log(result.join(" "));
// }

function arrayRotation(array, numberOfRotations) {
    const numberArray = array.length;
    numberOfRotations %= numberArray;

    array.push(...array.splice(0, numberOfRotations));
    
    console.log(array.join(" "));
}






arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);