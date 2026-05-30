function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let step = 0;
    let currentBase = base;

    while (currentBase > 2) {
        step++;

        let outerLayer = currentBase * 4 - 4; 
        let innerLayer = (currentBase - 2) * (currentBase - 2);

        stone += innerLayer * increment;

        if (step % 5 === 0) {
            lapis += outerLayer * increment;

        } else {
            marble += outerLayer * increment;
        }

        currentBase -= 2;
    }

    step++;
    gold += currentBase * currentBase * increment;

    let finalHeight = step * increment;

    // Връща най-малкото цяло число, по-голямо или равно на числовия си аргумент.
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    // Връща най-голямото цяло число, по-малко или равно на числовия си аргумент.
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`); 
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);