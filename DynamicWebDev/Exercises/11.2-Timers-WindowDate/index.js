var timeSpan = document.body.querySelector("#timer");
var milliseconds = 0;
var timerSeconds = null;

// var startTimer = function () {
//   if (!timerSeconds) {
//     timerSeconds = setInterval(function () {
//       timeSpan.innerHTML = ++milliseconds;
//     }, 1)
//   }
// };
//
// var stopTimer = function () {
//   window.clearInterval(timerSeconds);
//   timerSeconds = null;
// };

// --------------------------

var startTime;
var timePassed = 0;

var startTimer = function () {
  if (!timerSeconds) {
    startTime = Date.now() - timePassed;
    timerSeconds = setInterval(function () {
      timePassed = Date.now() - startTime;
      timeSpan.innerHTML = timePassed;
    }, 20);
  }
};

var stopTimer = function () {
  window.clearInterval(timerSeconds);
  timerSeconds = null;
};

// --------------------------

var timerBackground = null;
var fullBody = document.querySelector("body");
var colors = ["white", "black"];
var counter = 0;

var changeBackgound = function () {
  if (!timerBackground) {
    timerBackground = setInterval(function () {
      fullBody.style.background = colors[counter % 2];
      counter++;
    }, 500);
  }
}

var stopChange = function () {
  window.clearInterval(timerBackground);
  timerBackground = null;
  counter = 1;
}
