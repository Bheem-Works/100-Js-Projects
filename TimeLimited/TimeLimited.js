// let's explain this 
const endDate = new Date();

endDate.setDate(endDate.getDate() + 2);

// increase the time by one seconds
const countDown = setInterval(()=>{

    const now = new Date().getTime();
    const remainingTime = endDate.getTime() - now;

    // logical 
    const days = Math.floor(remainingTime / (1000*60*60*24));
    const hours = Math.floor(remainingTime % (1000*60*60*24)/(1000*60*60));
    const minutes = Math.floor(remainingTime %(1000*60*60)/(1000*60));
    const seconds = Math.floor(remainingTime%(1000*60)/(1000));

    // dom 
    document.getElementById('days').innerHTML= ( days < 10 ? "0" : "") + days;
    document.getElementById('hours').innerHTML= ( hours < 10 ? "0" : "") + hours;  
    document.getElementById('minutes').innerHTML= ( minutes < 10 ? "0" : "") +  minutes;
    document.getElementById('seconds').innerHTML= ( seconds < 10 ? "0" : "") + seconds;

    // condition if it less then the 0 
    if(remainingTime<=0) {
        clearInterval(countDown);
        document.getElementById('offer-content').style.display = "none";
        document.getElementById('expired-message').style.display = "block";
    }
},1000);