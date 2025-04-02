// storing into the varaibles 
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click",()=>{
    createPassword();
})

copyIconEl.addEventListener("click",()=>{
    copyPassword();
    if(input.value) {
        alertContainerEl.classList.remove("active");

        setTimeout(()=>{
            alertContainerEl.classList.add("active");
        },2000);
    } 
});

function createPassword() {
    let chars =     "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 16;
    let password = "";
    for(let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum,randomNum+1);
    }

    inputEl.value = password;
    alertContainerEl.innerHTML = password + "Copied";
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(input.value);
}