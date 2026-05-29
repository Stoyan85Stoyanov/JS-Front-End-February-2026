function stringSubstring(word, text) {

    // const allWords = text.split(/[\s, .!?;: ]+/);

    // if (allWords.find((i) => i.toLowerCase() === word.toLowerCase())) {
    //     console.log(word);

    // }else{
    //     console.log(`${word} not found!`);    
    // }

    // --------------------------------------------


    const pattern = new RegExp(`\\b${word}\\b`, "i");

    if (pattern.test(text)) {
        console.log(word);

    } else {
        console.log(`${word} not found!`);
    }

}

stringSubstring('java', 'JavaScript is the best programming language');
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');



