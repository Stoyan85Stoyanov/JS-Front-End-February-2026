function solve(input) {
    
    const horsePositions = input.shift().split("|");


    let currentCommand = input.shift();

    while (currentCommand !== "Finish") {

        const commandParts = currentCommand.split(" ");
        const commandType = commandParts[0];

        switch (commandType) {

            case "Retake": {
                const overtakingHorseName = commandParts[1];
                const overtakenHorseName = commandParts[2];

                const overtakingHorseIndex = horsePositions.indexOf(overtakingHorseName);
                const overtakenHorseIndex = horsePositions.indexOf(overtakenHorseName);

                if (overtakingHorseIndex < overtakenHorseIndex) {
                    [horsePositions[overtakingHorseIndex], horsePositions[overtakenHorseIndex]] =
                        [horsePositions[overtakenHorseIndex], horsePositions[overtakingHorseIndex]];

                    console.log(`${overtakingHorseName} retakes ${overtakenHorseName}.`);
                }
                break;
            }


            case "Trouble": {
                const troubledHorseName = commandParts[1];
                const troubledHorseIndex = horsePositions.indexOf(troubledHorseName);

                if (troubledHorseIndex > 0) {
                    [horsePositions[troubledHorseIndex], horsePositions[troubledHorseIndex - 1]] =
                        [horsePositions[troubledHorseIndex - 1], horsePositions[troubledHorseIndex]];

                    console.log(`Trouble for ${troubledHorseName} - drops one position.`);
                }
                break;
            }


            case "Rage": {
                const ragingHorseName = commandParts[1];
                const ragingHorseIndex = horsePositions.indexOf(ragingHorseName);

                horsePositions.splice(ragingHorseIndex, 1);

                const newPositionIndex = Math.min(ragingHorseIndex + 2, horsePositions.length);

                horsePositions.splice(newPositionIndex, 0, ragingHorseName);

                console.log(`${ragingHorseName} rages 2 positions ahead.`);
                break;
            }


            case "Miracle": {
                const lastPlaceHorse = horsePositions.shift();
                horsePositions.push(lastPlaceHorse);

                console.log(`What a miracle - ${lastPlaceHorse} becomes first.`);
                break;
            }
        }

        currentCommand = input.shift();
    }

    console.log(horsePositions.join("->"));
    console.log(`The winner is: ${horsePositions[horsePositions.length - 1]}`);
}


// solve((['Bella|Alexia|Sugar',
// 'Retake Alexia Sugar',
// 'Rage Bella',
// 'Trouble Bella',
// 'Finish'])
// );

// solve((['Onyx|Domino|Sugar|Fiona',
// 'Trouble Onyx',
// 'Retake Onyx Sugar',
// 'Rage Domino',
// 'Miracle',
// 'Finish'])
// );

solve((['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])
);