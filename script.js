// Change text and styles
document.getElementById("learn-btn").addEventListener("click", () => {
    const intro = document.getElementById("intro-text");
    intro.textContent = "Machine Learning allows computers to learn from data!";
    intro.style.color = "#007acc";
    intro.style.fontSize = "1.2rem";
  });
  
  // Add ML facts dynamically
  const facts = [
    "ML is used in voice assistants like Siri and Alexa.",
    "Netflix uses ML to recommend shows.",
    "Self-driving cars rely on ML algorithms.",
    "Spam filters use ML to detect junk emails.",
    "ML can predict stock market trends."
  ];
  
  let factIndex = 0;
  
  document.getElementById("add-fact-btn").addEventListener("click", () => {
    if (factIndex < facts.length) {
      const li = document.createElement("li");
      li.textContent = facts[factIndex++];
      document.getElementById("facts-list").appendChild(li);
    }
  });
  
  document.getElementById("remove-fact-btn").addEventListener("click", () => {
    const list = document.getElementById("facts-list");
    if (list.lastChild) {
      list.removeChild(list.lastChild);
      factIndex--;
    }
  });
  
  // Display uploaded image
  document.getElementById("imageUpload").addEventListener("change", function () {
    const file = this.files[0];
    const imgContainer = document.getElementById("image-container");
    imgContainer.innerHTML = ""; // Clear previous image
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Uploaded Simulation Image";
        imgContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
  