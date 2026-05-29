function modernTimesOfHashTag(text) {

    const pattern = /#(?<tag>[a-zA-Z]+)\b/gm;

    for (const match of text.matchAll(pattern)) {

        let current = match.groups.tag;
        console.log(current); 
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');



