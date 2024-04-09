// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = Date.now();

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector("#siteVisits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
const days = ((theDateToday - lastVisit) / msToDays)

if (lastVisit !== 0) {
  if (days < 1) {
    visitsDisplay.textContent = `Back so soon! Awesome!`;
  }
  else {
    if (days < 2) {
      visitsDisplay.textContent = `You last visited 1 day ago.`;
    }
    else {
      visitsDisplay.textContent = `You last visited ${days.toFixed(0)} days ago.`;
    }
  }
} else {
  visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

// 4️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("lastVisit-ls", theDateToday);