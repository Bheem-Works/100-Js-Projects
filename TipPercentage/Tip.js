// creating a varible first 
const btnEl = document.getElementById('calculator');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalSpan = document.getElementById('total');

function calculateTotal () {
    const billValue = (billInput.value);
    const tipValue = (tipInput.value);


    if(isNaN(billValue) || isNaN(tipValue)) {
        alert("Please enter a valid number");
        return;
    }       
    const totalValue = billValue * (1 + tipValue /100);
    totalSpan.innerText = totalValue.toFixed(2);
}

console.log(calculateTotal);
btnEl.addEventListener("click",calculateTotal);
