var validSpan = document.body.querySelector("#valid");
var input = document.body.querySelector("#username");
var timeout;

input.addEventListener("input", function () {

  clearTimeout(timeout);

  if (input.value.length > 0) {
    validSpan.innerHTML = "Checking...";

    // Debounce:
    timeout = setTimeout(function() {

      var isAvaliable = true;

      if (isAvaliable) {
        validSpan.innerHTML = "Available";
      } else {
        validSpan.innerHTML = "Not available";
      }
    }, 1000);

  } else {
    validSpan.innerHTML = "";
  }
});

// -------------

// Display the scrollTop position of a div element with an overflowing content.
// Limit the execution of the handler to happen at an interval of no more than once every 200ms.

var container = document.body.querySelector("#container");
var scrollTopSpan = document.body.querySelector("#scrollTop");
var scheduled = false;


container.addEventListener("scroll", function(event) {

  console.log ("non rate limiting log message", Date.now());

  if (!scheduled) {
    window.setTimeout(function() {
      scrollTopSpan.innerHTML = event.target.scrollTop;
      scheduled = false;
      console.log ("rate limited log message", Date.now());
    }, 200);
  }

  scheduled = true;

})
