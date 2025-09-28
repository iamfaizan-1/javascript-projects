setInterval( function(){

var current = new Date();

var minutes = current.getMinutes();
var seconds = current.getSeconds()

var hours = current.getHours();

var one = document.getElementById("one");
var three = document.getElementById("three");

var five = document.getElementById("five");
var six = document.getElementById("six");
var dayNight = "am";


if(hours > 11){
    dayNight = "pm"
}

one.innerHTML = hours;
three.innerHTML = minutes;
five.innerHTML = seconds;
six.innerHTML = dayNight

},1000  )