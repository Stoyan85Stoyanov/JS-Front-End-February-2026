// let cities = ['Blagoevgrad', 'Sofia', 'Varna', 'Burgas', 'Pomorie'];
// index           0            1         2
// Length: 3 

// console.log(cities[2]);

// смяна на индекс 
// cities[2] = 'Veliko Tarnovo';
// console.log(cities[2]);


// cities[6] = 'Shumen';
// console.log(cities);

// дължина на масива 
// console.log(cities.length);

// console.log(cities[4]);
// дава -- undefined

// първи индекс -> cities[0];
// последен индекс -> cities[cities.length -1];

// let city1 = cities[0];
// let city2 = cities[1];
// let city3 = cities[2];
// let city4 = cities[3];
// let city5 = cities[4];

// let [city1, city2, city3, city4, city5] = cities;

// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(city4);
// console.log(city5);


// let [city1, city2, ...beachCities] = cities;
// ... - rest operator (събира всички параметри на една функция в масив )

// console.log(city1);
// console.log(city2);
// console.log(beachCities);

// ако не се знае колко аргумента са !!!!
// function test(...args) {
//     console.log(args);    
// }

// test(5, 'Ivo', 'Stoyan');


// for(let city of cities) {
//     console.log(city);
// }

//-------------------------------------
//-------------------------------------

// Methods

// pop -> вади(премахва) последният елемент от масива / мутиращ метод - променя масива 
// cities.pop();

// има опция да се визуализира кой град сме премахнали 
// let removedCity = cities.pop();
// console.log(removedCity);

//-------------------------------------

// push -> добавя елемент в края на масива 
//    cities.push('Bansko', 'Smolqn');
//    console.log(cities);

//-------------------------------------

// shift -> вади(премахва) от началото на масива
// cities.shift();
// console.log(cities);

// има опция да се визуализира кой град сме премахнали 
// let removedCity = cities.shift();
// console.log(removedCity);

//-------------------------------------

// unshift -> добавя елемент в началото на масива 
//    cities.unshift('Bansko', 'Smolqn');
//    console.log(cities);

//-------------------------------------

// splice -> дабавя елементи на конкретен индекс / за премахване на елемент / заменя елемент
//    cities.splice(3, 1); // на 3 индекс изтрий 1 елемент
//    cities.splice(3, 1, 'Aitos'); // на 3 индекс изтрий 1 елемент и на негово място добави 
//    cities.splice(3, 0, 'Aitos'); // на 3 индекс изтрий 0 елемент и на негово място добави 
//    console.log(cities);


//-------------------------------------

// reverses -> обръща редът на елементите в масива 
//    cities.reverses();
//    console.log(cities);

//-------------------------------------

// join -> Създава и връща нов низ чрез конкатениране на всички елементи в масив 
// (или подобен на масив обект), разделени със запетаи или зададен разделителен низ 
// / не мутиращ метод - не променя масива 

//    console.log(cities.join(', '));

//-------------------------------------

// slice -> създава копие на масива или част от масива / не мутиращ метод - не променя масива 

// let beachCities = cities.slice(2, 4);
//    console.log(beachCities);

//-------------------------------------

// includes -> показва с true or false дали масива е съдържа някаква стойност или не
//    console.log(cities.includes('Petrich'));
//    console.log(cities.includes('Varna'));

//-------------------------------------

// indexOf -> ако намери елемента показва на кой индекс се намира
//    console.log(cities.indexOf('Varna'));

//-------------------------------------

// forEach -> изпълнява предоставена функция веднъж за всеки елемент от масива
// cities.forEach(city => console.log(city));

// function test(city) {
//     console.log(city);
// }

//-------------------------------------

// map -> трансформира масива и връща нов масив

// let numbers = [4, 5, -10, 2, 23];
// let doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers);

//-------------------------------------

// find -> използва се за намиране на някакъв елемент в масива, който отговаря на някакво условие
// -> find -> за едно съвпадение
// -> filter -> за повече от едно съвпадение

