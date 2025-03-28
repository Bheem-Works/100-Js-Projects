const navbar = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");
console.log(bottomContainer.offsetHeight);
console.log(navbar.offsetHeight);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainer.offsetHeight - navbar.offsetHeight - 50
  ) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});
