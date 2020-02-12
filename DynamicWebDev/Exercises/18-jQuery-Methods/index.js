$('p').each(function (index, element) {
  console.log($(element).text());
});

$('p').each(function (index, element) {
  $(this).text($(this).text() + '!!!');
});

/// Some methods that need a .each() iterator to work includes getting .attr(), .css(), .val(), .scrollTop().

///Mainly getter methods would require .each().

// ----------

var pText = $('p').map(function (index, element) {
  return $(this).text();
}).get().join(' ');

console.log(pText);


// ----------

$('p').hide(1000);
