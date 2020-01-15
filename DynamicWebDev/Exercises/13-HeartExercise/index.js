var app = function () {
  var size = 100;
  var heart = document.body.querySelector("#heart");

  var heartSize = function () {

    if (event.key === "ArrowUp") {
      heart.style.fontSize = (size += 10) + "%";
    } else if (event.key === "ArrowDown") {
      heart.style.fontSize = (size -= 10) + "%";
    }

    burstHeart(size)

  };


  window.addEventListener("keydown", heartSize)

  var burstHeart = function (size) {
    if (size === 200) {
      window.removeEventListener("keydown", heartSize)
      heart.innerHTML = "💔";
    }
  }

}

app();
