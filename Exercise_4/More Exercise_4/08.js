function storeCars(input) {

    const garages = {};

    input.forEach(line => {

        let [garageNumber, carInfo] = line.split(' - ');

        // гаражът дали съществува
        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }

        carInfo = carInfo.split(', ').map(pair => pair.replace(': ', ' - ')).join(', ');

        // Съхраняване на колата в гаража
        garages[garageNumber].push(carInfo);
    });


    for (const garage in garages) {
        console.log(`Garage № ${garage}`);
        garages[garage].forEach(car => {
            console.log(`--- ${car}`);
        });
    }
}


// storeCars(['1 - color: blue, fuel type: diesel', 
//     '1 - color: red, manufacture: Audi', 
//     '2 - fuel type: petrol', 
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

storeCars(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
);
