function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;
  let match = false;
  while (current !== null) {
    if (current.element === element) {
      match = true;
      return match;
    } else {
      current = current.next;
    }
  }
  return match
}

function getAt(list, index) {
 let listIndex = 0
 let current = list.head
 while (current !== null) {
  if (listIndex === index) {
    return current.element;
  } else {
    current = current.next;
    listIndex++;
  }
 }
 return undefined;
}

function insertAt(list, index, element) {
  const node = { element, next: null };
  let listIndex = 0;
  let includesIndex = false;
  let previous = null;
  let current = list.head;
  while (current !== null) {
    if (listIndex === index) {
      includesIndex = true;
      break;
    } else {
      if (current.next !== null){
        previous = current;
        current = current.next;
        listIndex++;
      } else {
        break;
      }
    }
  }
  if (index === 0) {
    list.head = node;
    node.next = current;
    list.length++;
  } else if (includesIndex) {
    previous.next = node;
    node.next = current;
    list.length++
  } else if (index === list.length) {
    current.next = node;
    list.length++;
  }
}

function removeAt(list, index) {
  let listIndex = 0;
  let includesIndex = false;
  let previous = null;
  let current = list.head;
  while (current !== null) {
    if (listIndex === index) {
      includesIndex = true;
      break;
    } else {
      if (current.next !== null){
        previous = current;
        current = current.next;
        listIndex++;
      } else {
        break;
      }
    }
  }
  if (includesIndex) {
    if (index === 0 && current.next === null) {
      list.head = null;
    } else if (index === 0) {
      list.head = current.next
    } else {previous.next = current.next;}
    list.length--
  }
}

function clear(list) {
  while (list.length > 0) {
    removeAt(list, 0)
  }
}

const myList = initList();
add(myList, 42);
add(myList, 60);
add(myList, 80);
console.log(contains(myList, 43))
console.log(getAt(myList, 2))
insertAt(myList, 2, 22)
console.log(JSON.stringify(myList, null, 2))
removeAt(myList, 0)
console.log(JSON.stringify(myList, null, 2))
insertAt(myList, 3, 102)
console.log(JSON.stringify(myList, null, 2))
clear(myList)
console.log(JSON.stringify(myList, null, 2))