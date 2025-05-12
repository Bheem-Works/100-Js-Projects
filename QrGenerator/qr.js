let imgBox = document.querySelector(".imgqr");
let img = document.querySelector(".img");
let qrText = document.querySelector(".input");
let downloadBtn = document.querySelector(".download-btn");

function generateQr() {
    if(qrText.value.length > 0) {
        let imgUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(qrText.value);
        img.src = imgUrl;

        // Enable download after image is fully loaded
        img.onload = () => {
            fetch(imgUrl)
                .then(res => res.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    downloadBtn.href = url;
                    downloadBtn.download = 'qr-code.png'; // Set filename
                });
        }
    }
}
