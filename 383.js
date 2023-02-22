/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const table = new Array(26).fill(0)
  const m = magazine.length
  const n = ransomNote.length

  for (let i = 0; i < m; i++) {
    table[magazine.codePointAt(i) - 'a'.codePointAt(0)]++
  }

  for (let i = 0; i < n; i++) {
    table[ransomNote.codePointAt(i) - 'a'.codePointAt(0)]--

    if (table[ransomNote.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
      return false
    }
  }

  return true
};