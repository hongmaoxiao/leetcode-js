/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const map = new Map()
  const len = s.length
  for (let i = 0; i < len; i++) {
    const curr = s[i];
    if (map.has(curr)) {
      map.set(curr, map.get(curr) + 1)
    } else {
      map.set(curr, 1)
    }
  }

  let sum = 0
  let more = false
  map.forEach((k, v) => {
    if (k >= 2) {
      const is_odd = k % 2 === 1
      sum += is_odd ? k - 1 : k
      if (is_odd) {
        more = true
      }
      map.delete(v)
    }
  })

  return more || map.size > 0 ? sum + 1 : sum
};