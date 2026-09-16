// function pascalCaseSplitter(text) {

//     const pattern = /[A-Z][a-z]*/gm;

//     let words = Array.from(text.matchAll(pattern));

//     console.log(words.join(", "));

// }


// function pascalCaseSplitter(singleString) {

//     const pattern = /[A-Z][a-z]*/gm;

//     let words = Array.from(singleString.matchAll(pattern));

//     console.log(words.join(", "));

// }



function pascalCaseSplitter(singleString) {

    let currentWord = singleString[0];
    let words = [];

    for (let i = 1; i < singleString.length; i++) {

        const currentCharacter = singleString[i];

        if (currentCharacter === currentCharacter.toUpperCase()) {
            words.push(currentWord);
            currentWord = currentCharacter;

        } else {
            currentWord += currentCharacter;
            continue;
        }
    }

    words.push(currentWord);

    console.log(words.join(', '));
}


pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');