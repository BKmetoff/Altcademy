var setClass = function () {
  var paragr = document.getElementsByTagName('p')[0];
  paragr.setAttribute("class", "green");
}

var getClass = function () {
  var paragr = document.getElementsByTagName("p")[0];
  var className = paragr.getAttribute("class");

  var classAnswer = document.getElementsByTagName("p")[1];
  classAnswer.innerHTML = className;
}
