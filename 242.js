/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const map = new Map()
  const len_s = s.length
  const len_t = t.length

  if (len_s !== len_t) {
    return false
  }

  for (let i = 0; i < len_s; i++) {
    const ch_s = s[i];
    const ch_t = t[i]
    if (map.has(ch_s)) {
      map.set(ch_s, map.get(ch_s) + 1)
    } else {
      map.set(ch_s, 1)
    }

    if (map.has(ch_t)) {
      map.set(ch_t, map.get(ch_t) - 1)
    } else {
      map.set(ch_t, -1)
    }
  }

  for (const [_, v] of map.entries()) {
    if (v !== 0) {
      return false
    }
  }

  return true
};

const isAnagram1 = (s, t) => {
  const len_s = s.length
  const len_t = t.length

  if (len_s !== len_t) {
    return false
  }
  
  const table = new Array(26).fill(0)
  for (let i = 0; i < len_s; i++) {
    table[s.codePointAt(i) - 'a'.codePointAt(0)]++
  }

  for (let i = 0; i < len_t; i++) {
    table[t.codePointAt(i) - 'a'.codePointAt(0)]--
    if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
      return false
    }
  }

  return true
}