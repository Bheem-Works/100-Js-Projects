const counterEl = document.querySelector(".counter");
const barElFront = document.querySelector(".loading-bar-front");

let idx = 0;
updateNum();
function updateNum() {
    counterEl.innerText = idx + "%";
    barElFront.style.width = idx + "%";
    idx++;
    if(idx <101) {
        setTimeout(updateNum,20);
    }  if(idx === 101) {
        counterEl.innerText = "Resources Completed";
        barElFront.style.display = "none";
    }
}