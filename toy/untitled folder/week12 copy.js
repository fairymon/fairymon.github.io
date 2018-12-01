window.addEventListener(
  "mousemove",onMouseMove
)

var box = document.querySelector("#box")

function onMouseMove (evt){
console.log(evt.x+" "+evt.y)

box.style.left = evt.x + "px"
box.style.top = evt.y + "px"

}

var recognizer = new webkitSpeechRecognition()

console.log(recognizer)





document.addEventListener("mousemove", handleBox)

function handleBox(evt) {
var tag = evt.target.tagName.toLowerCase()

if (tag == "a" || tag == "img") {
box.style.animationPlayState = "running"
}
else {
box.style.animationPlayState = "paused"
}

}


var fishes = document.querySelector("#fishes")
fishes.addEventListener('click', function() {
  if (fishes.getAttribute('click')) {
    img.style.opacity = "0"
  } else {
    img.style.opacity = "1"
  }
}, false);
