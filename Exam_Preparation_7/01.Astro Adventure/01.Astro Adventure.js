function astronauts(input) {

    const numberAstronauts = Number(input.shift());
    const team = {};

   
    for (let i = 0; i < numberAstronauts; i++) {

        const [name, oxygen, energy] = input.shift().split(" ");
        team[name] = {
            oxygen: Number(oxygen),
            energy: Number(energy)
        };
    }

   
    let command = input.shift();

    while (command !== "End") {
        let [action, name, value] = command.split(" - ");
        value = Number(value);

        if (action === "Explore") {

            if (team[name].energy >= value) {
                team[name].energy -= value;
                console.log(`${name} has successfully explored a new area and now has ${team[name].energy} energy!`);

            } else {
                console.log(`${name} does not have enough energy to explore!`);
            }
        } 

        else if (action === "Refuel") {
            const currentEnergy = team[name].energy;
            const maxEnergy = 200;

            const recovered = Math.min(value, maxEnergy - currentEnergy);
            team[name].energy += recovered;

            console.log(`${name} refueled their energy by ${recovered}!`);
        } 

        else if (action === "Breathe") {
            const currentOxygen = team[name].oxygen;
            const maxOxygen = 100;

            const recovered = Math.min(value, maxOxygen - currentOxygen);
            team[name].oxygen += recovered;

            console.log(`${name} took a breath and recovered ${recovered} oxygen!`);
        }

        command = input.shift();
    }

    
    for (let name in team) {
        console.log(`Astronaut: ${name}, Oxygen: ${team[name].oxygen}, Energy: ${team[name].energy}`);
    }
}


// astronauts([  '3',
//   'John 50 120',
//   'Kate 80 180',
//   'Rob 70 150',
//   'Explore - John - 50',
//   'Refuel - Kate - 30',
//   'Breathe - Rob - 20',
//   'End']
// );

astronauts([    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']
);