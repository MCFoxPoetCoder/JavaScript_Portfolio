function addTogether(num1, ...num2) {
  if (num2.length > 1) {
    return
  }
  if (num2.length === 0 && typeof num1 === "number") {
    return function addSecond(num2) {
    return typeof num2 === "number" ? num1 + num2 : undefined
  } 
  } else if (typeof num1 !== "number" || typeof num2[0] !== "number") {
    return undefined
  } else {
    return num1 + num2[0]
  }
}

console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))