function initStack () {
  return {collection: []};
}

function push (stack, el) {
  stack.collection.push(el);
  return stack
}

function pop (stack) {
  return stack.collection.pop()
}

function peek (stack) {
  return stack.collection[stack.collection.length - 1]
}

function isEmpty (stack) {
  return stack.collection.length === 0;
}

function clear (stack) {
  while (stack.collection.length > 0) {
    pop (stack);
  }
}

const stack = initStack();
console.log(isEmpty(stack))
push(stack, "bob")
push(stack, "Sam")
push(stack, "Phil")
push(stack, "Fillmore")
console.log(stack)
console.log(peek(stack))
console.log(pop(stack))
console.log(stack)
console.log(pop(stack))
console.log(isEmpty(stack))
clear(stack)
console.log(isEmpty(stack))