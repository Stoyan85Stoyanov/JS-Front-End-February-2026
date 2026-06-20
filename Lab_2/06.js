function countStringOccurrences(text, text_) {
     
    let test = text.split(' ').filter(word => word === text_);
    console.log(test.length);
    
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');



