document.addEventListener('DOMContentLoaded', solve);

function solve() {

    // Избира първата форма с id "task-input"
   const formElement = document.querySelector("form#task-input");
   // Избира входното поле от типа текст в тази форма
   const inputElement = formElement.querySelector("input[type='text']");
   // Избира контейнера с id "content", където ще се добавят новите секции
   const contentElement = document.querySelector("div#content");

   // Функция, която създава нова секция с даденото заглавие
   function createSection(title) {

       // Създава нов параграф и задава текст в него (заглавие на секцията)
      const paragraph = document.createElement("p");
      paragraph.textContent = title;

      // скриване на параграфа
      paragraph.style.display = "none";

      // Създава нов контейнер за секцията (div)
      const container = document.createElement("div");
      // Добавя параграфа в контейнера
      container.appendChild(paragraph);

     // Добавя слушател за събитие "click" към контейнера
      container.addEventListener("click", (event) => {
         event.preventDefault(); // Предотвратяваме презареждането на страницата
         event.stopPropagation(); // Спираме събитието да се разпространява

         // Когато контейнерът се кликне, параграфът става видим
         paragraph.style.display = "";
      });

      // Добавя контейнера със секцията към основния елемент, където ще се показват секциите
      contentElement.appendChild(container);
   }

   // Добавя слушател за събитие "submit" на формата
   formElement.addEventListener("submit", (event) => {
      event.preventDefault(); // Предотвратяваме презареждането на страницата
      event.stopPropagation(); // Спираме събитието да се разпространява

      // Взима стойността на текста от входното поле (това ще бъдат имената на секциите)
      const value = inputElement.value;
      // Разделя стойността на входа на секции, като използва запетая и интервал ", " като разделител
      const sections = value.split(", ");

      // за да не се създават нови секции
      contentElement.textContent = "";

      // За всяка секция, която е изброена, създаваме нова секция (съответно нов параграф)
      sections.forEach(createSection);
   });
}
