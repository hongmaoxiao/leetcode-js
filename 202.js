/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  const map = new Map()
  while (n !== 1 && !map.has(n)) {
    map.set(n, 1)
    n = getNext(n)
  }

  return n === 1
};

const getNext = (n) => {
  let total = 0
  while (n > 0) {
    let d = n % 10
    n = Math.floor(n / 10)
    total += d * d
  }
  return total
}

const isHappy1 = (n) => {
  let slow = n
  let fast = getNext(n)
  while (fast !== 1 && slow !== fast) {
    slow = getNext(n)
    fast = getNext(getNext(n))
  }

  return n === 1
};