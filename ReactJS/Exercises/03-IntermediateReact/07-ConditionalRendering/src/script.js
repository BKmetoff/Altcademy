const VariableRain = (props) => {
  const precipitation = props.precipitation;
  let message;
  if (precipitation > 50) {
    message = <h1>Will rain</h1>
  } else {
    message = <h1>won't rain</h1>
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>precipitation rate {precipitation}%</h2>
          {message}
        </div>
      </div>
    </div>
  )

}

const IfElseRain = (props) => {
  const precipitation = props.precipitation;
  if (precipitation > 50) {
    return <h1>It is likely going to rain!</h1>; // early return
  }
  return <h1>It is unlikely going to rain.</h1>;
}

const InlineStatementRain = (props) => {
  const precipitation = props.precipitation;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>precipitation rate {precipitation}%</h2>
          {(() => {
            if (precipitation > 50) {
              return <h3>will rain</h3>;
            }
            return <h3>won't rain</h3>
          })()}
        </div>
      </div>
    </div>
  )
}

const TernaryRain = (props) => {
  const precipitation = props.precipitation;

  if (!precipitation) {
    return null;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>precipitation rate {precipitation}%</h2>
          {precipitation > 50 ?
            (<h3>will rain</h3>) : (<h3>will rain</h3>)
          }
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <TernaryRain precipitation={40}/>,
  document.getElementById('root')
);

// ( () => { do things })() --> invoke function, execuded immediately, then destroyed
