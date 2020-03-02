const element = React.createElement (
  'h1',
  {
    className: 'title',
    style: {fontFamily: 'sans-serif'},
    onClick: () => {console.log('clicked');}
  },
  'Hello World'
);

ReactDOM.render (
  element,
  document.getElementById('root')
);

ReactDOM.render (
  element,
  document.getElementById('root2')
)

document.querySelectorAll('.button')
.forEach((domNode) => {
  const messageId = parseInt (domNode.dataset.messageId);
  ReactDOM.render (
    React.createElement (
      'button',
      {
        onClick: () => {console.log(`liked message: ${messageId}`);}
      },
      'Like'
    ),
    domNode
  )
});
