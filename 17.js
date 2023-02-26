/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const ans = []
  const len = digits.length
  if (len === 0) {
    return []
  }

  backtrack(ans, digits, 0)
  return ans
};

const char_map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

const backtrack = (arrs, digits, index, str = '') => {
  if (index === digits.length) {
    arrs.push(str)
  } else {
    const digit = digits[index]
    const letters = char_map[digit]
    for (const ch of letters) {
      backtrack(arrs, digits, index + 1, `${str}${ch}`)
    }
  }
}