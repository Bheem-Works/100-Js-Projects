// Corrected selectors to match your HTML
const textArea = document.getElementById('textarea');
const totalElement = document.getElementById('total');
const remainingElement = document.getElementById('remaining');
const timeElement = document.getElementById('time');

let startTime = null;
let wordCountReach = false;

textArea.addEventListener("keyup", () => {
    updateCounter();
    
    const wordCount = textArea.value.trim().split(/\s+/).filter(word => word !== '').length;
    console.log("Word count:", wordCount); 
    
    if(textArea.value.length === 1 && startTime === null) {
        startTime = Date.now();
    }
    
    if(wordCount >= 50 && !wordCountReach) {
        const endTime = Date.now();
        const secondsElapsed = ((endTime - startTime) / 1000).toFixed(2);
        timeElement.innerText = `Show time: ${secondsElapsed} seconds`;
        wordCountReach = true;
    }
});

function updateCounter() {
    totalElement.innerText = `Total character: ${textArea.value.length}`;
    remainingElement.innerText = `Remaining Character: ${textArea.getAttribute("maxlength") - textArea.value.length}`;
}

// Initialize counter on page load
updateCounter();