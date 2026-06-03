function processComments(input) {
    
    let users = [];
    let articles = [];
    let comments = {};

    for (let line of input) {

        if (line.startsWith('user ')) {
            users.push(line.split(' ')[1]);

        } else if (line.startsWith('article ')) {
            let article = line.split(' ')[1];
            articles.push(article);
            comments[article] = [];

        } else { 
            let [info, comment] = line.split(': ');
            let [user, article] = info.split(' posts on ');
            let [title, content] = comment.split(', ');

            if (users.includes(user) && articles.includes(article)) {
                comments[article].push({ user, title, content });
            }
        }
    }

    Object.entries(comments)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([article, list]) => {
            console.log(`Comments on ${article}`);
            list.sort((a, b) => a.user.localeCompare(b.user))
                .forEach(c => console.log(`--- From user ${c.user}: ${c.title} - ${c.content}`));
        });
}


// processComments(['user aUser123', 
//     'someUser posts on someArticle: NoTitle, stupidComment', 
//     'article Books', 'article Movies', 'article Shopping', 
//     'user someUser', 'user uSeR4', 'user lastUser', 
//     'uSeR4 posts on Books: I like books, I do really like them',
//      'uSeR4 posts on Movies: I also like movies, I really do', 
//      'someUser posts on Shopping: title, I go shopping every day', 
//      'someUser posts on Movies: Like, I also like movies very much']);



processComments(['user Mark', 
    'Mark posts on someArticle: NoTitle, stupidComment', 
    'article Bobby', 
    'article Steven', 
    'user Liam', 
    'user Henry', 
    'Mark posts on Bobby: Is, I do really like them',
     'Mark posts on Steven: title, Run', 
     'someUser posts on Movies: Like']);

