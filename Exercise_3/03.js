
/**
    * @param {string} charOne
    * @param {string} charTwo
    */

function charactersInRange(charOne, charTwo) {

    /**
        * @param {number} from
        * @param {number} to
        */

    function getCharactersBetween(from, to) {

        const result = [];

        for (let i = from + 1; i < to; i++) {
            result.push(String.fromCodePoint(i));

        }

        return result.join(" ");
    }

    const charFirst = charOne.codePointAt(0);
    const charSecond = charTwo.codePointAt(0);

    let outputResult;

    if (charFirst < charSecond) {

        outputResult = getCharactersBetween(charFirst, charSecond);

    } else {

        outputResult = getCharactersBetween(charSecond, charFirst);
    }

    console.log(outputResult);
}

// let start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
// let end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

// let result = [];

// for (let i = start + 1; i < end; i++) {
//     result.push(String.fromCodePoint(i));
// }

// console.log(result.join(' '));


charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');