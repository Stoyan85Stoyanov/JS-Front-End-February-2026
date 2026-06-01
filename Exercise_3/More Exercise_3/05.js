function printDNA(number) {

    const sequence = "ATCGTTAGGG";
    let index = 0;

    function getChar() {
        let char = sequence[index % sequence.length];
        index++;
        return char;
    }

    for (let i = 0; i < number; i++) {

        if (i % 4 === 0) {
            console.log("**" + getChar() + getChar() + "**");

        } else if (i % 4 === 1) {
            console.log("*" + getChar() + "--" + getChar() + "*");

        } else if (i % 4 === 2) {
            console.log(getChar() + "----" + getChar());

        } else {
            console.log("*" + getChar() + "--" + getChar() + "*");
        }
    }
}

printDNA(4);
printDNA(10);