// Storing into the variables
const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const progressEl = document.querySelector(".progress-bar-front");
const stepsEls = document.querySelectorAll(".step"); // Changed to querySelectorAll for multiple steps

let currentChecked = 1;

nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsEls.length) {
    currentChecked = stepsEls.length;
  }
  updateStepProgress();
});

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepsEls.forEach((stepEl, idx) => {
    if (idx < currentChecked) {
      stepEl.classList.add("checked");
      
      // Determine step label
      let stepLabel = "Step " + (idx + 1);
      if (idx === 0) {
        stepLabel = "Start";
      } else if (idx === stepsEls.length - 1) {
        stepLabel = "Final";
      }
      
      stepEl.innerHTML = `
            <i class="fas fa-check"></i>
            <small>${stepLabel}</small>
            `;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `
            <i class="fas fa-times"></i>
            `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressEl.style.width =
    ((checkedNumber.length - 1) / (stepsEls.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepsEls.length) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}

// Initial setup
updateStepProgress();