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

//     function stringSubstring(word, text) {

//     if (text.toLowerCase().includes(word.toLowerCase())) {
//         return console.log(word);

//     } else {
//         console.log(`${word} not found!`);
//     }

// }


    function stringSubstring(word, text) {

        const pattern = new RegExp(word, 'i');

    if (pattern.test(text)) {
        return console.log(word);

    } else {
        console.log(`${word} not found!`);
    }

}

stringSubstring('java', 'C# is the best programming language');
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');



