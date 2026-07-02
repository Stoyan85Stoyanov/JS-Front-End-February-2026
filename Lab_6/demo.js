// document.createElement --> извиква factory pattern (фабрика за обекти)

// Когато запазваме тези обекти в една променлива те са 'живи', 
// следователно ако пипнем някой от техните свойства това ще се отрази в браузера


// селектиране на <div> в demo.html
const contentDivElement = document.getElementById('main-content');
const nameUlElement = document.getElementById('names-list');
// const nameP_Element = document.getElementById('person-name');


nameUlElement.addEventListener('click', handleUlClick); 

function handleUlClick(event) {
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
    
}


//създаване на нов елемент в случая <p>
// const ageP_Element = document.createElement('p');

//задаване на стойност на <p>
// ageP_Element.textContent = 36;

// за да се визуализира в браузера (DOM дървото)
// contentDivElement.appendChild(ageP_Element);
// Pen40

// 36

// за да се визуализира в браузера (DOM дървото) но преди <div>
// contentDivElement.prepend(ageP_Element);
// 36

// Pen40

// за да го вкарам в един bold tag 
// contentDivElement.innerHTML = '<b>hristoooooooo</b>'; // текста hristoooooooo е болднат
// contentDivElement.textContent = '<b>hristoooooooo</b>'; // <b>hristoooooooo</b>

// клониране на елемент чрез cloneNode --> новото копие не е в DOM дъвото, трябва да се вкара 

// изтриване на елемент
// ageP_Element.remove();

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

// DOM Event --> Event Object(съдържа свойства, които описват събитието)

// ------------------------------------------------------------

// Event Types in DOM API

// Mouse events    
// click
// mouseover
// mouseout
// mousedown
// mouseup

// Keyboard events
// keydown
// Keypress
// keyup

// Touch events
// touchstart
// touchend
// touchmove
// touchcancel

// Focus events
// focus (got focus)
// blur (lost focus)

// DOM / UI events
// load
// unload
// resize
// dragstart / drop

// Form events
// input
// change
// submit
// reset

// ------------------------------------------------------------

// Event Handling --> за да можем да регистрираме някакво събитие се използва callback function която се нарича Event Handler 
