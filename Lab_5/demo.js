// Browser API 
// --> е интерфейс който ни позволява да комуникираме 
// и взаимодействаме с браузера

//--------------------------------------------------------------

// Browser Object Model (BOM)
// --> като глобален обект е window

//--------------------------------------------------------------

// Document Object Model (DOM) -- > DOM дърво
// --> Текущата страница с всички html елементи в нея 
// --> Идеята на DOM дърво е: Взимаме всички html елементи и получаваме достъп в JS чрез обекти
// --> Може да се модифицира страницат по този начин

//--------------------------------------------------------------

// DOM Methods 
// --> Позволяват ни да извършваме действия върху HTML елементите

// DOM Properties
// --> Информация за тези елементи, а НЕ действия

//--------------------------------------------------------------

// Как може да се има достъп до html чрез JS като обект !!!!!
// В инспектора на браузера в секция Console се изписва следната информация:

// > document.getElementById('title')
// << h1 id="title">Stoyan</h1>
// > let titleEl =
// document.getElementById('title')
// undefined
// > console.log(titleEl)
// <h1 id="title">Stoyan</h1>
// > console.log(titleEl.textContent)
// Stoyan

//--------------------------------------------------------------

// ВАЖНО: Не е добра идея да се смесват html с JS code !!!!!!!!!!!

//--------------------------------------------------------------

// Как се импортва външен js файл в html ?
// Прави се в html в <head>  ( <script src="./script.js"></script> )

//--------------------------------------------------------------

// Attributes --> <input type="text" value="Nikolay" />

//(divEl.innerHTML)

// > divEl
// <· <div id="container"></div>
// > divEl.innerHTML =< p>happiness</p>'
// <. '<p>happiness</p>'

// Визуализира се в браузера --> happiness като </p>

//--------------------------------------------------------------

//(divEl.innerHTML)

// > divEl
// <· <div id="container"></div>
// > divEl.innerHTML =< p>happiness</p>'
// <. '<p>happiness</p>'
// > divEl.innerHTML =< h2>happiness</h2>'
// <. '<h2>happiness</h2>'

// Визуализира се в браузера --> happiness като <h2>

//--------------------------------------------------------------

//(divEl.textContent)

// > divEl
// <· <div id="container"></div>
// > divEl.innerHTML =< p>happiness</p>'
// <. '<p>happiness</p>'
// > divEl.innerHTML =< h2>happiness</h2>'
// <. '<h2>happiness</h2>'
// > divEl.textContent = <h2>happiness</h2>'
// <. '<h2>happiness</h2>

// Визуализира се в браузера --> <h2>happiness</h2> като текст

//--------------------------------------------------------------

// > inputEl.value
// <. 'Nikolay'


// > inputEl. type
// <. 'text'

//--------------------------------------------------------------

// Сменяне на стойността 

// > inputEl.value = 25
// <. 25

//--------------------------------------------------------------

// This will be parsed – beware of XSS attacks!

//--------------------------------------------------------------

// Затрива старият ul !!!

// > let ulEl = document.getElementById('list')
// ulEl.textContent = 'nz'

//--------------------------------------------------------------

// Targeting DOM Elements

// --> By ID - getElementById()
// --> By class name - getElementsByClassName() -> връща колекция от елементи
// --> By tag name - getElementsByTagName()
// --> By CSS selector - querySelector(), querySelectorAll()

//--------------------------------------------------------------

// Using the DOM API

// Трябва да се внимава с реда на зареждане !!!!
// --> При изпълнение на: 
// let divEl = document.getElementById('container');
// console.log(divEl); 
// На конзолата се изписва null, защото все още не е създаден !!
// За решаване на този проблем в <script src="./script.js" defer></script> се дописва defer (изчакай) 
// С това се изпълнява първо html и след това <script src="./script.js" defer></script>

//--------------------------------------------------------------

// Скриване на елементи чрез JS code - script.js!!!
// divEl.style.display = 'none';

// Показване на елементи чрез JS code - script.js!!!
// divEl.style.display = 'block';

//--------------------------------------------------------------

// Селектиране на конкретно дете  -- <p>!!!!

// let secondPEL = document.querySelectorAll('p')[1];
// console. log(secondPELD;

// let secondPEL = document.querySelector('p:nth-child(2)';
// console.log(secondPEL);

//--------------------------------------------------------------