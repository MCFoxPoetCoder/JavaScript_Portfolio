const docBody = document.querySelector("body");
const padButtons = [
  { key: "qButton", id: "heater-1", audioID: "Q", displayName: "Heater 1" },
  { key: "wButton", id: "heater-2", audioID: "W", displayName: "Heater 2" },
  { key: "eButton", id: "heater-3", audioID: "E", displayName: "Heater 3" },
  { key: "aButton", id: "heater-4", audioID: "A", displayName: "Heater 4" },
  { key: "sButton", id: "clap", audioID: "S", displayName: "Clap" },
  { key: "dButton", id: "open-hh", audioID: "D", displayName: "Open-HH" }, 
  { key: "zButton", id: "kick-n-hat", audioID: "Z", displayName: "Kick-n'-Hat" },
  { key: "xButton", id: "kick", audioID: "X", displayName: "Kick" },
  { key: "cButton", id: "closed-hh", audioID: "C", displayName: "Closed-HH" },
];
const displayEl = document.getElementById("display");

const el = {};
padButtons.map(target => {
  el[target.key] = document.getElementById(target.id);
});
const {qButton, wButton, eButton, aButton, sButton, dButton, zButton, xButton, cButton} = el;

padButtons.map(btnItem => {
    const btn = el[btnItem.key];
    btnItem.source = btn.querySelector("audio").src
  }
)

const audio = new Audio();
const drumPadRegex = /[qweasdzxc]/i;

function playSound (key) {
  if (!drumPadRegex.test(key)) {
    return;
  }
  const padButton = padButtons.find((btn) => btn.audioID === key)
  const soundSrc = padButton.source
  audio.src = soundSrc
  audio.play();
}

function displayDrumName (key) {
  if (!drumPadRegex.test(key)) {
    return;
  }
  const padButton = padButtons.find((btn) => btn.audioID === key);
  displayEl.innerText = padButton.displayName;
}

docBody.addEventListener("keydown", (e) => {
    playSound(e.key.toUpperCase());
    displayDrumName(e.key.toUpperCase());
})

for (const btn in el) {
  el[btn].addEventListener("click", () => {
    const key = el[btn].innerText;
    playSound(key);
    displayDrumName(key);
})
}