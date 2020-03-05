const element = <h1 className="greeting">hello world</h1>

ReactDOM.render (
  element,
  document.getElementById('root')
);


// custom components:
const Temp = (props) => {
  console.log('props: ', props);
  return <p>The current temperature in {props.city} is {props.degree} degree {props.unit}</p>
}

const App = () => {
  return (
    <div>
      <Temp city="London" degree={20} unit="celsius"/>
      <Temp city="NYC" degree={23} unit="celsius"/>
      <Temp city="Dubai" degree={32} unit="celsius"/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// composing components:
