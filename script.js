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

// Message Wall with Local Storage
const messageForm = document.getElementById("messageForm");
const messageList = document.getElementById("messageList");

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("birthdayMessages")) || [];
  messageList.innerHTML = "";
  messages.forEach(msg => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${msg.name}:</strong> ${msg.text}`;
    messageList.appendChild(li);
  });
}

messageForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const text = document.getElementById("message").value.trim();

  if (!name || !text) return;

  const messages = JSON.parse(localStorage.getItem("birthdayMessages")) || [];
  messages.push({ name, text });
  localStorage.setItem("birthdayMessages", JSON.stringify(messages));

  messageForm.reset();
  loadMessages();
});

loadMessages();

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

