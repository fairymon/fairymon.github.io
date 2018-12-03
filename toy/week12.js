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


function changeimage1() {
  var fish4 = document.querySelector("#fish4");
  fish4.src="dddfish.png"
}

function changeimage2() {
var fish5 = document.querySelector("#fish5");
fish5.src="dddfish.png"
}

function changeimage3() {
var fish6 = document.querySelector("#fish6");
fish6.src="dddfish.png"
}

function changeimage4() {
var fish7 = document.querySelector("#fish7");
fish7.src="dddfish.png"
}

function changeimage5() {
var fish8 = document.querySelector("#fish8");
fish8.src="dddfish.png"
}

function changeimage6() {
var fish9 = document.querySelector("#fish9");
fish9.src="dddfish.png"
}

function changeimage7() {
var fish10 = document.querySelector("#fish10");
fish10.src="dddfish.png"
}

function changeimage8() {
var fish11 = document.querySelector("#fish11");
fish11.src="dddfish.png"
}

function changeimage9() {
var fish12 = document.querySelector("#fish12");
fish12.src="dddfish.png"
}

function changeimage10() {
var fish13 = document.querySelector("#fish13");
fish13.src="dddfish.png"
}

function changeimage11() {
var fish14 = document.querySelector("#fish14");
fish14.src="dddfish.png"
}

function changeimage12() {
var fish15 = document.querySelector("#fish15");
fish15.src="dddfish.png"
}

function changeimage13() {
var fish16 = document.querySelector("#fish16");
fish16.src="dddfish.png"
}

function changeimage14() {
var fish17 = document.querySelector("#fish17");
fish17.src="dddfish.png"
}

function changeimage15() {
var fish18 = document.querySelector("#fish18");
fish18.src="dddfish.png"
}

function changeimage16() {
var fish19 = document.querySelector("#fish19");
fish19.src="dddfish.png"
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

console.log(fish4)
console.log(fish5)
console.log(fish6)
console.log(fish7)
