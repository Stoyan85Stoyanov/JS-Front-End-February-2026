// function extractText() {

//     let liHtmlEls = document.querySelectorAll('li');
//     let textareaEl = document.querySelector('#result');

//     for (let liEl of liHtmlEls) {

//         let textHtml = liEl.textContent;
//         textareaEl.textContent += textHtml + '\n';
//         // textareaEl.textContent += textHtml + '\u000A';
//     }
// }



function extractText() {

    const liHtmlElements = document.querySelectorAll('li');
    const textareaElement = document.getElementById('result');


    // textareaElement.value = [...liHtmlElements].map(el => el.textContent.trim()).join('\n');
    textareaElement.value = Array.from(liHtmlElements, el => el.textContent.trim()).join('\n');
}