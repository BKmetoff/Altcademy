class StopWatch extends React.Component {
  constructor (props) {
    super (props);
    this.state = { mSec: 0 }
    this.timer = null;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start () {
    if (!this.timer) {
      let startTime = Date.now();
      this.timer = setInterval( () => {
        const stopTime = Date.now();
        const mSec = stopTime - startTime + this.state.mSec;

        this.setState ({ mSec });

        startTime = stopTime;
      }, 250);
    }
  }

  stop () {
    window.clearInterval (this.timer);
    this.timer = null;
  }

  reset () {
    this.stop();
    this.setState ({ mSec: 0 })
  }

  render () {
    return (
      <div>
        <h2 className="title">
          {Math.floor(this.state.mSec / 1000)}s
        </h2>

        <div className="main">
          <button className="btn btn-outline-primary" onClick={ () => this.start() }>Start</button>
          <button className="btn btn-outline-danger" onClick={ () => this.stop() }>Stop</button>
          <button className="btn btn-outline-warning" onClick={ () => this.reset() }>Reset</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render (
  <StopWatch />,
  document.getElementById('root')
);
