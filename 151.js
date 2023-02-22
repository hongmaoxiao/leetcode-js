/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  s = s.trim()
  const arr = s.split(' ').filter(v => v !== '')
  const len = arr.length
  let left = 0, right = len - 1

  while (left < right) {
    [arr[right], arr[left]] = [arr[left], arr[right]]
    left++
    right--
  }
  return arr.join(' ')
};

const reverseWords1 = (s) => {
  s = s.trim()
  let res = []
  const len = s.length
  let left = 0, right = 0

  while (right < len) {
    let n = 0
    while (s[right] !== ' ' && right < len) {
      right++
      n++
      if (n === 10) {
        break
      }
    }
    res.push(s.slice(left, right))
    while (s[right] === ' ') {
      right++
    }
    left = right
  }
  reverse(res)
  return res.join(' ')
};

const reverse = (arr) => {
  let start = 0, end = arr.length - 1
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}