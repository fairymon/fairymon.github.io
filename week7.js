function updateTime() {
var timeHolder = document.querySelector("#time")

  var date = new Date()

  timeHolder.innerHTML= date.getSeconds()
  if (date.getSeconds()==0) {
    //turn the text red
    timeHolder.style.color = "purple"

    //console.log("less than 30")
  } else if(date.getSeconds()<30){
    //turn the text blue
    timeHolder.style.color = "purple"
  //console.log("more than 30")
} else if (date.getSeconds()>=30) {
  timeHolder.style.color="navy"
}

}

updateTime()

setInterval(updateTime, 1000)
