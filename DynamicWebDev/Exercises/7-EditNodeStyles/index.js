var setMultiple = function () {
  var paragraph = document.getElementsByTagName('p')[0];
  paragraph.style.cssText = 'color: red; background-color: #ffa; font-weight: bold;'
}

var setRandom = function () {

  var paragraph = document.getElementsByTagName('p')[1];

  var rgb = [0, 0, 0].map (function () {
    return Math.floor(Math.random() * 256)
  });

  paragraph.style.color = 'rgb(' + rgb.join(',') + ')';
};

var clearColor = function () {
  var paragraph = document.getElementsByTagName('p')[1];
  paragraph.style.color = 'rgb(0, 0, 0)'
}

var test = function () {
  var count = 10;
  document.querySelector('p').classList.toggle("foo", count > 9)
  document.querySelector('p').classList.add ("bar", "baz", "pow");
}
