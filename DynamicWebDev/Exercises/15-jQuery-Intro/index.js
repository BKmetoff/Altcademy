var allDivs = $('div');
var fooDivs = $('div.foo');
var barDiv = $('div#bar');

allDivs.click(function () {
  $(this).slideUp();
})

$("#special").click (function () {
  $("span", this).first().css("background-color", "red");
  $("span", this).last().css("background-color", "blue");
});

$("<p>Go to <a href='https://www.google.com'></a>Google</p>").appendTo(document.body);
