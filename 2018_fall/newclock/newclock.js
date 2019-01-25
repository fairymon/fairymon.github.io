document.addEventListener("DOMContentLoaded",function(){
   var date = new Date();
   var s = date.getSeconds();
   var m = date.getMinutes();
   var h = date.getHours();
  setInterval(function(){
    var date = new Date();
    s++;
    var m = date.getMinutes();
    var h = date.getHours();
    var seconds = document.getElementsByClassName('seconds')[0];
    var minutes = document.getElementsByClassName('minutes')[0];
    var hours = document.getElementsByClassName('hours')[0];
    var hourss = document.getElementsByClassName('hourss')[0];
    seconds.style.transform = "rotate("+ s * 6 +"deg)";
    minutes.style.transform = "rotate("+ m * 6 +"deg)";
    hours.style.transform = "rotate("+ h * 30 +"deg)";
    hourss.style.transform = "rotate("+ h * 30 +"deg)";
    var sun = document.getElementById('sun');
    var second = date.getSeconds();

  },1000);



  var clock = document.getElementsByTagName('div')[0];
  input.forEach(function(item){
    item.addEventListener("change",function(){
      var X = document.getElementsByTagName('input')[0].value;
      var Y = document.getElementsByTagName('input')[1].value;
      var Z = document.getElementsByTagName('input')[2].value;
      clock.style.transform = "rotateX("+X+"deg) rotateY("+Y+"deg) rotateZ("+Z+"deg)";
    });
  });

   button.addEventListener("click",function(){
     clock.style.transform = "none";
     input.forEach(function(item){
       item.value = 0;
     });
   });
});
