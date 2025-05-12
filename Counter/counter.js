const demo = document.getElementById("demo")
const increment = document.querySelector(".increment");
const reset = document.querySelector(".reset");
const decrement = document.querySelector(".decrement");

let intialValue = 0; 

increment.addEventListener("click",()=>{
    let increment = intialValue += 1; 
    demo.innerHTML = increment;
})

reset.addEventListener("click",()=>{
    let increment = 0; 
    demo.innerHTML = increment;
})

decrement.addEventListener("click",()=>{
    let decrement = intialValue -= 1; 
    demo.innerHTML = decrement;
})