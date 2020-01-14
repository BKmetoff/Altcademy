var box2 = document.body.querySelector("#box2");
var display = document.body.querySelector("#display");
var newColorSpan = display.children[0];
var timeout = null;
var colors = ["pink", "red", "blue", "green"];
var count = 0;

var changeColor = function () {
  if (!timeout) {
    var newColor = colors[++count % colors.length];
    display.hidden = false;
    newColorSpan.innerHTML = newColor;
    timeout = window.setTimeout(function () {
      display.hidden = true;
      box2.style.backgroundColor = newColor;
      timeout = null;
    }, 2000);
  }
}

var cancelChange = function () {
  window.clearTimeout(timeout);
  display.hidden = true;
  count--;
  timeout = null;
}
