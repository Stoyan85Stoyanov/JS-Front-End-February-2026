function storeUniqueArrays(input) {

    const number = new Map(); 

    input.forEach((str, index) => {
        let array = JSON.parse(str);

        // възходящ ред
        let sorted = [...array].sort((x, y) => x - y);
        let key = JSON.stringify(sorted);

        if (!number.has(key)) {
            number.set(key, { arr: sorted, index });
        }
    });

    let resultNumber = Array.from(number.values());

    resultNumber.sort((x, y) => {

        if (x.arr.length !== y.arr.length) {
            return x.arr.length - y.arr.length;
        }
        return x.index - y.index;
    });

    resultNumber.forEach(object => {
        let desc = [...object.arr].sort((a, b) => b - a);
        console.log(`[${desc.join(', ')}]`);
    });
}


// storeUniqueArrays(
//     ["[-3, -2, -1, 0, 1, 2, 3, 4]",
//         "[10, 1, -17, 0, 2, 13]",
//         "[4, -3, 3, -2, 2, -1, 1, 0]"]
// );

storeUniqueArrays(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
);
