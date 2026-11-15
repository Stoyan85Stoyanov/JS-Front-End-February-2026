// function city(input) {

//     let entries = Object.entries(input);
    
//     for (let [key, value] of entries) {
//         console.log(`${key} -> ${value}`);    
//     }
// }



function city(input) {

    const entries = Object.keys(input);
    
    for (const key of entries) {
        console.log(`${key} -> ${input[key]}`);    
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