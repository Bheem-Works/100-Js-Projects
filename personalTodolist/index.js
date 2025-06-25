document.querySelector(".addButton").addEventListener("click", add);

function add() {
  // take the input value;
  const inputValue = document.getElementById("inputTest").value;
  // creating the p elements;
  const pElement = document.createElement("p");
  pElement.textContent = inputValue;
  const addP_append = pElement.appendChild(inputValue);
  const appendToBody = document.querySelector(".mix");
  appendToBody.appendChild(addP_append);
}
