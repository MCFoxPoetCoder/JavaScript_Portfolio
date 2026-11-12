function sumPrimes (num) {
  const primes = [];
  const isPrime = (n) => {
    if (primes.length === 0 && n > 1) {
      primes.push(n)
      return true
    } else if (n < 2) {
      return false;
    }
    for (let i = 0; i < primes.length; i++) {
      if (n % primes[i] === 0) {
        return false;
      }
    }
    primes.push(n)
  }
  for (let i = 0; i <= num; i++) {
    isPrime(i)
  }
  console.log(primes)
  let sum = 0;
  primes.forEach(num => sum += num)
  console.log(sum)
  return primes.length > 0 ? sum : 0
}

console.log(sumPrimes(0))