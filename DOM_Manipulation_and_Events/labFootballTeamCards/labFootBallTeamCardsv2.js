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
const dropdown = document.getElementById("players");

function displayTeammates (list) {
  list.forEach((player) => {
  if (player.isCaptain) {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card", `${player.position}`);
    playerCard.innerHTML = `
  <h2>(Captain) ${player.name}</h2>
  <p>Position: ${player.position}</p>`;
    playerCards.appendChild(playerCard);
  } else {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card", `${player.position}`);
    playerCard.innerHTML = `
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>`;
    playerCards.appendChild(playerCard);
  }
})
};

function removeTeammates () {
  const playerCardEls = document.querySelectorAll(".player-card");
  playerCardEls.forEach((cardEl) => {
    playerCards.removeChild(cardEl);
  })
}

displayTeammates(footballTeam.players)

function filterTeammates (pos) {
  let filteredTeam;
  if (pos === "all") {
    filteredTeam = footballTeam.players;
  } else {
    filteredTeam = footballTeam.players.filter((player) => player.position === pos)
  }
  removeTeammates();
  displayTeammates(filteredTeam);
} 

dropdown.addEventListener("change", () => {
  filterTeammates (dropdown.value);
})