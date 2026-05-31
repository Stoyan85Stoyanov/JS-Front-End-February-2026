function loadingBar(numberPercentage) {

    function repeat(character, count) {
        return Array.from({ length: count }, () => character).join("");

    }

    function statusNumber(complete, empty) {
        return `[${repeat("%", complete)}${repeat(".", empty)}]`
    }

    let result = numberPercentage / 10;  // [0, 10]

    if (result < 10) {
        console.log(`${numberPercentage}% ${statusNumber(result, 10 - result)}`);
        console.log("Still loading...");
        
    } else {
        console.log(`${numberPercentage}% Complete!`);
        console.log(statusNumber(result, 0));
        
    }

}

loadingBar(30);
loadingBar(50);
loadingBar(100);