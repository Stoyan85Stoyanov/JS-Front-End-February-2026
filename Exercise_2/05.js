function revealWords(listOfWords, text) {
    
    // 1. Text search -> cannot match !!! exactly !!! 5 asterisks

    // let words = listOfWords.split(", ").sort((a, b) => b.length - a.length);

    // for (const word of words) {

    //     let teplate = Array.from({ length: word.length }, () => "*").join("");
    //     text = text.replaceAll(teplate, word);
    // }
    // console.log(text);



    // 2. Regex search

    let words = listOfWords.split(", ");

    for (const word of words) {
        const pattern =  new RegExp(`(?<!\\*)\\*{${word.length}}(?!\\*)`, "g");
        text = text.replaceAll(pattern, word);
    }

    console.log(text);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');



