/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  const len = s.length
  if (!len) {
    return 0
  }
  let ans = 0
  for (let i = 0; i < len; i++) {
    const num1 = expand(s, i, i)
    const num2 = expand(s, i, i + 1)
    ans = ans + num1 + num2
  }

  return ans
};

const expand = (str, left, right) => {
  let count = 0
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    count++
    left--
    right++
  }
  return count
}