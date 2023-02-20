/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const map = new Map()
  for (const ch of strs) {
    let arr = Array.from(ch)
    arr = arr.sort()
    const key = arr.toString()
    const list = map.get(key) ? map.get(key) : new Array()
    list.push(ch)
    map.set(key, list)
  }
  return Array.from(map.values())
};

const groupAnagrams1 = (strs) => {
  const map = {}
  for (const ch of strs) {
    const count = new Array(26).fill(0)
    for (const s of ch) {
      count[s.charCodeAt() - 'a'.charCodeAt()]++
    }
    map[count] ? map[count].push(ch) : map[count] = [ch]
  }
  return Object.values(map)
}