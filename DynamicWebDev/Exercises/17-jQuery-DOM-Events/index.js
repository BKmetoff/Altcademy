$(document).ready(function () {
  console.log ("document ready");
});

$('button').click(function () {
  console.log ("button clicked");
});

// add multiple events to one listener:

$('p').hover(function () {
  $(this).css('background', 'pink');
}, function () {
  $(this).css('background', '')
});


// multiple events don't work on newly added elements:
$('p').hover(function () {
  $(this).css('background', 'pink');
}, function () {
  $(this).css('background', '')
});


$('body').append('<p>Paragraph 4</p>')

// fixing the ^ case listen to the parent element instead;

$('body').on('mouseenter', 'p', function () {
  $(this).css('background', 'pink');
});

$('body').on('mouseleave', 'p', function () {
  $(this).css('background', '');
});

console.log($('p').filter('blue'));
