const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments (fragments) {
  const compacted = [];
  let isCompacted = false;
  for (let fragment of fragments) {
    let shouldKeep = true;
    if (fragment === undefined) {
      shouldKeep = false;
      isCompacted = true;
    }
    if (shouldKeep) {
      compacted.push(fragment)
    }
  }
  if (isCompacted) {
    console.log("[COMPACTED] Undefined elements have been removed from the original array\n" + "-".repeat(25))
  }
  return compacted;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments (fragments) {
  const sorted = [];
  for (let i = 0; i < fragments.length; i++) {
    if (sorted.length === 0) {
      sorted.push(fragments[i]);
      continue;
    }
    for (let j = 0; j < sorted.length; j++) {
      if (fragments[i].id === sorted[j].id) {
        sorted.splice(j + 1, 0, fragments[i]);
        break;
      } else if (fragments[i].id > sorted[j].id) {
        continue;
      } else if (fragments[i].id < sorted[j].id) {
        sorted.splice(j, 0, fragments[i]);
        break;
      }
    }
  }
  return sorted;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments (fragments) {
  const deduped = [];
  for (let i = 0; i < fragments.length; i++) {
    let duped = false;
    if (deduped.length > 0) {
      for (let j = 0; j < deduped.length; j++) {
        if (fragments[i].id === deduped[j].id) {
          duped = true;
          break;
        }
      }
    } else {
      deduped.push(fragments[i]);
      continue;
    }
    if (duped) {
      console.log(`[DEDUPED] Id #${fragments[i].id}`);
      continue;
    } else {
      deduped.push(fragments[i]);
      continue;
    }
  }
  return deduped;
}

const dedupedFragments = dedupeFragments (sortedFragments);

function fillMissingFragments (fragments) {
  const filled = [];
  for (let i = 0; i < fragments.length; i++) {
    if (i === 0) {
      if (fragments[i].id === 1) {
        filled.push(fragments[i]);
      } else {
        let gap = fragments[i].id - (i + 1);
        for (let j = 0; j < gap; j++) {
          filled.push({ id: i + j + 1, text: "[...]" });
          console.log(`[FILLED] Missing Id #${i + j + 1}`)
        }
      }
    } else if (fragments[i].id === filled.length + 1) {
      filled.push(fragments[i]);
    } else {
      let gap = fragments[i].id - (i + 1);
      for (let j = 0; j < gap; j++) {
        filled.push({ id: i + j + 1, text: "[...]" });
        console.log(`[FILLED] Missing Id #${i + j + 1}`)
      }
      filled.push(fragments[i]);
    }
  }
  return filled;
}

const filledFragments = fillMissingFragments (dedupedFragments)

function assembleStory (fragments) {
  let assembledStory = "";
  for (let i = 0; i < fragments.length; i++) {
    assembledStory += fragments[i].text;
    if (i < fragments.length - 1) {
      assembledStory += "\n";
    }
  }
  return assembledStory;
}

console.log(assembleStory(filledFragments));