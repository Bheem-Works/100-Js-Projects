const emojiBtn = document.getElementById("btn");
const emojiName = document.getElementById("emoji-name");
const emoji = [];

// Now we have to fetch the data
async function getEmoji() {
  try {
    let response = await fetch(
      "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
    );
    let data = await response.json();

    // Check if data exists and has items
    if (!data || !data.length) {
      console.error("No emoji data received");
      return;
    }

    // Only add as many emojis as are available (up to 1500)
    const itemCount = Math.min(data.length, 1500);

    for (let i = 0; i < itemCount; i++) {
      emoji.push({
        emojiChar: data[i].character, // The actual emoji
        emojiName: data[i].slug || data[i].unicodeName || "Unknown", // The name of the emoji
        emojiCode: data[i].unicode, // The unicode value
      });
    }

    // Enable the button once data is loaded
    emojiBtn.disabled = false;
    emojiBtn.innerText = "Click for random emoji";
  } catch (error) {
    console.error("Error fetching emojis:", error);
    emojiName.innerText = "Error loading emojis";
  }
}

// Disable button until data is loaded
emojiBtn.disabled = true;
emojiBtn.innerText = "Loading emojis...";

// Load emoji data
getEmoji();

emojiBtn.addEventListener("click", () => {
  // Check if emoji array has data
  if (emoji.length === 0) {
    emojiName.innerText = "No emojis loaded yet";
    return;
  }

  const random = Math.floor(Math.random() * emoji.length);
  emojiBtn.innerText = emoji[random].emojiChar;
  emojiName.innerText = `${emoji[random].emojiName} (${emoji[random].emojiCode})`;
});
