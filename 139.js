/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const map = new Map()
  for (const word of wordDict) {
    map.set(word, 1)
  }
  const len = s.length
  const dp = new Array(len + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len + 1; j++) {
      if (dp[i] && map.has(s.slice(i, j))) {
        dp[j] = true
      }
    }
  }
  return dp[dp.length - 1]
};