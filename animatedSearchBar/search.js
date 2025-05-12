const searchButtonEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener('click',()=>{
    searchButtonEl.classList.toggle("active");
})