// let sevenLetterCity = cities.find(city => city.length === 6 );
// console.log(sevenLetterCity);

//-------------------------------------
//-------------------------------------

// Manipulating Strings

// -> Concatenating

// let name1 = "Hello my friend ";
// let name2 = "Stoyan";
// let result = name1.concat(name2);
// console.log(result);

//-------------------------------------

// -> indexOf 
// let text = "I am Stoyan";
// console.log(text.indexOf("S")); // Expected output: 5
// console.log(text.indexOf("s")); // Expected output: -1

//-------------------------------------

// -> lastIndexOf
// let text = "I am Stoyan"; 
// console.log(text.lastIndexOf("a")); // Expected output: 9

//-------------------------------------

// -> substring -> тук този метод работи по идентичен начин както slice, и двата дават еднакъв резултат(1 and 2)
// let str = "I am JavaScript developer";
// let sub = str.substring(5, 15); // 1 e по-умно от 2
// console.log(sub);

// let sub = str.slice(5, 15); // 2
// console.log(sub);

//-------------------------------------

// -> replace -> ще замести първото съвпадение
// let text = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";
// let replacedText = text.replace(".bg", ".com");
// console.log(replacedText);

//-------------------------------------

// -> split -> взима стринг и го разбива на масив
// let text = "I love fruits";
// let words = text.split(' ');
// console.log(words); // Expected output: ['I', 'love', 'fruits']

//-------------------------------------

// -> includes -> проверява дали даден стрин съществува в основният стринг
// let text = "I love fruits.";
// console.log(text.includes("fruits")); // Expected output: True
// console.log(text.includes("banana")); // Expected output: False

//-------------------------------------

// -> repeat -> повтаря даден стрнг определен брой пъти
// let srt = 'Ivan';
// console.log(srt.repeat(6));

//-------------------------------------

// -> trim -> за премахване на остатъчни интервали в стринга
// let text = " Annoying spaces ";
// console.log(text.trim()); // Expected output: "Annoying spaces"

//-------------------------------------

// -> trimStart -> премахва в началото остатъчни интервали 
// -> trimEnd -> премахва в края остатъчни интервали
// let text = " Annoying spaces ";
// text = text.trimStart(); 
// text = text.trimEnd();
// console.log(text); // Expected output: "Annoying spaces"

//-------------------------------------

// -> startsWith -> проверява се дали стринга започва с някакви конкретни букви или символи
// let text = "My name is John";
// console.log(text.startsWith('My')); // Expected output: true

//-------------------------------------

// -> endsWith -> провярява дали свършва с някакви конкретни букви или символи
// let text = "My name is John";
// console.log(text.endsWith('John')); // Expected output: true

//-------------------------------------

// -> padStart ->  първата стойност е общата дължината, а втората е какво ще се вкарва в началото
// let text = "010";
// console.log(text.padStart(8, '0')); // Expected output: 00000010

//-------------------------------------

// -> padEnd ->  първата стойност е общата дължината, а втората е какво ще се вкарва в края
// let sentence = "He passed away";
// console.log(sentence.padEnd(20, '.')); // Expected output: He passed away......


//-------------------------------------
//-------------------------------------

// Regular Expressions in JS


// Осигурява компилация при зареждане на скрипта
// let regLiteral = /[A-Za-z]+/g;

// let text = "Hello 123 world! JS_is-cool.";
// let matches = text.match(regLiteral);
// console.log(matches); // Expected output: [ 'Hello', 'world', 'JS', 'is', 'cool' ]

//-------------------------------------

// Осигурява компилация по време на изпълнение
// Използва се, когато шаблонът е от друг източник
// Почти не се използва, работи по-бавно освен в редки случаи (когато искаме да имаме нещо динамично в самият pattern '[A-Za-z]+') 

// Пример 1
// let regExp = new RegExp('[A-Za-z]+', 'g');

// let text = "User123 logged_in at 10:45PM on 02/03/2026.";
// let matches = text.match(regExp);
// console.log(matches); // Expected output: [ 'User', 'logged', 'in', 'at', 'PM', 'on' ]


