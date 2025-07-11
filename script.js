// Countdown to August 3
const timer = document.getElementById("timer");
const birthday = new Date("August 3, 2025 00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    timer.innerHTML = "🎉 It's today! Happy Birthday!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Toggle background music play/pause
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  if (audio.paused) {
    audio.play();
    btn.textContent = "🔊 Pause Music";
  } else {
    audio.pause();
    btn.textContent = "🔈 Play Music";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.getElementById('slideshow');
  const images = [
    'images/principal1.jpg',
    'images/principal2.jpg',
    'images/principal3.jpg',
    'images/principal4.jpg',
    'images/principal5.jpg',
    'images/principal6.jpg'
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    slideshow.style.opacity = 0;

    setTimeout(() => {
      slideshow.src = images[index];
      slideshow.style.opacity = 1;
    }, 500);
  }, 3000);
});

// Lightbox Gallery Script
document.querySelectorAll('.lightbox').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const img = document.createElement('img');
    img.src = this.href;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
