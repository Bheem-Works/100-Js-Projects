const menuEl = document.querySelector(".menu");
const menuTextel = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", () => {
  socialListsEl.classList.toggle("hide");
  menuEl.classList.toggle("rotate");
});

liEls.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    menuTextel.innerHTML = liEl.innerHTML; // Fixed: innerHTML instead of innerHtml
    socialListsEl.classList.add("hide");
    menuEl.classList.toggle("rotate");
  });
});

console.log(menuTextel);
