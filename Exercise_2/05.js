// function revealWords(listOfWords, text) {

// 1. Text search -> cannot match !!! exactly !!! 5 asterisks

// let words = listOfWords.split(", ").sort((a, b) => b.length - a.length);

// for (const word of words) {

//     let teplate = Array.from({ length: word.length }, () => "*").join("");
//     text = text.replaceAll(teplate, word);
// }
// console.log(text);



// 2. Regex search

// let words = listOfWords.split(", ");

// for (const word of words) {
//     const pattern =  new RegExp(`(?<!\\*)\\*{${word.length}}(?!\\*)`, "g");
//     text = text.replaceAll(pattern, word);
// }

// console.log(text);

// }


// function revealWords(listOfWords, text) {
//     let words = listOfWords.split(', ');
//     let templates = text.split(' ');

//     for (let i = 0; i < templates.length; i++) {
//         let template = templates[i];


//         if (template.includes('*')) {

//             for (let j = 0; j < words.length; j++) {
//                 let word = words[j];

//                 if (word.length === template.length) {
//                     templates[i] = word;
//                     words.splice(j, 1);
//                     break;
//                 }
//             }
//         }
//     }

//     console.log(templates.join(' '));
// }


function revealWords(wordInput, text) {

    const words = wordInput.split(', ');

    const sortedWords = words.sort((a, b) => a.length - b.length);

    for (const word of sortedWords) {
        const searchWord = '*'.repeat(word.length);

        // text = text.replaceAll(searchWord, word);

        text = text.replace(searchWord, (match, offset) =>
            text[offset - 1] === '*' || text[offset + word.length] === '*' ? match : word
        );
    }

    console.log(text);
}

revealWords('great, learning', '***** is ********');
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');



