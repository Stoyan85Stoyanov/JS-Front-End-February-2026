// Synchronous vs Asynchronous 
//--------------------------------------------------------
//---------------------------------------------------------
// Каква е разликата м/у Synchronous vs Asynchronous? 

// При Synchronous --> ако имаме една операция трябва да изчакаме тя да свърши,
// и тогава идва следващата операция и т.н 

// При Asynchronous --> може да имаме няколко процеса които да се изпълняват паралено

//--------------------------------------------------------

// Asynchronous се е осъществявало чрез callback functions

// Чрез тези трите може да се осъществи Asynchronous
// ▪ Callbacks - преди
// ▪ Promises - сега 
// ▪ Async Functions - последно като въведение

//---------------------------------------------------------
// JS --> има само една нишка
//---------------------------------------------------------

// Пример за Callbacks   
// addBtnElement.addEventListener('click', handleAddProduct);
// В този случай Callbacks е handleAddProduct, който ще се изпълни едва когато се задейства 
// event 'click'

//---------------------------------------------------------
//---------------------------------------------------------

// Promises --> е асинхронно действие, което може да завърши в даден момент и да генерира стойност

// States:
// ▪ Pending - операцията все още се извършва и ч изчакваме
// ▪ Fulfilled - операцията е била успешна (получи ли сме данните които сме търсили)
// ▪ Rejected - нещо се обърка (не са намерени данните които сме търсили)

// Как се създава Promises?
// чрез клучовата дума new
// new Promise(executor);
// executor --> функция, която приема други две функции

//---------------------------------------------------------
// изпълнява се веднага
// let promise  = new Promise(function(resolve, reject) {
//      setTimeout(() => {
//         resolve("all is good");
//         console.log(promise);
//      }, 2000);
// })

// console.log(promise);
//---------------------------------------------------------

//---------------------------------------------------------
// изпълнява се веднага
// let promise1  = new Promise(function(resolve, reject) {
//      setTimeout(() => {
//         reject("there was a problem");
//         console.log(promise1);
//      }, 2000);
// })

// console.log(promise1);
//---------------------------------------------------------

//---------------------------------------------------------
// изчаква се 2000мсек и тогава се изпълнява 
// let promise  = new Promise(function(resolve, reject) {
//      setTimeout(() => {
//         resolve("all is good");
//      }, 2000);
// })

// // then --> изчакай promise да се резолвне и тогава вземи стойността която е пратил
// promise.then(value => console.log('result: ', value));
//---------------------------------------------------------

//---------------------------------------------------------
// изчаква се 2000мсек и тогава се изпълнява 
// let promise1  = new Promise(function(resolve, reject) {
//      setTimeout(() => {
//         reject("there was a problem");
//      }, 2000);
// })

// promise1.catch(error => console.log('result: ', error));
//---------------------------------------------------------

//---------------------------------------------------------
// Synchronous code - се изпълнява преди Asynchronous code !!!!!!!!
//---------------------------------------------------------

// // има методи които се изпълняват веднага
// let promise = Promise.reject('test');
// // let promise1 = Promise.reject('test');


// promise
// .then(value => console.log('result: ', value))
// .catch(error => console.log('Errorrrrrrrrrrrr: ', error))
// .finally(() => console.log('everything finished')); // изпълнява се винаги 



// .all(); // връща няколко promise ако resolve всичките и all ще резолвне 
// let promise1 = Promise.resolve('test1');
// let promise2 = Promise.resolve('test2');
// let promise3 = Promise.reject('test3');

// Promise.all([promise1, promise2, promise3])
//       .then(result => console.log(result)) // ако всичките са resolve
//       .catch(error => console.log('Errorrrrrrrrrrrr: ', error)); // ако само един reject останалите не се проверяват
 
//---------------------------------------------------------
//---------------------------------------------------------

// AJAX and Fetch API

// AJAX => Asynchronous JavaScript And XML 
// (използва се да се изпраща заявка към сървъра и той да връща динамично съдържание)

// Fetch API => по удобен начин ни позволява да правим заявки (използва Promises)