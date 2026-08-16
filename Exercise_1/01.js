// function ages(age) {

//     if (age < 0) {
//         console.log('out of bounds');

//     } else if (age <= 2) {
//         console.log('baby');

//     } else if (age <= 13) {
//         console.log('child');

//     } else if (age <= 19) {
//         console.log('teenager');

//     } else if (age <= 65) {
//         console.log('adult');

//     } else {
//         console.log('elder');
//     }
// }



function ages(age) {

    if (age >= 66) {
        console.log('elder');

    } else if (age >= 20) {
        console.log('adult');

    } else if (age >= 14) {
        console.log('teenager');

    } else if (age >= 3) {
        console.log('child');

    } else if (age >= 0) {
        console.log('baby');

    } else {
        console.log('out of bounds');

    }
}



ages(20);
ages(1);
ages(100);
ages(-1);
