function storeProvision(arrayFirst, arraySecond) {

    const stock = {};

    for (let i = 0; i < arrayFirst.length; i += 2) {

        const name = arrayFirst[i];
        const quantity = Number(arrayFirst[i + 1]);

        stock[name] = quantity;
    }

    for (let i = 0; i < arraySecond.length; i+= 2) {
        const name = arraySecond[i];
        const quantity = Number(arraySecond[i + 1]);

        if (!(name in stock)) {
            stock[name] = 0;
        }

        stock[name] += quantity;
    }

    for (const productName in stock) {
        console.log(`${productName} -> ${stock[productName]}`);

        }
    }


    storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
        [
            'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]
    );


    storeProvision([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
        [
            'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
        ]
    );