function deleteByEmail() {
   
    const emailTdElement = document.querySelectorAll('tr td:nth-child(2)');
    const emailInputElement = document.querySelector('input[name="email"]');
    const resultDivElement = document.querySelector('#result');

    // прочитане на стойността на input полето
    const email = emailInputElement.value.trim();

    let isFound = false;

    for (const tdElement of emailTdElement) {

        if (tdElement.textContent === email) {
            const trElement = tdElement.parentElement;
            trElement.remove();
            resultDivElement.textContent = 'Deleted.';
            isFound = true;
        }
    }  

    if (!isFound) {
        resultDivElement.textContent = 'Not found.';
    }
}
