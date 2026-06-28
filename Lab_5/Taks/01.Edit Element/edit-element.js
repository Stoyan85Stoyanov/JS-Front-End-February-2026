function editElement(htmlEl, strToFind, replacer) {
    
    let originalHtmlText = htmlEl.textContent;
    let updateText = originalHtmlText.replaceAll(strToFind, replacer);
    
    htmlEl.textContent = updateText;
}