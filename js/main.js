var totalSecs = 0;
var hrs = 0;
var mins = 0;
var secs = 0;
var interval_normal, interval_2x;

function setTime() { // onclick
  document.getElementById("start-btn").style.backgroundColor = "grey";
  document.getElementById("out-btn").style.backgroundColor = "white";
  clearInterval(interval_normal);
  clearInterval(interval_2x);
  interval_normal = setInterval(increment, 1500);
}

function clockOut() {
  document.getElementById("start-btn").style.backgroundColor = "white";
  document.getElementById("out-btn").style.backgroundColor = "grey";
  document.getElementById("adorno").style.color = "white";
  clearInterval(interval_normal);
  clearInterval(interval_2x);
  interval_2x = setInterval(increment, 10);
}

function increment() {
  totalSecs++;
  hrs = Math.floor((totalSecs / 3600) % 60);
  if (hrs <= 9) {
    hrs = "0" + hrs;
  }
  mins = Math.floor((totalSecs / 60) % 60);
  if (mins <= 9) {
    mins = "0" + mins;
  }
  secs = Math.floor(totalSecs) % 60;
  if (secs <= 9) { 
    secs = "0" + secs; 
  }
  document.getElementById("txt").innerHTML = hrs + ":" + mins + ":" + secs;
}