function log(variablesObject) {
    Object.keys(variablesObject).forEach(variableName => {
        console.log('----');
        console.log(variableName + '  (' + typeof variablesObject[variableName] + ')' );
        console.log('');
        console.log(JSON.stringify(variablesObject[variableName], 0, 2));
        console.log('');
    })
}

function solve(input) {
    
    const chemicalsCount = input.shift();
    
    const chemicals = input.splice(0, chemicalsCount).reduce((chemicalsObj, entry) => {
        const [ chemical, amount ] = entry.split(' # ');

        chemicalsObj[chemical] = { quantity: Number(amount) }

        return chemicalsObj;
    }, {});

    input.forEach(entry => {

        const line = entry.split(' # ');
        const command = line.shift();

        let name = '';

        switch (command) {
            case 'Mix':

                const [ chemical1, chemical2, amount ] = line;

                if ( chemicals[chemical1].quantity >= amount && chemicals[chemical2].quantity >= amount ) {

                    chemicals[chemical1].quantity -= amount;
                    chemicals[chemical2].quantity -= amount;

                    console.log(`${chemical1} and ${chemical2} have been mixed. ${amount} units of each were used.`);

                } else {

                    console.log(`Insufficient quantity of ${chemical1}/${chemical2} to mix.`);
                }

                break;
            case 'Replenish':

                name = line.shift();
                const [ addedAmount ] = line;

                if ( ! chemicals.hasOwnProperty(name) ) {
                    console.log(`The Chemical ${name} is not available in the lab.`);
                } else {

                    if ( ( chemicals[name].quantity + Number(addedAmount) ) > 500 ) {
                        console.log(`${name} quantity increased by ${500 - chemicals[name].quantity} units, reaching maximum capacity of 500 units!`);
                        chemicals[name].quantity = 500;
                    } else {
                        chemicals[name].quantity += Number(addedAmount);
                        console.log(`${name} quantity increased by ${addedAmount} units!`);
                    }
                }

                break;
            case 'Add Formula':

                name = line.shift();
                const [ formula ] = line;

                if ( ! chemicals.hasOwnProperty(name) ) {
                    console.log(`The Chemical ${name} is not available in the lab.`);
                } else {
                    chemicals[name].formula = formula;
                    console.log(`${name} has been assigned the formula ${formula}.`);
                }

                break;
        }

    });

    // log({ chemicals });

    Object.keys(chemicals).forEach(name => {

        let output = '';
        
        output += `Chemical: ${name}, Quantity: ${chemicals[name].quantity}`;

        if ( chemicals[name].hasOwnProperty('formula') ) {
            output += `, `;
            output += `Formula: ${chemicals[name].formula}`;
        }

        console.log(output);
        
    });

}




// function solve(input) {

//     let n = Number(input.shift());
//     let chemicals = {};

//     input.splice(0, n).forEach(line => {
//         let [name, qty] = line.split(' # ');
//         chemicals[name] = { quantity: Number(qty) };
//     });

//     for (let line of input) {
//         if (line === 'End') break;

//         let [command, a, b, c] = line.split(' # ');

//         switch (command) {
//             case 'Mix':
//                 let amount = Number(c);

//                 if (chemicals[a].quantity >= amount && chemicals[b].quantity >= amount) {
//                     chemicals[a].quantity -= amount;
//                     chemicals[b].quantity -= amount;
//                     console.log(`${a} and ${b} have been mixed. ${amount} units of each were used.`);
                
//                 } else {
//                     console.log(`Insufficient quantity of ${a}/${b} to mix.`);
                
//                 }
//                 break;


//             case 'Replenish':
//                 if (!chemicals[a]) {
//                     console.log(`The Chemical ${a} is not available in the lab.`);
                
//                 } else {
//                     let added = Math.min(Number(b), 500 - chemicals[a].quantity);
//                     chemicals[a].quantity += added;

//                     if (added < Number(b)) {
//                         console.log(`${a} quantity increased by ${added} units, reaching maximum capacity of 500 units!`);
                    
//                     } else {
//                         console.log(`${a} quantity increased by ${added} units!`);
//                     }
//                 }

//                 break;

//             case 'Add Formula':
//                 if (!chemicals[a]) {
//                     console.log(`The Chemical ${a} is not available in the lab.`);

//                 } else {
//                     chemicals[a].formula = b;
//                     console.log(`${a} has been assigned the formula ${b}.`);
//                 }

//                 break;
//         }
//     }

    
//     Object.keys(chemicals).forEach(name => {
//         let c = chemicals[name];
//         console.log(
//             c.formula
//                 ? `Chemical: ${name}, Quantity: ${c.quantity}, Formula: ${c.formula}`
//                 : `Chemical: ${name}, Quantity: ${c.quantity}`
//         );
//     });
// }


// solve([ '4',
//   'Water # 200',
//   'Salt # 100',
//   'Acid # 50',
//   'Base # 80',
//   'Mix # Water # Salt # 50',
//   'Replenish # Salt # 150',
//   'Add Formula # Acid # H2SO4',
//   'End']
// );

solve([ '3',
  'Sodium # 300',
  'Chlorine # 100',
  'Hydrogen # 200',
  'Mix # Sodium # Chlorine # 200',
  'Replenish # Sodium # 250',
  'Add Formula # Sulfuric Acid # H2SO4',
  'Add Formula # Sodium # Na',
  'Mix # Hydrogen # Chlorine # 50',
  'End']
);