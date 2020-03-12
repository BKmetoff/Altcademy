const letters = ['a', 'b', 'c', 'd'];
const ListOfLetters = (props) => {
  const letterElements = props.allLeters.map (letter => <li>{letter}</li>);
  return ( <ul>{letterElements}</ul> )
}

const posts = [
  {
    id: '1',
    body: 'Love For All, Hatred For None.',
    user: 'Khalifatul Masih III',
    comments: [
      {
        id: '1',
        body: 'Word.',
        user: 'John Doe',
      }
    ]
  },{
    id: '2',
    body: 'Change the world by being yourself.',
    user: 'Amy Poehler',
    comments: [
      {
        id: '2',
        body: 'I am always myself, how come the world no change?',
        user: 'John Doe',
      },{
        id: '3',
        body: 'Then change yourself.',
        user: 'Amy Poehler',
      }
    ]
  },{
    id: '3',
    body: 'Every moment is a fresh beginning.',
    user: 'T.S Eliot',
    comments: []
  },{
    id: '4',
    body: 'Never regret anything that made you smile.',
    user: 'Mark Twain',
    comments: [
      {
        id: '4',
        body: 'Like tipping that glass of milk over?',
        user: 'John Doe',
      },{
        id: '5',
        body: 'Please stop trolling sir.',
        user: 'Amy Poehler',
      }
    ]
  },
];

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

const Post = (props) => {
  const { post } = props;
  const { comments } = post;

  return (
    <div>
      <p>{post.body} - {post.user}</p>
      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  )
}

const Feed = (props) => {
  return (
    <div>
      <p>Feed</p>
      {props.allPosts.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}

const Comment = (props) => {
  const { comment } = props;
  return <p className="ml-4">{comment.body} - {comment.user}</p>
}

const App = () => {
  return (
    // <ListOfLetters allLeters={letters}/>
    // <ListOfPosts allPosts={posts} />
    <Feed allPosts={posts}/>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
