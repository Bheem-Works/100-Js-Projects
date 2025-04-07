const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

// Load saved notes when the page loads
document.addEventListener("DOMContentLoaded", () => {
  displayNotes();
});

// Function to display all notes
function displayNotes() {
  // Clear existing notes to prevent duplicates
  const existingNotes = document.querySelectorAll(".note");
  existingNotes.forEach(note => note.remove());
  
  // Get and display saved notes
  const notes = getNotes();
  notes.forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
  });
}

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;
  // Add data attribute to store the ID
  element.dataset.id = id;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Are you sure you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });
  
  return element;
}

function deleteNote(id, element) {
  try {
    // Get current notes and filter out the one to delete
    const notes = getNotes().filter((note) => note.id !== id);
    saveNote(notes);
    // Remove the element from the DOM
    element.remove();
  } catch (error) {
    console.error("Error deleting note:", error);
  }
}

function updateNote(id, content) {
  try {
    const notes = getNotes();
    const target = notes.find((note) => note.id === id);
    if (target) {
      target.content = content;
      saveNote(notes);
    }
  } catch (error) {
    console.error("Error updating note:", error);
  }
}

function addNote() {
  try {
    const notes = getNotes();
    // Create unique ID using timestamp and random number
    const noteObj = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      content: "",
    };
    
    // Create and insert the note element
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);
    
    // Add to storage
    notes.push(noteObj);
    saveNote(notes);
  } catch (error) {
    console.error("Error adding note:", error);
  }
}

function saveNote(notes) {
  try {
    localStorage.setItem("note-app", JSON.stringify(notes));
  } catch (error) {
    console.error("Error saving notes:", error);
  }
}

function getNotes() {
  try {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
  } catch (error) {
    console.error("Error retrieving notes:", error);
    // Return empty array if there's an error
    return [];
  }
}

// Event listener for the add button
btnEl.addEventListener("click", addNote);