var letters = ['a', 'b', 'c', 'd'];
var ListOfLetters = function ListOfLetters(props) {
  var letterElements = props.allLeters.map(function (letter) {
    return React.createElement(
      'li',
      null,
      letter
    );
  });
  return React.createElement(
    'ul',
    null,
    letterElements
  );
};

var posts = [{
  id: '1',
  body: 'Love For All, Hatred For None.',
  user: 'Khalifatul Masih III',
  comments: [{
    id: '1',
    body: 'Word.',
    user: 'John Doe'
  }]
}, {
  id: '2',
  body: 'Change the world by being yourself.',
  user: 'Amy Poehler',
  comments: [{
    id: '2',
    body: 'I am always myself, how come the world no change?',
    user: 'John Doe'
  }, {
    id: '3',
    body: 'Then change yourself.',
    user: 'Amy Poehler'
  }]
}, {
  id: '3',
  body: 'Every moment is a fresh beginning.',
  user: 'T.S Eliot',
  comments: []
}, {
  id: '4',
  body: 'Never regret anything that made you smile.',
  user: 'Mark Twain',
  comments: [{
    id: '4',
    body: 'Like tipping that glass of milk over?',
    user: 'John Doe'
  }, {
    id: '5',
    body: 'Please stop trolling sir.',
    user: 'Amy Poehler'
  }]
}];

// const ListOfPosts = (props) => {
//   const postElements = props.allPosts.map (
//     post => <li key={post.id}> {post.body} - {post.user} </li>
//   )
//   const { comments } = props.allPosts;
//   return (
//     // <ul>{postElements}</ul>
//     <div>
//       <h3>first thing</h3>
//       {props.allPosts.map(post => <p key={post.id}> {post.body} - {post.user} </p>)}
//       <hr/>
//       <h3>second thing</h3>
//       {postElements}
//     </div>
//   )
// }
//

var Post = function Post(props) {
  var post = props.post;
  var comments = post.comments;


  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      post.body,
      ' - ',
      post.user
    ),
    comments.map(function (comment) {
      return React.createElement(Comment, { key: comment.id, comment: comment });
    })
  );
};

var Feed = function Feed(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Feed'
    ),
    props.allPosts.map(function (post) {
      return React.createElement(Post, { key: post.id, post: post });
    })
  );
};

var Comment = function Comment(props) {
  var comment = props.comment;

  return React.createElement(
    'p',
    { className: 'ml-4' },
    comment.body,
    ' - ',
    comment.user
  );
};

var App = function App() {
  return (
    // <ListOfLetters allLeters={letters}/>
    // <ListOfPosts allPosts={posts} />
    React.createElement(Feed, { allPosts: posts })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));