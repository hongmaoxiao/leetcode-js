/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  const len = s.length
  if (len < 2) {
    return s
  }

  let begin = 0
  let maxLen = 1
  const dp = new Array()
  for (let i = 0; i < len; i++) {
    dp[i] = new Array()
    for (let j = 0; j < len; j++) {
      if (i === j) {
        dp[i][j] = true
      } else {
        dp[i][j] = false
      }
    }
  }
  const str_arr = Array.from(s)
  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      const j = L + i - 1
      if (j >= len) {
        break
      }

      if (str_arr[i] !== str_arr[j]) {
        dp[i][j] = false
      } else {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i+1][j-1]
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + maxLen)
};

console.log(longestPalindrome("abcba"))