// function circleArea(argument) {

//     if (typeof argument === 'number') {

//         let circleArea = Math.PI * Math.pow(argument, 2);
//         console.log(circleArea.toFixed(2));

//     } else {
//          console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
//     }

// }


function circleArea(argument) {

    if (typeof argument === 'number') {


        let valuePI = calculatePi(100);
       

        function calculatePi(n) {

            let sum = 0;

            for (let k = 0; k < n; k++) {
                sum += calcExpression(k);
            }

            return sum;
        }

        function calcExpression(k) {

            let v1 = 1 / Math.pow(16, k);
            let v2 = 4 / (8 * k + 1);
            let v3 = 2 / (8 * k + 4);
            let v4 = 1 / (8 * k + 5);
            let v5 = 1 / (8 * k + 6)

            return v1 * (v2 - v3 - v4 - v5);
        }


        let circleArea = valuePI * Math.pow(argument, 2);
        console.log(circleArea.toFixed(2));

    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
    }

}

circleArea(5);
circleArea('name');