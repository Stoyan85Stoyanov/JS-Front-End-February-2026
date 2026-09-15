// function stringSubstring(word, text) {

    // const allWords = text.split(/[\s, .!?;: ]+/);

    // if (allWords.find((i) => i.toLowerCase() === word.toLowerCase())) {
    //     console.log(word);

    // }else{
    //     console.log(`${word} not found!`);    
    // }

    // --------------------------------------------


    // const pattern = new RegExp(`\\b${word}\\b`, "i");

    // if (pattern.test(text)) {
    //     console.log(word);

    // } else {
    //     console.log(`${word} not found!`);
    // }

    function stringSubstring(words, text) {

    const isIncluded = text
        .split(' ')
        .map(word => word.toLowerCase())
        .includes(words);

    if (isIncluded) {
        console.log(words);
        
    } else {
        console.log(`${words} not found!`);
    }

}


//     function stringSubstring(word, text) {

//         const pattern = new RegExp(`\\b${word}\\b`, 'i');

//     if (pattern.test(text)) {
//         return console.log(word);

//     } else {
//         console.log(`${word} not found!`);
//     }

// }

stringSubstring('java', 'C# is the best programming language');
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');



