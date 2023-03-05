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

const countBits2 = (n) => {
  const res = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      res[i] = res[i - 1] + 1
    } else {
      res[i] += res[i / 2]
    }
  }
  return res
};

const countBits3 = (n) => {
  const res = new Array(n + 1).fill(0)
  let highBit = 0
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) {
      highBit = i
    }
    res[i] = res[i - highBit] + 1
  }
  return res
};

const countBits4 = (n) => {
  const res = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    res[i] = res[i >> 1] + (i & 1)
  }
  return res
};
