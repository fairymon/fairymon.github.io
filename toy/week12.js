window.addEventListener(
  "mousemove",onMouseMove
)

var box = document.querySelector("#box")
var shark = document.querySelector("shark.png")

function onMouseMove (evt){
box.style.left = evt.x + "px"
box.style.top = evt.y + "px"
}



var recognizer = new webkitSpeechRecognition()

document.addEventListener("mousemove", handleBox)

function handleBox(evt) {
var tag = evt.target.tagName.toLowerCase()

if (tag == "img") {
box.style.animationPlayState = "running"
}
else {
box.style.animationPlayState = "paused"
}
}

function wow(shark) {shark.src="eatshark.png";}
function hul(shark) {shark.src="shark.png";}

function changeimage() {
  var fish4 = document.querySelector("#fish4");
  fish4.src="dddfish.png"

  var fish5 = document.querySelector("#fish5");
  fish5.src="dddfish.png"

  var fish6 = document.querySelector("#fish6");
  fish6.src="dddfish.png"

  var fish7 = document.querySelector("#fish7");
  fish7.src="dddfish.png"
}

//뼈로 한번에 안바뀌게

//한번에 짧게 적는법


//이거를 마우스위에 상어에다가 쓰고싶은데,,상어가 클릭할때 입을 벌렸으면 좋겠다

//js
//function wow(shark) {shark.src="eatshark.png";}
//function hul(shark) {shark.src="shark.png";}
//html
//<div class="fishes1">
//  <img class="bbshark" onmouseover="wow(this)" onmouseout="hul(this)" border="0"
//   src="fish.png">
//  <button class="btn" data-text-swap="crinkle"></button>
//</div>
//


//var fishes = document.querySelectorAll("#fishes1, #fishes2, #fishes3, #btn")
//fishes.addEventListener('onclick', function() {

console.log(fishes)
console.log(button)
