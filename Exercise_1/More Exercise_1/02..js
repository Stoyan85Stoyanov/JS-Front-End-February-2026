function wordsUppercase(input) {

    console.log(input.toUpperCase().split(/[^A-Z0-9]+/).filter(w => w).join(', '));
    
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');