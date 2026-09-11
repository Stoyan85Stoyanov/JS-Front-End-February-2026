// function modernTimesOfHashTag(text) {

//     const pattern = /#(?<tag>[a-zA-Z]+)\b/gm;

//     for (const match of text.matchAll(pattern)) {

//         let current = match.groups.tag;
//         console.log(current); 
//     }
// }


function modernTimesOfHashTag(inputText) {

    let pattern = /#([a-zA-Z]+)/g

    const matches = inputText.matchAll(pattern);

    for (const match of matches) {
        console.log(match[1]);
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');