// Пример 2
// let regExp = new RegExp('[A-Za-z0-9:/_]+', 'g');

// let text = "User123 logged_in at 10:45PM on 02/03/2026.";
// let matches = text.match(regExp);
// console.log(matches); // Expected output: [ 'User123', 'logged_in', 'at', '10:45PM', 'on', '02/03/2026' ]

//-------------------------------------

// The method test(string) -> Определя дали има съвпадение !!!

// let text = 'Today is 2015-05-11';
// let regexp = /\d{4}-\d{2}-\d{2}/g;
// let containsValidDate = regexp.test(text);
// console.log(containsValidDate); // Expected output: true

//-------------------------------------

// The method match(regexp) -> Връща масив от всички съвпадения (низове) !!!

// let text = 'Peter: 123 Mark: 456';
// let regexp = /([A-Z][a-z]+): (\d+)/g;
// let matches = text.match(regexp);

// console.log(matches); // Expected output: [ 'Peter: 123', 'Mark: 456' ]
// console.log(matches.length); // Expected output: 2
// console.log(matches[0]); // Expected output: Peter: 123
// console.log(matches[1]); // Expected output: Mark: 456

//-------------------------------------

// The method exec(string, text) 
// -> Дава много по-подробна информация от match но за едно съвпадение !!!
// -> Работи с указател и връща групите !!!

// const text = "Peter: 123 Mark: 456";
// const regexp = /([A-Z][a-z]+): (\d+)/g;
// const firstMatch = regexp.exec(text);

// console.log(firstMatch); // Expected output: ['Peter: 123', 'Peter', '123', index: 0, input: 'Peter: 123 Mark: 456', groups: undefined ]
// console.log(firstMatch[0]); // Expected output: Peter: 123
// console.log(firstMatch[1]); // Expected output: Peter
// console.log(firstMatch[2]); // Expected output: 123

//-------------------------------------

// The method matchAll(regexp) 
// -> Връща цялата информация за всички съвпадения!!!

// const text = "Peter: 123 Mark: 456";
// const regexp = /([A-Z][a-z]+): (\d+)/g;
// const matches = text.matchAll(regexp);

// console.log(matches); // Expected output: Object [RegExp String Iterator] {}

// console.log(Array.from(matches)); 
// Expected output: 
// [
//   [
//     'Peter: 123',
//     'Peter',
//     '123',
//     index: 0,
//     input: 'Peter: 123 Mark: 456',
//     groups: undefined
//   ],
//   [
//     'Mark: 456',
//     'Mark',
//     '456',
//     index: 11,
//     input: 'Peter: 123 Mark: 456',
//     groups: undefined
//   ]
// ]

// ВАЖНО: За да се види пълната информация следваме следните стъпки:
// 1. Дописваме в: console.log(matches); за да стане така: console.log(Array.from(matches));
// 2. След изпълнение ще се види това като краен резултат: 
// [
//   [
//     'Peter: 123',
//     'Peter',
//     '123',
//     index: 0,
//     input: 'Peter: 123 Mark: 456',
//     groups: undefined
//   ],
//   [
//     'Mark: 456',
//     'Mark',
//     '456',
//     index: 11,
//     input: 'Peter: 123 Mark: 456',
//     groups: undefined
//   ]
// ]

//-------------------------------------

// The method replace(regexp, stringReplacement) 
// -> Заменя всички низове при прилагане на глобален флаг /g, 
// които съответстват на шаблона, с предоставения заместител !!!

// const text = 'Peter: 123 Mark: 456';
// const replacement = '999';
// const regexp = /\d{3}/g;
// const result = text.replace(regexp, replacement); 

// console.log(result); // Expected output: Peter: 999 Mark: 999

//-------------------------------------

// The method split(regexp) 
// -> Разделя текста по шаблон !!!
// -> Връща масив от низове !!!

// let text = '1  2 3     4';
// let regexp = /\s+/g;
// let result = text.split(regexp);

// console.log(result) // Expected output: ['1', '2', '3', '4'];

//-------------------------------------
