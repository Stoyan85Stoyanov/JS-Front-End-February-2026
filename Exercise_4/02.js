// function towns(arrayOfStrings) {

//     const towns = [];

//     for (const row of arrayOfStrings) {

//         let valuesRow = row.split(" | ");
//         const objectTown = {
//             town: valuesRow[0],
//             latitude: Number(valuesRow[1]).toFixed(2),
//             longitude: Number(valuesRow[2]).toFixed(2)
//         };

//         towns.push(objectTown);
//     }

//     for (const objectTown of towns) {
//         console.log(objectTown);

//     }
// }


function towns(arrayOfStrings) {

    arrayOfStrings.map(infoTowns).forEach(printTowns);

    function infoTowns(town) {
        
        const objectTown = {
            town: town.split(" | ")[0],
            latitude: Number(town.split(" | ")[1]).toFixed(2),
            longitude: Number(town.split(" | ")[2]).toFixed(2)
        }

        return objectTown;

    }

    function printTowns(objectTown) {
        console.log(objectTown);
    }

}


towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);


towns(['Plovdiv | 136.45 | 812.575']);