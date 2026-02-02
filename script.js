// Typing Effect
const text = `It’s your birthdayyy 🎉
Which means you’re officially allowed
extra cake, extra naps,
and unlimited bragging rights today 😌
I hope this year holds love,
peace, and all the happiness you deserve. 🤍`;

let i = 0;
const speed = 40;
const typingElement = document.getElementById("typing");

function typeText() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}

typeText();

// Candle Blow
const flame = document.getElementById("flame");
const finalText = document.getElementById("finalText");

flame.addEventListener("click", () => {
  flame.style.display = "none";
  finalText.innerHTML =
    "❤️ Happy Birthday, my favorite person 🎂😄 ❤️";
});
