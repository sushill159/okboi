// Background Music
const music = document.getElementById('bg-music');
const btn = document.getElementById('mute-btn');

music.volume = 0.5;
music.muted = true;
btn.innerText = '🔇 Music Off';

btn.addEventListener('click', () => {
  music.muted = !music.muted;
  btn.innerText = music.muted ? '🔇 Music Off' : '🔊 Music On';
  if (!music.muted) music.play();
});

// Typewriter Quote Animation with spacing
const quotes = [
  "Cursed energy must flow...",
  "Eyes see the soul ",
  "Limit breaker mode ",

];
let i = 0, j = 0;
let currentQuote = quotes[i];
const quoteElem = document.getElementById("quote");

function type() {
  if (j < currentQuote.length) {
    quoteElem.innerHTML += currentQuote[j] === " " ? "&nbsp;" : currentQuote[j];
    j++;
    setTimeout(type, 80);
  } else {
    setTimeout(() => {
      quoteElem.innerHTML = "";
      j = 0;
      i = (i + 1) % quotes.length;
      currentQuote = quotes[i];
      type();
    }, 2000);
  }
}

window.onload = () => {
  type();
  tooltipSound.load(); // Preload tooltip sound on window load
};

// Tooltip Logic with Hover Sound
const gojoTooltip = document.getElementById("gojo-tooltip");
const gojoImg = document.getElementById("gojo-img");
const tooltipSound = document.getElementById("tooltip-sound");

const gojoFacts = [
  `"Limitless Technique = Unlimited Riz 😎"`,
  `"Eyes so pretty they break the plot 💀"`,
  `"Can solo your whole verse 🔥"`,
  `"Six Eyes? More like Six Style!"`,
  `"Born to flex cursed energy 💫"`,
  `"Infinity between us, emotionally too 🥲"`
];

gojoImg.addEventListener("mouseenter", () => {
  const randomFact = gojoFacts[Math.floor(Math.random() * gojoFacts.length)];
  gojoTooltip.innerText = `Gojo Satoru\n${randomFact}`;
  tooltipSound.pause(); // Stop if already playing
  tooltipSound.currentTime = 0;
  tooltipSound.play();
});