
// Storing the varaibles 
const btnEl = document.querySelector(".btn");
const videoEl = document.querySelector(".background-video");
const faEl = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");

// it is only run when the buttons is clicked
btnEl.addEventListener("click",()=>{  // when the video is pause then play the video 
    if(btnEl.classList.contains("pause")) {
        btnEl.classList.remove("pause");
        videoEl.play();
        faEl.classList.add("fa-pause");
        faEl.classList.remove("fa-play");
    } else {    // When the video is run then pause it;
        btnEl.classList.add("pause");
        videoEl.pause();
        faEl.classList.remove("fa-pause");
        faEl.classList.add("fa-play");
    }
});

window.addEventListener('load',()=>{
    preloader.style.zIndex = "-999";
});