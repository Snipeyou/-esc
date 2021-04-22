//https://sadcloud.tech/
//time title function!
javascript: (function () {
    var start = new Date();
    var pad = function (i) {
        var s = '0' + Math.floor(i);
        return s.substr(s.length - 2);
    };
    var newTimerStr = function () {
        var currentTime = new Date(),
            hours = currentTime.getHours(),
            minutes = currentTime.getMinutes();
        seconds = currentTime.getSeconds();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return `[ ${hours} : ${minutes} : ${seconds} ] | nuked.cloud`;
    };
    setInterval(function () {
        document.title = newTimerStr();
    }, 1);
})();

//stop pasting < 3
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}