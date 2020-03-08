// Class component:
class Clock extends React.Component {

  constructor (props) {
    super (props);
    this.state = { date: new Date() }; // initial state
  }

  componentDidMount () {
    // set timer to start after component is created
    this.timer = setInterval (
      () => this.updateTime(),
      1000
    );
  }

  componentWillUnmout() {
    clearInterval (this.timer);
  }

  updateTime () {
    // update state
    this.setState ({ date: new Date() });
  }

  render () {
    return (
      <div>
        <h2>The time now is { this.state.date.toLocaleTimeString() }</h2>
      </div>
    )
  }
}


ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
