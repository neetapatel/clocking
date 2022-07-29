var totalSecs = 0;

function setTime() { // onclick
  var intervalID = setInterval(increment, 1000);
}

function increment() {
  totalSecs++;
  var mins = Math.floor(totalSecs / 60);
  if (mins <= 9) {
    mins = "0" + mins;
  }
  var secs = Math.floor(totalSecs) % 60;
  if (secs <= 9) { 
    secs = "0" + secs; 
  }
  document.getElementById("txt").innerHTML = mins + ":" + secs;
  checkTime(mins, secs);
}

function checkTime(m, s) {
    
}