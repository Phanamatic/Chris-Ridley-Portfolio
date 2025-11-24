// Simple year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
    });
  });
}

// Theme toggle: gremlin vs serious
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    const serious = body.classList.toggle("theme-serious");
    if (serious) {
      body.classList.remove("theme-gremlin");
    } else {
      body.classList.add("theme-gremlin");
    }
  });
}

// Eyes follow cursor (softly)
const eyesEl = document.getElementById("eyes");
if (eyesEl) {
  window.addEventListener("pointermove", (e) => {
    const rect = eyesEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = (e.clientX - centerX) / window.innerWidth;
    const dy = (e.clientY - centerY) / window.innerHeight;

    const maxTilt = 8;
    const tx = Math.max(Math.min(dx * maxTilt, maxTilt), -maxTilt);
    const ty = Math.max(Math.min(dy * maxTilt, maxTilt), -maxTilt);

    eyesEl.style.transform = `translate(${tx}px, ${ty}px)`;
  });
}

// Fun zone status generator
const statusText = document.getElementById("statusText");
const statusButton = document.getElementById("statusButton");

const vibes = [
  "Compiling brain… please stand by.",
  "Currently refactoring my life like spaghetti code.",
  "In a committed relationship with the Undo shortcut.",
  "Balancing art, code, and mild existential dread.",
  "One more build. Just one more. Probably.",
  "Debugging reality in production.",
  "Pretending to be a senior dev to my own code.",
];

function rollVibe() {
  if (!statusText) return;
  const pick = vibes[Math.floor(Math.random() * vibes.length)];
  statusText.textContent = pick;
}

if (statusText) {
  rollVibe();
}

if (statusButton) {
  statusButton.addEventListener("click", rollVibe);
}
