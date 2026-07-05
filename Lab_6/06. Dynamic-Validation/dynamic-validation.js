document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const emailInputElement = document.getElementById('email');
    emailInputElement.addEventListener('change', handleEmailChange);

    function handleEmailChange() {

        const email = emailInputElement.value.trim();
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

        if (!pattern.test(email)) {
            emailInputElement.classList.add('error');

        } else {
            emailInputElement.classList.remove('error');

        }
    }
}
