let num = 6;

function factorialCalculator (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

const factorial = factorialCalculator(num)
const resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg);