const cargoManifest = {
  containerId: 234,
  destination: "Lynchburg",
  weight: 34,
  unit: "lb",
  hazmat: true,
}

function normalizeUnits (manifest) {
  if (manifest["unit"] === "lb") {
    let normMani = {};
    normMani.containerId = manifest.containerId;
    normMani.destination = manifest.destination;
    normMani.weight = manifest.weight * .45;
    normMani.unit = "kg";
    normMani.hazmat = manifest.hazmat;
    return normMani;
  } else {
    let normMani = {};
    normMani.containerId = manifest.containerId;
    normMani.destination = manifest.destination;
    normMani.weight = manifest.weight;
    normMani.unit = manifest.unit;
    normMani.hazmat = manifest.hazmat;
    return normMani;
  }
}

function validateManifest (manifest) {
  let maniCheck = {};
  if (manifest.hasOwnProperty("containerId") !== true) {
    maniCheck.containerId = "Missing";
  } else if (Number.isInteger(manifest.containerId) === false || manifest.containerId <= 0 || Number.isNaN(manifest.containerId)) {
    maniCheck.containerId = "Invalid";
  }
  if (manifest.hasOwnProperty("destination") !== true) {
    maniCheck.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    maniCheck.destination = "Invalid";
  }
  if (manifest.hasOwnProperty("weight") !== true) {
    maniCheck.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0  || Number.isNaN(manifest.weight)) {
    maniCheck.weight = "Invalid";
  }
  if (manifest.hasOwnProperty("unit") !== true) {
    maniCheck.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    maniCheck.unit = "Invalid";
  }
  if (manifest.hasOwnProperty("hazmat") !== true) {
    maniCheck.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    maniCheck.hazmat = "Invalid";
  }
  return maniCheck;
}

function processManifest (manifest) {
  let manifestCheck = validateManifest(manifest);
  
  if (!manifestCheck.hasOwnProperty("containerId") && !manifestCheck.hasOwnProperty("destination") && !manifestCheck.hasOwnProperty("weight") && !manifestCheck.hasOwnProperty("unit") && !manifestCheck.hasOwnProperty("hazmat")) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
    } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(manifestCheck);
  }
}

processManifest(cargoManifest);