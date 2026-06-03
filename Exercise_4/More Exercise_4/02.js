function catalog(products) {
    
    let parsed = products.map(product => {
        let [name, price] = product.split(' : ');
        return { name, price };
    });

   
    parsed.sort((x, y) => x.name.localeCompare(y.name, undefined, { sensitivity: 'base' }));

    
    let currentLetter = '';

    for (let product of parsed) {
        let firstLetter = product.name[0];

        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(currentLetter);
        }

        console.log(`  ${product.name}: ${product.price}`);
    }
}

// catalog([
// 'Appricot : 20.4',
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10'
// ]
// );

catalog([
'Omlet : 5.4',
'Shirt : 15',
'Cake : 59'
]
);