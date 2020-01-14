var left = 0;
var moveBox = function () {
  var box = document.querySelector('#box1');
  left += 10;
  box.style.left = left + 'px';
}

var angle = 0;
var oscilateHor = function () {
  var box = document.querySelector('#box2');
  angle += 0.001;
  box.style.left = (Math.abs(Math.sin(angle)) * (document.body.clientWidth - 100) + 'px');
}

// var interval;
// var startInterval = function () {
//   interval = window.setInterval(oscilateHor, 10);
// }
//
// var stopInterval = function () {
//   if (interval) {
//     window.clearInterval(interval)
//   }
// }

var angle2;
var lastTime = null;
var request;
var oscilateByStep = function (time) {
  var box = document.querySelector('#box3');
  if (lastTime !== null) {
    angle2 += (time - lastTime) * 0.001;
  }

  lastTime = time;

  box.style.left = (Math.abs(Math.sin(angle)) * (document.body.clientWidth - 100)) + 'px';

  request = requestAnimationFrame(oscilateByStep);
}

var startAnimationRequest = function () {
  request = requestAnimationFrame(oscilateByStep);
}

var stopAnimationRequest = function () {
  if (request) {
    window.cancelAnimationFrame (request)
  }
}
