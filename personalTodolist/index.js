// This is the personalTodoListTabjk;

// I have to create the varaibles;

const buttonClick = document.querySelector(".forButtons");
buttonClick.addEventListener("click", add);

function add() {
  const input_element = document.getElementById("inputTest").value;

  const input_checkBox = document.createElement("input");
  input_checkBox.type = "checkbox";
  input_checkBox.classList.add("inputChecBox");
  const mix = document.querySelector(".mix");
  mix.appendChild(input_checkBox);

  // creting the elements;
  const p_element = document.createElement("p");
  p_element.innerHTML = input_element;
  mix.appendChild(p_element);
}
