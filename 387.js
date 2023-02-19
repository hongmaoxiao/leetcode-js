/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const map = new Map()
  const len = s.length

  for (let i = 0; i < len; i++) {
    const curr = s[i];
    if (map.has(curr)) {
      map.set(curr, -1)
    } else {
      map.set(curr, i)
    }
  }

  let min = Infinity
  map.forEach((k) => {
    if (k !== -1 && k < min) {
      min = k
    }
  });
  return min === Infinity ? -1 : min
};

const firstUniqChar1 = (s) => {
  const states = new Array(26).fill(-1);
  const orders = []
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i) - 97
    if (states[char] === -1) {
      orders.push(char)
      states[char] = i
    } else {
      states[char] = -2
    }
  }

  for (let j = 0; j < orders.length; j++) {
    const curr = orders[j];
    const val = states[curr]
    if (val > -1) {
      return val
    }
  }

  return -1
}