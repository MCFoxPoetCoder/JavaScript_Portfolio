const footballTeam = {
  team: "USMNT",
  year: 2026,
  headCoach: "Mauricio Pochettino",
  players: [
    {
      name: "Matt Turner",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Sergiño Dest",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Chris Richards",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Tyler Adams",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Antonee Robinson",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Christian Pulisic",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Gio Reyna",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Weston McKennie",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Ricardo Pepi",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Tim Ream",
      position: "defender",
      isCaptain: true
    }
  ]
}

const teamName = document.getElementById("team");
const teamYear = document.getElementById("year");
const teamHeadCoach = document.getElementById("head-coach");

teamName.innerText = footballTeam.team;
teamYear.innerText = footballTeam.year;
teamHeadCoach.innerText = footballTeam.headCoach;

const playerCards = document.getElementById("player-cards");

footballTeam.players.forEach((player) => {
  if (player.isCaptain) {
    const playerCard = document.createElement("div");
    playerCard.innerHTML = `<div class="player-card ${player.position}">
  <h2>(Captain) ${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`
    playerCards.appendChild(playerCard)
  } else {
    const playerCard = document.createElement("div");
    playerCard.innerHTML = `<div class="player-card ${player.position}">
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`
    playerCards.appendChild(playerCard)
  }
});

const dropdown = document.getElementById("players");
const playerCardEls = document.querySelectorAll(".player-card");
dropdown.addEventListener("change", () => {
  if (dropdown.value === "all") {
    playerCardEls.forEach((cardEl) => {
        cardEl.style.display = "block";
      }
    );
  } else if (dropdown.value === "forward") {
    playerCardEls.forEach((cardEl) => {
        if (cardEl.classList.contains("forward")) {
          cardEl.style.display = "block";
        } else {
          cardEl.style.display = "none";
        }
      }
    );
  } else if (dropdown.value === "midfielder") {
    playerCardEls.forEach((cardEl) => {
        if (cardEl.classList.contains("midfielder")) {
          cardEl.style.display = "block";
        } else {
          cardEl.style.display = "none";
        }
      }
    );
  } else if (dropdown.value === "defender") {
    playerCardEls.forEach((cardEl) => {
        if (cardEl.classList.contains("defender")) {
          cardEl.style.display = "block";
        } else {
          cardEl.style.display = "none";
        }
      }
    );
  } else if (dropdown.value === "goalkeeper") {
    playerCardEls.forEach((cardEl) => {
        if (cardEl.classList.contains("goalkeeper")) {
          cardEl.style.display = "block";
        } else {
          cardEl.style.display = "none";
        }
      }
    );
  }
})