function fibonacci (n) {
  if (!Number.isInteger(n) || n < 0) {
    console.log("Input must be a non-negative integer.")
    return;
  }
  const sequence = [0, 1]

  for (let i = 1; i < n; i++) {
    sequence[i + 1] = sequence[i - 1] + sequence[i];
  }

  return sequence[n]
}

console.log(fibonacci(15))