var log = document.body.querySelector("#log");
window.addEventListener("keydown", function() {
  var p = document.createElement ("p");
  p.innerHTML = "keydown: key = " + event.key;
  log.appendChild(p);
})
