/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  return `${s}${s}`.indexOf(s, 1) !== s.length
};