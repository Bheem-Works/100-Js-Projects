const container = document.querySelector(".container");
const inputEl = document.getElementById("input");
const fontSizeEl = document.querySelector("#fontSize");
const enterEl = document.querySelector(".enter");

enterEl.addEventListener("click",()=>{
    const inputElValue = inputEl.value;
    const list = document.createElement("li");
    const value = list.innerHTML = inputElValue;
    console.log(value);
    const fontValue = fontSizeEl.value;
    // console.log(fontValue);
    list.style.fontsize = `${fontValue}px`;
    // const valueText = value.style.fontSize = `${fontValue}px`;
    container.appendChild(list);
    
    
})
// const keyPress = (e) => e.key === "Enter" && add(); 
//This is not workin may be the functionality is wrong
