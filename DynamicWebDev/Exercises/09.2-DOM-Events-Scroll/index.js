var progress = document.body.querySelector("#progress");
window.addEventListener("scroll", function (event) {
  var scrollableHeight = document.body.scrollHeight - window.innerHeight;
  var percentage = Math.round((window.pageYOffset / scrollableHeight) *  100);
  progress.innerHTML = percentage + "%";
});


var terms = document.body.querySelector("#terms");
var agree = document.body.querySelector("#agree");

var enableCheckbox= function (event) {
  var scrollableHeightBox = terms.scrollHeight - terms.clientHeight;

  if (scrollableHeightBox === terms.scrollTop) {
    agree.disabled = false;
    terms.removeEventListener("scroll", enableCheckbox);
  }
}

terms.addEventListener("scroll", enableCheckbox);

var nav = document.body.querySelector("#top-nav");
var hero = document.body.querySelector("#hero");

window.addEventListener("scroll", function (event) {
  if (window.pageYOffset > hero.scrollHeight) {
    nav.classList.add("inverse");
  } else {
    nav.classList.remove("inverse");
  }
});
