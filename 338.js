/**
 * @param {number} n
 * @return {number[]}
 */
const doBit = (n) => {
  let cnt = 0
  while (n > 0) {
    const div = n >> 1
    const mod = n % 2
    if (mod !== 0) {
      cnt += 1
    }
    n = div
  }
  return cnt
}

const countBits = (n) => {
  const res = []
  for (let i = 0; i <= n; i++) {
    res.push(doBit(i))
  }
  return res
};

const countBits1 = (n) => {
  const res = []
  for (let i = 0; i <= n; i++) {
    res.push(countOnes(i))
  }
  return res
};

const countOnes = x => {
  let cnt = 0
  while (x > 0) {
    x &= (x - 1)
    cnt++
  }
  return cnt
}