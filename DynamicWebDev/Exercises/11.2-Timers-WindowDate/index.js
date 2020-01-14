var timeSpan = document.body.querySelector("#timer");
var milliseconds = 0;
var timer = null;

// var startTimer = function () {
//   if (!timer) {
//     timer = setInterval(function () {
//       timeSpan.innerHTML = ++milliseconds;
//     }, 1)
//   }
// };
//
// var stopTimer = function () {
//   window.clearInterval(timer);
//   timer = null;
// };

// --------------------------

var startTime;
var timePassed = 0;

var startTimer = function () {
  if (!timer) {
    startTime = Date.now() - timePassed;
    timer = setInterval(function () {
      timePassed = Date.now() - startTime;
      timeSpan.innerHTML = timePassed;
    }, 20);
  }
};

var stopTimer = function () {
  window.clearInterval(timer);
  timer = null;
};
