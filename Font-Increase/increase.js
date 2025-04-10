const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const h2 = document.getElementById("h2");

noBtn.addEventListener("click", () => {
  increaseNO();
  increaseNO();
});

const increaseNO = () => {
  yesBtn.style.fontSize = "18px";
};

let countTime = 0;
function increaseCount() {
  countTime += 20;
  yesBtn.style.fontSize = `${countTime}px `;
  h2.innerHTML = "Are you sure then click the many time to get answer"
  if(countTime > 300) {
    h2.innerHTML = "Ooops I am not! 🥲"
  }
}

noBtn.addEventListener("click", increaseCount);

yesBtn.addEventListener("click",()=>{
  yesBtn.style.display = "none";
  noBtn.style.display="none";
  h2.innerHTML = "I know i am 6 feet tall 😎"
})
