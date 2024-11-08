"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButtons = document.querySelectorAll(".btn--yes");
const catImg = document.querySelector(".cat-img");
const confessionAudio = document.getElementById("confessionAudio"); // Reference to the audio element

const MAX_IMAGES = 5;

let play = true;
let yesCount = 0;

yesButtons.forEach(button => {
  button.addEventListener("click", handleYesClick);
});

function handleYesClick() {
  if (play) {
    yesCount++;
    const imageIndex = Math.min(yesCount, MAX_IMAGES);
    changeImage(imageIndex);

    // Play the song when the first "Yes" is clicked and adjust volume
    if (yesCount === 1) {
      confessionAudio.volume = 0.3;  // Set the volume to 30% of max
      confessionAudio.play();  // Start playing the song

      titleElement.innerHTML = `
        <span class="title-main">Vinn's Confession: 💌</span><br>
        <span class="title-message">HIIII KEZIAHHH !! I’ve got something to tell you. I really like you, more than just a friend. Everything changed when I met you. At first, I thought we we're just messing around, but as we started playing together more and playing with just the two of us, I started to have feelings for you. Every time we play, or even just talk, I find myself smiling, feeling this strange warmth inside, like butterflies in my stomach. It’s like my day gets better whenever I’m with you, and I look forward to spending each day with you. And don’t get me started on your voice. The way you call my name? It seriously makes me blush every time (,,> ᴗ <,,). I always miss you, but when we’re not talking or playing, I catch myself missing you more. It’s like there’s a part of my day that’s incomplete without you in it. Whenever you’re out or at school, I find myself thinking about you. I really love spending time with you, even if you’re doing something like your homework. And the way you tease me? It’s another reason why I enjoy being around you so much. Since we met, I’ve started to feel closer to you, remembering all these little details about you, like your favorite color, and I find myself wanting to know more. I really love spending time with you, even if you’re doing something like your homework. And the way you tease me? It’s another reason why I enjoy being around you so much. Since we met, I’ve started to feel closer to you, remembering all these little details about you, like your favorite color, and I find myself wanting to know more.<br><br>You've given me a reason to wake up every morning, to be a better person. I want to spend more time with you, get to know you better, and see where this thing we have goes. You mean a lot to me, Keziah, and I want you to know that <3</span>`;

      buttonsContainer.classList.add("hidden");
    }
    play = false;  // Prevent further clicks after the first one
  }
}

function changeImage(image) {
  catImg.src = `cat2.jpg`;
}
