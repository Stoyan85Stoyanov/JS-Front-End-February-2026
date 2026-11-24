// function calc() {
    
//     let num1InputElement = document.getElementById('num1');
//     let num2InputElement = document.getElementById('num2');
//     let sumInputElement = document.getElementById('sum');

//     let num1 = Number(num1InputElement.value);
//     let num2 = Number(num2InputElement.value);

//     let sum = num1 + num2;
//     sumInputElement.value = sum;

// }



function calc() {
    
    const num1InputElement = Number(document.querySelector('#num1').value);
    const num2InputElement = Number(document.querySelector('#num2').value);

    document.getElementById('sum').value = num1InputElement + num2InputElement;

}