const time = document.querySelector(".watch .time");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

//Event Listeners
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

//Update The Timer

function timer() {
    seconds++;

    //Format our timer
    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    

    if (secs < 10) secs = '0' + secs;
    if (min < 10) min = '0' + min;
    if (hrs < 10) hrs = '0' + hrs;
    time.textContent = `${hrs}:${min}:${secs}`;
}

function start() {
    if(interval) {
        return;
    }

    interval = setInterval(timer, 1000);
}

function pause() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    pause();
    seconds = 0;
    time.textContent = '00:00:00';
}

if (hours === 1) {
    pause();
}