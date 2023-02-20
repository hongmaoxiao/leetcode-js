/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const map = new Map();
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const curr = s[i];
    if (map.has(curr)) {
      map.set(curr, map.get(curr) + 1);
    } else {
      map.set(curr, 1);
    }
  }
  let sum = 0;
  map.forEach((k, v) => {
    const is_odd = k % 2 === 1;
    sum += (k >> 1) * 2;
    if (is_odd && sum % 2 === 0) {
      sum++
    }
  });

  return sum;
};
