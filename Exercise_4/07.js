// function oddOccurrences(singleString) {

//     let words = singleString.toLowerCase().split(' ');

//     const map = {};

//     for (const word of words) {

//         if (!map.hasOwnProperty(word)) {
//             map[word] = 0;
//         }

//         map[word]++;

//     }

//     let resultWords = words.filter((x, i) => map[x] % 2 !== 0 && words.indexOf(x) === i);
//     console.log(resultWords.join(" "));

// }



function oddOccurrences(singleString) {

    const words = singleString.toLowerCase().split(' ');

    const map = {};

    for (const word of words) {

        if (!map.hasOwnProperty(word)) {
            map[word] = 0;
        }

        map[word]++;
    }


    const result = Object.entries(map)
        .filter(word => word[1] % 2 !== 0)
        .sort((x, y) => y[1] - x[1])
        .map(word => word[0]);

    console.log(result.join(' '));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
