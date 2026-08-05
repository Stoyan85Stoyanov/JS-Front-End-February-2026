function addItem() {

    const ulElement = document.getElementById('items');

    const inputElement = document.getElementById('newItemText');

    const text = inputElement.value.trim();

    const newLiElement = document.createElement('li');

    newLiElement.textContent = text;

    ulElement.appendChild(newLiElement);

}


// function addItem() {

//     // селектиране на целият списък
//     const ulElement = document.getElementById('items');

//     // селектиране на инпут полето от него ще четем стойността
//     const inputElement = document.getElementById('newItemText');

//     // прочитане на текста !!!
//     const text = inputElement.value.trim();

//     // създаване на нов елемент
//     const newLiElement = document.createElement('li');

//     // вмъкване на текст в ново създаденият li element
//     newLiElement.textContent = text;

//     // за да се визуализира в браузера, трябва да се прикачи към DOM дървото 
//     ulElement.appendChild(newLiElement);

// }
