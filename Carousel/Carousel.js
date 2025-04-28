const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgGalleryEl = document.querySelector(".imgGallery");
const imgEl = document.querySelectorAll('img');

let currentImg = 1;
let timeOut;

nextEl.addEventListener("click",()=>{
    currentImg++;
    updateImg();
    clearTimeout(timeOut);
})

prevEl.addEventListener("click",()=>{
    currentImg--;
    updateImg();
    clearTimeout(timeOut);
})

updateImg();
function updateImg() {
    console.log("currentImg",currentImg);
    console.log("imgEl.length",imgEl.length);
    if(currentImg > imgEl.length) {
        currentImg = 1;
        // console.log("if is running")
    } else if (currentImg < 1) {
        currentImg = imgEl.length;
        console.log("else is running")
    }
    
    console.log("this is the current image",currentImg);
    
    const imageStyle = imgGalleryEl.style.transform = `translateX(-${(currentImg-1)*500}px)`;
    console.log(imageStyle);
    
    timeOut = setTimeout(()=>{
        currentImg++;
        updateImg();
    },3000)
}