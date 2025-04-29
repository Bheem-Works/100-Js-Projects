// Storing into variables ; 
const hourEl = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// setting a date; 
function setDate() {
    const now = new Date(); // getting a current  date value;
    console.log("date",now);

    // Getting the each time  value; 
    const getSeconds = now.getSeconds(); 
    const getMinutes = now.getMinutes();
    const getHours = now.getHours();
    
    // getting the degree value; 
    const secondDegree = (getSeconds / 60) *360;
    const minuteDegree = (getMinutes / 60) *360;
            const hourDegree = (getHours / 12) * 360;

    // putting hte degree value into the rotate;
    hourEl.style.transform = `rotate(${hourDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    second.style.transform = `rotate(${secondDegree}deg)`;

}

setDate();

setInterval(setDate,1000);