const containerEl = document.querySelector(".contianer");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;

  console.log(`careerIndex: ${careerIndex}, characterIndex: ${characterIndex}`);

  containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
  `;

  if (characterIndex === careers[careerIndex].length) {
    console.log("One career finished, switching to next career!");
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    console.log("All careers finished, restarting from first!");
    careerIndex = 0;
  }

  setTimeout(updateText, 400);
}
