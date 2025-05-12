
const containerEl = document.querySelector(".container");
const clickbtnEl = document.querySelector(".btn");
const popupContianerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");


clickbtnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupContianerEl.classList.remove("active");
})


closeIconEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupContianerEl.classList.add("active");
})