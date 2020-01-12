var announce = function () {
  console.log ("button be clicked");
};

var paragraphClicked = function () {
  console.log ("paragraph is clicked")
};

var inputFocused = function () {
  console.log ("input be focused")
};

// -------------

var button2 = document.querySelector("#button2");

button2.addEventListener("click", function() {
	console.log ("clicked")
});

button2.addEventListener("click", function(){
  console.log("clicked again")
});

// -------------

var button3 = document.querySelector("#button3");

var clickOnce = function () {
  console.log ("button 3 clicked once");
  button3.removeEventListerer ("click", clickOnce);
};

button3.addEventListener ("click", clickOnce);

// -------------

button3.addEventListener("mousedown", function(event) {
  if (event.button === 0) {
    console.log("primary");
  } else if (event.button === 1) {
    console.log("middle");
  } else if (event.button === 2) {
    console.log("secondary");
  }
  console.log(event);
});


// --------------

var log = document.querySelector("#log");
var prependChild = function (newNode) {
  this.insertBefore (newNode, this.firstChild);
};

var appendMessageToLog = function (message) {
  var newP = document.createElement ("p");
  var newTextNode = document.createTextNode(message);
  newP.appendChild(newTextNode);
  prependChild.call(log, newP);
}

var container1 = document.querySelector("#container1");
window.addEventListener ("click", function (event) {
  if (event.target.matches("#container1") || event.target.matches("#box1") || event.target.matches("#box2")) {
    appendMessageToLog(event.target.id + ": click");
  }
});

window.addEventListener ("mousedown", function (event) {
  if (event.target.matches("#container1") || event.target.matches("#box1") || event.target.matches("#box2") ) {
    appendMessageToLog(event.target.id + ": mousedown");
  }
})

window.addEventListener ("mouseup", function (event) {
  if (event.target.matches("#container1") || event.target.matches("#box1") || event.target.matches("#box2") ) {
    appendMessageToLog(event.target.id + ": mouseup");
  }
})

window.addEventListener ("dblclick", function (event) {
  if (event.target.matches("#container1") || event.target.matches("#box1") || event.target.matches("#box2") ) {
    appendMessageToLog(event.target.id + ": dblclick");
  }
})

// ------------

var blob = document.querySelector("#blob");
window.addEventListener("mousemove", function(event) {
  blob.style.left = event.pageX + "px";
  blob.style.top = event.pageY + "px";
})
