
// Collection fo the varaibles 
const container = document.querySelector(".container");
const inputEl = document.getElementById("input");
const fontSizeEl = document.querySelector("#fontSize");
const enterEl = document.querySelector(".enter");
const fontColor = document.querySelector("#fontColor");

enterEl.addEventListener("click",()=>{
    const inputElValue = inputEl.value; //Taking the input value;
    const list = document.createElement("li"); //Creating the list elements
    list.classList.add("font-list");
    const value = list.innerHTML = inputElValue; // inserting the value to the list 
    console.log(value);
    
    // To Track the changes of the fontCurrentValue  & Change the Text 
    fontSizeEl.addEventListener("change",()=>{
        const fontSizeValue = fontSizeEl.value; // taking the selectSizeEl value ;
        list.style.fontSize = fontSizeValue;  // Inserting the fontSizeValue to the text 
        console.log("fontSize",fontSizeValue); 
    })

    // Font Color fuctions; 
    fontColor.addEventListener("change",()=>{
        const fontColorEl = fontColor.value;
        list.style.color = fontColorEl;
        console.log("fontColorEl",fontColorEl);
    })

    container.appendChild(list); // appending list to the Container 
})

// Note: You can't acess dom directly
const keyPress = (e) => e.key === "Enter" && enterEl.click(); // enterEl.click () is a Methods  
inputEl.addEventListener("keypress",keyPress); // when the key  is up the keyPress function will run




