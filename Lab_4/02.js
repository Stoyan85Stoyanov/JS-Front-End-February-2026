function city(input) {

    let entries = Object.entries(input);
    
    for (let [key, values] of entries) {
        console.log(`${key} -> ${values}`);    
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});


city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});