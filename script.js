// Dark Mode
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});

// Dark mode styling
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: #222;
    color: #eee;
  }
  .dark-mode header {
    background: #333;
  }
  .dark-mode footer {
    background: #333;
  }
  .dark-mode .project-card {
    background: #444;
    color: #eee;
  }
  .dark-mode .about {
    background: #2a2a2a;
  }
  .dark-mode .contact {
    background: #2a2a2a;
  }
`;
document.head.appendChild(style);

// Typing effect
const typingText = document.querySelector(".typing-text");
const words = ["Mahasiswa TI", "Calon Web Developer", "UI/UX Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[wordIndex];
  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();
