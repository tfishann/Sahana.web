
document.addEventListener("DOMContentLoaded", () => {
  const heart = document.getElementById("heart");
  const clickLine = document.getElementById("click-line");
  const bgMusic = document.getElementById("bg-music");

  clickLine.addEventListener("click", () => {
    clickLine.innerHTML = "Wait for 15 seconds...";
    bgMusic.volume = 0.1;
    bgMusic.play();
    let vol = 0.1;
    const fadeIn = setInterval(() => {
      if (vol < 0.8) {
        vol += 0.05;
        bgMusic.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 500);
    setTimeout(() => {
      clickLine.style.display = "none";
      heart.style.display = "none";
      // Future steps will be inserted here
    }, 15000);
  });
});
