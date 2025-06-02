// Clock
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById('clock').textContent = timeStr;
}
setInterval(updateClock, 1000); // update every second
updateClock(); // initial call

// Stopwatch variables
let stopwatchInterval = null;
let elapsedSeconds = 0;

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateStopwatch() {
  elapsedSeconds++;
  document.getElementById('stopwatch').textContent = formatTime(elapsedSeconds);
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedSeconds = 0;
  document.getElementById('stopwatch').textContent = '00:00:00';
}
