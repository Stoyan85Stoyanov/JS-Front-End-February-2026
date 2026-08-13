// function countStringOccurrences(text, text_) {
     
//     let test = text.split(' ').filter(word => word === text_);
//     console.log(test.length);
    
// }


// function countStringOccurrences(text, text_) {

//     console.log(text.split(' ').filter(word => word === text_).length);
     
// }


function countStringOccurrences(word, text) {

    let count = 0;

    for (const words of word.split(' ')) {
        
        if (words === text) {
            count++;
        }
    }

    console.log(count);
}


countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');



