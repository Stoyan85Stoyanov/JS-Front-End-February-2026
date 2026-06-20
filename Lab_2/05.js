function censoredWords(text, text_) {

    let starTemplate = '*'.repeat(text_.length);
    text = text.replaceAll(text_, starTemplate);
    console.log(text);
    
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');