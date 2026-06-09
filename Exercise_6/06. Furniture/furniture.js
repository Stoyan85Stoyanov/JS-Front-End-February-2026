document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const generateBtn = document.querySelector('#input input[type="submit"]');
    const buyBtn = document.querySelector('#shop input[type="submit"]');

    const inputArea = document.querySelector('#input textarea');
    const outputArea = document.querySelector('#shop textarea');
    const tbody = document.querySelector('tbody');

    generateBtn.addEventListener('click', onGenerate);
    buyBtn.addEventListener('click', onBuy);

    function onGenerate(event) {
        event.preventDefault();

        const data = JSON.parse(inputArea.value);

        data.forEach(item => {
            const tr = document.createElement('tr');

           
            const tdImg = document.createElement('td');
            const img = document.createElement('img');
            img.src = item.img;
            tdImg.appendChild(img);

          
            const tdName = document.createElement('td');
            const pName = document.createElement('p');
            pName.textContent = item.name;
            tdName.appendChild(pName);

          
            const tdPrice = document.createElement('td');
            const pPrice = document.createElement('p');
            pPrice.textContent = item.price;
            tdPrice.appendChild(pPrice);

           
            const tdDec = document.createElement('td');
            const pDec = document.createElement('p');
            pDec.textContent = item.decFactor;
            tdDec.appendChild(pDec);

       
            const tdCheck = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            tdCheck.appendChild(checkbox);

            tr.appendChild(tdImg);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdDec);
            tr.appendChild(tdCheck);

            tbody.appendChild(tr);
        });
    }

    function onBuy(event) {
        event.preventDefault();

        const rows = Array.from(tbody.querySelectorAll('tr'));

        const bought = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        rows.forEach(row => {
            const checkbox = row.querySelector('input[type="checkbox"]');

            if (checkbox && checkbox.checked) {
                const name = row.children[1].textContent;
                const price = Number(row.children[2].textContent);
                const decFactor = Number(row.children[3].textContent);

                bought.push(name);
                totalPrice += price;
                totalDecFactor += decFactor;
            }
        });

        const avgDecFactor = totalDecFactor / bought.length;

        outputArea.value =
            `Bought furniture: ${bought.join(', ')}\n` +
            `Total price: ${totalPrice}\n` +
            `Average decoration factor: ${avgDecFactor}`;
    }
}



