const num1 = Math.ceil(Math.random() * 30);
const num2 = Math.ceil(Math.random() * 30);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

// Get the score from local storage
let score = JSON.parse(localStorage.getItem("score")) || 0;

// Create win message element but don't add it yet
const winShow = document.createElement("p");
winShow.classList.add("winShow");
winShow.innerText = "You can leave now || ";

// Create message for feedback and add it to the form container
const feedbackEl = document.createElement("p");
feedbackEl.id = "feedback";
feedbackEl.style.display = "none"; // Initially hidden
formEl.appendChild(feedbackEl); // Add to form container instead of body

// Create "Play Again" button but don't add it yet
const playAgainBtn = document.createElement("button");
playAgainBtn.classList = "play";
playAgainBtn.innerHTML = "Play Again 😊";
playAgainBtn.type = "button";
playAgainBtn.style.display = "none";
playAgainBtn.addEventListener("click", () => {
  localStorage.clear();
  score = 0;
  showFeedback("Game reset! Let's play again!", "blue");
  setTimeout(() => {
    window.location.reload(); // This will refresh the page
  }, 1000);
});

// Update score display
updateScoreDisplay();

// Check if the win condition is already met
checkWinCondition();

// Set the question text
questionEl.innerText = `What is the sum of ${num1} and ${num2}?`;

let correctAns = num1 + num2; // Changed to 'let' since we'll reassign it

// Handle form submission
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from refreshing the page

  const userAns = +inputEl.value;

  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
    updateScoreDisplay();

    // Show feedback instead of alert
    showFeedback("Correct! Good job!", "green");

    // Generate new question if not reached win condition
    if (score < 2) {
      generateNewQuestion();
    }

    checkWinCondition();
    inputEl.value = ""; // Clear input field after submission
  } else {
    // Show feedback instead of alert
    showFeedback("Wrong answer! Try again.", "red");
    inputEl.value = ""; // Clear input field after submission
  }
});

// Create and add clear button
const clear = document.createElement("button");
clear.innerHTML = "Clear Score";
clear.type = "button";
clear.style.display = "none";
formEl.appendChild(clear);

clear.addEventListener("click", () => {
  localStorage.clear();
  score = 0;
  updateScoreDisplay();
  showFeedback("Score cleared!", "blue");
  setTimeout(() => {
    window.location.reload(); // This will refresh the page
  }, 1000);
});

// Helper functions
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

function updateScoreDisplay() {
  scoreEl.innerText = `Score: ${score}`;
}

function showFeedback(message, color) {
  feedbackEl.textContent = message;
  feedbackEl.style.color = color;
  feedbackEl.style.display = "block";

  // Automatically hide feedback after 2 seconds
  setTimeout(() => {
    feedbackEl.style.display = "none";
  }, 2000);
}

function generateNewQuestion() {
  const newNum1 = Math.ceil(Math.random() * 30);
  const newNum2 = Math.ceil(Math.random() * 30);
  questionEl.innerText = `What is the sum of ${newNum1} and ${newNum2}?`;
  correctAns = newNum1 + newNum2;
}

function checkWinCondition() {
  if (score >= 2) {
    // Use feedback instead of alert
    showFeedback("You have reached the limit!", "green");

    // Small delay to allow feedback to display before UI changes
    setTimeout(() => {
      questionEl.innerHTML =
        "Congrats! You have matched the required correct answers!";
      formEl.style.display = "none";
      scoreEl.style.fontSize = "40px";

      // Add the win message and Play Again button to the document
      document.body.appendChild(winShow);
      document.body.appendChild(playAgainBtn);
      winShow.style.display = "block";
      playAgainBtn.style.display = "block";
      // clear.style.display = "block";
    }, 500);
  }
}
