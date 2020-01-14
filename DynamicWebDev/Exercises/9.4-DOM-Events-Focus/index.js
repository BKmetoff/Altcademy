var input = document.querySelector("input");
var label = document.querySelector(".label");

input.addEventListener("focus", function () {
  label.classList.add("displaced")
});

input.addEventListener("blur", function () {
  label.classList.remove("displaced");
});
