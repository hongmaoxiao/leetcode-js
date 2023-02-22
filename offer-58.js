/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = (s, n) => {
  const arr = s.split('')
  return arr.slice(n).concat(arr.slice(0, n)).join('')
};