const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const rawArray = [];
  const propNames = ["sku", "name", "qty", "expires", "zone"];
  for (let item of rawData) {
    const itemArray = item.split("|");
    rawArray.push(itemArray);
  }
  const objectArray = []
  itemloop: for (let i = 0; i < rawArray.length; i++) {
    const itemObject = {};
    proploop: for (let j = 0; j < rawArray[i].length; j++) {
      if (j === 0) {
        let duplicateSKU = false;
        for (let k = 0; k < objectArray.length; k++) {
          if (objectArray[k].sku === rawArray[i][0]) {
            duplicateSKU = true
          }
        }
        if (duplicateSKU) {
          itemObject["invalidItem"] = true;
          break proploop;
        } else {itemObject[propNames[j]] = rawArray[i][j];}
      } else if (j === 2) {
        let qty = parseFloat(rawArray[i][j]);
        itemObject[propNames[j]] = qty;
      } else {
      itemObject[propNames[j]] = rawArray[i][j];}
    }
    if (itemObject.invalidItem) {
      continue;
    } else {objectArray.push(itemObject);}
  }
  for (let i = 0; i < objectArray.length; i++) {
    if (!objectArray[i].hasOwnProperty("zone")) {
      objectArray[i].zone = "general";
    }
  }  
  return objectArray;
}

const shipment = parseShipment(rawData);

function planRestock(pantry, shipment) {
  const actionArray = [];
  for (let i = 0; i < shipment.length; i++) {
    const action = {};
    let itemPresent = false;
    for (let j = 0; j < pantry.length; j++) {
      if (shipment[i].sku === pantry[j].sku) {
        itemPresent = true;
      }
    }
    if (shipment[i].qty <= 0) {
      action.type = "discard";
      action.item = shipment[i];
    } else if (itemPresent) {
      action.type = "restock";
      action.item = shipment[i];
    } else {
      action.type = "donate";
      action.item = shipment[i];
    }
    actionArray.push(action);
  }
  return actionArray;
}

const actions = planRestock(pantry, shipment)

function groupByZone(actions) {
  const grouped = {};
  for (let i = 0; i < actions.length; i++) {
    if (!grouped.hasOwnProperty(actions[i].item.zone)) {
      grouped[actions[i].item.zone] = [];
      grouped[actions[i].item.zone].push(actions[i])
    } else {
      grouped[actions[i].item.zone].push(actions[i])
    }
  }
  return grouped;
}

function clonePantry(pantry) {
  const clonedPantry = [];
  const propNames = ["sku", "name", "qty", "expires", "zone"];
  for (let i = 0; i < pantry.length; i++) {
    const itemClone = {}
    for (let j = 0; j < propNames.length; j++) {
      itemClone[propNames[j]] = pantry[i][propNames[j]];
    }
    clonedPantry.push(itemClone);
  }
  return clonedPantry;
}

const clonedPantry = clonePantry(pantry)

console.log(parseShipment(rawData));
console.log("-".repeat(25));
console.log(planRestock(clonedPantry, shipment));
console.log("-".repeat(25));
console.log(groupByZone(actions));
console.log("-".repeat(25));
console.log(clonedPantry);