const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgGalleryEl = document.querySelector(".imgGallery");
const imgEl = document.querySelectorAll('img');

let currentImg = 1;
let timeOut;

nextEl.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
})

prevEl.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
})

updateImg();
function updateImg() {
    if(currentImg > imgEl.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgEl.length;
    }
    
    console.log("this is the current image",currentImg);
    imgGalleryEl.style.transform = `translateX(-${(currentImg-1)*500}px)`;
    timeOut = setTimeout(()=>{
        currentImg++;
        updateImg();
    },3000)
}