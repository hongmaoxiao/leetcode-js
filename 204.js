/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  let sum = 0
  for (let i = 1; i < n; i++) {
    const is_prime = isPrime(i)
    if (is_prime) {
      sum += 1
    }
  }
  console.log(sum)
  return sum
};

const isPrime = (n) => {
  if (n <= 3) {
    return n > 1
  }
  if (n % 6 !== 1 && n % 6 !== 5) {
    return false
  }

  const sqrt = Math.sqrt(n)
  for (let i = 5; i <= sqrt; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false
    }    
  }

  return true
}

const countPrimes1 = (n) => {
  const isPrime = new Array(n).fill(1)
  let ans = 0
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans += 1
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0
      }
    }    
  }

  return ans
}