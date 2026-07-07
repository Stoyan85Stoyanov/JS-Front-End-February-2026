async function loadRepos() {
	
	// const usernameInputElement = document.getElementById('username');
	// const reposUlElement = document.getElementById('repos');

	// // прочитане на самото поле
    // const username = usernameInputElement.value.trim();

	// const res = await fetch(`https://api.github.com/users/${username}/repos`);

	// // превръщане в обект
    // const data = await res.json();

	// reposUlElement.innerHTML = '';

	// // прилагане на DOM операции
	// for (let repoObject of data) {
	// 	const liElement = document.createElement('li');
	// 	const aElement = document.createElement('a'); 

	// 	aElement.textContent = repoObject.full_name;
	// 	aElement.href = repoObject.html_url;

	// 	liElement.appendChild(aElement);
	// 	reposUlElement.appendChild(liElement);
	// }

	const usernameInputElement = document.getElementById('username');
    const reposUlElement = document.getElementById('repos');
    const username = usernameInputElement.value.trim(); 

    // Изпращане на AJAX заявка към GitHub API
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        
        // Ако има грешка (например 404), хвърляме изключение
        if (!res.ok) {
            throw new Error('User not found');
        }

        // Ако заявката е успешна, преобразуваме JSON отговора
        const data = await res.json();
        
        // Изчистваме старото съдържание
        reposUlElement.innerHTML = '';

        // Проверка дали има репозитории
        if (data.length === 0) {
            const liElement = document.createElement('li');
            liElement.textContent = 'Not Found';
            reposUlElement.appendChild(liElement);

        } else {

            // Добавяне репозитори в списъка
            for (let repoObject of data) {
                const liElement = document.createElement('li');
                const aElement = document.createElement('a');
                
                aElement.textContent = repoObject.full_name;
                aElement.href = repoObject.html_url; 

                liElement.appendChild(aElement);
                reposUlElement.appendChild(liElement);
            }
        }

    } catch (error) {
        // Ако възникне грешка (например, потребителят не е намерен)
        reposUlElement.innerHTML = ''; // Изчистваме старото съдържание
        const liElement = document.createElement('li');
        liElement.textContent = 'User not found or error occurred';
        reposUlElement.appendChild(liElement);
    }
} 