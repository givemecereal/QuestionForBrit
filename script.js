const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

const introScreen = document.getElementById("intro-screen");
const questionScreen = document.getElementById("question-screen");
const nextBtn = document.getElementById("next-btn");
const introTitle = document.getElementById("intro-title");
const introText = document.getElementById("intro-text");

const introGifs = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHQ5bW1wNDNoaDl1em54MjI5NjRleWhreDdpeWp2YzllaXN3aGdsNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y93x7gLXTO5dnSWCEI/giphy.gif", 
  "https://media1.tenor.com/m/E4auL-XxaaYAAAAd/floreyonce-cat.gif", 
  "https://media.tenor.com/j4qf7yxIXusAAAAi/cute.gif", 
];

let introStep = 0;

nextBtn.addEventListener("click", () => {
  introStep++;
  if (introStep === 1) {
    document.getElementById("intro-gif").src = introGifs[introStep];
    introTitle.textContent = "Okay… here it goes 😅";
    introText.textContent =
      "February 14 isn't until another 2 weeks ... but hopefully i can be the 1 4 u LOL";
  }

  else if (introStep === 2) {
    document.getElementById("intro-gif").src = introGifs[introStep];
    introTitle.textContent = "One more thing…";
    introText.textContent = "I’ve been meaning to ask you something 💭";
    nextBtn.textContent = "Continue ➡️";
  }

  else if (introStep === 3) {
    introScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
  }
});

yesBtn.addEventListener("click", () => {
    response.textContent = "YAY 💕 You’re officially my Valentine!\r\nSee you on 2/14 ;)";
    response.classList.remove("hidden");
    noBtn.style.display = "none";
    yesBtn.style.display = "none";

    document.getElementById("gif-before").classList.add("hidden");
    document.getElementById("gif-after").classList.remove("hidden");
    document.getElementById("no-gifs").classList.add("hidden");

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  });

const noGifs = document.querySelectorAll(".no-gif");
let noClicks = 0;
const shrinkSteps = [1, 0.85, 0.7, 0.5, 0.3];

noBtn.addEventListener("click", () => {
  noClicks++;
  document.getElementById("gif-before").classList.add("hidden");
  noBtn.classList.add("pop");
  setTimeout(() => noBtn.classList.remove("pop"), 200);
  // Shrink button
  const scale = shrinkSteps[noClicks] ?? 0;
  noBtn.style.transform = `scale(${scale})`;

  // Swap GIF
  if (noClicks < noGifs.length) {
    noGifs.forEach(gif => gif.classList.add("hidden"));
    noGifs[noClicks].classList.remove("hidden");
  }

  // Final state
  if (noClicks >= shrinkSteps.length - 1) {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";

    response.textContent = "You know what, you don't have a choice anymore >:(";
    response.classList.remove("hidden");
  }
});

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);
