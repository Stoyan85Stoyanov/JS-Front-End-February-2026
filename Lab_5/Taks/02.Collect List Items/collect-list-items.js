function extractText() {

    let liHtmlEls = document.querySelectorAll('li');
    let textareaEl = document.querySelector('#result');

    for (let liEl of liHtmlEls) {

        let textHtml = liEl.textContent;
        textareaEl.textContent += textHtml + '\n';
        // textareaEl.textContent += textHtml + '\u000A';
    }
}