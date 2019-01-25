
function mainTimeColor() {
    // Get a reference to our timeRotationHolder element
    var mainHolder = document.querySelector(".main")

    // Get the current date
    var mainnow = new Date()

    var mainsec = mainnow.getMinutes()

    var maincolor = mainsec*4


console.log(maincolor)
    // Replace the text in our HTML element with the current time
    //mainHolder.style.color = 'rgb('+ maincolor + ',' + 255+','+255+')';

    mainHolder.style.backgroundColor = "rgb(" + maincolor + "," + maincolor + ",255)";
    // Set the transform CSS property of our HTML element to rotate based on the elapsed seconds

}


// Tell the computer to call our updateTimeRotation function every second
setInterval(mainTimeColor,1000)

var now = new Date();
var hours = now.getHours();








(function setClock() {
  var time = new Date();

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  var clock = {
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('#min'),
    seconds: document.querySelector('.seconds')
  };

  var deg = {
    hours: 30 * hours + .5 * minutes,
    minutes: 6 * minutes + .1 * seconds,
    seconds: 6 * seconds
  }

  clock.hours.style.transform = 'rotate(' + deg.hours + 'deg)';
  clock.minutes.style.transform = 'rotate(' + deg.minutes + 'deg)';
  clock.seconds.style.transform = 'rotate(' + deg.seconds + 'deg)';

  var runClock = function(){
    deg.hours += 360/43200;
    deg.minutes += 360/3600;
    deg.seconds += 360/60;

    clock.hours.style.transform = 'rotate(' + deg.hours + 'deg)';
    clock.minutes.style.transform = 'rotate(' + deg.minutes + 'deg)';
    clock.seconds.style.transform = 'rotate(' + deg.seconds + 'deg)';
  };
