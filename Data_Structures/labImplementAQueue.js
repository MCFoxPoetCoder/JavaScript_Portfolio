function initQueue() {
  return {
    collection: []
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
  queue.collection.push(element);
}

function dequeue(queue) {
  return queue.collection.shift();
}

function front(queue) {
  return queue.collection[0];
}

function size(queue) {
  return queue.collection.length;
}

function isEmpty(queue) {
  return queue.collection.length === 0;
}

const myQueue = initQueue();
enqueue(myQueue, "element")
enqueue(myQueue, "element2")
enqueue(myQueue, "element3")
console.log(myQueue)
console.log(dequeue(myQueue))
enqueue(myQueue, "element4")
console.log(myQueue)