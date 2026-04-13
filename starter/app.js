
const textInput = document.getElementById("text-input");
const voiceSelect = document.getElementById("voice-select");
const speedSlider = document.getElementById("speed-slider");
const pitchSlider = document.getElementById("pitch-slider");
const speedValue = document.getElementById("speed-value");
const pitchValue = document.getElementById("pitch-value");
const speakBtn = document.getElementById("speak-btn");
const stopBtn = document.getElementById("stop-btn");
const charCount = document.getElementById("char-count");
const status = document.getElementById("status");
const statusText = document.getElementById("status-text");

// Web Speech API
const synth = window.speechSynthesis;
let voices = [];

// Step 3: Load available voices
// Get voices from the browser and populate the dropdown
function loadVoices() {
  // TODO: Get voices using synth.getVoices()
  // TODO: Check if voices array is empty (async loading)
  // TODO: Clear the dropdown
  // TODO: Loop through voices and create option elements
  // TODO: Set option value to index, text to voice name and language
}

// Step 4: Update character counter
// Show how many characters the user has typed
function updateCharCount() {
  // TODO: Get the length of textInput.value
  // TODO: Update charCount.textContent with the count
}

// Step 5: Implement speech synthesis
// The main speak() function that converts text to speech
function speak() {
  // TODO: Get text from input and trim whitespace
  // TODO: Validate that text is not empty
  // TODO: Create new SpeechSynthesisUtterance with the text
  // TODO: Set utterance.voice from selected dropdown index
  // TODO: Set utterance.rate from speed slider
  // TODO: Set utterance.pitch from pitch slider
  // TODO: Add onstart handler to update UI (add 'speaking' class, disable speak button)
  // TODO: Add onend handler to reset UI (remove 'speaking' class, enable speak button)
  // TODO: Add onerror handler for error cases
  // TODO: Call synth.speak(utterance) to start speaking
}

// Stop speaking
// Cancel any ongoing speech
function stop() {
  // TODO: Call synth.cancel()
  // TODO: Update status text to 'Stopped'
  // TODO: Reset button states
}

// Initialize the app
// Set up all event listeners when DOM is ready
function init() {

}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", init);