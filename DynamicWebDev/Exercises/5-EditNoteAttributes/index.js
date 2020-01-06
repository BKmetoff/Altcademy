var makeGreen = function () {
  var paragraph = document.getElementsByTagName('p')[0];
  paragraph.className = 'green';
}

var makeBold = function () {
  var paragraph = document.getElementsByTagName('p')[0];
  paragraph.id = 'bold';
}

var toggleRed = function () {
  var paragraph = document.getElementsByTagName("p")[0];
  paragraph.classList.toggle("red");
}

var show = function (indexOfParagraph) {
  var allParagraphs = document.getElementById("paragraphsToShow").children;

  for (var i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].classList.toggle("hidden", indexOfParagraph !== i);
  }
}
