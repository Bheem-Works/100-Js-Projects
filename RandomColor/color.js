const color = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const containerColorEl = document.createElement("div");
  containerColorEl.classList.add("color-container");
  color.appendChild(containerColorEl);
}

const colorChange = document.querySelectorAll(".color-container");

generateColor();
console.log(colorChange);

function generateColor() {
  colorChange.forEach((colorContainer) => {
    const newColor = randomColor();
    colorContainer.style.background = "#" + newColor;
    colorContainer.innerText = "#" + newColor;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
