document.addEventListener('DOMContentLoaded', focused);

function focused() {

    const allInputElements = document.querySelectorAll('input[type="text"]');

    for (const inputElement of allInputElements) {
        inputElement.addEventListener('focus', addFocusedClass);
        inputElement.addEventListener('blur', removeFocusedClass);
    }


    function addFocusedClass(event) {
        event.target.parentElement.classList.add('focused');
    }


    function removeFocusedClass(event) {
        event.target.parentElement.classList.remove('focused');
    }
}
