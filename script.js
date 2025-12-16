let imageDisplayEl = document.getElementById("imageDisplayEl");
let imgAttribute = imageDisplayEl.getAttribute("src");

// Right Key
let rightKey = document.getElementById("rightKey");
rightKey.addEventListener("click", () => {
  if (imgAttribute == "images/eduardo.jpg") {
    {
      imgAttribute = "images/jeremy.jpg";
      imageDisplayEl.setAttribute("src", "images/jeremy.jpg");
    }
  } else if (imgAttribute == "images/jeremy.jpg") {
    imgAttribute = "images/jonathan.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  } else if (imgAttribute == "images/jonathan.jpg") {
    imgAttribute = "images/mikhail.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  } else if (imgAttribute == "images/mikhail.jpg") {
    imgAttribute = "images/randi-wilson.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  } else if (imgAttribute == "images/randi-wilson.jpg") {
    imgAttribute = "images/vincent-dorig.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  } else if (imgAttribute == "images/vincent-dorig.jpg") {
    imgAttribute = "images/eduardo.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  }
});

// Left Key
let leftKey = document.getElementById("lessThanArrow");
leftKey.addEventListener("click", () => {
  // In decending Order
  if (imgAttribute == "images/eduardo.jpg") {
    imgAttribute = "images/vincent-dorig.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  } else if (imgAttribute == "images/vincent-dorig.jpg") {
    imgAttribute = "images/randi-wilson.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  } else if (imgAttribute == "images/randi-wilson.jpg") {
    imgAttribute = "images/mikhail.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  } else if (imgAttribute == "images/mikhail.jpg") {
    imgAttribute = "images/jonathan.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  } else if (imgAttribute == "images/jonathan.jpg") {
    imgAttribute = "images/jeremy.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  } else if (imgAttribute == "images/jeremy.jpg") {
    imgAttribute = "images/eduardo.jpg";
    imageDisplayEl.setAttribute("src", imgAttribute);
  }
});
