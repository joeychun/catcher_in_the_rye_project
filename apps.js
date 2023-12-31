// Phone (because no phone.html)
const phoneBtn = document.getElementById('phone');
const overlay = document.getElementById('overlay');
const okBtn = document.getElementById('okBtn');

phoneBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

okBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Action Buttons
function goToHome() {
  window.location = "index.html";
}

function goTinderChat() {
  window.location = "tinder2.html";
}

function goTinderBack() {
  window.location = "tinder.html";
}

function nextNote() {
  const current = window.location.href.split("/").pop();
  if (current === "notes.html" || current == "notes") {
    window.location = "notes2.html";
  } else if (current == "notes2.html" || current == "notes2") {
    window.location = "notes3.html";
  } else if (current == "notes3.html" || current == "notes3") {
    window.location = "notes4.html";
  }
}

function prevNote() {
  const current = window.location.href.split("/").pop();
  if (current === "notes2.html" || current == "notes2") {
    window.location = "notes.html";
  } else if (current == "notes3.html" || current == "notes3") {
    window.location = "notes2.html";
  } else if (current == "notes4.html" || current == "notes4") {
    window.location = "notes3.html";
  }
}