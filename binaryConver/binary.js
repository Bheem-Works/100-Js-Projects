const binaryInput = document.getElementById('binaryCode');      // user enters binary (1010)
const textInput = document.getElementById('textInput');          // user enters normal text (Hello)
const textOutput = document.getElementById('textOutput');        // shows the decoded binary
const binaryOutput = document.getElementById('binaryOutput');    // shows binary of entered text

// intial value for number 
    binaryInput.value = "1101101 1101001 1110011 1101111";
// binary to text;
binaryInput.addEventListener('input',()=>{
    let binaryValue = binaryInput.value.trim();
    let binary = binaryValue
    .split(' ')
    .map(b=>String.
    fromCharCode(parseInt(b,2)))
    .join('');
    textOutput.innerText = binary || "BinaryValue";
})

// intial value for the text
textInput.value = "miso";
// text to binary;
textInput.addEventListener('input',() => {
    let textValue = textInput.value;
    let binaryNumber = [...textValue]
    .map(char => char.charCodeAt(0).toString(2))
    .join(' ');
    binaryOutput.innerText = binaryNumber || "TextValue";
})


// intial value 
// Check initial value in text input
window.addEventListener('DOMContentLoaded', () => {
    if (textInput.value.trim()) {
        textInput.dispatchEvent(new Event('input'));
    }

    if (binaryInput.value.trim()) {
        binaryInput.dispatchEvent(new Event('input'));
    }
});
