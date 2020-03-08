// Counter & buttons
class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {count: 0}; // initial state (value)

    // if addCount is not an arrow function, bind it to the class object:
    // this.addCount = this.addCount.bind(this);
  }

  addCount (amount) {
    this.setState ({
      count: this.state.count + amount
    });
  }

  render () {
    return (
      <div>
        <h2>Count {this.state.count}</h2>
        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(2)}>+2</button>
        <button onClick={() => this.addCount(3)}>+3</button>
      </div>
    );
  }
}


// log vertical scroll;
class ScrollLogger extends React.Component {
  constructor (props) {
    super (props);
    this.state = {scrollY: 0}
    this.updateScrollY = this.updateScrollY.bind(this);
  };

  updateScrollY (e) {
    this.setState ({ scrollY: Math.round(window.scrollY) });
  }

  componentDidMount () {
    window.addEventListener ('scroll', this.updateScrollY);
  }

  componentWillUnmount () {
    window.removeEventListener ('scroll', this.updateScrollY);
  }

  render () {
    return (
      <div className="logger">
        Scrolled: {this.state.scrollY}px
      </div>
    )
  }
};


const App = () => {
  return (
    <React.Fragment>
      <Counter />
      <ScrollLogger />
    </React.Fragment>
  )
}


ReactDOM.render (
  <App />,
  document.getElementById('root')
);
