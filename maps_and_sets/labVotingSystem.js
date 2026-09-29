const poll = new Map();

function addOption(option) {
  if (!option.trim()) {
    return "Option cannot be empty."
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`
  } else {
    const votingSet = new Set();
    poll.set(option, votingSet);
    return `Option "${option}" added to the poll.`
  }
};

addOption("Turkey")
addOption("Malaysia")
addOption("Algeria")
addOption("Morocco")
addOption("Spain")

function vote (option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`
  }
  let voted = false;
  let voterChoice;
  poll.forEach((optVotes, opt) => {
    if (optVotes.has(voterId)) {
      voted = true;
      voterChoice = opt;
    }
  })
  if (voted) {
    return `Voter ${voterId} has already voted for "${voterChoice}".`
  } else {
    poll.get(option).add(voterId);
    return `Voter ${voterId} voted for "${option}".`
  }
};

vote("Malaysia", "traveler1")
vote("Algeria", "traveler2")
vote("Algeria", "traveler3")

function displayResults () {
  let results = `Poll Results:`;
  poll.forEach((votes, opt) => {
    results += `\n${opt}: ${votes.size} votes`
  })
  
  return results;
}

console.log(displayResults())