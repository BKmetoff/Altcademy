var paragraphs = [];

for (var i = 1; i <= 5; i++) {
  paragraphs.push("<p>Paragraph " + i + "</p>")
}

$(paragraphs.join("")).insertAfter("#firstDiv");

console.log($('p').length); // 5
console.log($('#firstDiv').next().text()); // Paragraph 1
console.log($('#secondDiv').prev().text()); // Paragraph 5


$("body p").replaceWith($("<h3>Hello World</h3>"));

console.log($('p').length); // 0
console.log($('h3').text()); // Hello World
