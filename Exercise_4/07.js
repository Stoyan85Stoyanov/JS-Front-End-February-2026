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

    const mapWords = {};

    for (const word of words) {

        if (!mapWords.hasOwnProperty(word)) {
            mapWords[word] = 0;
        }

        mapWords[word]++;
    }

  
    const result = Object.entries(mapWords)
    // .filter(word => word[1] % 2 !== 0)
        .filter(word => word[1] % 2)
        .sort((x, y) => y[1] - x[1])
        .map(word => word[0])
        .join(' ');


    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
