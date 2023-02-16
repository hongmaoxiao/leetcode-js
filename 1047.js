/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s) => {
  const arr = []
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (arr[arr.length - 1] === curr) {
      arr.pop()
    } else {
      arr.push(curr)
    }
  }

  return arr.join('')
};