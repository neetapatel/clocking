var totalSecs = 0;
var mins = 0;
var secs = 0;
var interval_normal, interval_2x;

function setTime() { // onclick
  clearInterval(interval_normal);
  clearInterval(interval_2x);
  interval_normal = setInterval(increment, 1000);
}

function clockOut() {
  clearInterval(interval_normal);
  clearInterval(interval_2x);
  interval_2x = setInterval(increment, 500);
}

function increment() {
  totalSecs++;
  mins = Math.floor(totalSecs / 60);
  if (mins <= 9) {
    mins = "0" + mins;
  }
  secs = Math.floor(totalSecs) % 60;
  if (secs <= 9) { 
    secs = "0" + secs; 
  }
  document.getElementById("txt").innerHTML = mins + ":" + secs;
}