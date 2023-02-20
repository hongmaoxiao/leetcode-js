/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const len = s.length
  const values = new Set()
  let rk = -1, ans = 0
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      values.delete(s[i - 1])
    }
    while (rk + 1 < len && !values.has(s[rk + 1])) {
      values.add(s[rk + 1])
      rk++
    }
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
};