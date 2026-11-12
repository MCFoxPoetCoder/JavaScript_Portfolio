const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedOut", borrower: { name: "Sue", email: "Sue@suemail.com" }, dueDate: "9/6/2024" }
};

function checkoutDevice(ledger, assetTag, borrower) {
  const updatedLedger = loadLedger(serializeLedger(ledger));
  let confirmationString = `${assetTag}`
  if (!updatedLedger[assetTag]) {
    confirmationString += ` not found.`
    return {ledger: updatedLedger, message: confirmationString};
  } else if (updatedLedger[assetTag].status === "CheckedOut") {
    confirmationString += ` already checked out.`;
    return {ledger: updatedLedger, message: confirmationString};
  }
  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut"

  confirmationString += ` ${borrower.name}`
  return {ledger: updatedLedger, message: confirmationString}
}

function checkinDevice(ledger, assetTag) {
  const updatedLedger = loadLedger(serializeLedger(ledger));
  let confirmationString = `${assetTag}`
  if (!updatedLedger[assetTag]) {
    confirmationString += ` not found.`
    return {ledger: updatedLedger, message: confirmationString};
  } else if (updatedLedger[assetTag].status === "CheckedIn") {
    confirmationString += ` already checked in.`;
    return {ledger: updatedLedger, message: confirmationString};
  } 
  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn"
  confirmationString += ` successfully checked in.`
  return {ledger: updatedLedger, message: confirmationString}
}

function listOverdueDevices(ledger, today) {
  const overdueDevices = []
  function isDateEarlier (dateToCheck, benchDate) {
    let toCheck = dateToCheck.split("/");
    toCheck = toCheck.map(item => Number(item));
    let bench = benchDate.split("/");
    bench = bench.map(item => Number(item));
    let isEarlier = false;
    console.log("*".repeat(25),`\nChecking ${dateToCheck} against ${benchDate}`);
    console.log(`Year ${(toCheck[2])} is earlier than year ${bench[2]}: `, toCheck[2] < bench[2]);
    console.log(`Month ${(toCheck[0])} is earlier than month ${bench[0]}: `, toCheck[0] < bench[0]);
    console.log(`Day ${(toCheck[1])} is earlier than day ${bench[1]}: `, toCheck[1] < bench[1])
    if (toCheck[2] < bench[2]) {
        isEarlier = true;
      } else if (toCheck[2] === bench[2] && toCheck[0] < bench[0]) {
        isEarlier = true;
      } else if (toCheck[2] === bench[2] && toCheck[0] === bench[0] && toCheck[1] < bench[1]) {
        isEarlier = true;
      }
    return isEarlier;
  }
  
  function addDevice (device) {
    const due = device.dueDate;
    if (overdueDevices.length === 0) {
      overdueDevices.push(device);
      console.log("List of Overdue Devices: \n",overdueDevices)
      return;
    } else {
      overdueDevices.forEach((overdueDev, index) => {
        if (isDateEarlier(due, overdueDev.dueDate)) {
          overdueDevices.splice(index, 0, device)
        } else if (index === overdueDevices.length - 1) {
          overdueDevices.push(device)
        }
      })
    }
  }
  for (let device in ledger) {
    const currDev = ledger[device]
    console.log("-".repeat(25),"\ncurrDev",currDev)
    if (currDev.dueDate) {
      console.log("Device is overdue: ",isDateEarlier(currDev.dueDate, today))
      if (isDateEarlier(currDev.dueDate, today)) {
        addDevice(currDev);
      }
    }

  }
  return overdueDevices;
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger)
}

function loadLedger(json) {
  return JSON.parse(json)
}

console.log(equipmentLedger)
checkoutDevice(equipmentLedger, 2, {name: "Dave", email: "Dave@email.com"})
console.log("List of Overdue Devices: \n",listOverdueDevices(equipmentLedger, "10/19/2026"))