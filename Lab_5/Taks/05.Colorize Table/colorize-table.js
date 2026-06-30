function colorize() {
    
    let evenElements = document.querySelectorAll('tbody tr:nth-child(even)');

    for (let elements of evenElements) {
        elements.style.backgroundColor = 'teal';
        // elements.style.backgroundColor = '#008081'; // работи но judge не го приема !!!
    }
}