function checkFlights(input) {

    const flights = input[0];
    const updates = input[1];
    const statusToCheck = input[2][0]; 
    const flightsObj = {};

    // добавяме всички полети
    flights.forEach(flight => {
        const [flightNumber, ...destination] = flight.split(" ");

        flightsObj[flightNumber] = {
            Destination: destination.join(" "),
            Status: "Ready to fly"
        };
    });

    // обновяваме статусите
    updates.forEach(update => {
        const [flightNumber, status] = update.split(" ");

        if (flightsObj[flightNumber]) {
            flightsObj[flightNumber].Status = status;
        }
    });

    // принтираме
    Object.values(flightsObj).forEach(flight => {
        if (flight.Status === statusToCheck) {
            console.log(flight);
        }
    });
}


// checkFlights([['WN269 Delaware',
//    'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
// 	'WN612 Cancelled',
// 	'WN1173 Cancelled',
// 	'SK430 Cancelled'],
// 	['Cancelled']
// ]);


checkFlights([['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK330 Cancelled'],
	['Ready to fly']
]
);
