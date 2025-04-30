// storing the countdown into the variables 

const dayEl = document.getElementById("day");
const hourEl =  document.getElementById("hour");
const minuteEl =  document.getElementById("minute");
const secondEl =  document.getElementById("second");

// seting the new year time

const newYear = new Date("Jan 1, 2025 00:00:00").getTime();
// console.log("newYear",newYear);

updateTime();

function updateTime(){
    const now = new Date().getTime();
    const gap = newYear - now ;

    const second = 1000;
    const minutes = second * 60;
    const hour = minutes * 60;
    const day = hour * 24;
    
    // finding the nearest value and removing the decimal value; 
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) /hour);
    const m = Math.floor((gap % hour) / minutes);
    const s = Math.floor((gap % minutes) / second);

    // rendering it to the dom; 
    dayEl.innerText = d; 
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    
    // setting the setTime out; 
    setTimeout(updateTime,100);
}

