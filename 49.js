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