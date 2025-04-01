// storing into the varaibles
const imgContainer = document.querySelector(".img-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let imageNum = 10;
  imageChanger(imageNum);
});

const imageChanger = (imageNum) => {
  for (let i = 0; i < imageNum; i++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    imgContainer.appendChild(newImg);
  }
};
