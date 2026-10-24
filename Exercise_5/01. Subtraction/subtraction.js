function subtract() {

    const firstInput = document.getElementById("firstNumber");
    const secondInput = document.getElementById("secondNumber");

    // Достъпване на числовата стойност !!!
    const firstNumber = Number(firstInput.value);
    const secondNumber = Number(secondInput.value);

    const result = firstNumber - secondNumber;
    const resultNumber = document.getElementById('result');

    // запазване на числовата стойност от result в resultNumber
    // resultNumber.textContent = result.toString( );
    // resultNumber.innerText = result.toString( );
    resultNumber.textContent = result;
}