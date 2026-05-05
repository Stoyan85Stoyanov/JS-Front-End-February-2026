function solve(input) {

    //   "2",
    //"John garden watering,weeding",
    //"Mary barn feeding,cleaning",
    const farmers = {}; // фермерите се съхраняват в обект !!!!

    // On the first line of the input, you will receive an integer 
    // n – the number of farmers in your team
    const n = Number(input[0]);

    // On the next n lines, the details of each farmer 
    for (let i = 1; i <= n; i++) {
        const data = input[i].split(" ");

        const nameFarmer = data[0];
        const workArea = data[1];
        const tasks = data[2].split(",");

        farmers[nameFarmer] = { workArea, tasks };
    }

    //"Execute / John / garden / watering",
    //"Execute / Mary / garden / feeding",
    //"Learn Task / John / planting",
    //"Execute / John / garden / planting",
    //"Change Area / Mary / garden",
    //"Execute / Mary / garden / cleaning",
    //"End"

    let commands = n + 1;

    while (input[commands] != "End") {
        const data = input[commands].split(" / ");

        const command = data[0];
        if (command === "Execute") {
            const farmerName = data[1];
            const workArea = data[2];
            const task = data[3];

            const requestedFarmer = farmers[farmerName];

            if (requestedFarmer.workArea === workArea && requestedFarmer.tasks.includes(task)) {
                console.log(`${farmerName} has executed the task: ${task}!`);

            } else {
                console.log(`${farmerName} cannot execute the task: ${task}.`);

            }

        } else if (command === "Change Area") {
            const farmerName = data[1];
            const newWorkArea = data[2];

            const requestedFarmer = farmers[farmerName];
            requestedFarmer.workArea = newWorkArea;

            console.log(`${farmerName} has changed their work area to: ${newWorkArea}`);


        } else if (command === "Learn Task") {
            const farmerName = data[1];
            const newTask = data[2];

            // взимаме фермера 
            const requestedFarmer = farmers[farmerName];

            if (requestedFarmer.tasks.includes(newTask)) {
                console.log(`${farmerName} already knows how to perform ${newTask}.`);

            } else {
                requestedFarmer.tasks.push(newTask);
                console.log(`${farmerName} has learned a new task: ${newTask}.`);

            }
        }

        commands++;
    }

    for (const nameFarmer in farmers) {
        const infoFarmers = farmers[nameFarmer];
        console.log(`Farmer: ${nameFarmer}, Area: ${infoFarmers.workArea}, Tasks: ${infoFarmers.tasks.sort().join(", ")}`);  
    }
}


solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
]
);

// solve([
//     "3",
//     "Alex apiary harvesting,honeycomb",
//     "Emma barn milking,cleaning",
//     "Chris garden planting,weeding",
//     "Execute / Alex / apiary / harvesting",
//     "Learn Task / Alex / beeswax",
//     "Execute / Alex / apiary / beeswax",
//     "Change Area / Emma / apiary",
//     "Execute / Emma / apiary / milking",
//     "Execute / Chris / garden / watering",
//     "Learn Task / Chris / pruning",
//     "Execute / Chris / garden / pruning",
//     "End"
// ]
// );