function pascalCaseSplitter(text) {

    const pattern = /[A-Z][a-z]*/gm;

    let words = Array.from(text.matchAll(pattern));

    console.log(words.join(", "));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');