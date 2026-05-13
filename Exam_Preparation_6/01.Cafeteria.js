// function solve(input) {

//     const baristaCount = Number(input.shift());
//     const team = {};

//     for (let i = 0; i < baristaCount; i++) {
//         const [nameBarista, shift, coffeeType] = input[i].split(" ");

//         team[nameBarista] = { shift, coffeeType: coffeeType.split(",") }
//     }

//     let commandLine = input.shift();

//     while (commandLine != "Closed") {
//         const [command, nameBarista, firstArg, secondArg] = commandLine.split(" / ");
//         const barista = team[nameBarista];
//         let shift, coffeeType;

//         switch (command) {

//             case "Prepare":
//                 shift = firstArg;
//                 coffeeType = secondArg;

//                 if (barista.shift === shift && barista.coffeeType.includes(coffeeType)) {
//                     console.log(`${nameBarista} has prepared a ${coffeeType} for you!`);

//                 } else {
//                     console.log(`${nameBarista} is not available to prepare a ${coffeeType}.`);

//                 }
//                 break;


//             case "Change Shift":
//                 shift = firstArg;
//                 barista.shift = shift;
//                 console.log(`${nameBarista} has updated his shift to: ${shift}`);

//                 break;


//             case "Learn":
//                 coffeeType = firstArg;

//                 if (barista.coffeeType.includes(coffeeType)) {
//                     console.log(`${nameBarista} knows how to make ${coffeeType}.`);
                    
//                 } else {
//                     barista.coffeeType.push(coffeeType);
//                     console.log(`${nameBarista} has learned a new coffee type: ${coffeeType}.`);
                    
//                 } 
//                 break;

//         }
//         commandLine = input.shift();
//     }

//     for (const nameBarista in team) {
//        console.log(`Barista: ${nameBarista}, Shift: ${team[nameBarista].shift}, Drinks: ${team[nameBarista].coffeeType.join(", ")}`);
              
//     }
// }


function solve(input) {

    const numberOfBaristas = Number(input.shift());
    const baristas = {};

    for (let i = 0; i < numberOfBaristas; i++) {
        const line = input.shift();
        const [name, shift, coffees] = line.split(" ");

        baristas[name] = {
            shift: shift,
            coffees: coffees.split(",")
        };
    }

    
    let commandLine = input.shift();

    while (commandLine !== "Closed") {

        const parts = commandLine.split(" / ");
        const command = parts[0];
        const name = parts[1];
        const barista = baristas[name];

        if (command === "Prepare") {
            const requiredShift = parts[2];
            const coffee = parts[3];

            const isOnShift = barista.shift === requiredShift;
            const canMakeCoffee = barista.coffees.includes(coffee);

            if (isOnShift && canMakeCoffee) {
                console.log(`${name} has prepared a ${coffee} for you!`);

            } else {
                console.log(`${name} is not available to prepare a ${coffee}.`);
            }
        }

        else if (command === "Change Shift") {
            const newShift = parts[2];
            barista.shift = newShift;

            console.log(`${name} has updated his shift to: ${newShift}`);
        }

        else if (command === "Learn") {
            const newCoffee = parts[2];

            if (barista.coffees.includes(newCoffee)) {
                console.log(`${name} knows how to make ${newCoffee}.`);

            } else {
                barista.coffees.push(newCoffee);
                console.log(`${name} has learned a new coffee type: ${newCoffee}.`);
            }
        }
        
        commandLine = input.shift();
    }

    
    for (const name in baristas) {
        const current = baristas[name];

        console.log(`Barista: ${name}, Shift: ${current.shift}, Drinks: ${current.coffees.join(", ")}`);    
    }
}


solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
);


// solve(['4',
// 'Alice day Espresso,Cappuccino',
// 'Bob night Latte,Mocha',
// 'Carol day Americano,Mocha',
// 'David night Espresso',
// 'Prepare / Alice / day / Espresso',
// 'Change Shift / Bob / day',
// 'Learn / Carol / Latte',
// 'Prepare / Bob / night / Latte',
// 'Learn / David / Cappuccino',
// 'Prepare / Carol / day / Cappuccino',
// 'Change Shift / Alice / night',
//  'Learn / Bob / Mocha',
// 'Prepare / David / night / Espresso',
// 'Closed']
// );