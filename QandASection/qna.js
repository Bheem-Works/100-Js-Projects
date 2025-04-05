const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const button = question.querySelector(".question-btn");

    button.addEventListener("click",() => {
        question.classList.toggle("show-text");
    })
})