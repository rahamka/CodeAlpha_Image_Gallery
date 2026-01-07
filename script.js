// 1. Store all your image paths in a single Array (Data Structure)
const images = [
  "images/eduardo.jpg",
  "images/jeremy.jpg",
  "images/jonathan.jpg",
  "images/mikhail.jpg",
  "images/randi-wilson.jpg",
  "images/vincent-dorig.jpg"
];

// 2. Keep track of the current position (State)
let currentIndex = 0;

let imageDisplayEl = document.getElementById("imageDisplayEl");
let rightKey = document.getElementById("rightKey");
let leftKey = document.getElementById("lessThanArrow");

// Helper function to update the UI
function updateImage() {
  imageDisplayEl.setAttribute("src", images[currentIndex]);
}

// 3. Right Key (Moving Forward)
rightKey.addEventListener("click", () => {
  currentIndex++; // Increment index
  
  // If we go past the last image, go back to the start (Looping)
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateImage();
});

// 4. Left Key (Moving Backward)
leftKey.addEventListener("click", () => {
  currentIndex--; // Decrement index
  
  // If we go before the first image, go to the last one
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateImage();
});
