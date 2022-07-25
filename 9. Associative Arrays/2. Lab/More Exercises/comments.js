function comments(input) {
  const comments = {};
  const users = [];
  const articles = [];

  input.forEach(elem => {
    // add user to the users
    if (elem.includes('user ')) {
      const username = elem.replace('user ', '');
      users.push(username);

      // add article to the articles
    } else if (elem.includes('article ')) {
      const article = elem.replace('article ', '');
      articles.push(article);
    } else {
      const newElem = elem.replace(' posts on', ',');
      const [username, articleComment, commentContent] = newElem.split(', ');
      const [articleName, commentTitle] = articleComment.split(': ');

      // if the username and the article exists
      if (users.includes(username) && articles.includes(articleName)) {
        // if there is no such key
        if (!comments.hasOwnProperty(articleName)) {
          // creates new object literal with comment counter
          // we need that counter for the sort (I couldn't access the inner array)
          comments[articleName] = {
            totalComments: 0,
          };
        }

        if (!comments[articleName].hasOwnProperty(username)) {
          // in articleName we store user as the key and his comments in an array of objects
          comments[articleName][username] = [];
        }

        // We push the current comment
        comments[articleName][username].push({
          title: commentTitle,
          content: commentContent,
        });

        // Increment the comment counter on the current article
        comments[articleName].totalComments++;
      }
    }
  });

  // Sorting the comments by total comments (descending)
  Object.entries(comments)
    .sort(([article1, obj1], [article2, obj2]) => obj2.totalComments - obj1.totalComments)
    .forEach(([article, obj]) => {
      console.log(`Comments on ${article}`);
      
      Object.entries(obj)
        .filter(([user]) => user !== 'totalComments')
        .sort(([user1], [user2]) => user1.localeCompare(user2)) // sort users alphabetically
        .forEach(([user, comment]) => {
          comment.forEach(item => { // we loop through the comments of the current user
            console.log(`--- From user ${user}: ${item.title} - ${item.content}`);
          });
        }
      );
    }
  );
}

console.log('---------------------- Test 1  ----------------------');
comments([
  'user aUser123',
  'someUser posts on someArticle: NoTitle, stupidComment',
  'article Books',
  'article Movies',
  'article Shopping',
  'user someUser',
  'user uSeR4',
  'user lastUser',
  'uSeR4 posts on Books: I like books, I do really like them',
  'uSeR4 posts on Movies: I also like movies, I really do',
  'someUser posts on Shopping: title, I go shopping every day',
  'someUser posts on Movies: Like, I also like movies very much'
]);

/* 
  Comments on Movies
  --- From user someUser: Like - I 
  also like movies very much
  --- From user uSeR4: I also like 
  movies - I really do
  Comments on Books
  --- From user uSeR4: I like books -
  I do really like them
  Comments on Shopping
  --- From user someUser: title - I go 
  shopping every day
*/

console.log('---------------------- Test 2  ----------------------');
comments([
  'user Mark', 'Mark posts on someArticle: NoTitle, stupidComment',
  'article Bobby',
  'article Steven',
  'user Liam',
  'user Henry',
  'Mark posts on Bobby: Is, do really like them',
  'Mark posts on Steven: title, Run',
  'someUser posts on Movies: Like'
]);

/* 
  Comments on Bobby
  --- From user Mark: Is - I do really 
  like them
  Comments on Steven
  --- From user Mark: title - Run
*/