function attachEvents() {

    const postsUrl = "http://localhost:3030/jsonstore/blog/posts";
    const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";

    const loadPostsButton = document.getElementById("btnLoadPosts");
    const postsSelect = document.getElementById("posts");
    const viewPostButton = document.getElementById("btnViewPost");
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const commentsList = document.getElementById("post-comments");

    
    loadPostsButton.addEventListener("click", async () => {
        const getPostResponse = await fetch(postsUrl);
        const posts = await getPostResponse.json();

        postsSelect.replaceChildren();

        for (const post of Object.values(posts)) {

            const postOption = document.createElement("option");
            postOption.value = post.id;
            postOption.textContent = post.title;

            postsSelect.appendChild(postOption);
        }
    });

    viewPostButton.addEventListener("click", async () => {
        const postId = postsSelect.value;
        const getPostResponse = await fetch(postsUrl);
        const posts = await getPostResponse.json();

        const getCommentsResponse = await fetch(commentsUrl);
        const comments = await getCommentsResponse.json();

        const selectedPost = posts[postId];
        const selectedComments = Object.values(comments).filter(c => c.postId === postId);

        postTitle.textContent = selectedPost.title;
        postBody.textContent = selectedPost.body;

        commentsList.replaceChildren();

        for (const comment of selectedComments) {
           const listItem = document.createElement("li");
           listItem.id = comment.id;
           listItem.textContent = comment.text;

           commentsList.appendChild(listItem);
        }
    });
}

attachEvents();