// storing into the varaibles
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTime() {
  let minutes = Math.floor(1500 / 60);
  let seconds = timeLeft % 60;
  let formatedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = formatedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTime();
    if (timeLeft === 0) {
      alert("Time Sidyo! 💟");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTime();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
