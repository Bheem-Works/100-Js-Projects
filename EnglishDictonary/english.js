// Grabbing elements from HTML so we can update UI later —
// WHY? Because we want to show messages, meanings, and audio dynamically.
const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");


async function fetchAPI(word) {
    try {
      // WHY show this? To let the user know that we’re working on it —
      // gives feedback while waiting for the API response.
      infoTextEl.style.display = "block";
      meaningContainerEl.style.display = "none";
      infoTextEl.innerText = `Searching the meaning of "${word}"`;
  
      // WHY use this URL? It's the API that gives word meanings + phonetics.
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const result = await fetch(url).then((res) => res.json());
  
      // WHY check result.title? Because if the word is invalid,
      // the API sends back a response with a 'title' field saying "No Definitions Found".
      if (result.title) {
        meaningContainerEl.style.display = "block";
        infoTextEl.style.display = "none";
        titleEl.innerText = word;
        meaningEl.innerText = "Word not found. Try a simpler or root form.";
        audioEl.style.display = "none";
      }
       else {
        // WHY do this? We now have a valid word and its meaning,
        // so we show that to the user and let them hear the pronunciation too.
        infoTextEl.style.display = "none";
        meaningContainerEl.style.display = "block";
        audioEl.style.display = "inline-flex";
  
        // WHY use result[0]? Because the API sends an array of entries,
        // and we just need the first one for now.
        titleEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio; // WHY? So user can hear how it's said.
      }
    } catch (error) {
      // WHY handle errors? If there's no internet, or API is down,
      // we still want to tell the user something went wrong.
      console.log(error);
      infoTextEl.innerText = `an error happened, try again later`;
    }
  }

  

  // WHY listen to keyup? So we can catch when the user presses Enter.
// We only search if there's some input and the Enter key was hit.
inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
      fetchAPI(e.target.value); // WHY? Start the process of finding the word meaning.
    }
  });
  