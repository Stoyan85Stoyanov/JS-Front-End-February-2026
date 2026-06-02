function piccolo(inputString) {

    let parking = [];

    for (const element of inputString) {
        const [direction, carNumber] = element.split(", ");

        if (direction === "IN") {
            parking = parking.filter((x) => x !== carNumber);
            parking.push(carNumber);

        } else if (direction === "OUT") {
            parking = parking.filter((x) => x !== carNumber);

        }
    }

    if (parking.length === 0) {
        console.log("Parking Lot is Empty");

    } else {
        parking.sort();


        for (const carNumber of parking) {
            console.log(carNumber);

        }
    }
}


piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);


piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);