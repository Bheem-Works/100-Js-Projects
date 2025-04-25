let textStore = "Miso is beautiful";
let store = document.getElementById('demo');
let index = 0;
function autoWrite () {
    store.innerText = textStore.slice(0,index);
    index++;

    if(index > textStore.length) {
        index = 0;
    }
}

setInterval(autoWrite,300);