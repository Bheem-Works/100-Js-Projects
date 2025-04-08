// Storing the varaibles 
    const btnEl = document.getElementById('btn');
    const errorMessageEl = document.getElementById('errorMessage');
    const galleryEl = document.getElementById('gallery');


    async function fetchImage () {

        const inputvalue = document.getElementById('input').value;
        
        if(inputvalue >  10 || inputvalue < 1 ){
            errorMessageEl.style.display = "block";
            errorMessageEl.innerText = "Number shoudl be betweeen the 0 and 11";
            return;
        }
        
        
        let imgs = "";
        
        try {
            btnEl.style.display = "none";
            const loading = `<img src="spinner.svg" />`;
            galleryEl.innerHTML = loading;

            
            await fetch(
              `https://api.unsplash.com/photos?per_page=${inputvalue}&page=${Math.round(
                Math.random() * 1000
              )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`
            ).then((res) =>
              res.json().then((data) => {
                if (data) {
                  data.forEach((pic) => {
                    imgs += `
                    <img src=${pic.urls.small} alt="image"/>
                    `;
                    galleryEl.style.display = "block";
                    galleryEl.innerHTML = imgs;
                    btnEl.style.display = "block";
                    errorMessageEl.style.display = "none";
                  });
                }
              })
            );
        } catch (error) {
            console.log(error);
            errorMessageEl.style.display = "block";
            errorMessageEl.innerHTML = "An error happened, try again later";
            btnEl.style.display = "block";
            galleryEl.styel.display = "none";
        }
    }

    btnEl.addEventListener("click",fetchImage);