function extract(content) {
    
    const element = document.getElementById(content);
    const text = element.textContent;

    const pattern = /\(.*?\)/g;

    const matches = text.match(pattern);
    
    return matches.map(match => match.slice(1, -1)).join('; ');
}