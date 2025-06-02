// Real-Time Clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Stopwatch
let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let running = false;

function updateStopwatch() {
  const display = document.getElementById('stopwatch');
  const formatted =
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0');
  display.textContent = formatted;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateStopwatch();
    }, 1000);
  }
}

function stop() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  running = false;
  [hours, minutes, seconds] = [0, 0, 0];
  updateStopwatch();
}

window.onload = updateStopwatch;
