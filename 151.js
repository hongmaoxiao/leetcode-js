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

// console.log('sssss: ', reverseWords("the sky is blue"))
// console.log('sssss: ', reverseWords("  hello world  "))
console.log('sssss: ', reverseWords("a good   example"))