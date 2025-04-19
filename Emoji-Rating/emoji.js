const starEl = document.querySelectorAll(".fa-star"); // Sabai stars select gareko (NodeList)
const emojisEl = document.querySelectorAll(".far");   // Sabai emojis select gareko
const colors = ['red','orange','blue','green','darkgreen']; // Emoji haru ko color rating anusar change hune

updateRating(0); // Suru ma 0 rating set gareko

// Jaba user le kunai star click garcha:
starEl.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateRating(index); // Click gareko star ko index pass garincha
        console.log("Clicked star index:", index); // just index log gareko
    });
});

function updateRating(index) {
    // Star haru ma active class halne ya hataune:
    starEl.forEach((star, idx) => {
        if (idx < index + 1) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });

    // Emojis ma translate ani color change garne:
    emojisEl.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`; // index anusar left sarne
        emoji.style.color = colors[index]; // rating anusar color change hune
    });
}
