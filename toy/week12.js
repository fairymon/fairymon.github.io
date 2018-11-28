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
