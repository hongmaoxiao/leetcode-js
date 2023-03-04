/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const slen = s.length, plen = p.length

  if (slen < plen) {
    return []
  }

  const ans = []
  const sCount = new Array(26).fill(0)
  const pCount = new Array(26).fill(0)

  for (let i = 0; i < plen; i++) {
    ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()]
    ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()]
  }
  if (sCount.toString() === pCount.toString()) {
    ans.push(0)
  }
  for (let i = 0; i < slen - plen; i++) {
    --sCount[s[i].charCodeAt() - 'a'.charCodeAt()]
    ++sCount[s[i + plen].charCodeAt() - 'a'.charCodeAt()]
    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1)
    }
  }
  return ans
};

findAnagrams("abab", "ab")