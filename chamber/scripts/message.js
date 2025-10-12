const msToDays = 86400000;

const msg = document.querySelector("#message");
const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = Math.floor((now - Number(lastVisit)) / msToDays);

    if (daysSinceLastVisit < 1) {
        message = "Back so soon! Awesome!";
    } 

    else if (daysSinceLastVisit === 1) {
        message = "You last visited 1 day ago.";
    } 
    
    else {
    message = `You last visited ${daysSinceLastVisit} days ago.`;
    }
}

msg.textContent = message;
localStorage.setItem("lastVisit", now);
