function printEveryN_thElementFromAnArray(array, number) {

    const result = [];

    array.forEach((element, index) => {
        if (index % number === 0) {
            result.push(element);
        }
    });

     return result;   
}

// for(let i = 0; i < array.length; i += number) {
    //      result.push(array[i]);   
    // }

printEveryN_thElementFromAnArray(['5', '20', '31','4','20'], 2);
printEveryN_thElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2);
printEveryN_thElementFromAnArray(['1', '2', '3', '4', '5'], 6);