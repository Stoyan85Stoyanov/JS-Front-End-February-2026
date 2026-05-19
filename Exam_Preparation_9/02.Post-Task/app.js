window.addEventListener("load", solve);

function solve() {

    const taskTitleInputElement = document.getElementById("task-title");
    const taskCategoryInputElement = document.getElementById("task-category");
    const taskContentTextareaElement = document.getElementById("task-content");

    const publishButtonElement = document.getElementById("publish-btn");

    const reviewListUlElement = document.getElementById("review-list");
    const publishedListUlElement = document.getElementById("published-list");

    publishButtonElement.addEventListener("click", handlePublish);

    function handlePublish(event) {
        event.preventDefault();

        const taskTitle = taskTitleInputElement.value.trim();
        const taskCategory = taskCategoryInputElement.value.trim();
        const taskContent = taskContentTextareaElement.value.trim();

        if (!taskTitle || !taskCategory || !taskContent) {
            return;
        }

        const liElement = document.createElement("li");
        liElement.classList.add("rpost");

        const articleElement = document.createElement("article");

        const taskTitleH4Element = document.createElement("h4");
        taskTitleH4Element.textContent = `${taskTitle}`;

        const taskCategoryPElement = document.createElement("p");
        taskCategoryPElement.textContent = `Category: ${taskCategory}`;

        const taskContentPElement = document.createElement("p");
        taskContentPElement.textContent = `Content: ${taskContent}`;

        const editButtonElement = document.createElement("button");
        editButtonElement.classList.add("action-btn", "edit");
        editButtonElement.textContent = "Edit";

        const postButtonElement = document.createElement("button");
        postButtonElement.classList.add("action-btn", "post");
        postButtonElement.textContent = "Post";

        articleElement.appendChild(taskTitleH4Element);
        articleElement.appendChild(taskCategoryPElement);
        articleElement.appendChild(taskContentPElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(postButtonElement);

        reviewListUlElement.appendChild(liElement);

        taskTitleInputElement.value = "";
        taskCategoryInputElement.value = "";
        taskContentTextareaElement.value = "";

        editButtonElement.addEventListener("click", handleEdit);
        postButtonElement.addEventListener("click", handlePost);


        function handleEdit() {
            taskTitleInputElement.value = taskTitleH4Element.textContent;
            taskCategoryInputElement.value = taskCategoryPElement.textContent
                .replace("Category: ", "");
            taskContentTextareaElement.value = taskContentPElement.textContent
                .replace("Content: ", "");


            liElement.remove();
        }

        function handlePost() {
            publishedListUlElement.appendChild(liElement);

            editButtonElement.remove();
            postButtonElement.remove();
        }
    }
}