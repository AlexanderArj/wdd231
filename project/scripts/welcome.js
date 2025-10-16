const dialog = document.querySelector("#welcome-dialog");
const msg = document.querySelector("#message");
const closeBtn = document.querySelector("#close-dialog");
const visitCounter = document.querySelector("#visit-counter");

const msToDays = 86400000;
const now = Date.now();

let visits = Number(localStorage.getItem("visits")) || 0;
visits++;

const lastVisit = localStorage.getItem("lastVisit");
const lastShown = localStorage.getItem("lastShown");
let message = "";

if (!lastVisit) {
  message = "Welcome for the first time! Enjoy discovering São Paulo with us.";
} else {
  const daysSinceLastVisit = Math.floor((now - Number(lastVisit)) / msToDays);

  if (daysSinceLastVisit < 1) {
    message = `Back so soon! This is your visit #${visits}.`;
  } else if (daysSinceLastVisit === 1) {
    message = `You last visited 1 day ago. This is your visit #${visits}.`;
  } else {
    message = `You last visited ${daysSinceLastVisit} days ago. This is your visit #${visits}.`;
  }
}

let textoVisitas = "";

if (visits === 1) {
    textoVisitas = `You have visited this site ${visits} time`

} else {
    textoVisitas = `You have visited this site ${visits} times`;
}

visitCounter.textContent = textoVisitas;

let lastShownDate = null;

if (lastShown) {
    const numeroDeFecha = Number(lastShown);
    const objetoFecha = new Date(numeroDeFecha);
    lastShownDate = objetoFecha.toDateString();
}

const today = new Date().toDateString();

if (lastShownDate !== today) {
  msg.textContent = message;
  dialog.showModal();
  localStorage.setItem("lastShown", now);
}

closeBtn.addEventListener("click", () => dialog.close());

localStorage.setItem("lastVisit", now);
localStorage.setItem("visits", visits);