function solve(input) {

    const numberRiders = Number(input.shift());
    const riders = {};


    for (let i = 0; i < numberRiders; i++) {
        const riderInputLine = input.shift();
        const riderData = riderInputLine.split("|");

        const riderName = riderData[0].trim();
        const riderFuelCapacity = riderData[1].trim();
        const riderPosition = riderData[2].trim();

        riders[riderName] = {
            riderFuelCapacity: Number(riderFuelCapacity),
            riderPosition: Number(riderPosition)
        };
    }

    let commands = input.shift();

    while (commands !== "Finish") {

        commands = commands.split(" - ");
        const command = commands.shift();

        switch (command) {

            case "StopForFuel":
                const rider = commands.shift();
                const minimumFuel = Number(commands.shift());
                const changedPosition = Number(commands.shift());

                if (riders[rider].riderFuelCapacity < minimumFuel) {
                    riders[rider].riderPosition = changedPosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);

                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }

                break;


            case "Overtaking":
                const rider1 = commands.shift();
                const rider2 = commands.shift();

                if (riders[rider1].riderPosition < riders[rider2].riderPosition) {

                    const tempPosition = riders[rider1].riderPosition;
                    riders[rider1].riderPosition = riders[rider2].riderPosition;
                    riders[rider2].riderPosition = tempPosition;

                    console.log(`${rider1} overtook ${rider2}!`);
                }

                break;


            case "EngineFail":
                const riderName = commands.shift();
                const lapsLeft = Number(commands.shift());

                delete riders[riderName];

                console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
        }

        commands = input.shift();
    }


    for (riderName in riders) {
        console.log(riderName);
        console.log(`  Final position: ${riders[riderName].riderPosition}`);
    }
}


// solve((["3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"])
// );

solve((["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
);