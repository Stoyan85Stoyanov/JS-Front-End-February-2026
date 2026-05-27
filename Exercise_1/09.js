function fruit(fruit, gram, priceKilogram) {

    let wieghtInKilogram = 0.001 * gram;
    let totalCost = wieghtInKilogram * priceKilogram;

    console.log(`I need $${totalCost.toFixed(2)} to buy ${wieghtInKilogram.toFixed(2)} kilograms ${fruit}.`);
    
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);