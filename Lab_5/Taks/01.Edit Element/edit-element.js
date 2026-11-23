// function editElement(htmlEl, strToFind, replacer) {
    
//     let originalHtmlText = htmlEl.textContent;
//     let updateText = originalHtmlText.replaceAll(strToFind, replacer);
    
//     htmlEl.textContent = updateText;
// }



function editElement(htmlEl, strToFind, replacer) {
     
    htmlEl.textContent = htmlEl.textContent.replaceAll(strToFind, replacer);
}