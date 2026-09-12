let count = 0;

function cardCounter(card) {
  if (card <= 6 && card >= 2) {
    ++count;
  } else if (card <= 9) {
    count += 0;
  } else if (card === 10 || "J" || "Q" || "K" || "A") {
    --count;
  }
  return count > 0 ? count + " Bet" : count + " Hold";
}

console.log(cardCounter(6))
console.log(cardCounter(9))
console.log(cardCounter("Q"))