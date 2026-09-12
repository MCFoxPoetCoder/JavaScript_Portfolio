const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists (arr) {
	const copiedArr = [];
  if (!Array.isArray(arr)) {
    return copiedArr;
  }
  for (let i = 0; i < arr.length; i++) {
	  for (let j = 0; j < arr[i].length; j++) {
      arr[i][j].source = [i, j];
      copiedArr.push(arr[i][j]);
	}
}
	return copiedArr;
}

function scoreTracks  (arr) {
	const copiedArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].score = arr[i].votes * 10 - Math.abs(arr[i].bpm - 120);
    copiedArr.push(arr[i]);
  }
	return copiedArr;
}

function dedupeTracks  (arr) {
	const copiedArr = [];
  copiedArr.push(arr[0]);
  const checkDupes = (trackId) => {
    let duped = false;
    for (let i = 0; i < copiedArr.length; i++) {
      if (trackId === copiedArr[i].trackId) {
        duped = true;
        break;
      }
    }
    return duped;
  }
  for (let i = 1; i < arr.length; i++) {
    if (!checkDupes(arr[i].trackId)) {
      copiedArr.push(arr[i]);
    }
  }
	return copiedArr;
}

function enforceArtistQuota (arr, num) {
	const copiedArr = [];
  const occurrences = [];

//pushing first track
  copiedArr.push(arr[0]);
  occurrences.push({artist: arr[0].artist, appearances: 1})

//add the rest
  const includesArtist = (artist) => {
    for (let i = 0; i < copiedArr.length; i++) {
      let artistAppears = false;
      if (copiedArr[i].artist === artist) {
        artistAppears = true;
      }
      return artistAppears
    }
  }
  const hasArtistValidAppearances = (artist) => {
    for (let i = 0; i < copiedArr.length; i++) {
      let validAppearances = true;
      if (copiedArr[i].artist === artist) {
        if (occurrences[artistAppIndex(copiedArr[i].artist)].appearances >= num) {
          validAppearances = false;
        }
      }
      return validAppearances;
    }
  }
  const artistAppIndex = (artist) => {
    for (let i = 0; i < occurrences.length; i++) {
      if (occurrences[i].artist === artist) {
        return i
      }
    }
  }

  for (let i = 1; i < arr.length; i++) {
    let currentArtist = arr[i].artist
    if (hasArtistValidAppearances(currentArtist)) {
      if (!includesArtist(currentArtist)) {
        copiedArr.push(arr[i]);
        occurrences.push({artist: currentArtist, appearances: 1})
      } else if (includesArtist(currentArtist)) {
        if (hasArtistValidAppearances(currentArtist)) {
          copiedArr.push(arr[i]);
          occurrences[artistAppIndex(currentArtist)].appearances++
        }
      }
    }
  }

	return copiedArr;
}

function buildSchedule  (arr) {
	const copiedArr = [];
  let slotTracker = 0;
  for (let i = 0; i < arr.length; i++) {
    slotTracker++;
    copiedArr.push({slot: slotTracker, trackId: arr[i].trackId})
  }
	return copiedArr;
}

function remixPlaylist  (arr, num) {
  const flattenedPlaylists = flattenPlaylists(arr);
  const scoredTracks = scoreTracks(flattenedPlaylists);
  const dedupedTracks = dedupeTracks  (scoredTracks);
  const enforcedArtistQuota = enforceArtistQuota (dedupedTracks, num);
  const builtSchedule = buildSchedule(enforcedArtistQuota)
	return builtSchedule;
}

let testVar = remixPlaylist  (playlists, 1);
console.log(testVar);