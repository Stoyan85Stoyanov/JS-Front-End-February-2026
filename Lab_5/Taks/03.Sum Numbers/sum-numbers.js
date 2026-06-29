function calc() {
    
    let num1InputElement = document.getElementById('num1');
    let num2InputElement = document.getElementById('num2');
    let sumInputElement = document.getElementById('sum');

    let num1 = Number(num1InputElement.value);
    let num2 = Number(num2InputElement.value);

    let sum = num1 + num2;
    sumInputElement.value = sum;

}