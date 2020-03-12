var VariableRain = function VariableRain(props) {
  var precipitation = props.precipitation;
  var message = void 0;
  if (precipitation > 50) {
    message = React.createElement(
      "h1",
      null,
      "Will rain"
    );
  } else {
    message = React.createElement(
      "h1",
      null,
      "won't rain"
    );
  }

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-12" },
        React.createElement(
          "h2",
          null,
          "precipitation rate ",
          precipitation,
          "%"
        ),
        message
      )
    )
  );
};

var IfElseRain = function IfElseRain(props) {
  var precipitation = props.precipitation;
  if (precipitation > 50) {
    return React.createElement(
      "h1",
      null,
      "It is likely going to rain!"
    ); // early return
  }
  return React.createElement(
    "h1",
    null,
    "It is unlikely going to rain."
  );
};

var InlineStatementRain = function InlineStatementRain(props) {
  var precipitation = props.precipitation;

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-12" },
        React.createElement(
          "h2",
          null,
          "precipitation rate ",
          precipitation,
          "%"
        ),
        function () {
          if (precipitation > 50) {
            return React.createElement(
              "h3",
              null,
              "will rain"
            );
          }
          return React.createElement(
            "h3",
            null,
            "won't rain"
          );
        }()
      )
    )
  );
};

var TernaryRain = function TernaryRain(props) {
  var precipitation = props.precipitation;

  if (!precipitation) {
    return null;
  }

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-12" },
        React.createElement(
          "h2",
          null,
          "precipitation rate ",
          precipitation,
          "%"
        ),
        precipitation > 50 ? React.createElement(
          "h3",
          null,
          "will rain"
        ) : React.createElement(
          "h3",
          null,
          "will rain"
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(TernaryRain, { precipitation: 40 }), document.getElementById('root'));

// ( () => { do things })() --> invoke function, execuded immediately, then destroyed