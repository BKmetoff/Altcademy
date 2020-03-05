var element = React.createElement(
  'h1',
  { className: 'greeting' },
  'hello world'
);

ReactDOM.render(element, document.getElementById('root'));

// custom components:
var Temp = function Temp(props) {
  console.log('props: ', props);
  return React.createElement(
    'p',
    null,
    'The current temperature in ',
    props.city,
    ' is ',
    props.degree,
    ' degree ',
    props.unit
  );
};

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Temp, { city: 'London', degree: 20, unit: 'celsius' }),
    React.createElement(Temp, { city: 'NYC', degree: 23, unit: 'celsius' }),
    React.createElement(Temp, { city: 'Dubai', degree: 32, unit: 'celsius' })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

// composing components: