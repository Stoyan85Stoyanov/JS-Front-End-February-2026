async function loadCommits() {

    const usernameInputElement = document.getElementById('username');
    const repoInputElement = document.getElementById('repo');
    const commitUlElement = document.getElementById('commits');

    const username = usernameInputElement.value.trim();
    const repo = repoInputElement.value.trim();

    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);

    
    commitUlElement.innerHTML = '';

    if (!response.ok) {
        const liElement = document.createElement('li');
        //  liElement.textContent = `Error: ${response.status} (${response.statusText})`;
        liElement.textContent = `Error: ${response.status} (Not Found)`;
        commitUlElement.appendChild(liElement);
        return;
    }


    const data = await response.json();

    for (let commitObject of data) {

        const liElement = document.createElement('li');
        liElement.textContent = `${commitObject.commit.author.name}: ${commitObject.commit.message}`;

        commitUlElement.appendChild(liElement);
    }
}
