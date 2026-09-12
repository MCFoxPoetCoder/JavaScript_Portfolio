const inventory = [

];

function findProductIndex (productName) {
  let index = -1;
  const pNameLC = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === pNameLC) {
      index = i;
      break;
    }
  }
  return index;
}

function addProduct (productObj) {
  const productIndex = findProductIndex (productObj.name)
  if (productIndex !== -1) {
    inventory[productIndex].quantity += productObj.quantity;
    console.log(`${inventory[productIndex].name} quantity updated`)
  } else {
    inventory.push({name: productObj.name.toLowerCase(), quantity: productObj.quantity});
    console.log(`${productObj.name.toLowerCase()} added to inventory`)
  }
}

function removeProduct (productName, productQuantity) {
  const productIndex = findProductIndex (productName)
  if (productIndex === -1) {
    console.log(`${productName.toLowerCase()} not found`);
    return;
  } else if (inventory[productIndex].quantity < productQuantity) {
    console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[productIndex].quantity}`);
    return;
  } else {
    inventory[productIndex].quantity -= productQuantity;
    console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[productIndex].quantity}`);
    if (inventory[productIndex].quantity === 0) {
      inventory.splice(productIndex, 1);
    }
  }
}

removeProduct("FLOUR", 5);