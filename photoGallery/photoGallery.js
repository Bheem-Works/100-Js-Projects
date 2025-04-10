// Storing the varaibles 
const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");


async function fetchImage () {
  // to Check the if the given inputValue has the valid min or max numbers 
  const inputValue = document.getElementById("input").value;
  if(inputValue > 10 || inputValue < 1) {
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "Sorry We can't fetch the images, Please try it later";
    return;
  }
  
  let imgs = "";

  try{
    btnEl.style.display = "none";
    const loading = `<img src="spinner.svg" />`
    galleryEl.innerHTML = loading;
    
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`     
    ).then((res) => {
      res.json().then((data)=>{
        data.forEach((pic)=>{
          imgs+= `<img src=${pic.urls.small} alt="image"/>`;
          galleryEl.style.display= "block";
          galleryEl.innerHTML = imgs;
          btnEl.style.display = "block";
          errorMessageEl.style.display = "none";
        });
      })
    })
  }
  catch(error) {
    console.log(error);
    errorMessageEl.style.dislay = "block";
    errorMessageEl.innerHTML = "There are some errors, Please try it later. "
    btnEl.style.display = "block";
    galleryEl.style.display = "none";
  }
}

btnEl.addEventListener("click",fetchImage);