function wordsTracker(arrayOfWords) {

    let words = arrayOfWords[0].split(' ');

    let mapWords = {};

    words.forEach((element) => { mapWords[element] = 0; });
       

    for (let i = 1; i < arrayOfWords.length; i++) {

        if (mapWords.hasOwnProperty(arrayOfWords[i])) {
            mapWords[arrayOfWords[i]]++;

        }
    }

    for (const [word, count] of Object.entries(mapWords).sort((a, b) => b[1] - a[1])) {
        console.log(`${ word } - ${ count }`);

    }

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
