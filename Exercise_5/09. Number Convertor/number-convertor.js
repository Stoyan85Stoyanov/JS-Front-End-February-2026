function solve() {

    // const inputNumber = Number(document.getElementById('input').value);
    // const selectedNumericSystem = document.getElementById('selectMenuTo').value;

    // const convertors = {
    //     binary: convertToBinary,
    //     hexadecimal: convertToHexadecimal,
    // }

    // const result = convertors[selectedNumericSystem](inputNumber);
    // document.getElementById('result').value = result;

    // function convertToBinary(number) {
    //     return number.toString(2);
    // }


    // function convertToHexadecimal(number) {
    //     return number.toString(16).toUpperCase();
    // }


    const number = getInputNumber();
    const system = getSelectedSystem();

    const result = convertNumber(number, system);

    showResult(result);

    function getInputNumber() {
        return Number(document.getElementById('input').value);
    }

    function getSelectedSystem() {
        return document.getElementById('selectMenuTo').value;
    }

    function convertNumber(number, system) {

        if (system === 'binary') {
            return number.toString(2);

        } else if (system === 'hexadecimal') {
            return number.toString(16).toUpperCase();
        }
    }

    function showResult(result) {
        document.getElementById('result').value = result;

    }

}

