const binaryInput = document.getElementById('binaryCode');      // user enters binary (1010)
const textInput = document.getElementById('textInput');          // user enters normal text (Hello)
const textOutput = document.getElementById('textOutput');        // shows the decoded binary
const binaryOutput = document.getElementById('binaryOutput');    // shows binary of entered text

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


// text to binary;
textInput.addEventListener('input',() => {
    let textValue = textInput.value;
    let binaryNumber = [...textValue]
    .map(char => char.charCodeAt(0).toString(2))
    .join(' ');
    binaryOutput.innerText = binaryNumber || "TextValue";
})