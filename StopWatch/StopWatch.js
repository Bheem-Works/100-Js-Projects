// Storing into a variable
const timer = document.querySelector('.timer');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

// Now turn to the functions 
let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;

    timeInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timer.textContent = formatTime(elapsedTime);
    },10);

    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function formatTime (elapsedTime) {
    const milliseconds = Math.floor(elapsedTime % 1000 / 10);
    const seconds = Math.floor(elapsedTime / 1000 % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);  // Fixed minutes calculation
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return(
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
        (milliseconds > 9? milliseconds : "0" + milliseconds)
    );
}

function stopTimer() {
    clearInterval(timeInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timeInterval);
    timer.textContent = "00:00:00.00";
    startBtn.disabled = false;
    stopBtn.disabled = true;

}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
