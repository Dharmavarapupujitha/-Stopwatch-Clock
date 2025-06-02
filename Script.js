// ⏰ Real-Time Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Show time immediately

// ⏱️ Stopwatch Logic
let [hours, minutes, seconds] = [0, 0, 0];
let running = false;
let timer;

function updateStopwatch() {
  document.getElementById("stopwatch").textContent =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
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
  [hours, minutes, seconds] = [0, 0, 0];
  running = false;
  updateStopwatch();
}
