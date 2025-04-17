const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(event)=>{
        removeActive();
        selectedRating =
         event.target.innerText || event.target.parentNode.innerText;
         event.target.classList.add("active");
         event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click",()=>{
    if(selectedRating !== "") {
        containerEl.innerHTML = `
        <strong> Thanks for your feedback! </strong>
        <br>
        <br>
        <strong> feedBack : ${selectedRating} </strong>
        <p> We will use Your feedback To Improve our customer Services</p>
        `;
    }
});

function removeActive() {
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    });
};