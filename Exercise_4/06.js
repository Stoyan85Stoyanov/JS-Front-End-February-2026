// function wordsTracker(arrayOfWords) {

//     let words = arrayOfWords[0].split(' ');

//     let mapWords = {};

//     words.forEach((element) => { mapWords[element] = 0; });


//     for (let i = 1; i < arrayOfWords.length; i++) {

//         if (mapWords.hasOwnProperty(arrayOfWords[i])) {
//             mapWords[arrayOfWords[i]]++;

//         }
//     }

//     for (const [word, count] of Object.entries(mapWords).sort((a, b) => b[1] - a[1])) {
//         console.log(`${word} - ${count}`);

//     }

// }


function wordsTracker(arrayOfWords) {

    const mapWords = {};

    arrayOfWords[0].split(' ')
    .forEach((element) => { mapWords[element] = 0; });

    
    for (const word of arrayOfWords.slice(1)) {
        if (mapWords.hasOwnProperty(word)) {
            mapWords[word]++;
        }
    }

    
    const wordEntires = Object
        .entries(mapWords)
        .sort((a, b) => b[1] - a[1])

    const sortedSearchWords = Object.fromEntries(wordEntires);

    
    Object.keys(sortedSearchWords)
        .forEach(word => console.log(`${word} - ${sortedSearchWords[word]}`))
}




wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);
