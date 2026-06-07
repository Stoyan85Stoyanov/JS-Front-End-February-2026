document.addEventListener('DOMContentLoaded', solve);

// function solve() {

//     const metrics = {
//         days: 86400,
//         hours: 3600,
//         minutes: 60,
//         seconds: 1,
//     };


//     const forms = Array.from(document.querySelectorAll("form"));
//     const numberInput = forms.map((form) => form.querySelector("input[type='number']"));

//     forms.forEach((form, i) => {
       
//         form.addEventListener("submit", (event) => {
//             event.preventDefault();
//             event.stopPropagation();

//             const valueMetric = Number(numberInput[i].value);
//             const valueInSeconds = valueMetric * metrics[form.id];

//             for (let j = 0; j < forms.length; j++) {
//                 numberInput[j].value = (valueInSeconds / metrics[forms[j].id]).toFixed(2);
//             }
//         });
//     });
// }

function solve() {
    const metrics = {
        days: 86400, // секунди за ден
        hours: 3600, // секунди за час
        minutes: 60, // секунди за минута
        seconds: 1,  // секунди за секунда
    };

    // Вземаме всички форми на страницата
    const forms = document.querySelectorAll("form");

    // За всяка форма
    forms.forEach((form) => {
        // Вземаме числовото поле за въвеждане в текущата форма
        const numberInput = form.querySelector("input[type='number']");

        // При изпращане на формата
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Предотвратяваме презареждането на страницата
            event.stopPropagation(); // Спираме събитието да се разпространява

            // Вземаме стойността от полето за вход (в текущата единица)
            const valueMetric = Number(numberInput.value);

            // Преобразуваме стойността в секунди
            const valueInSeconds = valueMetric * metrics[form.id];

            // Пресмятаме стойността за всяка форма и я записваме обратно в полето
            forms.forEach((otherForm) => {
                const otherInput = otherForm.querySelector("input[type='number']");
                otherInput.value = (valueInSeconds / metrics[otherForm.id]).toFixed(2);
            });
        });
    });
}